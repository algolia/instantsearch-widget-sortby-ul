import type { SortByRendererCreator } from './types';

/*
 * Creates the render and dispose functions
 * This function is called once by the connector when the widget is created and is returning
 *  - the `render` function used to render the widget
 *  - the `dispose` function used to clean the changes made by the widget
 * It can also be used to keep references of objects that must be reused between renders
 */
export const createSortByRenderer: SortByRendererCreator = ({ container }) => {
  const containerNode: Element =
    typeof container === 'string'
      ? document.querySelector(container)!
      : container;

  const root = document.createElement('div');
  root.className = 'ais-Menu ais-CustomSortBy';

  return {
    /*
     * The render function passed to the connector
     * This function is called when we need to render the widget.
     * The render appends when:
     * - the widget is added to InstantSearch
     * - we receive new results from Algolia
     */
    render(renderOptions, isFirstRender) {
      /*
       * `renderOptions` contains all options passed by the connector to the renderer, it contains everything needed for the rendering of the component
       */

      if (isFirstRender) {
        /*
         * When the widget is rendered for the first time `isFirstRender` is set to `true`
         * This is when we will create everything that must be reused between renders (containers, event listeners, etc.)
         */
        containerNode.appendChild(root);

        root.addEventListener('click', (event) => {
          const element = event?.target as Element;
          if (element.matches('.ais-Menu-label')) {
            const nextIndex = element.getAttribute('data-value');
            renderOptions.refine(nextIndex!);
          }
        });
      }

      /*
       * Rendering
       */
      root.innerHTML = `
        <ul class="ais-Menu-list">
          ${renderOptions.options
            .map(
              (option) => `
            <li
              class="ais-Menu-item ${
                option.value === renderOptions.currentRefinement
                  ? 'ais-Menu-item--selected'
                  : ''
              }"
            >
              <a href="#" class="ais-Menu-link">
                <span class="ais-Menu-label" data-value=${option.value}>
                  ${option.label}
                </span>
              </a>
            </li>
          `
            )
            .join('')}
        </ul>
      `;
    },
    /*
     * The dispose function passed to the connector
     * This function is called when the widget is removed from InstantSearch.
     * It must be used to remove any changes made by the render function (DOM changes, global event listeners, etc.)
     */
    dispose() {
      containerNode.removeChild(root);
    },
  };
};

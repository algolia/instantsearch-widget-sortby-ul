import type { Renderer, Connector, WidgetFactory } from 'instantsearch.js';

/*
 * Parameters send only to the widget creator function
 * These parameters will be used by the widget creator to create the widget renderer and factory
 */
export type SortByWidgetParams = {
  container: Element | string;
  // TODO: add the widget params
};

/*
 * Parameters send to the widget creator function
 * These parameters will be used by the widget creator to manage the widget logic
 */
export type SortByConnectorParams = {
  // TODO: add the widget params
};

export type SortByRenderState = {
  // TODO: add the render state params
};

type SortByWidgetDescription = {
  $$type: 'eunjae-lee.sort-by';
  renderState: SortByRenderState;
  indexRenderState: {
    sortBy: {
      // TODO: add the return type of getRenderState
    };
  };
  indexUiState: {
    sortBy: {
      // TODO: add the return type of getWidgetUiState
    }
  };
};

/*
 * Connector type, constructed from the Renderer and Connector parameters
 */
export type SortByConnector = Connector<
  SortByWidgetDescription,
  SortByConnectorParams
>;

/*
 * Renderer type, constructed from the Renderer and Connector parameters
 */
export type SortByRendererCreator = (
  widgetParams: SortByWidgetParams
) => {
  render: Renderer<
    SortByWidgetDescription['renderState'],
    SortByConnectorParams
  >;
  dispose: () => void;
};

/*
 * Widget type, constructed from the Renderer, Connector and Widget parameters
 */
export type SortByWidgetCreator = WidgetFactory<
  SortByWidgetDescription & {
    $$widgetType: 'eunjae-lee.sort-by';
  },
  SortByConnectorParams,
  SortByWidgetParams
>;

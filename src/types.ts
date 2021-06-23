import type { Renderer, Connector, WidgetFactory } from 'instantsearch.js';

type SortByIndexDefinition = {
  /**
   * The name of the index to target.
   */
  value: string;
  /**
   * The label of the index to display.
   */
  label: string;
};

type SortByItem = {
  /**
   * The name of the index to target.
   */
  value: string;
  /**
   * The label of the index to display.
   */
  label: string;
};

type TransformItems<TItem> = (items: TItem[]) => TItem[];

type SortByCssClasses = Partial<{
  root: string;
  list: string;
  item: string;
}>;

/*
 * Parameters send only to the widget creator function
 * These parameters will be used by the widget creator to create the widget renderer and factory
 */
export type SortByWidgetParams = {
  /**
   * CSS Selector or HTMLElement to insert the widget.
   */
  container: string | HTMLElement;
  /**
   * Array of objects defining the different indices to choose from.
   */
  items: SortByIndexDefinition[];
  /**
   * Function to transform the items passed to the templates.
   */
  transformItems?: TransformItems<SortByItem>;
  /**
   * Object of class names to the elements.
   */
  cssClasses?: SortByCssClasses;
};

/*
 * Parameters send to the widget creator function
 * These parameters will be used by the widget creator to manage the widget logic
 */
export type SortByConnectorParams = {
  /**
   * Array of objects defining the different indices to choose from.
   */
  items: SortByItem[];
  /**
   * Function to transform the items passed to the templates.
   */
  transformItems?: TransformItems<SortByItem>;
};

export type SortByRenderState = {
  /**
   * The initially selected index.
   */
  initialIndex?: string;
  /**
   * The currently selected index.
   */
  currentRefinement: string;
  /**
   * All the available indices
   */
  options: SortByItem[];
  /**
   * Switches indices and triggers a new search.
   */
  refine: (value: string) => void;
  /**
   * `true` if the last search contains no result.
   */
  hasNoResults: boolean;
};

type SortByWidgetDescription = {
  $$type: 'ais.sortBy';
  renderState: SortByRenderState;
  indexRenderState: {
    sortBy: SortByRenderState & {
      widgetParams: SortByConnectorParams;
    };
  };
  indexUiState: {
    sortBy: string;
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
    $$widgetType: 'eunjae-lee.sortby-ul';
  },
  SortByConnectorParams,
  SortByWidgetParams
>;

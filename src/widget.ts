import { connectSortBy } from 'instantsearch.js/es/connectors';

import { createSortByRenderer } from './renderer';
import type {
  SortByWidgetCreator,
  SortByConnectorParams,
  SortByWidgetParams,
} from './types';

/*
 * Widget creator
 * Returns a widget instance
 */
export const sortBy: SortByWidgetCreator = function SortBy(widgetParams) {
  const rendererWidgetParams: SortByWidgetParams = {
    container: widgetParams.container,
    items: widgetParams.items,
    cssClasses: widgetParams.cssClasses,
  };

  const { render, dispose } = createSortByRenderer(rendererWidgetParams);

  const createWidget = connectSortBy(render, dispose);

  const connectorParams: SortByConnectorParams = {
    items: widgetParams.items,
    transformItems: widgetParams.transformItems,
  };

  return {
    ...createWidget(connectorParams),
    $$widgetType: 'eunjae-lee.sortby-ul',
  };
};

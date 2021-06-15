import { connectSortBy } from './connector';
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
export const sortBy: SortByWidgetCreator = function SortBy(
  widgetParams
) {
  const rendererWidgetParams: SortByWidgetParams = {
    container: widgetParams.container,
    // TODO: pick the widget-only parameters from the widgetParams
  };

  const { render, dispose } = createSortByRenderer(
    rendererWidgetParams
  );

  const createWidget = connectSortBy(render, dispose);

  const connectorParams: SortByConnectorParams = {
    // TODO: pick the connector-only parameters from the widgetParams
  };

  return {
    ...createWidget(connectorParams),
    $$widgetType: 'eunjae-lee.sort-by',
  };
};

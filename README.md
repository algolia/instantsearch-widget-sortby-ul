# sort-by

_This project was generated with [create-instantsearch-app](https://github.com/algolia/create-instantsearch-app) by [Algolia](https://algolia.com)._

InstantSearch widget that makes a sort by

## Install

```bash
npm install @eunjae-lee/sort-by
# or
yarn add @eunjae-lee/sort-by
```

## Widget

### Usage

```js
import instantsearch from 'instantsearch.js';
import algoliasearch from 'algoliasearch/lite';
import { sortBy } from '@eunjae-lee/sort-by';

const searchClient = algoliasearch('appId', 'apiKey');

const search = instantsearch({
  indexName: 'indexName',
  searchClient,
});

search.addWidgets([
  sortBy({
    // widget parameters
  }),
]);

search.start();
```

### Options

#### container

> `string | Element` | **required**

The element to insert the widget into.

This can be either a valid CSS Selector:

```js
sortBy({
  container: '#sort-by',
  // ...
});
```

or an `HTMLElement`:

```js
sortBy({
  container: document.querySelector('#sort-by'),
  // ...
});
```
```

#### option1

> `...` | **required**

REPLACE WITH THE DESCRIPTION FOR THIS OPTION

```js
sortBy({
  option1: 'value',
  // ...
});
```


## Connector

### Usage

```js
import { connectSortBy } from '@eunjae-lee/sort-by';

// 1. Create a render function
const renderSortBy = (renderOptions, isFirstRender) => {
  // Rendering logic
};

// 2. Create the custom widget
const customSortBy = connectSortBy(
  renderSortBy
);

// 3. Instantiate
search.addWidgets([
  customSortBy({
    // instance params
  }),
]);
```

### Options

#### option1

> `...`

REPLACE WITH THE DESCRIPTION FOR THIS RENDERING ITEM


```js
const renderSortBy = (renderOptions, isFirstRender) => {
  // show how to use this render option
};

const customSortBy = connectSortBy(
  renderSortBy,
);

search.addWidgets([
  customSortBy({
    // ...
  }),
]);
```

#### widgetParams

> `object`

All original widget options forwarded to the render function.

```js
const renderSortBy = (renderOptions, isFirstRender) => {
  const { widgetParams } = renderOptions;
  widgetParams.container.innerHTML = '...';
};

const customSortBy = connectSortBy(
  renderSortBy,
);

search.addWidgets([
  customSortBy({
    container: document.querySelector('#sort-by'),
    // ...
  }),
]);
```

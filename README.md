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

<p align="left">
  <a href="https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/js/">
    <img alt="InstantSearch.js" src="https://i.ibb.co/60fJjFy/Widget-banner-tmp.png">
  </a>
</p>

[InstantSearch.js widget](https://www.algolia.com/?utm_source=instantsearch.js&utm_campaign=repository) displaying a list of indices, allowing a user to change the way hits are sorted. Equivalent of the offcial [sortby widget](https://www.algolia.com/doc/api-reference/widgets/sort-by/js/) using `<ul><li>` markups instead of `<select>`.

---

[![MIT](https://img.shields.io/npm/l/@eunjae-lee/instantsearch-widget-sortby-ul)](./LICENSE) [![NPM version](http://img.shields.io/npm/v/@eunjae-lee/instantsearch-widget-sortby-ul.svg)](https://npmjs.org/package/@eunjae-lee/instantsearch-widget-sortby-ul)

## Summary

- [Demo](#demo)
- [Installation](#install)
- [Usage](#usage)
- [Options](#options)
- [Compatibility](#compatibility)
- [About InstantSearch.js](#learn-more-about-instantsearchjs)
- [Contributors & Licence](#contributors--licence)

# Get started

## Demo

[Demo](https://codesandbox.io/s/github/eunjae-lee/js-sort-by/tree/main/example?file=/index.ts) on CodeSandbox.

## Install

```bash
npm install @eunjae-lee/instantsearch-widget-sortby-ul
# or
yarn add @eunjae-lee/instantsearch-widget-sortby-ul
```

## Usage

```js
import instantsearch from 'instantsearch.js';
import algoliasearch from 'algoliasearch/lite';
import { sortBy } from '@eunjae-lee/instantsearch-widget-sortby-ul';

const searchClient = algoliasearch('appId', 'apiKey');

const search = instantsearch({
  indexName: 'indexName',
  searchClient,
});

search.addWidgets([
  sortBy({
    container: '#sort-by' // or document.querySelector('#sort-by')
    items: [
      { value: 'instant_search', label: 'Most relevant' },
      { value: 'instant_search_price_asc', label: 'Lowest price' },
      { value: 'instant_search_price_desc', label: 'Highest price' },
    ],
  }),
]);

search.start();
```

### Options

| Option | Type | Required | Default | Description |
| :-- | :-- | :-- | :-- | --- |
| [`container`](#container) | `string` or `HTMLElement` | true | - | The element to insert the widget into. |
| [`items`](#items) | `object[]` | true | - | The list of indices to search in. |

#### container

> `string | HTMLElement` | **required**

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

#### items

> `object[]` | **required**

The list of indices to search in, with each item:

- `label: string`: the label of the index to display.
- `value: string`: the name of the index to target.

```js
sortBy({
  items: [
    { label: 'Featured', value: 'instant_search' },
    { label: 'Price (asc)', value: 'instant_search_price_asc' },
    { label: 'Price (desc)', value: 'instant_search_price_desc' },
  ],
  // ...
});
```

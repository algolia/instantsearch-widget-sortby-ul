<p align="left">
  <a href="https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/js/">
    <img alt="InstantSearch.js" src="https://i.ibb.co/60fJjFy/Widget-banner-tmp.png">
  </a>
</p>

[InstantSearch.js widget](https://www.algolia.com/?utm_source=instantsearch.js&utm_campaign=repository) displaying a list of indices, allowing a user to change the way hits are sorted.
Equivalent of the offcial [sortby widget](https://www.algolia.com/doc/api-reference/widgets/sort-by/js/) using `<ul><li>` markups instead of `<select>`.

---
![npm](https://camo.githubusercontent.com/478b01f525d9865834a01e94aa4cff239b10fde8edce31749ecf38f6306b5033/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f72656163742d746f6173743f636f6c6f723d636333353334) ![npm](https://camo.githubusercontent.com/03b422bdbec4f6d673515dde3761d508676449ad5dcde0416fade89343207540/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f646d2f72656163742d746f6173743f636f6c6f723d253233343463633130) ![npm](https://camo.githubusercontent.com/03b422bdbec4f6d673515dde3761d508676449ad5dcde0416fade89343207540/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f646d2f72656163742d746f6173743f636f6c6f723d253233343463633130)

## Summary

* [Demo](#demo)
* [Installation](#install)
* [Usage](#usage)
* [Options](#options)
* [Compatibility](#compatibility)
* [About InstantSearch.js](#learn-more-about-instantsearchjs)
* [Contributors & Licence](#contributors--licence)

# Get started

## Demo
[Demo](https://codesandbox.io/s/github/eunjae-lee/js-sort-by/tree/main/example) on CodeSandbox.

## Install

```bash
npm install @eunjae-lee/sort-by
# or
yarn add @eunjae-lee/sort-by
```

## Usage

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



## Options

### container

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


### Connector

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
## Compatibility

### Supported browsers

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions

# Learn more about InstantSearch.js
InstantSearch.js is a JavaScript library for building performant and instant search experiences with Algolia.

* Learn more about InstantSearch.js - [Getting Started guide](https://www.algolia.com/doc/api-reference/widgets/js/)
* See the list of [all available widgets](https://www.algolia.com/doc/api-reference/widgets/js/)


# Contributors & Licence
This widget is under [MIT Licence](https://...)

_This project was generated with [create-instantsearch-app](https://github.com/algolia/create-instantsearch-app) by [Algolia](https://algolia.com)._


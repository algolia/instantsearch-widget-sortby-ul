<p align="left">
  <a href="https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/js/">
    <img alt="InstantSearch.js" src="https://i.ibb.co/60fJjFy/Widget-banner-tmp.png">
  </a>
</p>

[InstantSearch.js widget](https://www.algolia.com/?utm_source=instantsearch.js&utm_campaign=repository) displaying a list of indices, allowing a user to change the way hits are sorted. Equivalent of the offcial [sortby widget](https://www.algolia.com/doc/api-reference/widgets/sort-by/js/) using `<ul><li>` markups instead of `<select>`.

---

[![MIT](https://img.shields.io/npm/l/@algolia/instantsearch-widget-sortby-ul)](./LICENSE) [![NPM version](http://img.shields.io/npm/v/@algolia/instantsearch-widget-sortby-ul.svg)](https://npmjs.org/package/@algolia/instantsearch-widget-sortby-ul)

## Summary

- [Demo](#demo)
- [Installation](#install)
- [Usage](#usage)
- [Options](#options)
- [Browser Support](#browser-support)
- [Troubleshooting](#Troubleshooting)
- [Contributing & Licence](#contributing--licence)

# Get started

## Demo

[Demo](https://codesandbox.io/s/github/algolia/instantsearch-widget-sortby-ul?file=/example/index.ts) on CodeSandbox.

## Install

```bash
npm install @algolia/instantsearch-widget-sortby-ul
# or
yarn add @algolia/instantsearch-widget-sortby-ul
```

## Usage

```js
import instantsearch from 'instantsearch.js';
import algoliasearch from 'algoliasearch/lite';
import { sortBy } from '@algolia/instantsearch-widget-sortby-ul';

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
| [` cssClasses`](#cssclasses) | `object` | false | {} | The CSS classes to override. |
| [` transformItems`](#transformitems) | `function` | false | items => items | Receives the items, and is called before displaying them. |

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

#### cssClasses

> `object` | **optional**

The CSS classes to override.

- `root`: the root element of the widget.
- `list`: the `<ul>` element.
- `item`: each `<li>` element.

```js
sortBy({
  // ...
  cssClasses: {
    root: 'MyCustomSortByUL',
    list: 'MyCustomSortByUL MyCustomSortByUL--subclass',
  },
});
```

#### transformItems

> `function` | **optional**

Receives the items, and is called before displaying them. Should return a new array with the same shape as the original array. Useful for mapping over the items to transform, and remove or reorder them.

```js
sortBy({
  // ...
  transformItems(items) {
    return items.map((item) => ({
      ...item,
      label: item.label.toUpperCase(),
    }));
  },
});
```

## Browser support

Same as InstantSearch.js it supports the **last two versions of major browsers** (Chrome, Edge, Firefox, Safari).

Please refer to the [browser support](https://www.algolia.com/doc/guides/building-search-ui/installation/js/#browser-support) section in the documentation to use InstantSearch.js and this widget on other browsers.

## Troubleshooting

Encountering an issue? Before reaching out to support, we recommend heading to our [FAQ](https://www.algolia.com/doc/guides/building-search-ui/troubleshooting/faq/js/) where you will find answers for the most common issues and gotchas with the library.

## Contributing & Licence

### How to contribute

We welcome all contributors, from casual to regular 💙

- **Bug report**. Is something not working as expected? [Send a bug report](https://github.com/algolia/js-sort-by/issues/new?template=Bug_report.md).
- **Feature request**. Would you like to add something to the library? [Send a feature request](https://github.com/algolia/js-sort-by/issues/new?template=Feature_request.md).
- **Documentation**. Did you find a typo in the doc? [Open an issue](https://github.com/algolia/js-sort-by/issues/new) and we'll take care of it.
- **Development**. If you don't know where to start, you can check the open issues that are [tagged easy](https://github.com/algolia/js-sort-by/issues?q=is%3Aopen+is%3Aissue+label%3A%22Difficulty%3A++++++%E2%9D%84%EF%B8%8F+easy%22), the [bugs](https://github.com/algolia/js-sort-by/issues?q=is%3Aissue+is%3Aopen+label%3A%22%E2%9D%A4+Bug%22) or [chores](https://github.com/algolia/js-sort-by/issues?q=is%3Aissue+is%3Aopen+label%3A%22%E2%9C%A8+Chore%22).

To start contributing to code, you need to:

1.  [Fork the project](https://help.github.com/articles/fork-a-repo/)
1.  [Clone the repository](https://help.github.com/articles/cloning-a-repository/)
1.  Install the dependencies: `yarn`
1.  Run the development mode: `yarn start`
1.  [Open the stories](http://localhost:3000)

Please read [our contribution process](CONTRIBUTING.md) to learn more.

### Licence

Licensed under the MIT license.

---

**About InstantSearch.js**

InstantSearch.js is a vanilla JavaScript library that lets you create an instant-search result experience using [Algolia][algolia-website]’s search API. It is part of the InstantSearch family:

**InstantSearch.js** | [React InstantSearch][react-instantsearch-github] | [Vue InstantSearch][vue-instantsearch-github] | [Angular InstantSearch][instantsearch-angular-github] | [React InstantSearch Native][react-instantsearch-github] | [InstantSearch Android][instantsearch-android-github] | [InstantSearch iOS][instantsearch-ios-github]

This project was generated with [create-instantsearch-app](https://github.com/algolia/create-instantsearch-app) by [Algolia](https://algolia.com).

<!-- Links -->

[algolia-website]: https://www.algolia.com/?utm_source=instantsearch.js-widget&utm_campaign=repository
[react-instantsearch-github]: https://github.com/algolia/react-instantsearch/
[vue-instantsearch-github]: https://github.com/algolia/vue-instantsearch
[instantsearch-android-github]: https://github.com/algolia/instantsearch-android
[instantsearch-ios-github]: https://github.com/algolia/instantsearch-ios
[instantsearch-angular-github]: https://github.com/algolia/angular-instantsearch

import algoliasearch from 'algoliasearch/lite';
import instantsearch from 'instantsearch.js';
import {
  searchBox,
  hits,
  refinementList,
  pagination,
} from 'instantsearch.js/es/widgets';

import { sortBy } from '../src';

const searchClient = algoliasearch(
  'latency',
  '6be0576ff61c053d5f9a3225e2a90f76'
);

const search = instantsearch({
  indexName: 'instant_search',
  searchClient,
});

search.addWidgets([
  searchBox({
    container: '#searchbox',
  }),
  hits({
    container: '#hits',
    templates: {
      item: `
<article>
  <h1>{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}</h1>
  <p>{{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}</p>
  <p>\${{price}}</p>
</article>
`,
    },
  }),
  refinementList({
    container: '#brand-list',
    attribute: 'brand',
  }),
  pagination({
    container: '#pagination',
  }),
  sortBy({
    container: '#sort-by',
    items: [
      { value: 'instant_search', label: 'Most relevant' },
      { value: 'instant_search_price_asc', label: 'Lowest price' },
      { value: 'instant_search_price_desc', label: 'Highest price' },
    ],
    transformItems: (items) => items,
    cssClasses: {
      root: 'ais-CustomSortBy',
    },
  }),
]);

search.start();

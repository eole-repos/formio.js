export default [
  {
    key: 'resourceInfo',
    weight: -10,
    type: 'htmlelement',
    tag: 'div',
    className: 'alert alert-danger',
    content: 'The Resource component is deprecated. Use the Select component with data source of "Resource" instead.',
  },
  {
    type: 'select',
    input: true,
    dataSrc: 'url',
    data: {
      url: '/form?type=resource&limit=4294967295&select=_id,title',
    },
    template: '<span>{{ item.title }}</span>',
    valueProperty: '_id',
    label: 'Resource',
    key: 'resource',
    weight: 50,
    tooltip: 'The resource to be used with this field.',
  },
  {
    type: 'tags',
    input: true,
    key: 'selectFields',
    label: 'Select Fields',
    tooltip: 'The properties on the resource to return as part of the options. If left blank, all properties will be returned.',
    placeholder: 'Enter the fields to select.',
    weight: 51,
  },
  {
    type: 'textfield',
    input: true,
<<<<<<< HEAD
    key: 'filter',
    label: 'Filter Query',
    description: 'The filter query for results.',
    tooltip: 'Use this to provide additional filtering using query parameters.',
    weight: 51.3
=======
    key: 'searchFields',
    label: 'Search Fields',
    tooltip: 'A list of search filters based on the fields of the resource. See the <a target=\'_blank\' href=\'https://github.com/travist/resourcejs#filtering-the-results\'>Resource.js documentation</a> for the format of these filters.',
    placeholder: 'The fields to query on the server',
    weight: 52,
  },
  {
    type: 'textfield',
    input: true,
    key: 'filter',
    label: 'Filter Query',
    weight: 53,
    description: 'The filter query for results.',
    tooltip: 'Use this to provide additional filtering using query parameters.',
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  },
  {
    type: 'textfield',
    input: true,
    key: 'sort',
    label: 'Sort Query',
<<<<<<< HEAD
    description: 'The sort query for results.',
    tooltip: 'Use this to provide additional sorting using query parameters.',
    weight: 51.6
=======
    weight: 53,
    description: 'The sort query for results',
    tooltip: 'Use this to provide additional sorting using query parameters',
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  },
  {
    type: 'textarea',
    input: true,
    key: 'template',
    label: 'Item Template',
    editor: 'ace',
    as: 'html',
    rows: 3,
    weight: 53,
<<<<<<< HEAD
    tooltip: 'The HTML template for the result data items.'
=======
    tooltip: 'The HTML template for the result data items.',
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  },
  {
    type: 'checkbox',
    input: true,
    weight: 54,
<<<<<<< HEAD
    key: 'searchEnabled',
    label: 'Enable Search',
    defaultValue: true,
    tooltip: 'When checked, the select dropdown will allow for searching.'
  },
  {
    type: 'textfield',
    input: true,
    key: 'searchField',
    label: 'Search Field for Query',
    weight: 55,
    description: 'Name of URL query parameter (leave blank for client-side search)',
    tooltip: 'The name of the search querystring parameter used when sending a request to filter results with. The server at the URL must handle this query parameter with \'__regex\' appended. Leave empty to use client-side search within the list of choices.',
    conditional: {
      json: { '!=': [{ var: 'data.searchEnabled' }, ''] }
    }
  },
  {
    type: 'number',
    input: true,
    key: 'minSearch',
    weight: 56,
    label: 'Server-Side Search: Minimum Input Length',
    tooltip: 'The minimum amount of characters to be typed before a search query is made.',
    defaultValue: 0,
    conditional: {
      json: {
        and: [
          { '!=': [{ var: 'data.searchEnabled' }, ''] },
          { '!=': [{ var: 'data.searchField' }, ''] }
        ]
      }
    }
  },
  {
    label: 'Client-Side Search Threshold',
    mask: false,
    tableView: true,
    alwaysEnabled: false,
    type: 'number',
    input: true,
    key: 'searchThreshold',
    validate: {
      min: 0,
      customMessage: '',
      json: '',
      max: 1
    },
    delimiter: false,
    requireDecimal: false,
    encrypted: false,
    defaultValue: 0.1,
    weight: 57,
    tooltip: 'At what point does the match algorithm for static search give up. A threshold of 0.0 requires a perfect match, a threshold of 1.0 would match anything.',
    conditional: {
      json: {
        and: [
          { '!=': [{ var: 'data.searchEnabled' }, ''] },
          { '==': [{ var: 'data.searchField' }, ''] }
        ]
      }
    }
  }
=======
    key: 'addResource',
    label: 'Add Resource',
    tooltip: 'Allows to create a new resource while entering a submission.',
    conditional: {
      json: { '===': [{ var: 'data.dataSrc' }, 'resource'] },
    },
  },
  {
    type: 'textfield',
    label: 'Add Resource Label',
    key: 'addResourceLabel',
    tooltip: 'Set the text of the Add Resource button.',
    placeholder: 'Add Resource',
    weight: 55,
    input: true,
    conditional: {
      json: {
        and: [
          { '===': [{ var: 'data.dataSrc' }, 'resource'] },
          { '!!': { var: 'data.addResource' } },
        ],
      },
    },
  },
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
];

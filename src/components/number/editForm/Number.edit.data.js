export default [
  {
    type: 'checkbox',
    input: true,
    weight: 70,
    key: 'delimiter',
<<<<<<< HEAD
    label: 'Use Delimiter',
=======
    label: 'Use Thousands Separator',
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
    tooltip: 'Separate thousands by local delimiter.'
  },
  {
    type: 'number',
    input: true,
    weight: 80,
    key: 'decimalLimit',
    label: 'Decimal Places',
    tooltip: 'The maximum number of decimal places.'
  },
  {
    type: 'checkbox',
    input: true,
    weight: 90,
    key: 'requireDecimal',
    label: 'Require Decimal',
    tooltip: 'Always show decimals, even if trailing zeros.'
<<<<<<< HEAD
  }
=======
  },
  {
    key: 'case',
    ignore: true,
  },
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
];

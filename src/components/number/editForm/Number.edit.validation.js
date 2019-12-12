export default [
  {
<<<<<<< HEAD
    key: 'validate.unique',
=======
    key: 'unique',
    ignore: true
  },
  {
    key: 'validate.minLength',
    ignore: true
  },
  {
    key: 'validate.maxLength',
    ignore: true
  },
  {
    key: 'validate.minWords',
    ignore: true
  },
  {
    key: 'validate.maxWords',
    ignore: true
  },
  {
    key: 'validate.pattern',
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
    ignore: true
  },
  {
    type: 'number',
    label: 'Minimum Value',
    key: 'validate.min',
    input: true,
    placeholder: 'Minimum Value',
    tooltip: 'The minimum value this field must have before the form can be submitted.',
    weight: 150
  },
  {
    type: 'number',
    label: 'Maximum Value',
    key: 'validate.max',
    input: true,
    placeholder: 'Maximum Value',
    tooltip: 'The maximum value this field can have before the form can be submitted.',
    weight: 160
  }
];

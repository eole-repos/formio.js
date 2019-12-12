export default [
  {
<<<<<<< HEAD
=======
    key: 'labelPosition',
    ignore: true
  },
  {
    key: 'placeholder',
    ignore: true
  },
  {
    key: 'description',
    ignore: true
  },
  {
    key: 'hideLabel',
    ignore: true
  },
  {
    key: 'autofocus',
    ignore: true
  },
  {
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
    key: 'label',
    hidden: true,
    calculateValue(context) {
      return context.data.legend;
    }
  },
  {
    weight: 1,
    type: 'textfield',
    input: true,
    key: 'legend',
    label: 'Legend',
    placeholder: 'Legend',
    tooltip: 'The legend for this Fieldset.'
  },
];

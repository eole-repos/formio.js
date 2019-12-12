import textEditForm from '../textfield/TextField.form';

<<<<<<< HEAD
=======
import NumberEditDisplay from './editForm/Number.edit.display';
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
import NumberEditData from './editForm/Number.edit.data';
import NumberEditValidation from './editForm/Number.edit.validation';

export default function(...extend) {
<<<<<<< HEAD
  return baseEditForm([
=======
  return textEditForm([
    {
      key: 'display',
      components: NumberEditDisplay
    },
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
    {
      key: 'data',
      components: NumberEditData
    },
    {
      key: 'validation',
      components: NumberEditValidation
    }
  ], ...extend);
}

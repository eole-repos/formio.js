import baseEditForm from '../_classes/component/Component.form';

import CheckboxEditData from './editForm/Checkbox.edit.data';
import CheckboxEditDisplay from './editForm/Checkbox.edit.display';
import CheckboxEditValidation from './editForm/Checkbox.edit.validation';

export default function(...extend) {
  return baseEditForm([
<<<<<<< HEAD
    {
      key: 'display',
      components: CheckboxEditDisplay
    }
=======
    {
      key: 'data',
      components: CheckboxEditData
    },
    {
      key: 'display',
      components: CheckboxEditDisplay
    },
    {
      key: 'validation',
      components: CheckboxEditValidation
    },
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  ], ...extend);
}

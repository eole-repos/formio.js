import baseEditForm from '../_classes/component/Component.form';

import SelectEditData from './editForm/Select.edit.data';
import SelectEditDisplay from './editForm/Select.edit.display';
import SelectEditValidation from './editForm/Select.edit.validation';

export default function(...extend) {
  return baseEditForm([
<<<<<<< HEAD
=======
    {
      key: 'display',
      components: SelectEditDisplay
    },
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
    {
      key: 'data',
      components: SelectEditData
    },
    {
      key: 'validation',
      components: SelectEditValidation
    }
  ], ...extend);
}

import baseEditForm from '../_classes/component/Component.form';

import EditGridEditData from './editForm/EditGrid.edit.data';
<<<<<<< HEAD
=======
import EditGridEditDisplay from './editForm/EditGrid.edit.display';
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
import EditGridEditTemplates from './editForm/EditGrid.edit.templates';
import EditGridEditValidation from './editForm/EditGrid.edit.validation';

export default function(...extend) {
  return baseEditForm([
    {
      label: 'Templates',
      key: 'templates',
      weight: 5,
      components: EditGridEditTemplates
    },
    {
<<<<<<< HEAD
      key: 'data',
      components: EditGridEditData,
=======
      key: 'display',
      components: EditGridEditDisplay,
    },
    {
      key: 'data',
      components: EditGridEditData,
    },
    {
      key: 'validation',
      components: EditGridEditValidation
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
    }
  ], ...extend);
}

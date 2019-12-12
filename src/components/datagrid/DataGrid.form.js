<<<<<<< HEAD
import baseEditForm from '../base/Base.form';
=======
import baseEditForm from '../_classes/component/Component.form';

import DataGridEditData from './editForm/DataGrid.edit.data';
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
import DataGridEditDisplay from './editForm/DataGrid.edit.display';
import DataGridEditValidation from './editForm/DataGrid.edit.validation';

export default function(...extend) {
  return baseEditForm([
    {
      key: 'display',
      components: DataGridEditDisplay
    },
    {
<<<<<<< HEAD
=======
      key: 'data',
      components: DataGridEditData
    },
    {
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
      key: 'validation',
      components: DataGridEditValidation
    }
  ], ...extend);
}

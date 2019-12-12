<<<<<<< HEAD
import baseEditForm from '../base/Base.form';

import DataMapEditDisplay from './editForm/DataMap.edit.display';

export default function(...extend) {
  return baseEditForm([
=======
import componentEditForm from '../_classes/component/Component.form';
import DataMapEditData from './editForm/DataMap.edit.data';
import DataMapEditDisplay from './editForm/DataMap.edit.display';

export default function(...extend) {
  return componentEditForm([
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
    {
      key: 'display',
      components: DataMapEditDisplay
    },
    {
      key: 'data',
<<<<<<< HEAD
      components: [{
        key: 'defaultValue',
        ignore: true
      }]
=======
      components: DataMapEditData
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
    }
  ], ...extend);
}

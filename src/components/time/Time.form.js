import baseEditForm from '../_classes/component/Component.form';

import TimeEditData from './editForm/Time.edit.data';
import TimeEditDisplay from './editForm/Time.edit.display';

export default function(...extend) {
  return baseEditForm([
<<<<<<< HEAD
    {
      key: 'display',
      components: TimeEditDisplay
    }
=======
    {
      key: 'data',
      components: TimeEditData,
    },
    {
      key: 'display',
      components: TimeEditDisplay,
    },
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  ], ...extend);
}

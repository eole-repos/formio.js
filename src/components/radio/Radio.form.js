import baseEditForm from '../_classes/component/Component.form';

import RadioEditData from './editForm/Radio.edit.data';
import RadioEditDisplay from './editForm/Radio.edit.display';
import RadioEditValidation from './editForm/Radio.edit.validation';

export default function(...extend) {
  return baseEditForm([
    {
      key: 'display',
      components: RadioEditDisplay
<<<<<<< HEAD
    }
=======
    },
    {
      key: 'data',
      components: RadioEditData
    },
    {
      key: 'validation',
      components: RadioEditValidation
    },
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  ], ...extend);
}

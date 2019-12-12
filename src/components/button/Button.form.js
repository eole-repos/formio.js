import baseEditForm from '../_classes/component/Component.form';

import ButtonEditDisplay from './editForm/Button.edit.display';

export default function(...extend) {
  return baseEditForm([
    {
      key: 'display',
      components: ButtonEditDisplay
<<<<<<< HEAD
    }
=======
    },
    {
      key: 'data',
      ignore: true,
    },
    {
      key: 'validation',
      ignore: true,
    },
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  ], ...extend);
}

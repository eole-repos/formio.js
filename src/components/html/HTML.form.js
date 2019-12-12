import baseEditForm from '../_classes/component/Component.form';

import HTMLEditDisplay from './editForm/HTML.edit.display';
import HTMLEditLogic from './editForm/HTML.edit.logic';

export default function(...extend) {
  return baseEditForm([
    {
      key: 'display',
      components: HTMLEditDisplay,
    },
    {
<<<<<<< HEAD
=======
      key: 'data',
      ignore: true,
    },
    {
      key: 'validation',
      ignore: true,
    },
    {
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
      key: 'logic',
      components: HTMLEditLogic,
    },
  ], ...extend);
}

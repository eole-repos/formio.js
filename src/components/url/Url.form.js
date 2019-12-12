<<<<<<< HEAD
import textFieldEditForm from '../textfield/TextField.form';

export default function(...extend) {
  return textFieldEditForm(...extend);
=======
import textEditForm from '../textfield/TextField.form';

import UrlEditDisplay from './editForm/Url.edit.display';
import UrlEditData from './editForm/Url.edit.data';

export default function(...extend) {
  return textEditForm([
    {
      key: 'display',
      components: UrlEditDisplay
    },
    {
      key: 'data',
      components: UrlEditData
    },
  ], ...extend);
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
}

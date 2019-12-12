import textEditForm from '../textfield/TextField.form';

import PasswordEditDisplay from './editForm/Password.edit.display';
import PasswordEditData from './editForm/Password.edit.data';
import PasswordEditValidation from './editForm/Password.edit.validation';

export default function(...extend) {
  return textEditForm([
<<<<<<< HEAD
=======
    {
      key: 'data',
      components: PasswordEditData
    },
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
    {
      key: 'display',
      components: PasswordEditDisplay
    },
    {
      key: 'validation',
      components: PasswordEditValidation
    }
  ], ...extend);
}

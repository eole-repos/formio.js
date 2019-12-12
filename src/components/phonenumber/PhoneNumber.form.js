import textEditForm from '../textfield/TextField.form';

import PhoneNumberEditValidation from './editForm/PhoneNumber.edit.validation';

export default function(...extend) {
<<<<<<< HEAD
  return textFieldEditForm([], ...extend);
=======
  return textEditForm([
    {
      key: 'display',
      components: [
        {
          key: 'showWordCount',
          ignore: true
        },
        {
          key: 'showCharCount',
          ignore: true
        }
      ]
    },
    {
      key: 'validation',
      components: PhoneNumberEditValidation
    }
  ], ...extend);
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
}

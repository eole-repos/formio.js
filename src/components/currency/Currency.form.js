<<<<<<< HEAD
import baseEditForm from '../base/Base.form';
import CurrencyEditDisplay from './editForm/Currency.edit.display';
import CurrencyEditData from './editForm/Currency.edit.data';

=======
import baseEditForm from '../textfield/TextField.form';
import CurrencyEditDisplay from './editForm/Currency.edit.display';
import CurrencyEditData from './editForm/Currency.edit.data';
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
export default function(...extend) {
  return baseEditForm([
    {
      key: 'display',
      components: CurrencyEditDisplay
    },
    {
      key: 'data',
      components: CurrencyEditData
<<<<<<< HEAD
    }
=======
    },
    {
      key: 'validation',
      components: [
        {
          key: 'validate.minLength',
          ignore: true,
        },
        {
          key: 'validate.maxLength',
          ignore: true,
        },
        {
          key: 'validate.minWords',
          ignore: true,
        },
        {
          key: 'validate.maxWords',
          ignore: true,
        },
        {
          key: 'validate.pattern',
          ignore: true,
        },
      ]
    },
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  ], ...extend);
}

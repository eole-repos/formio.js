import baseEditForm from '../_classes/component/Component.form';

import SignatureEditData from './editForm/Signature.edit.data';
import SignatureEditDisplay from './editForm/Signature.edit.display';
import SignatureEditValidation from './editForm/Signature.edit.validation';

export default function(...extend) {
  return baseEditForm([
    {
      key: 'display',
      components: SignatureEditDisplay
<<<<<<< HEAD
    }
=======
    },
    {
      key: 'data',
      components: SignatureEditData
    },
    {
      key: 'validation',
      components: SignatureEditValidation
    },
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  ], ...extend);
}

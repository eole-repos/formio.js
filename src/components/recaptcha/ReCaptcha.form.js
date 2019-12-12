<<<<<<< HEAD
import baseEditForm from '../base/Base.form';
=======
import baseEditForm from '../_classes/component/Component.form';
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
import ReCaptchaEditDisplay from './editForm/ReCaptcha.edit.display';

export default function() {
  return baseEditForm([
    {
      key: 'display',
      components: ReCaptchaEditDisplay
    },
    {
      key: 'data',
      ignore: true
    },
    {
      key: 'validation',
      ignore: true
    },
    {
      key: 'conditional',
      ignore: true
    },
    {
      key: 'logic',
      ignore: true
    }
  ]);
}

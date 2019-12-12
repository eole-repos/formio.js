import baseEditForm from '../_classes/component/Component.form';
import SurveyEditData from './editForm/Survey.edit.data';
import SurveyEditDisplay from './editForm/Survey.edit.display';
import SurveyEditValidation from './editForm/Survey.edit.validation';

export default function(...extend) {
  return baseEditForm([
    {
      key: 'display',
      components: SurveyEditDisplay
<<<<<<< HEAD
    }
=======
    },
    {
      key: 'data',
      components: SurveyEditData
    },
    {
      key: 'validation',
      components: SurveyEditValidation
    },
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  ], ...extend);
}

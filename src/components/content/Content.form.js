import baseEditForm from '../_classes/component/Component.form';

import ContentEditDisplay from './editForm/Content.edit.display';
import ContentEditLogic from './editForm/Content.edit.logic';

export default function(...extend) {
<<<<<<< HEAD
  return baseEditForm([
=======
  const editForm = baseEditForm([
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
    {
      key: 'display',
      components: ContentEditDisplay,
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
      components: ContentEditLogic,
    },
  ], ...extend);
<<<<<<< HEAD
=======
  // Add content as full width above the settings.
  editForm.components = [{
    weight: 0,
    type: 'textarea',
    editor: 'ckeditor',
    label: 'Content',
    hideLabel: true,
    input: true,
    key: 'html',
    as: 'html',
    rows: 3,
    tooltip: 'The HTML template for the result data items.',
  }].concat(editForm.components);
  return editForm;
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
}

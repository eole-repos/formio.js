import baseEditForm from '../_classes/component/Component.form';

import FileEditData from './editForm/File.edit.data';
import FileEditDisplay from './editForm/File.edit.display';
import FileEditFile from './editForm/File.edit.file';
import FileEditValidation from './editForm/File.edit.validation';

export default function(...extend) {
  return baseEditForm([
<<<<<<< HEAD
=======
    {
      key: 'display',
      components: FileEditDisplay
    },
    {
      key: 'data',
      components: FileEditData
    },
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
    {
      label: 'File',
      key: 'file',
      weight: 5,
      components: FileEditFile
<<<<<<< HEAD
    }
=======
    },
    {
      key: 'validation',
      components: FileEditValidation
    },
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  ], ...extend);
}

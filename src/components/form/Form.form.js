<<<<<<< HEAD
import nestedComponentForm from '../nested/NestedComponent.form';
=======
import nestedComponentForm from '../_classes/nested/NestedComponent.form';
import FormEditDisplay from './editForm/Form.edit.display';
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
import FormEditForm from './editForm/Form.edit.form';
import FormEditData from './editForm/Form.edit.data';

export default function(...extend) {
  return nestedComponentForm([
    {
      key: 'display',
      components: FormEditDisplay
    },
    {
      label: 'Form',
      key: 'form',
      weight: 10,
      components: FormEditForm
    },
    {
      label: 'Data',
      key: 'data',
      weight: 10,
      components: FormEditData
    }
  ], ...extend);
}

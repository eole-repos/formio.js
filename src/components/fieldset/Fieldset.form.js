<<<<<<< HEAD
import nestedComponentForm from '../nested/NestedComponent.form';
=======
import nestedComponentForm from '../_classes/nested/NestedComponent.form';
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
import FieldSetEditDisplay from './editForm/Fieldset.edit.display';
export default function(...extend) {
  return nestedComponentForm([
    {
      key: 'display',
      components: FieldSetEditDisplay
    }
  ], ...extend);
}

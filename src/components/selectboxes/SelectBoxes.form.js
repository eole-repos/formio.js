import radioEditForm from '../radio/Radio.form';
<<<<<<< HEAD
import SelectBoxesEditValidation from './editSelectBoxes/SelectBoxes.edit.validation';
=======
import SelectBoxesEditValidation from './editForm/SelectBoxes.edit.validation';
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e

export default function(...extend) {
  return radioEditForm([
    {
<<<<<<< HEAD
=======
      key: 'data',
      components: [
        {
          key: 'dataType',
          ignore: true,
        }
      ]
    },
    {
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
      key: 'validation',
      components: SelectBoxesEditValidation
    }
  ], ...extend);
}

import baseEditForm from '../_classes/component/Component.form';

import DayEditData from './editForm/Day.edit.data';
import DayEditDisplay from './editForm/Day.edit.display';
import DayEditValidation from './editForm/Day.edit.validation';
import DayEditDay from './editForm/Day.edit.day';
import DayEditMonth from './editForm/Day.edit.month';
import DayEditYear from './editForm/Day.edit.year';

export default function(...extend) {
  return baseEditForm([
    {
      key: 'display',
      components: DayEditDisplay
    },
    {
      key: 'data',
      components: DayEditData,
    },
    {
      key: 'validation',
      components: DayEditValidation
<<<<<<< HEAD
    }
=======
    },
    {
      key: 'day',
      label: 'Day',
      weight: 3,
      components: DayEditDay
    },
    {
      key: 'month',
      label: 'Month',
      weight: 3,
      components: DayEditMonth
    },
    {
      key: 'year',
      label: 'Year',
      weight: 3,
      components: DayEditYear
    },
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  ], ...extend);
}

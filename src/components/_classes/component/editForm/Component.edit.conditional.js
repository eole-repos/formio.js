import EditFormUtils from './utils';
import { getContextComponents } from '../../../../utils/utils';
/* eslint-disable quotes, max-len */
export default [
  {
    type: 'panel',
    title: 'Simple',
    key: 'simple-conditional',
    theme: 'default',
    components: [
      {
        type: 'select',
        input: true,
        label: 'This component should Display:',
        key: 'conditional.show',
        dataSrc: 'values',
        data: {
          values: [
            { label: 'True', value: 'true' },
            { label: 'False', value: 'false' }
          ]
        }
      },
      {
        type: 'select',
        input: true,
        label: 'When the form component:',
        key: 'conditional.when',
        dataSrc: 'custom',
        valueProperty: 'value',
        data: {
          custom(context) {
<<<<<<< HEAD:src/components/base/editForm/Base.edit.conditional.js
            var values = [];
            context.utils.eachComponent(context.instance.root.editForm.components, function(component) {
              if (component.key !== context.data.key) {
                values.push({
                  label: component.label || component.key,
                  value: component.key
                });
              }
            });
            return values;
=======
            return getContextComponents(context);
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e:src/components/_classes/component/editForm/Component.edit.conditional.js
          }
        }
      },
      {
        type: 'textfield',
        input: true,
        label: 'Has the value:',
        key: 'conditional.eq'
      }
    ]
  },
  EditFormUtils.javaScriptValue('Advanced Conditions', 'customConditional', 'conditional.json', 110,
    '<p>You must assign the <strong>show</strong> variable a boolean result.</p>' +
    '<p><strong>Note: Advanced Conditional logic will override the results of the Simple Conditional logic.</strong></p>' +
    '<h5>Example</h5><pre>show = !!data.showMe;</pre>',
    '<p><a href="http://formio.github.io/formio.js/app/examples/conditions.html" target="_blank">Click here for an example</a></p>'
  )
];
/* eslint-enable quotes, max-len */

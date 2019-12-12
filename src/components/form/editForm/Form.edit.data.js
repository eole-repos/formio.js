<<<<<<< HEAD
import EditFormUtils from '../../base/editForm/utils';
=======
import EditFormUtils from '../../_classes/component/editForm/utils';
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
/* eslint-disable max-len */
export default [
  EditFormUtils.javaScriptValue('Custom Default Value', 'customDefaultValue', 'customDefaultValue', 120,
    '<p><h4>Example:</h4><pre>value = data.firstName + " " + data.lastName;</pre></p>',
    '<p><h4>Example:</h4><pre>{"cat": [{"var": "data.firstName"}, " ", {"var": "data.lastName"}]}</pre>'
  ),
  EditFormUtils.javaScriptValue('Calculated Value', 'calculateValue', 'calculateValue', 130,
    '<p><h4>Example:</h4><pre>value = data.a + data.b + data.c;</pre></p>',
<<<<<<< HEAD
    '<p><h4>Example:</h4><pre>{"sum": [{"var": "data.a"}, {"var": "data.b"}, {"var": "data.c"}]}</pre><p><a target="_blank" href="http://formio.github.io/formio.js/app/examples/calculated.html">Click here for an example</a></p>'
=======
    '<p><h4>Example:</h4><pre>{"+": [{"var": "data.a"}, {"var": "data.b"}, {"var": "data.c"}]}</pre><p><a target="_blank" href="http://formio.github.io/formio.js/app/examples/calculated.html">Click here for an example</a></p>'
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  )
];
/* eslint-enable max-len */

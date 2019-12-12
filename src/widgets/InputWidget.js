import _ from 'lodash';
<<<<<<< HEAD
import Component from '../Component';
export default class InputWidget extends Component {
=======
import Element from '../Element';
import NativePromise from 'native-promise-only';
export default class InputWidget extends Element {
  static get defaultSettings() {
    return {
      type: 'input'
    };
  }

>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  constructor(settings, component) {
    super(settings);
    this.namespace = 'formio.widget';
    this.component = component || {};
    this.settings = _.merge({}, this.defaultSettings, settings || {});
  }

  attach(input) {
    this._input = input;
<<<<<<< HEAD
=======
    return NativePromise.resolve();
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  }

  get defaultSettings() {
    return {};
  }

  set disabled(disabled) {
    if (disabled) {
      this._input.setAttribute('disabled', 'disabled');
    }
    else {
      this._input.removeAttribute('disabled');
    }
  }

  get input() {
    return this._input;
  }

<<<<<<< HEAD
  get defaultValue() {
    return '';
  }

=======
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  getValue() {
    return this._input.value;
  }

<<<<<<< HEAD
  getView(value) {
=======
  getValueAsString(value) {
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
    return value;
  }

  validationValue(value) {
    return value;
  }

  addPrefix() {
    return null;
  }

  addSuffix() {
    return null;
  }

  setValue(value) {
    this._input.value = value;
  }
}

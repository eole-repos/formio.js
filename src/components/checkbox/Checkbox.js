import _ from 'lodash';
import Field from '../_classes/field/Field';

export default class CheckBoxComponent extends Field {
  static schema(...extend) {
    return Field.schema({
      type: 'checkbox',
      inputType: 'checkbox',
      label: 'Checkbox',
      key: 'checkbox',
      dataGridLabel: true,
      labelPosition: 'right',
      value: '',
      name: ''
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'Checkbox',
      group: 'basic',
      icon: 'check-square',
      documentation: 'http://help.form.io/userguide/#checkbox',
      weight: 50,
      schema: CheckBoxComponent.schema()
    };
  }

  get defaultSchema() {
    return CheckBoxComponent.schema();
  }

  get defaultValue() {
<<<<<<< HEAD
    return this.isRadioCheckbox ? '' : (this.component.defaultValue || false).toString() === 'true';
  }

  get hasSetValue() {
    return this.hasValue();
  }

  get isRadioCheckbox() {
    return this.component.inputType === 'radio';
  }

  getRadioGroupItems() {
    if (!this.isRadioCheckbox) {
      return [];
    }

    return this.currentForm ? this.currentForm.getAllComponents().filter(c =>
      c.isRadioCheckbox &&
      c.component.name === this.component.name
    ) : [];
  }

  getRadioGroupValue() {
    if (!this.isRadioCheckbox) {
      return null;
    }

    const selectedRadios = this.getRadioGroupItems().filter(c => c.input.checked);

    return _.get(selectedRadios, '[0].component.value');
=======
    return this.component.name ? '' : (this.component.defaultValue || false).toString() === 'true';
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  }

  get labelClass() {
    let className = '';
    if (this.isInputComponent
      && !this.options.inputsOnly
      && this.component.validate
      && this.component.validate.required) {
      className += ' field-required';
    }
    return `${className}`;
  }

  get hasSetValue() {
    return this.hasValue();
  }

  get inputInfo() {
    const info = super.elementInfo();
    info.type = 'input';
    info.changeEvent = 'click';
    info.attr.type = this.component.inputType || 'checkbox';
    info.attr.class = 'form-check-input';
    if (this.component.name) {
      info.attr.name = `data[${this.component.name}][${this.root.id}]`;
    }
    info.attr.value = this.component.value ? this.component.value : 0;
    info.label = this.t(this.component.label);
    info.labelClass = this.labelClass;
    return info;
  }

<<<<<<< HEAD
  build() {
    // Refresh element info.
    this.info = this.elementInfo();

    if (this.viewOnly) {
      return this.viewOnlyBuild();
    }

    if (!this.component.input) {
      return;
    }
    this.createElement();
    this.input = this.createInput(this.element);
    this.createLabel(this.element, this.input);
    if (!this.labelElement) {
      this.addInput(this.input, this.element);
    }
    this.createDescription(this.element);
    this.restoreValue();
    if (this.shouldDisable) {
      this.disabled = true;
    }
    this.autofocus();
    this.attachLogic();
=======
  get labelInfo() {
    return {
      hidden: true
    };
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  }

  render() {
    return super.render(this.renderTemplate('checkbox', {
      input: this.inputInfo,
      checked: this.dataValue,
      tooltip: this.interpolate(this.t(this.component.tooltip) || '').replace(/(?:\r\n|\r|\n)/g, '<br />')
    }));
  }

<<<<<<< HEAD
  isEmpty(value) {
    return super.isEmpty(value) || value === false;
  }

  createElement() {
    let className = `form-check ${this.className}`;
    if (!this.labelIsHidden()) {
      className += ` ${this.component.inputType || 'checkbox'}`;
    }

    // If the element is already created, don't recreate.
    if (this.element) {
      //update class for case when Logic changed container class (customClass)
      this.element.className = className;
      return this.element;
    }

    this.element = this.ce('div', {
      id: this.id,
      class: className
    });
    this.element.component = this;
  }

  labelOnTheTopOrLeft() {
    return ['top', 'left'].includes(this.component.labelPosition);
  }

  labelOnTheTopOrBottom() {
    return ['top', 'bottom'].includes(this.component.labelPosition);
=======
  attach(element) {
    this.loadRefs(element, { input: 'multiple' });
    this.input = this.refs.input[0];
    if (this.refs.input) {
      this.addEventListener(this.input, this.inputInfo.changeEvent, () => this.updateValue(null, {
        modified: true
      }));
      this.addShortcut(this.input);
    }
    return super.attach(element);
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  }

  detach(element) {
    if (element && this.input) {
      this.removeShortcut(this.input);
    }
  }

  get emptyValue() {
    return false;
  }

<<<<<<< HEAD
  createLabel(container, input) {
    const isLabelHidden = this.labelIsHidden();
    let className = 'control-label form-check-label';
    if (this.component.input
      && !this.options.inputsOnly
      && this.component.validate
      && this.component.validate.required) {
      className += ' field-required';
    }

    this.labelElement = this.ce('label', {
      class: className
    });
    this.addShortcut();

    const labelOnTheTopOrOnTheLeft = this.labelOnTheTopOrLeft();
    if (!isLabelHidden) {
      // Create the SPAN around the textNode for better style hooks
      this.labelSpan = this.ce('span');

      if (this.info.attr.id) {
        this.labelElement.setAttribute('for', this.info.attr.id);
      }
    }
    if (!isLabelHidden && labelOnTheTopOrOnTheLeft) {
      this.setInputLabelStyle(this.labelElement);
      this.setInputStyle(input);
      this.labelSpan.appendChild(this.text(this.component.label));
      this.labelElement.appendChild(this.labelSpan);
    }
    this.addInput(input, this.labelElement);
    if (!isLabelHidden && !labelOnTheTopOrOnTheLeft) {
      this.setInputLabelStyle(this.labelElement);
      this.setInputStyle(input);
      this.labelSpan.appendChild(this.text(this.addShortcutToLabel()));
      this.labelElement.appendChild(this.labelSpan);
    }
    this.createTooltip(this.labelElement);
    container.appendChild(this.labelElement);
  }

  createInput(container) {
    if (!this.component.input) {
      return;
    }
    let inputId = this.id;
    if (this.options.row) {
      inputId += `-${this.options.row}`;
    }
    inputId += `-${this.root.id}`;
    this.info.attr.id = inputId;
    const input = this.ce(this.info.type, this.info.attr);
    this.errorContainer = container;
    return input;
  }

  set dataValue(value) {
    const setValue = (super.dataValue = value);

    if (this.isRadioCheckbox) {
=======
  isEmpty(value = this.dataValue) {
    return super.isEmpty(value) || value === false;
  }

  /**
   *
   * @param value {*}
   * @returns {*}
   */
  set dataValue(value) {
    const setValue = (super.dataValue = value);
    if (
      !this.key ||
      (!this.visible && this.component.clearOnHide && !this.rootPristine)
    ) {
      return setValue;
    }
    if (this.component.name) {
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
      _.set(this.data, this.component.key, setValue === this.component.value);

      this.setCheckedState(setValue);
    }

    return setValue;
  }

  get dataValue() {
    const getValue = super.dataValue;
    if (this.isRadioCheckbox) {
      _.set(this.data, this.component.key, getValue === this.component.value);
    }
    return getValue;
  }

  get key() {
    return (this.isRadioCheckbox && this.component.name) ? this.component.name : super.key;
  }

  getValueAt(index) {
<<<<<<< HEAD
    if (this.isRadioCheckbox) {
      return this.inputs[index].checked ? this.component.value : '';
    }

    return !!this.inputs[index].checked;
  }

  getValue() {
    return super.getValue();
=======
    if (this.component.name) {
      return this.refs.input[index].checked ? this.component.value : '';
    }
    return !!this.refs.input[index].checked;
  }

  getValue() {
    const value = super.getValue();
    if (this.component.name) {
      return value ? this.setCheckedState(value) : this.setCheckedState(this.dataValue);
    }
    else {
      return (value === '') ? this.dataValue : !!value;
    }
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  }

  setCheckedState(value) {
    if (!this.input) {
      return;
    }

    if (this.isRadioCheckbox) {
      this.input.value = (value === this.component.value) ? this.component.value : 0;
      this.input.checked = (value === this.component.value) ? 1 : 0;
    }
    else if (value === 'on') {
      this.input.value = 1;
      this.input.checked = 1;
    }
    else if (value === 'off') {
      this.input.value = 0;
      this.input.checked = 0;
    }
    else if (value) {
      this.input.value = 1;
      this.input.checked = 1;
    }
    else {
      this.input.value = 0;
      this.input.checked = 0;
    }

    return value;
  }

  setValue(value, flags) {
<<<<<<< HEAD
    flags = this.getFlags.apply(this, arguments);

    if (this.isRadioCheckbox && !value) {
      return;
    }

    this.setCheckedState(value);
    return this.updateValue(flags, value);
=======
    flags = flags || {};
    if (
      this.setCheckedState(value) !== undefined ||
      (!this.input && value !== undefined && !this.component.clearOnHide)
    ) {
      return this.updateValue(value, flags);
    }
    return false;
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  }

  getValueAsString(value) {
    return value ? 'Yes' : 'No';
  }
<<<<<<< HEAD

  destroy() {
    super.destroy();
    this.removeShortcut();
  }

  updateValue(flags, value) {
    if (!this.hasInput) {
      return false;
    }

    if (this.isRadioCheckbox) {
      if (value === undefined && this.input.checked) {
        // Force all siblings elements in radio group to unchecked
        this.getRadioGroupItems()
          .filter(c => c !== this && c.input.checked)
          .forEach(c => c.input.checked = false);

        value = this.component.value;
      }
      else {
        value = this.getRadioGroupValue();
      }
    }
    else if (flags && flags.modified && this.input.checked && value === undefined) {
      value = true;
    }

    const changed = super.updateValue(flags, value);
    if (this.input) {
      if (this.input.checked) {
        this.input.setAttribute('checked', true);
        this.addClass(this.element, 'checkbox-checked');
      }
      else {
        this.input.removeAttribute('checked');
        this.removeClass(this.element, 'checkbox-checked');
      }
    }
    return changed;
  }
=======
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
}

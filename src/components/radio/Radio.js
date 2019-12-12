import _ from 'lodash';
import Field from '../_classes/field/Field';

export default class RadioComponent extends Field {
  static schema(...extend) {
    return Field.schema({
      type: 'radio',
      inputType: 'radio',
      label: 'Radio',
      key: 'radio',
      values: [{ label: '', value: '' }],
      fieldSet: false
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'Radio',
      group: 'basic',
      icon: 'dot-circle-o',
      weight: 80,
      documentation: 'http://help.form.io/userguide/#radio',
      schema: RadioComponent.schema()
    };
  }

  constructor(component, options, data) {
    super(component, options, data);
    this.previousValue = this.dataValue || null;
  }

  get defaultSchema() {
    return RadioComponent.schema();
  }

<<<<<<< HEAD
  get emptyValue() {
    return '';
  }

  elementInfo() {
=======
  get inputInfo() {
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
    const info = super.elementInfo();
    info.type = 'input';
    info.changeEvent = 'click';
    info.attr.class = 'form-check-input';
    info.attr.name = info.attr.name += `[${this.id}]`;
    return info;
  }

<<<<<<< HEAD
  createInput(container) {
    const inputGroup = this.ce('div', {
      class: 'form-group'
    });
    const labelOnTheTopOrOnTheLeft = this.optionsLabelOnTheTopOrLeft();
    const wrappers = [];
    _.each(this.component.values, (value) => {
      const wrapperClass = `form-check ${this.optionWrapperClass}`;
      const labelWrapper = this.ce('div', {
        class: wrapperClass
      });
      const label = this.ce('label', {
        class: 'control-label form-check-label'
      });

      this.addShortcut(label, value.shortcut);

      // Determine the attributes for this input.
      let inputId = this.id;
      if (this.options.row) {
        inputId += `-${this.options.row}`;
      }
      inputId += `-${this.root.id}-${value.value}`;
      this.info.attr.id = inputId;
      this.info.attr.value = value.value;
      label.setAttribute('for', this.info.attr.id);

      // Create the input.
      const input = this.ce('input');
      _.each(this.info.attr, (attrValue, key) => {
        if (key === 'name' && this.component.inputType === 'radio') {
          attrValue += `[${this.root.id}]`;
        }
        input.setAttribute(key, attrValue);
      });

      const labelSpan = this.ce('span');
      if (value.label && labelOnTheTopOrOnTheLeft) {
        label.appendChild(labelSpan);
      }

      this.setInputLabelStyle(label);
      this.setInputStyle(input);

      this.addInput(input, label);

      if (value.label) {
        labelSpan.appendChild(this.text(this.addShortcutToLabel(value.label, value.shortcut)));
      }

      if (value.label && !labelOnTheTopOrOnTheLeft) {
        label.appendChild(labelSpan);
      }
      labelWrapper.appendChild(label);

      inputGroup.appendChild(labelWrapper);
      wrappers.push(labelWrapper);
    });
    this.wrappers = wrappers;
    container.appendChild(inputGroup);
    this.errorContainer = container;
  }

  get optionWrapperClass() {
    const inputType = this.component.inputType;
    const wrapperClass = (this.component.inline ? `form-check-inline ${inputType}-inline` : inputType);
    return wrapperClass;
=======
  get emptyValue() {
    return '';
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  }

  get isRadio() {
    return this.component.inputType === 'radio';
  }

  render() {
    return super.render(this.renderTemplate('radio', {
      input: this.inputInfo,
      inline: this.component.inline,
      values: this.component.values,
      value: this.dataValue,
      row: this.row,
    }));
  }

  attach(element) {
    this.loadRefs(element, { input: 'multiple', wrapper: 'multiple' });
    this.refs.input.forEach((input, index) => {
      this.addEventListener(input, this.inputInfo.changeEvent, () => this.updateValue(null, {
        modified: true,
      }));
      this.addShortcut(input, this.component.values[index].shortcut);

      if (this.isRadio) {
        input.checked = (this.dataValue === input.value);
        this.addEventListener(input, 'keyup', (event) => {
          if (event.key === ' ' && this.dataValue === input.value) {
            event.preventDefault();

            this.updateValue(null, {
              modified: true,
            });
          }
        });
      }
    });
    return super.attach(element);
  }

  detach(element) {
    if (element && this.refs.input) {
      this.refs.input.forEach((input, index) => {
        this.removeShortcut(input, this.component.values[index].shortcut);
      });
    }
  }

  getValue() {
    if (this.viewOnly || !this.refs.input || !this.refs.input.length) {
      return this.dataValue;
    }
    let value = this.dataValue;
    this.refs.input.forEach((input) => {
      if (input.checked) {
        value = input.value;
      }
    });
    return value;
  }

  getValueAsString(value) {
    if (!value) {
      return '';
    }
    if (!_.isString(value)) {
      return _.toString(value);
    }

    const option = _.find(this.component.values, (v) => v.value === value);

    return _.get(option, 'label', '');
  }

  setValueAt(index, value) {
<<<<<<< HEAD
    if (this.inputs && this.inputs[index] && value !== null && value !== undefined) {
      const inputValue = this.inputs[index].value;
      this.inputs[index].checked = (inputValue === value.toString());
    }
  }

  deleteValue() {
    _.each(this.inputs, (__input, index) => this.setValueAt(index, false));
    super.deleteValue();
  }

  updateValue(flags, value) {
    const changed = super.updateValue(flags, value);
    if (changed) {
=======
    if (this.refs.input && this.refs.input[index] && value !== null && value !== undefined) {
      const inputValue = this.refs.input[index].value;
      this.refs.input[index].checked = (inputValue === value.toString());
    }
  }

  updateValue(value, flags) {
    const changed = super.updateValue(value, flags);
    if (changed && this.refs.wrapper) {
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
      //add/remove selected option class
      const value = this.dataValue;
      const optionSelectedClass = 'radio-selected';

<<<<<<< HEAD
      _.each(this.wrappers, (wrapper, index) => {
        const input = this.inputs[index];
        if (input.value.toString() === value.toString()) {
=======
      this.refs.wrapper.forEach((wrapper, index) => {
        const input = this.refs.input[index];
        if (input && input.value.toString() === value.toString()) {
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
          //add class to container when selected
          this.addClass(wrapper, optionSelectedClass);
        }
        else {
          this.removeClass(wrapper, optionSelectedClass);
        }
      });
    }

    if (!flags || !flags.modified || !this.isRadio) {
      return changed;
    }

    // If they clicked on the radio that is currently selected, it needs to reset the value.
    this.currentValue = this.dataValue;
    const shouldResetValue = !(flags && flags.noUpdateEvent)
      && this.previousValue === this.currentValue;
    if (shouldResetValue) {
      this.resetValue();
      this.triggerChange();
    }
    this.previousValue = this.dataValue;
    return changed;
  }
<<<<<<< HEAD
=======

  /**
   * Normalize values coming into updateValue.
   *
   * @param value
   * @return {*}
   */
  normalizeValue(value) {
    const dataType = _.get(this.component, 'dataType', 'auto');
    switch (dataType) {
      case 'auto':
        if (!isNaN(parseFloat(value)) && isFinite(value)) {
          value = +value;
        }
        if (value === 'true') {
          value = true;
        }
        if (value === 'false') {
          value = false;
        }
        break;
      case 'number':
        value = +value;
        break;
      case 'string':
        if (typeof value === 'object') {
          value = JSON.stringify(value);
        }
        else {
          value = value.toString();
        }
        break;
      case 'boolean':
        value = !(!value || value.toString() === 'false');
        break;
    }
    return super.normalizeValue(value);
  }
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
}

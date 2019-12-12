import Component from '../_classes/component/Component';

<<<<<<< HEAD
export default class UnknownComponent extends BaseComponent {
=======
export default class UnknownComponent extends Component {
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  static schema() {
    return {
      type: 'custom',
      key: 'custom',
      protected: false,
      persistent: true
    };
  }

  static get builderInfo() {
    return {
      title: 'Custom',
<<<<<<< HEAD
      icon: 'fa fa-cubes',
      group: 'advanced',
=======
      icon: 'cubes',
      group: 'premium',
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
      documentation: 'https://help.form.io/userguide/form-components/#custom',
      weight: 120,
      schema: UnknownComponent.schema()
    };
  }

<<<<<<< HEAD
  build() {
    this.createElement();
    if (this.options.builder) {
      const builderElement = this.ce('div', {
        class: 'panel panel-default'
      }, [
        this.ce('div', {
          class: 'panel-body text-muted text-center'
        }, [
          document.createTextNode(`${this.t('Custom Component')} (${this.t(this.component.type)})`)
        ])
      ]);
      this.append(builderElement);
    }
    else {
      this.element.appendChild(this.text(`Unknown component: ${this.component.type}`));
    }
    return this.element;
=======
  get defaultSchema() {
    return UnknownComponent.schema();
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  }

  get defaultSchema() {
    return UnknownComponent.schema();
  }
}

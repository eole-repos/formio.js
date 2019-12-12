<<<<<<< HEAD
import NestedComponent from '../nested/NestedComponent';
import Base from '../base/Base';
import _ from 'lodash';
=======
import _ from 'lodash';
import NestedComponent from '../_classes/nested/NestedComponent';
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e

export default class TabsComponent extends NestedComponent {
  static schema(...extend) {
    return NestedComponent.schema({
      label: 'Tabs',
      type: 'tabs',
      input: false,
      key: 'tabs',
      persistent: false,
      tableView: false,
      components: [
        {
          label: 'Tab 1',
          key: 'tab1',
          components: [],
        },
      ],
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'Tabs',
      group: 'layout',
      icon: 'folder-o',
      weight: 50,
      documentation: 'http://help.form.io/userguide/#tabs',
      schema: TabsComponent.schema(),
    };
  }

<<<<<<< HEAD
  constructor(component, options, data) {
    super(component, options, data);
    this.currentTab = 0;
    this.validityTabs = [];
  }

=======
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  get defaultSchema() {
    return TabsComponent.schema();
  }

  get schema() {
    const schema = super.schema;
<<<<<<< HEAD

    schema.components = this.component.components.map((tab, index) => {
      if (index === this.currentTab) {
        tab.components = this.getComponents().map((component) => component.schema);
      }

=======
    // We need to clone this because the builder uses the "components" reference and this would reset that reference.
    const components = _.cloneDeep(this.component.components);
    schema.components = components.map((tab, index) => {
      tab.components = this.tabs[index].map((component) => component.schema);
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
      return tab;
    });

    return schema;
  }

<<<<<<< HEAD
  build(state, showLabel) {
    if (this.options.flatten) {
      this.element = super.createElement();
      this.component.components.forEach((tab) => {
        let body;
        const panel = this.ce('div', {
          id: this.id,
          class: 'mb-2 card border panel panel-default'
        },
          [
            this.ce('div', {
              class: 'card-header bg-default panel-heading'
            },
              this.ce('h4', {
                class: 'mb-0 card-title panel-title'
              }, tab.label)
            ),
            body = this.ce('div', {
              class: 'card-body panel-body'
            })
          ]
        );
        tab.components.forEach(component => this.addComponent(
          component,
          body,
          this.data,
          null,
          null,
          this.getComponentState(component, state)
        ));
        this.element.appendChild(panel);
      });
    }
    else {
      return super.build(state, showLabel);
    }
  }

  createElement() {
    this.tabsBar = this.ce('ul', {
      class: 'nav nav-tabs',
    });
    this.tabsContent = this.ce('div', {
      class: 'tab-content',
    });

    this.tabLinks = [];
    this.tabs = [];
    this.component.components.forEach((tab, index) => {
      const tabLink = this.ce('a', {
        class: 'nav-link',
        href: `#${tab.key}`,
      }, tab.label);
=======
  get tabKey() {
    return `tab-${this.key}`;
  }

  get tabLikey() {
    return `tabLi-${this.key}`;
  }

  get tabLinkKey() {
    return `tabLink-${this.key}`;
  }

  constructor(...args) {
    super(...args);
    this.currentTab = 0;
    this.noField = true;
  }

  init() {
    this.components = [];
    this.tabs = [];
    _.each(this.component.components, (tab, index) => {
      this.tabs[index] = [];
      // Initialize empty tabs.
      tab.components = tab.components || [];
      _.each(tab.components, (comp) => {
        const component = this.createComponent(comp);
        component.tab = index;
        this.tabs[index].push(component);
      });
    });
  }

  render() {
    return super.render(this.renderTemplate('tab', {
      tabKey: this.tabKey,
      tabLikey: this.tabLikey,
      tabLinkKey: this.tabLinkKey,
      currentTab: this.currentTab,
      tabComponents: this.tabs.map(tab => this.renderComponents(tab))
    }, (this.options.flatten ? 'flat' : null)));
  }

  attach(element) {
    this.loadRefs(element, { [this.tabLinkKey]: 'multiple', [this.tabKey]: 'multiple', [this.tabLikey]: 'multiple' });
    const superAttach = super.attach(element);
    this.refs[this.tabLinkKey].forEach((tabLink, index) => {
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
      this.addEventListener(tabLink, 'click', (event) => {
        event.preventDefault();
        this.setTab(index);
      });
<<<<<<< HEAD
      const tabElement = this.ce('li', {
        class: 'nav-item',
        role: 'presentation',
      }, tabLink);
      tabElement.tabLink = tabLink;
      this.tabsBar.appendChild(tabElement);
      this.tabLinks.push(tabElement);

      const tabPanel = this.ce('div', {
        role: 'tabpanel',
        class: 'tab-pane',
        id: tab.key,
      });
      this.tabsContent.appendChild(tabPanel);
      this.tabs.push(tabPanel);
    });

    if (this.element) {
      this.appendChild(this.element, [this.tabsBar, this.tabsContent]);
      this.element.className = this.className;
      return this.element;
    }

    this.element = this.ce('div', {
      id: this.id,
      class: this.className,
    }, [this.tabsBar, this.tabsContent]);
    this.element.component = this;

    return this.element;
=======
    });
    this.refs[this.tabKey].forEach((tab, index) => {
      this.attachComponents(tab, this.tabs[index], this.component.components[index].components);
    });
    return superAttach;
  }

  detach(all) {
    super.detach(all);
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  }

  /**
   * Set the current tab.
   *
   * @param index
   */
  setTab(index, state) {
    if (
      !this.tabs ||
      !this.tabs[index] ||
      !this.refs[this.tabKey] ||
      !this.refs[this.tabKey][index]
    ) {
      return;
    }

    this.currentTab = index;

<<<<<<< HEAD
    // Get the current tab.
    const tab = this.component.components[index];
    this.empty(this.tabs[index]);
    this.components.map((comp) => comp.destroy());
    this.components = [];

    if (this.tabLinks.length <= index) {
      return;
    }

    this.tabLinks.forEach((tabLink) => this
      .removeClass(tabLink, 'active')
      .removeClass(tabLink.tabLink, 'active')
    );
    this.tabs.forEach((tab) => this.removeClass(tab, 'active'));
    this.addClass(this.tabLinks[index], 'active')
      .addClass(this.tabLinks[index].tabLink, 'active')
      .addClass(this.tabs[index], 'active');

    const components = this.hook('addComponents', tab.components, this);
    components.forEach((component) => this.addComponent(
      component,
      this.tabs[index],
      this.data,
      null,
      null,
      state,
    ));

    this.restoreValue();
    this.triggerChange();
  }

  /**
   * Return all the components within all the tabs.
   */
  getAllComponents() {
    // If the validity tabs are set, then this usually means we are getting the components that have
    // triggered errors and need to iterate through these to display them.
    if (this.validityTabs && this.validityTabs.length) {
      const comps = this.validityTabs.reduce((components, component) => {
        if (component && component.getAllComponents) {
          component = component.getAllComponents();
        }
        return components.concat(component);
      }, []);
      this.validityTabs = [];
      return comps;
    }
    return super.getAllComponents();
  }

  /**
   * Checks the validity by checking all tabs validity.
   *
   * @param data
   * @param dirty
   */
  checkValidity(data, dirty) {
    if (!dirty) {
      return super.checkValidity(data, dirty);
    }

    if (!this.checkCondition(null, data)) {
      this.setCustomValidity('');
      return true;
    }
    const isValid = Base.prototype.checkValidity.call(this, data, dirty);
    this.validityTabs = [];
    return this.component.components.reduce((check, comp) => {
      const tabComp = _.clone(comp);
      tabComp.type = 'panel';
      tabComp.internal = true;
      const component = this.createComponent(tabComp);
      this.validityTabs.push(component);
      const valid = component.checkValidity(data, dirty) && check;
      component.destroy();
      return valid;
    }, isValid);
  }

  destroy() {
    const state = super.destroy() || {};
    state.currentTab = this.currentTab;
    return state;
  }

  /**
   * Make sure to include the tab on the component as it is added.
   *
   * @param component
   * @param element
   * @param data
   * @param before
   * @return {BaseComponent}
   */
  addComponent(component, element, data, before, noAdd, state) {
    component.tab = this.currentTab;
    return super.addComponent(component, element, data, before, noAdd, state);
  }

  /**
   * Only add the components for the active tab.
   */
  addComponents(element, data, options, state) {
    const { currentTab } = state && state.currentTab ? state : this;
    this.setTab(currentTab, state);
=======
    _.each(this.refs[this.tabKey], (tab) => {
      this.removeClass(tab, 'formio-tab-panel-active');
      tab.style.display = 'none';
    });
    this.addClass(this.refs[this.tabKey][index], 'formio-tab-panel-active');
    this.refs[this.tabKey][index].style.display = 'block';

    _.each(this.refs[this.tabLinkKey], (tabLink, tabIndex) => {
      if (this.refs[this.tabLinkKey][tabIndex]) {
        this.removeClass(tabLink, 'formio-tab-link-active');
      }
      if (this.refs[this.tabLikey][tabIndex]) {
        this.removeClass(this.refs[this.tabLikey][tabIndex], 'formio-tab-link-container-active');
      }
    });
    if (this.refs[this.tabLikey][index]) {
      this.addClass(this.refs[this.tabLikey][index], 'formio-tab-link-container-active');
    }
    if (this.refs[this.tabLinkKey][index]) {
      this.addClass(this.refs[this.tabLinkKey][index], 'formio-tab-link-active');
    }
    this.triggerChange();
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  }
}

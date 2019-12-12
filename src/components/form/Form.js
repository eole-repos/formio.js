import _ from 'lodash';
<<<<<<< HEAD
import BaseComponent from '../base/Base';
=======
import Component from '../_classes/component/Component';
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
import EventEmitter from 'eventemitter2';
import NativePromise from 'native-promise-only';
import { isMongoId, eachComponent } from '../../utils/utils';
import Formio from '../../Formio';
import Form from '../../Form';

export default class FormComponent extends Component {
  static schema(...extend) {
<<<<<<< HEAD
    return BaseComponent.schema({
=======
    return Component.schema({
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
      label: 'Form',
      type: 'form',
      key: 'form',
      src: '',
      reference: true,
      form: '',
      path: '',
      tableView: true,
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'Nested Form',
      icon: 'wpforms',
      group: 'premium',
      documentation: 'http://help.form.io/userguide/#form',
      weight: 110,
      schema: FormComponent.schema()
    };
  }

  init() {
    super.init();
    this.formObj = {
      display: this.component.display,
      settings: this.component.settings,
      components: this.component.components
    };
    this.subForm = null;
    this.formSrc = '';
<<<<<<< HEAD
    this.subFormReady = new NativePromise((resolve, reject) => {
      this.subFormReadyResolve = resolve;
      this.subFormReadyReject = reject;
    });
    this.subFormLoaded = false;
    this.subscribe();
  }

  get dataReady() {
    return this.subFormReady;
  }

  get defaultSchema() {
    return FormComponent.schema();
  }

  get emptyValue() {
    return { data: {} };
  }

  set root(inst) {
    this._root = inst;
    this.nosubmit = inst.nosubmit;
  }

  get root() {
    return this._root;
  }

  set nosubmit(value) {
    this._nosubmit = !!value;

    if (this.subForm) {
      this.subForm.nosubmit = !!value;
    }
  }

  get nosubmit() {
    return this._nosubmit || false;
  }

  get currentForm() {
    return this._currentForm;
  }

  set currentForm(instance) {
    this._currentForm = instance;
    if (!this.subForm) {
      return;
    }
    this.subForm.getComponents().forEach(component => {
      component.currentForm = this;
    });
  }

  subscribe() {
    this.on('nosubmit', value => {
      this.nosubmit = value;
    });
  }

  destroy() {
    const state = super.destroy() || {};
    if (this.subForm) {
      this.subForm.destroy();
    }
    return state;
  }

  /**
   * Render a subform.
   *
   * @param form
   * @param options
   */
  renderSubForm(form, options) {
    if (this.options.builder) {
      this.element.appendChild(this.ce('div', {
        class: 'text-muted text-center p-2'
      }, this.text(form.title)));
      return;
    }

    options.events = this.createEmitter();

    // Iterate through every component and hide the submit button.
    eachComponent(form.components, (component) => {
      if (
        (component.type === 'button') &&
        ((component.action === 'submit') || !component.action)
      ) {
        component.hidden = true;
      }
    });

    (new Form(this.element, form, options)).render().then((instance) => {
      this.subForm = instance;
      this.subForm.root = this.root;
      this.subForm.currentForm = this;
      this.subForm.parent = this;
      this.subForm.parentVisible = this.visible;
      this.subForm.on('change', () => {
        this.dataValue = this.subForm.getValue();
        this.triggerChange({
          noEmit: true
        });
      });
      this.subForm.url = this.formSrc;
      this.subForm.nosubmit = this.nosubmit;
      this.restoreValue();
      this.subFormReadyResolve(this.subForm);
      return this.subForm;
    });
  }

  show(...args) {
    const state = super.show(...args);

    if (!this.subFormLoaded) {
      if (state) {
        this.loadSubForm();
      }
      // If our parent is read-only and is done loading, and we were never asked
      // to load a subform, consider our subform loading promise resolved
      else if (this.parent.options.readOnly && !this.parent.loading) {
        this.subFormReadyResolve(this.subForm);
      }
    }

    return state;
  }

  /**
   * Load the subform.
   */
  /* eslint-disable max-statements */
  loadSubForm() {
    // Only load the subform if the subform isn't loaded and the conditions apply.
    if (this.subFormLoaded) {
      return this.subFormReady;
    }
    this.subFormLoaded = true;
    const srcOptions = {};
    if (this.options && this.options.base) {
      srcOptions.base = this.options.base;
    }
    if (this.options && this.options.project) {
      srcOptions.project = this.options.project;
    }
    if (this.options && this.options.readOnly) {
      srcOptions.readOnly = this.options.readOnly;
    }
    if (this.options && this.options.breadcrumbSettings) {
      srcOptions.breadcrumbSettings = this.options.breadcrumbSettings;
    }
    if (this.options && this.options.buttonSettings) {
      srcOptions.buttonSettings = this.options.buttonSettings;
    }
    if (this.options && this.options.icons) {
      srcOptions.icons = this.options.icons;
    }
    if (this.options && this.options.viewAsHtml) {
      srcOptions.viewAsHtml = this.options.viewAsHtml;
    }
    if (this.options && this.options.hide) {
      srcOptions.hide = this.options.hide;
    }
    if (this.options && this.options.show) {
      srcOptions.show = this.options.show;
    }
    if (_.has(this.options, 'language')) {
      srcOptions.language = this.options.language;
    }

=======
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
    if (this.component.src) {
      this.formSrc = this.component.src;
    }

    if (
      !this.component.src &&
      !this.options.formio &&
      (this.component.form || this.component.path)
    ) {
      if (this.component.project) {
        this.formSrc = Formio.getBaseUrl();
        // Check to see if it is a MongoID.
        if (isMongoId(this.component.project)) {
          this.formSrc += '/project';
        }
        this.formSrc += `/${this.component.project}`;
        this.options.project = this.formSrc;
      }
      else {
        this.formSrc = Formio.getProjectUrl();
        this.options.project = this.formSrc;
      }
      else {
        this.formSrc = Formio.getProjectUrl();
        srcOptions.project = this.formSrc;
      }
      if (this.component.form) {
        this.formSrc += `/form/${this.component.form}`;
      }
      else if (this.component.path) {
        this.formSrc += `/${this.component.path}`;
      }
    }

    // Build the source based on the root src path.
    if (!this.formSrc && this.options.formio) {
      const rootSrc = this.options.formio.formsUrl;
      if (this.component.path) {
        const parts = rootSrc.split('/');
        parts.pop();
        this.formSrc = `${parts.join('/')}/${this.component.path}`;
      }
      if (this.component.form) {
        this.formSrc = `${rootSrc}/${this.component.form}`;
      }
    }

    // Add revision version if set.
    if (this.component.formRevision || this.component.formRevision === 0) {
      this.formSrc += `/v/${this.component.formRevision}`;
<<<<<<< HEAD
    }

    // Determine if we already have a loaded form object.
    if (this.component && this.component.components && this.component.components.length) {
      this.renderSubForm(this.component, srcOptions);
    }
    else if (this.formSrc) {
      const query = { params: { live: 1 } };
      (new Formio(this.formSrc)).loadForm(query)
        .then((formObj) => this.renderSubForm(formObj, srcOptions))
        .catch((err) => this.subFormReadyReject(err));
=======
    }
  }

  get dataReady() {
    return this.subFormReady || NativePromise.resolve();
  }

  get defaultValue() {
    // Not not provide a default value unless the subform is ready so that it will initialize correctly.
    return this.subForm ? super.defaultValue : null;
  }

  get defaultSchema() {
    return FormComponent.schema();
  }

  get emptyValue() {
    return { data: {} };
  }

  get ready() {
    return this.subFormReady || NativePromise.resolve();
  }

  getSubOptions(options = {}) {
    if (!this.options) {
      return options;
    }
    if (this.options.base) {
      options.base = this.options.base;
    }
    if (this.options.project) {
      options.project = this.options.project;
    }
    if (this.options.readOnly) {
      options.readOnly = this.options.readOnly;
    }
    if (this.options.breadcrumbSettings) {
      options.breadcrumbSettings = this.options.breadcrumbSettings;
    }
    if (this.options.buttonSettings) {
      options.buttonSettings = _.clone(this.options.buttonSettings);
    }
    if (this.options.viewAsHtml) {
      options.viewAsHtml = this.options.viewAsHtml;
    }
    if (this.options.language) {
      options.language = this.options.language;
    }
    if (this.options.template) {
      options.template = this.options.template;
    }
    if (this.options.templates) {
      options.templates = this.options.templates;
    }
    if (this.options.renderMode) {
      options.renderMode = this.options.renderMode;
    }
    if (this.options.attachMode) {
      options.attachMode = this.options.attachMode;
    }
    if (this.options.iconset) {
      options.iconset = this.options.iconset;
    }
    options.events = this.createEmitter();

    // Make sure to not show the submit button in wizards in the nested forms.
    _.set(options, 'buttonSettings.showSubmit', false);
    return options;
  }

  render() {
    if (this.builderMode) {
      return super.render(this.component.label || 'Nested form');
    }
    const subform = this.subForm ? this.subForm.render() : this.renderTemplate('loading');
    return super.render(subform);
  }

  asString(value) {
    return this.getValueAsString(value);
  }

  /**
   * Prints out the value of form components as a datagrid value.
   */
  getValueAsString(value) {
    if (!value) {
      return 'No data provided';
    }
    if (!value.data && value._id) {
      return value._id;
    }
    if (!value.data || !Object.keys(value.data).length) {
      return 'No data provided';
    }
    return '[Complex Data]';
  }

  attach(element) {
    // Don't attach in builder.
    if (this.builderMode) {
      return super.attach(element);
    }
    return super.attach(element)
      .then(() => this.createSubForm())
      .then(() => {
        this.empty(element);
        if (this.options.builder) {
          this.setContent(element, this.ce('div', {
            class: 'text-muted text-center p-2'
          }, this.text(this.formObj.title)));
          return;
        }

        this.setContent(element, this.render());
        if (this.subForm) {
          this.subForm.attach(element);
        }
      });
  }

  detach() {
    if (this.subForm) {
      this.subForm.detach();
    }
    super.detach();
  }

  get currentForm() {
    return this._currentForm;
  }

  set currentForm(instance) {
    this._currentForm = instance;
    if (!this.subForm) {
      return;
    }
    this.subForm.getComponents().forEach(component => {
      component.currentForm = this;
    });
  }

  destroy() {
    if (this.subForm) {
      this.subForm.destroy();
      this.subForm = null;
      this.subFormReady = null;
    }
    super.destroy();
  }

  redraw() {
    if (this.subForm) {
      this.subForm.form = this.formObj;
    }
    return super.redraw();
  }

  /**
   * Pass everyComponent to subform.
   * @param args
   * @returns {*|void}
   */
  everyComponent(...args) {
    if (this.subForm) {
      this.subForm.everyComponent(...args);
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
    }
  }

  /**
   * Create a subform instance.
   *
   * @return {*}
   */
  createSubForm() {
    this.subFormReady = this.loadSubForm().then((form) => {
      if (!form) {
        return;
      }

      // Iterate through every component and hide the submit button.
      eachComponent(form.components, (component) => {
        if (
          (component.type === 'button') &&
          ((component.action === 'submit') || !component.action)
        ) {
          component.hidden = true;
        }
      });

      // If the subform is already created then destroy the old one.
      if (this.subForm) {
        this.subForm.destroy();
      }

      // Render the form.
      return (new Form(form, this.getSubOptions())).ready.then((instance) => {
        this.subForm = instance;
        this.subForm.currentForm = this;
        this.subForm.parent = this;
        this.subForm.parentVisible = this.visible;
        this.subForm.on('change', () => {
          if (this.subForm) {
            this.dataValue = this.subForm.getValue();
            this.triggerChange({
              noEmit: true
            });
          }
        });
        this.subForm.url = this.formSrc;
        this.subForm.nosubmit = true;
        this.subForm.root = this.root;
        this.restoreValue();
        return this.subForm;
      });
    });
    return this.subFormReady;
  }

  /**
   * Load the subform.
   */
  loadSubForm() {
    if (this.builderMode || this.isHidden()) {
      return NativePromise.resolve();
    }

    // Determine if we already have a loaded form object.
    if (
      this.formObj &&
      this.formObj.components &&
      Array.isArray(this.formObj.components) &&
      this.formObj.components.length
    ) {
      // Pass config down to sub forms.
      if (this.root && this.root.form && this.root.form.config && !this.formObj.config) {
        this.formObj.config = this.root.form.config;
      }
      return NativePromise.resolve(this.formObj);
    }
    else if (this.formSrc) {
      return (new Formio(this.formSrc)).loadForm({ params: { live: 1 } })
        .then((formObj) => {
          this.formObj = formObj;
          return formObj;
        });
    }
    return NativePromise.resolve();
  }

  checkComponentValidity(data, dirty, row) {
    if (this.subForm) {
      return this.subForm.checkValidity(this.dataValue.data, dirty);
    }

    return super.checkComponentValidity(data, dirty, row);
  }

<<<<<<< HEAD
  checkConditions(data) {
    const visible = super.checkConditions(data);
    const subForm = this.subForm;
=======
  checkComponentConditions(data, flags, row) {
    const visible = super.checkComponentConditions(data, flags, row);
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e

    // Return if already hidden
    if (!visible) {
      return visible;
    }

<<<<<<< HEAD
    if (subForm && subForm.hasCondition()) {
=======
    if (this.subForm && this.subForm.hasCondition()) {
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
      return this.subForm.checkConditions(this.dataValue.data);
    }

    return visible;
  }

  calculateValue(data, flags, row) {
    if (this.subForm) {
      return this.subForm.calculateValue(this.dataValue.data, flags);
    }

    return super.calculateValue(data, flags, row);
  }

  setPristine(pristine) {
    super.setPristine(pristine);
    if (this.subForm) {
      this.subForm.setPristine(pristine);
    }
  }

  setPristine(pristine) {
    super.setPristine(pristine);
    if (this.subForm) {
      this.subForm.setPristine(pristine);
    }
  }

  get shouldSubmit() {
    return !this.isHidden() && (!this.component.hasOwnProperty('reference') || this.component.reference);
  }

  /**
   * Determine if the subform should be submitted.
   * @return {*|boolean}
   */
  get shouldSubmit() {
    return this.subFormReady && (!this.component.hasOwnProperty('reference') || this.component.reference);
  }

  /**
   * Returns the data for the subform.
   *
   * @return {*}
   */
  getSubFormData() {
    if (_.get(this.subForm, 'form.display') === 'pdf') {
      return this.subForm.getSubmission();
    }
    else {
      return NativePromise.resolve(this.dataValue);
    }
  }

  /**
   * Submit the subform if configured to do so.
   *
   * @return {*}
   */
  submitSubForm(rejectOnError) {
    // If we wish to submit the form on next page, then do that here.
    if (this.shouldSubmit) {
<<<<<<< HEAD
      return this.loadSubForm().then(() => {
=======
      const subFormReady = this.subFormReady || this.createSubForm();
      return subFormReady.then(() => {
        if (!this.subForm) {
          return this.dataValue;
        }
        this.subForm.nosubmit = false;
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
        return this.subForm.submitForm().then(result => {
          this.subForm.loading = false;
          this.dataValue = result.submission;
          return this.dataValue;
        }).catch(err => {
<<<<<<< HEAD
          this.subForm.onSubmissionError(err);
          return NativePromise.reject(err);
=======
          if (rejectOnError) {
            this.subForm.onSubmissionError(err);
            return NativePromise.reject(err);
          }
          else {
            return {};
          }
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
        });
      });
    }
    return this.getSubFormData();
  }

  /**
   * Submit the form before the next page is triggered.
   */
  beforePage(next) {
    return this.submitSubForm(true).then(() => super.beforePage(next));
  }

  /**
   * Submit the form before the whole form is triggered.
   */
  beforeSubmit() {
    const submission = this.dataValue;

    // This submission has already been submitted, so just return the reference data.
    if (submission && submission._id && submission.form) {
<<<<<<< HEAD
      this.dataValue = this.shouldSubmit ? {
        _id: submission._id,
        form: submission.form
      } : submission;
      return NativePromise.resolve(this.dataValue);
    }

    // This submission has not been submitted yet.
    if (this.shouldSubmit) {
      return this.loadSubForm().then(() => {
        return this.subForm.submitForm()
          .then(result => {
            this.subForm.loading = false;
            this.dataValue = {
              _id: result.submission._id,
              form: result.submission.form
            };
            return this.dataValue;
          })
          .catch(() => {});
      });
    }
    else {
      return super.beforeSubmit();
=======
      this.dataValue = submission;
      return NativePromise.resolve(this.dataValue);
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
    }
    return this.submitSubForm(false)
      .then(() => {
        return this.dataValue;
      })
      .then(() => super.beforeSubmit());
  }

  isHidden() {
    if (!this.visible) {
      return true;
    }
<<<<<<< HEAD
    this.attachLogic();
  }

  isHidden() {
    if (!this.visible) {
      return true;
    }

    return !super.checkConditions(this.rootValue);
  }

  setValue(submission, flags, norecurse) {
    this._submission = submission;
    if (this.subForm || norecurse) {
      if (
        !norecurse &&
        submission &&
        submission._id &&
        this.subForm.formio &&
        !flags.noload &&
        (_.isEmpty(submission.data) || this.shouldSubmit)
      ) {
        const submissionUrl = `${this.subForm.formio.formsUrl}/${submission.form}/submission/${submission._id}`;
        this.subForm.setUrl(submissionUrl, this.options);
        this.subForm.nosubmit = false;
        this.subForm.loadSubmission().then((sub) => this.setValue(sub, flags, true));
        return super.setValue(submission, flags);
      }
      else {
        return this.subForm ? this.subForm.setValue(submission, flags) : super.setValue(submission, flags);
      }
    }

    const changed = super.setValue(this._submission, flags);
    const hidden = this.isHidden();
    let subForm;
    if (hidden) {
      subForm = this.subFormReady;
    }
    else {
      subForm = this.loadSubForm();
=======

    return !super.checkConditions(this.rootValue);
  }

  setValue(submission, flags) {
    const changed = super.setValue(submission, flags);
    if (this.subForm) {
      if (
        submission &&
        submission._id &&
        this.subForm.formio &&
        _.isEmpty(submission.data)
      ) {
        const submissionUrl = `${this.subForm.formio.formsUrl}/${submission.form}/submission/${submission._id}`;
        this.subForm.setUrl(submissionUrl, this.options);
        this.subForm.loadSubmission();
      }
      else {
        this.subForm.setValue(submission, flags);
      }
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
    }
    subForm.then(() => this.setValue(this._submission, flags, true));
    return changed;
  }

  getValue() {
    if (this.subForm) {
      return this.subForm.getValue();
    }
    return this.dataValue;
  }

  getAllComponents() {
    if (!this.subForm) {
      return [];
    }
    return this.subForm.getAllComponents();
  }

  updateSubFormVisibility() {
    if (this.subForm) {
      this.subForm.parentVisible = this.visible;
    }
  }

  get visible() {
    return super.visible;
  }

  set visible(value) {
    super.visible = value;
    this.updateSubFormVisibility();
  }

  get parentVisible() {
    return super.parentVisible;
  }

  set parentVisible(value) {
    super.parentVisible = value;
    this.updateSubFormVisibility();
  }

  isInternalEvent(event) {
    switch (event) {
<<<<<<< HEAD
    case 'focus':
    case 'blur':
    case 'componentChange':
    case 'componentError':
    case 'error':
    case 'formLoad':
    case 'languageChanged':
    case 'render':
    case 'checkValidity':
    case 'initialized':
    case 'submit':
    case 'submitButton':
    case 'nosubmit':
    case 'updateComponent':
    case 'submitDone':
    case 'submissionDeleted':
    case 'requestDone':
    case 'nextPage':
    case 'prevPage':
    case 'wizardNavigationClicked':
    case 'updateWizardNav':
    case 'restoreDraft':
    case 'saveDraft':
    case 'saveComponent':
      return true;
    default:
      return false;
=======
      case 'focus':
      case 'blur':
      case 'componentChange':
      case 'componentError':
      case 'error':
      case 'formLoad':
      case 'languageChanged':
      case 'render':
      case 'checkValidity':
      case 'initialized':
      case 'submit':
      case 'submitButton':
      case 'nosubmit':
      case 'updateComponent':
      case 'submitDone':
      case 'submissionDeleted':
      case 'requestDone':
      case 'nextPage':
      case 'prevPage':
      case 'wizardNavigationClicked':
      case 'updateWizardNav':
      case 'restoreDraft':
      case 'saveDraft':
      case 'saveComponent':
      case 'pdfUploaded':
        return true;
      default:
        return false;
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
    }
  }

  createEmitter() {
<<<<<<< HEAD
    const emiter = new EventEmitter({
      wildcard: false,
      maxListeners: 0
    });
    const nativeEmit = emiter.emit;
    const that = this;

    emiter.emit = function(event, ...args) {
      const eventType = event.replace(`${that.options.namespace}.`, '');
      nativeEmit.call(this, event, ...args);

=======
    const emitter = new EventEmitter({
      wildcard: false,
      maxListeners: 0
    });
    const nativeEmit = emitter.emit;
    const that = this;
    emitter.emit = function(event, ...args) {
      const eventType = event.replace(`${that.options.namespace}.`, '');
      nativeEmit.call(this, event, ...args);
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
      if (!that.isInternalEvent(eventType)) {
        that.emit(eventType, ...args);
      }
    };

<<<<<<< HEAD
    return emiter;
=======
    return emitter;
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  }

  deleteValue() {
    super.setValue(null, {
      noUpdateEvent: true,
      noDefault: true
    });
    _.unset(this.data, this.key);
  }
}

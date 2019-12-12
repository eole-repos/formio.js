<<<<<<< HEAD
/* global ace, Quill */
import TextFieldComponent from '../textfield/TextField';
import Formio from '../../Formio';
import _ from 'lodash';
import { uniqueName } from '../../utils/utils';
import NativePromise from 'native-promise-only';
=======
/* global Quill */
import TextFieldComponent from '../textfield/TextField';
import _ from 'lodash';
import NativePromise from 'native-promise-only';
import { uniqueName } from '../../utils/utils';
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e

export default class TextAreaComponent extends TextFieldComponent {
  static schema(...extend) {
    return TextFieldComponent.schema({
      type: 'textarea',
      label: 'Text Area',
      key: 'textArea',
      rows: 3,
      wysiwyg: false,
      editor: '',
      inputFormat: 'html',
      validate: {
        minWords: '',
        maxWords: ''
      }
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'Text Area',
      group: 'basic',
      icon: 'font',
      documentation: 'http://help.form.io/userguide/#textarea',
      weight: 20,
      schema: TextAreaComponent.schema()
    };
  }

<<<<<<< HEAD
  constructor(component, options, data) {
    super(component, options, data);
    this.wysiwygRendered = false;
    this.editorReady = new NativePromise((resolve) => {
      this.editorReadyResolve = resolve;
    });
=======
  init() {
    super.init();
    this.editorReady = new NativePromise((resolve) => {
      this.editorReadyResolve = resolve;
    });

>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
    // Never submit on enter for text areas.
    this.options.submitOnEnter = false;
  }

  get defaultSchema() {
    return TextAreaComponent.schema();
  }

<<<<<<< HEAD
  show(show, noClear) {
    if (show && !this.wysiwygRendered) {
      this.enableWysiwyg();
      this.setWysiwygValue(this.dataValue);
      this.wysiwygRendered = true;
    }
    else if (!show && this.wysiwygRendered) {
      this.destroyWysiwyg();
      this.wysiwygRendered = false;
    }

    return super.show(show, noClear);
=======
  get inputInfo() {
    const info = super.inputInfo;
    info.type = this.component.wysiwyg ? 'div' : 'textarea';
    if (this.component.rows) {
      info.attr.rows = this.component.rows;
    }
    return info;
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  }

  setupValueElement(element) {
    let value = this.getValue();
    value = this.isEmpty(value) ? this.defaultViewOnlyValue : this.getValueAsString(value);
    if (this.component.wysiwyg) {
      value = this.interpolate(value);
    }
    if (element) {
      this.setContent(element, value);
    }
  }

  acePlaceholder() {
    if (!this.component.placeholder || !this.editor) {
      return;
    }
    const shouldShow = !this.editor.session.getValue().length;
    let node = this.editor.renderer.emptyMessageNode;
    if (!shouldShow && node) {
      this.editor.renderer.scroller.removeChild(this.editor.renderer.emptyMessageNode);
      this.editor.renderer.emptyMessageNode = null;
    }
    else if (shouldShow && !node) {
      node = this.editor.renderer.emptyMessageNode = this.ce('div');
      node.textContent = this.t(this.component.placeholder);
      node.className = 'ace_invisible ace_emptyMessage';
      node.style.padding = '0 9px';
      this.editor.renderer.scroller.appendChild(node);
    }
  }

  renderElement(value, index) {
    const info = this.inputInfo;
    info.attr = info.attr || {};
    info.content = value;
    if (this.options.readOnly || this.disabled) {
      return this.renderTemplate('well', {
        children: value,
        nestedKey: this.key,
        value
      });
    }
    // Editors work better on divs.
    if (this.component.editor || this.component.wysiwyg) {
      return '<div ref="input"></div>';
    }

    return this.renderTemplate('input', {
      input: info,
      value,
      index
    });
  }

  get autoExpand() {
    return this.component.autoExpand;
  }

<<<<<<< HEAD
  get autoExpand() {
    return this.component.autoExpand;
  }

=======
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  /**
   * Updates the editor value.
   *
   * @param newValue
   */
  updateEditorValue(newValue) {
    newValue = this.getConvertedValue(this.removeBlanks(newValue));
    if ((newValue !== this.dataValue) && (!_.isEmpty(newValue) || !_.isEmpty(this.dataValue))) {
<<<<<<< HEAD
      this.updateValue({
        modified: !this.autoModified
      }, newValue);
    }
    this.autoModified = false;
  }

  /* eslint-disable max-statements */
  createInput(container) {
    if (this.options.readOnly) {
      this.input = this.ce('div', {
        class: 'well'
      });
      container.appendChild(this.input);
      return this.input;
    }
    else if (this.isPlain) {
      return super.createInput(container);
=======
      this.updateValue(newValue, {
        modified: !this.autoModified
      });
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
    }
    this.autoModified = false;
  }

  attachElement(element, index) {
    if (this.autoExpand && (this.isPlain || this.options.readOnly || this.options.htmlView)) {
      element.childNodes.forEach((element) => {
        if (element.nodeName === 'TEXTAREA') {
          this.addAutoExpanding(element);
        }
      });
    }

<<<<<<< HEAD
    // Add the input.
    this.input = this.ce('div', {
      class: 'formio-wysiwyg-editor'
    });
    container.appendChild(this.input);
    this.addCounter(container);

    return this.input;
  }
  /* eslint-enable max-statements */

  enableWysiwyg() {
    if (this.isPlain || this.options.readOnly || this.options.htmlView) {
      if (this.autoExpand) {
        this.element.childNodes.forEach((element) => {
          if (element.nodeName === 'TEXTAREA') {
            this.addAutoExpanding(element);
          }
        });
      }

      return;
    }

    if (this.component.editor === 'ace') {
      Formio.requireLibrary('ace', 'ace', 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.1/ace.js', true)
        .then(() => {
          const mode = this.component.as || 'javascript';
          this.editor = ace.edit(this.input);
          this.editor.on('change', () => this.updateEditorValue(this.editor.getValue()));
          this.editor.getSession().setTabSize(2);
          this.editor.getSession().setMode(`ace/mode/${mode}`);
          this.editor.on('input', () => this.acePlaceholder());
          setTimeout(() => this.acePlaceholder(), 100);
          this.editorReadyResolve(this.editor);
          return this.editor;
=======
    if (this.options.readOnly) {
      return element;
    }

    if (this.component.wysiwyg && !this.component.editor) {
      this.component.editor = 'ckeditor';
    }

    let settings = _.isEmpty(this.component.wysiwyg) ? this.wysiwygDefault : this.component.wysiwyg;

    // Attempt to add a wysiwyg editor. In order to add one, it must be included on the global scope.
    switch (this.component.editor) {
      case 'ace':
        if (!settings) {
          settings = {};
        }
        settings.mode = this.component.as || 'javascript';
        this.addAce(element, settings, (newValue) => this.updateEditorValue(newValue)).then((ace) => {
          this.editor = ace;
          this.editor.on('input', () => this.acePlaceholder());
          this.editor.setValue(this.setConvertedValue(this.dataValue));
          setTimeout(() => {
            this.acePlaceholder();
          }, 100);
          this.editorReadyResolve(ace);
          return ace;
        }).catch(err => console.warn(err));
        break;
      case 'quill':
        // Normalize the configurations for quill.
        if (settings.hasOwnProperty('toolbarGroups') || settings.hasOwnProperty('toolbar')) {
          console.warn('The WYSIWYG settings are configured for CKEditor. For this renderer, you will need to use configurations for the Quill Editor. See https://quilljs.com/docs/configuration for more information.');
          settings = this.wysiwygDefault;
        }

        // Add the quill editor.
        this.addQuill(
          element,
          settings, () => this.updateEditorValue(this.editor.root.innerHTML)
        ).then((quill) => {
          this.editor = quill;
          if (this.component.isUploadEnabled) {
            const _this = this;
            quill.getModule('toolbar').addHandler('image', function() {
              //we need initial 'this' because quill calls this method with its own context and we need some inner quill methods exposed in it
              //we also need current component instance as we use some fields and methods from it as well
              _this.imageHandler.call(_this, this);
            } );
          }
          quill.root.spellcheck = this.component.spellcheck;
          if (this.options.readOnly || this.component.disabled) {
            this.editor.disable();
          }

          this.editor.setContents(this.editor.clipboard.convert(this.setConvertedValue(this.dataValue)));
          this.editorReadyResolve(this.editor);
          return quill;
        }).catch(err => console.warn(err));
        break;
      case 'ckeditor':
        settings = settings || {};
        settings.rows = this.component.rows;
        this.addCKE(element, settings, (newValue) => this.updateEditorValue(newValue))
          .then((editor) => {
            this.editor = editor;
            if (this.options.readOnly || this.component.disabled) {
              this.editor.isReadOnly = true;
            }
            const numRows = parseInt(this.component.rows, 10);
            if (_.isFinite(numRows) && _.has(editor, 'ui.view.editable.editableElement')) {
              // Default height is 21px with 10px margin + a 14px top margin.
              const editorHeight = (numRows * 31) + 14;
              editor.ui.view.editable.editableElement.style.height = `${(editorHeight)}px`;
            }
            editor.data.set(this.setConvertedValue(this.dataValue));
            this.editorReadyResolve(this.editor);
            return editor;
          });
        break;
      default:
        super.attachElement(element, index);
        this.addEventListener(element, this.inputInfo.changeEvent, () => {
          this.updateValue(null, {
            modified: true
          }, index);
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
        });
    }

<<<<<<< HEAD
    if (this.component.editor === 'ckeditor') {
      const settings = this.component.wysiwyg || {};
      settings.rows = this.component.rows;
      this.addCKE(this.input, settings, (newValue) => this.updateEditorValue(newValue))
        .then((editor) => {
          this.editor = editor;
          if (this.options.readOnly || this.component.disabled) {
            this.editor.isReadOnly = true;
          }
          this.editorReadyResolve(this.editor);
          return editor;
        });
      return this.input;
    }

    // Normalize the configurations.
    if (
      this.component.wysiwyg &&
      (this.component.wysiwyg.hasOwnProperty('toolbarGroups') || this.component.wysiwyg.hasOwnProperty('toolbar'))
    ) {
      console.warn('The WYSIWYG settings are configured for CKEditor. For this renderer, you will need to use configurations for the Quill Editor. See https://quilljs.com/docs/configuration for more information.');
      this.component.wysiwyg = this.wysiwygDefault;
      this.emit('componentEdit', this);
=======
    return element;
  }

  imageHandler(quillInstance) {
    let fileInput = quillInstance.container.querySelector('input.ql-image[type=file]');
    if (fileInput == null) {
      fileInput = document.createElement('input');
      fileInput.setAttribute('type', 'file');
      fileInput.setAttribute('accept', 'image/*');
      fileInput.classList.add('ql-image');
      this.addEventListener(fileInput, 'change', () => {
        const files = fileInput.files;
        const range = quillInstance.quill.getSelection(true);

        if (!files || !files.length) {
          console.warn('No files selected');
          return;
        }

        quillInstance.quill.enable(false);
        const { uploadStorage, uploadUrl, uploadOptions, uploadDir, fileKey } = this.component;
        let requestData;
        this.root.formio
          .uploadFile(
            uploadStorage,
            files[0],
            uniqueName(files[0].name),
            uploadDir || '', //should pass empty string if undefined
            null,
            uploadUrl,
            uploadOptions,
            fileKey
          )
          .then(result => {
            requestData = result;
            return this.root.formio.downloadFile(result);
          })
          .then(result => {
            quillInstance.quill.enable(true);
            const Delta = Quill.import('delta');
            quillInstance.quill.updateContents(new Delta()
                .retain(range.index)
                .delete(range.length)
                .insert(
                  {
                    image: result.url
                  },
                  {
                    alt: JSON.stringify(requestData),
                  })
              , Quill.sources.USER);
            fileInput.value = '';
          }).catch(error => {
          console.warn('Quill image upload failed');
          console.warn(error);
          quillInstance.quill.enable(true);
        });
      });
      quillInstance.container.appendChild(fileInput);
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
    }
    fileInput.click();
  }

  get isPlain() {
    return (!this.component.wysiwyg && !this.component.editor);
  }

  get htmlView() {
    return this.options.readOnly && this.component.wysiwyg;
  }
  /* eslint-enable max-statements */

  setWysiwygValue(value, skipSetting) {
    if (this.htmlView) {
      // For HTML view, just view the contents.
      if (this.input) {
        this.setContent(this.input, this.interpolate(value));
      }
    }
    else if (this.editorReady) {
      return this.editorReady.then((editor) => {
        this.autoModified = true;
        if (!skipSetting) {
          switch (this.component.editor) {
            case 'ace':
              editor.setValue(this.setConvertedValue(value));
              break;
            case 'quill':
              if (this.component.isUploadEnabled) {
                this.setAsyncConvertedValue(value)
                  .then(result => {
                    editor.setContents(editor.clipboard.convert(result));
                  });
              }
              else {
                editor.setContents(editor.clipboard.convert(this.setConvertedValue(value)));
              }
              break;
            case 'ckeditor':
              editor.data.set(this.setConvertedValue(value));
              break;
          }
        }
      });
    }

<<<<<<< HEAD
    // Add the quill editor.
    this.addQuill(
      this.input,
      this.component.wysiwyg, () => this.updateEditorValue(this.quill.root.innerHTML)
    ).then((quill) => {
      if (this.component.isUploadEnabled) {
        const _this = this;
        quill.getModule('toolbar').addHandler('image', function() {
          //we need initial 'this' because quill calls this method with its own context and we need some inner quill methods exposed in it
          //we also need current component instance as we use some fields and methods from it as well
          _this.imageHandler.call(_this, this);
        } );
      }
      quill.root.spellcheck = this.component.spellcheck;
      if (this.options.readOnly || this.component.disabled) {
        quill.disable();
=======
    return NativePromise.resolve();
  }

  setConvertedValue(value) {
    if (this.component.as && this.component.as === 'json' && !_.isNil(value)) {
      try {
        value = JSON.stringify(value, null, 2);
      }
      catch (err) {
        console.warn(err);
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
      }
    }

<<<<<<< HEAD
      this.editorReadyResolve(quill);
      return quill;
    }).catch(err => console.warn(err));
  }

  destroyWysiwyg() {
    if (this.editor) {
      this.editorReady = new NativePromise((resolve) => {
        this.editorReadyResolve = resolve;
      });

      this.editor.destroy();
    }
  }

  imageHandler(quillInstance) {
    let fileInput = quillInstance.container.querySelector('input.ql-image[type=file]');

    if (fileInput == null) {
      fileInput = document.createElement('input');
      fileInput.setAttribute('type', 'file');
      fileInput.setAttribute('accept', 'image/*');
      fileInput.classList.add('ql-image');
      fileInput.addEventListener('change', () => {
        const files = fileInput.files;
        const range = quillInstance.quill.getSelection(true);

        if (!files || !files.length) {
          console.warn('No files selected');
          return;
        }

        quillInstance.quill.enable(false);
        const { uploadStorage, uploadUrl, uploadOptions, uploadDir } = this.component;
        let requestData;
        this.root.formio
          .uploadFile(
            uploadStorage,
            files[0],
            uniqueName(files[0].name),
            uploadDir || '', //should pass empty string if undefined
            null,
            uploadUrl,
            uploadOptions
          )
          .then(result => {
            requestData = result;
            return this.root.formio.downloadFile(result);
          })
          .then(result => {
            quillInstance.quill.enable(true);
            const Delta = Quill.import('delta');
            quillInstance.quill.updateContents(new Delta()
                .retain(range.index)
                .delete(range.length)
                .insert(
                  {
                    image: result.url
                  },
                  {
                    alt: JSON.stringify(requestData),
                  })
              , Quill.sources.USER);
            fileInput.value = '';
          }).catch(error => {
          console.warn('Quill image upload failed');
          console.warn(error);
          quillInstance.quill.enable(true);
        });
      });
      quillInstance.container.appendChild(fileInput);
    }
    fileInput.click();
  }

  setWysiwygValue(value, skipSetting) {
    if (this.isPlain || this.options.readOnly || this.options.htmlView) {
      return;
    }

    if (this.editorReady) {
      this.editorReady.then((editor) => {
        this.autoModified = true;
        if (!skipSetting) {
          if (this.component.editor === 'ace') {
            editor.setValue(this.setConvertedValue(value));
          }
          else if (this.component.editor === 'ckeditor') {
            editor.data.set(this.setConvertedValue(value));
          }
          else {
            if (this.component.isUploadEnabled) {
              this.setAsyncConvertedValue(value)
                .then(result => {
                  editor.setContents(editor.clipboard.convert(result));
                });
            }
            else {
              editor.setContents(editor.clipboard.convert(this.setConvertedValue(value)));
            }
          }
        }
      });
    }
=======
    if (!_.isString(value)) {
      value = '';
    }

    return value;
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  }

  setAsyncConvertedValue(value) {
    if (this.component.as && this.component.as === 'json' && value) {
      try {
        value = JSON.stringify(value, null, 2);
      }
      catch (err) {
        console.warn(err);
      }
    }

    if (!_.isString(value)) {
      value = '';
    }

<<<<<<< HEAD
    return value;
  }

  setAsyncConvertedValue(value) {
    if (this.component.as && this.component.as === 'json' && value) {
      try {
        value = JSON.stringify(value, null, 2);
      }
      catch (err) {
        console.warn(err);
      }
    }

    if (!_.isString(value)) {
      value = '';
    }

    const htmlDoc = new DOMParser().parseFromString(value,'text/html');
    const images = htmlDoc.getElementsByTagName('img');
    if (images.length) {
      return this.setImagesUrl(images)
        .then( () => {
          value = htmlDoc.getElementsByTagName('body')[0].firstElementChild;
          return new XMLSerializer().serializeToString(value);
        });
    }
    else {
      return NativePromise.resolve(value);
    }
  }

  setImagesUrl(images) {
    return NativePromise.all(_.map(images, image => {
      let requestData;
      try {
        requestData = JSON.parse(image.getAttribute('alt'));
      }
      catch (error) {
        console.warn(error);
      }

      return this.root.formio.downloadFile(requestData)
        .then((result) => {
          image.setAttribute('src', result.url);
        });
    }));
  }

  addAutoExpanding(textarea) {
    let heightOffset = null;
    let previousHeight = null;

    const changeOverflow = (value) => {
      const width = textarea.style.width;

      textarea.style.width = '0px';
      textarea.offsetWidth;
      textarea.style.width = width;

      textarea.style.overflowY = value;
    };

    const preventParentScroll = (element, changeSize) => {
      const nodeScrolls = [];

      while (element && element.parentNode && element.parentNode instanceof Element) {
        if (element.parentNode.scrollTop) {
          nodeScrolls.push({
            node: element.parentNode,
            scrollTop: element.parentNode.scrollTop,
          });
        }
        element = element.parentNode;
      }

      changeSize();

      nodeScrolls.forEach((nodeScroll) => {
        nodeScroll.node.scrollTop = nodeScroll.scrollTop;
      });
    };

    const resize = () => {
      if (textarea.scrollHeight === 0) {
        return;
      }

      preventParentScroll(textarea, () => {
        textarea.style.height = '';
        textarea.style.height = `${textarea.scrollHeight + heightOffset}px`;
      });
    };

    const update = _.debounce(() => {
      resize();
      const styleHeight = Math.round(parseFloat(textarea.style.height));
      const computed = window.getComputedStyle(textarea, null);
      let currentHeight = textarea.offsetHeight;
      if (currentHeight < styleHeight && computed.overflowY === 'hidden') {
        changeOverflow('scroll');
      }
      else if (computed.overflowY !== 'hidden') {
        changeOverflow('hidden');
      }

      resize();
      currentHeight = textarea.offsetHeight;
      if (previousHeight !== currentHeight) {
        previousHeight = currentHeight;
        update();
      }
    }, 200);
    const computedStyle = window.getComputedStyle(textarea, null);

    textarea.style.resize = 'none';
    heightOffset = parseFloat(computedStyle.borderTopWidth) + parseFloat(computedStyle.borderBottomWidth) || 0;

    if (window) {
      this.addEventListener(window, 'resize', update);
    }

    this.addEventListener(textarea, 'input', update);
    this.on('initialized', update);
    this.updateSize = update;
    update();
  }

=======
    const htmlDoc = new DOMParser().parseFromString(value,'text/html');
    const images = htmlDoc.getElementsByTagName('img');
    if (images.length) {
      return this.setImagesUrl(images)
        .then( () => {
          value = htmlDoc.getElementsByTagName('body')[0].firstElementChild;
          return new XMLSerializer().serializeToString(value);
        });
    }
    else {
      return NativePromise.resolve(value);
    }
  }

  setImagesUrl(images) {
    return NativePromise.all(_.map(images, image => {
      let requestData;
      try {
        requestData = JSON.parse(image.getAttribute('alt'));
      }
      catch (error) {
        console.warn(error);
      }

      return this.root.formio.downloadFile(requestData)
        .then((result) => {
          image.setAttribute('src', result.url);
        });
    }));
  }

  addAutoExpanding(textarea) {
    let heightOffset = null;
    let previousHeight = null;

    const changeOverflow = (value) => {
      const width = textarea.style.width;

      textarea.style.width = '0px';
      textarea.offsetWidth;
      textarea.style.width = width;

      textarea.style.overflowY = value;
    };

    const preventParentScroll = (element, changeSize) => {
      const nodeScrolls = [];

      while (element && element.parentNode && element.parentNode instanceof Element) {
        if (element.parentNode.scrollTop) {
          nodeScrolls.push({
            node: element.parentNode,
            scrollTop: element.parentNode.scrollTop,
          });
        }
        element = element.parentNode;
      }

      changeSize();

      nodeScrolls.forEach((nodeScroll) => {
        nodeScroll.node.scrollTop = nodeScroll.scrollTop;
      });
    };

    const resize = () => {
      if (textarea.scrollHeight === 0) {
        return;
      }

      preventParentScroll(textarea, () => {
        textarea.style.height = '';
        textarea.style.height = `${textarea.scrollHeight + heightOffset}px`;
      });
    };

    const update = _.debounce(() => {
      resize();
      const styleHeight = Math.round(parseFloat(textarea.style.height));
      const computed = window.getComputedStyle(textarea, null);
      let currentHeight = textarea.offsetHeight;
      if (currentHeight < styleHeight && computed.overflowY === 'hidden') {
        changeOverflow('scroll');
      }
      else if (computed.overflowY !== 'hidden') {
        changeOverflow('hidden');
      }

      resize();
      currentHeight = textarea.offsetHeight;
      if (previousHeight !== currentHeight) {
        previousHeight = currentHeight;
        update();
      }
    }, 200);
    const computedStyle = window.getComputedStyle(textarea, null);

    textarea.style.resize = 'none';
    heightOffset = parseFloat(computedStyle.borderTopWidth) + parseFloat(computedStyle.borderBottomWidth) || 0;

    if (window) {
      this.addEventListener(window, 'resize', update);
    }

    this.addEventListener(textarea, 'input', update);
    this.on('initialized', update);
    this.updateSize = update;
    update();
  }

>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  removeBlanks(value) {
    if (!value) {
      return value;
    }
    const removeBlanks = function(input) {
      if (typeof input !== 'string') {
        return input;
      }
      return input.replace(/<p>&nbsp;<\/p>|<p><br><\/p>|<p><br>&nbsp;<\/p>/g, '').trim();
    };

    if (Array.isArray(value)) {
      value.forEach((input, index) => {
        value[index] = removeBlanks(input);
      });
    }
    else {
      value = removeBlanks(value);
<<<<<<< HEAD
    }
    return value;
  }

  onChange(...args) {
    super.onChange(...args);

    if (this.updateSize) {
      this.updateSize();
    }
=======
    }
    return value;
  }

  onChange(flags, fromRoot) {
    const changed = super.onChange(flags, fromRoot);
    if (this.updateSize) {
      this.updateSize();
    }
    return changed;
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  }

  hasChanged(newValue, oldValue) {
    return super.hasChanged(this.removeBlanks(newValue), this.removeBlanks(oldValue));
  }

<<<<<<< HEAD
  isEmpty(value) {
=======
  isEmpty(value = this.dataValue) {
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
    return super.isEmpty(this.removeBlanks(value));
  }

  get defaultValue() {
    let defaultValue = super.defaultValue;
    if (this.component.editor === 'quill' && !defaultValue) {
      defaultValue = '<p><br></p>';
    }
    return defaultValue;
  }

  setValue(value, flags) {
    const skipSetting = _.isEqual(value, this.getValue());
    value = value || '';
<<<<<<< HEAD
    if (this.options.readOnly || this.htmlView) {
      // For readOnly, just view the contents.
      if (this.input) {
        if (Array.isArray(value)) {
          value = value.join('<br/><br/>');
        }
        this.input.innerHTML = this.interpolate(value);
      }
      this.dataValue = value;
      return;
    }
    else if (this.isPlain) {
      value = Array.isArray(value) ? value.map((val) => this.setConvertedValue(val)) : this.setConvertedValue(value);
      return super.setValue(value, flags);
    }

    this.setWysiwygValue(value, skipSetting, flags);
    return this.updateValue(flags);
=======
    if (this.isPlain) {
      value = Array.isArray(value) ? value.map((val) => this.setConvertedValue(val)) : this.setConvertedValue(value);
      const changed = super.setValue(value, flags);
      if (changed && (this.disabled || this.options.readOnly)) {
        this.triggerRedraw();
      }
      return changed;
    }

    // Set the value when the editor is ready.
    const newValue = (value === undefined || value === null) ? this.getValue() : value;
    const changed = (newValue !== undefined) ? this.hasChanged(newValue, this.dataValue) : false;
    if (changed) {
      this.setWysiwygValue(newValue, skipSetting, () => this.updateOnChange(flags, changed));
    }
    return changed;
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  }

  getConvertedValue(value) {
    if (this.component.as && this.component.as === 'json' && value) {
      try {
        value = JSON.parse(value);
      }
      catch (err) {
        // console.warn(err);
      }
    }
    return value;
  }

  destroy() {
    if (this.editorReady) {
<<<<<<< HEAD
      this.editorReady.then((editor) => editor.destroy());
    }

    if (this.updateSize) {
      this.removeEventListener(window, 'resize', this.updateSize);
    }

    return super.destroy();
  }

  getValue() {
    if (this.viewOnly || this.htmlView || this.options.readOnly) {
      return this.dataValue;
    }

    if (this.isPlain) {
      return this.getConvertedValue(super.getValue());
    }

    return this.dataValue;
=======
      this.editorReady.then((editor) => {
        if (editor.destroy) {
          return editor.destroy();
        }
      });
    }

    if (this.updateSize) {
      this.removeEventListener(window, 'resize', this.updateSize);
    }

    return super.destroy();
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
  }

  getValue() {
    if (this.isPlain) {
      return this.getConvertedValue(super.getValue());
    }

    return this.dataValue;
  }
}

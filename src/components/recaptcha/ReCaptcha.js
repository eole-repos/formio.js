/*globals grecaptcha*/
<<<<<<< HEAD
import BaseComponent from '../base/Base';
=======
import Component from '../_classes/component/Component';
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
import Formio from '../../Formio';
import _get from 'lodash/get';
import NativePromise from 'native-promise-only';

<<<<<<< HEAD
export default class ReCaptchaComponent extends BaseComponent {
  static schema(...extend) {
    return BaseComponent.schema({
=======
export default class ReCaptchaComponent extends Component {
  static schema(...extend) {
    return Component.schema({
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
      type: 'recaptcha',
      key: 'recaptcha',
      label: 'reCAPTCHA'
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'reCAPTCHA',
<<<<<<< HEAD
      group: 'advanced',
      icon: 'fa fa-refresh',
      documentation: 'http://help.form.io/userguide/#recaptcha',
      weight: 550,
=======
      group: 'premium',
      icon: 'refresh',
      documentation: 'http://help.form.io/userguide/#recaptcha',
      weight: 40,
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
      schema: ReCaptchaComponent.schema()
    };
  }

<<<<<<< HEAD
  createInput() {
    if (this.options.builder) {
=======
  render() {
    if (this.builderMode) {
      return super.render('reCAPTCHA');
    }
    else {
      return super.render('', true);
    }
  }

  createInput() {
    if (this.builderMode) {
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
      // We need to see it in builder mode.
      this.append(this.text(this.name));
    }
    else {
      const siteKey = _get(this.root.form, 'settings.recaptcha.siteKey');
      if (siteKey) {
        const recaptchaApiScriptUrl = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
        this.recaptchaApiReady = Formio.requireLibrary('googleRecaptcha', 'grecaptcha', recaptchaApiScriptUrl, true);
      }
      else {
        console.warn('There is no Site Key specified in settings in form JSON');
      }
    }
  }

  createLabel() {
    return;
  }

  verify(actionName) {
    const siteKey = _get(this.root.form, 'settings.recaptcha.siteKey');
    if (!siteKey) {
      console.warn('There is no Site Key specified in settings in form JSON');
      return;
    }
    if (!this.recaptchaApiReady) {
      const recaptchaApiScriptUrl = `https://www.google.com/recaptcha/api.js?render=${_get(this.root.form, 'settings.recaptcha.siteKey')}`;
      this.recaptchaApiReady = Formio.requireLibrary('googleRecaptcha', 'grecaptcha', recaptchaApiScriptUrl, true);
    }
    if (this.recaptchaApiReady) {
      this.recaptchaVerifiedPromise = new NativePromise((resolve, reject) => {
        this.recaptchaApiReady
          .then(() => {
            grecaptcha.ready(() => {
              grecaptcha
                .execute(siteKey, {
                  action: actionName
                })
                .then((token) => {
                  return this.sendVerificationRequest(token);
                })
                .then(verificationResult => {
                  this.setValue(verificationResult);
                  return resolve(verificationResult);
                });
            });
          })
          .catch(() => {
            return reject();
          });
      });
    }
  }

  beforeSubmit() {
    if (this.recaptchaVerifiedPromise) {
<<<<<<< HEAD
      return this.recaptchaVerifiedPromise;
=======
      return this.recaptchaVerifiedPromise
        .then(() => super.beforeSubmit());
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
    }
    return super.beforeSubmit();
  }

  sendVerificationRequest(token) {
    return Formio.makeStaticRequest(`${Formio.projectUrl}/recaptcha?recaptchaToken=${token}`);
  }

  setValue(value) {
    const changed = this.hasChanged(value, this.dataValue);
    this.dataValue = value;
    return changed;
  }

  getValue() {
    return this.dataValue;
  }
}

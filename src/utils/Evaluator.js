import _ from 'lodash';
import stringHash from 'string-hash';
const Evaluator = {
  noeval: false,
  cache: {},
  templateSettings: {
    evaluate: /\{%([\s\S]+?)%\}/g,
    interpolate: /\{\{([\s\S]+?)\}\}/g,
    escape: /\{\{\{([\s\S]+?)\}\}\}/g
  },
  evaluator(func, ...params) {
    if (Evaluator.noeval) {
      console.warn('No evaluations allowed for this renderer.');
      return _.noop;
    }
<<<<<<< HEAD
    else {
      return new Function(...params, func);
    }
  },
  template(template, hash) {
    if (typeof template === 'function') {
      return template;
    }
    hash = hash || stringHash(template);
    try {
=======

    return new Function(...params, func);
  },
  template(template, hash) {
    hash = hash || stringHash(template);
    try {
      // Ensure we handle copied templates from the ejs files.
      template = template.replace(/ctx\./g, '');
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
      return (Evaluator.cache[hash] = _.template(template, Evaluator.templateSettings));
    }
    catch (err) {
      console.warn('Error while processing template', err, template);
    }
  },
  interpolate(rawTemplate, data) {
    if (typeof rawTemplate === 'function') {
<<<<<<< HEAD
      return rawTemplate(data);
    }

    const hash = _.isNumber(rawTemplate) ? rawTemplate : stringHash(rawTemplate);
=======
      try {
        return rawTemplate(data);
      }
      catch (err) {
        console.warn('Error interpolating template', err, data);
        return err.message;
      }
    }

    rawTemplate = String(rawTemplate);

    const hash = stringHash(rawTemplate);
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
    let template;
    if (Evaluator.cache[hash]) {
      template = Evaluator.cache[hash];
    }
    else if (Evaluator.noeval) {
      // No cached template methods available. Use poor-mans interpolate without eval.
      return rawTemplate.replace(/({{\s+(.*)\s+}})/, (match, $1, $2) => _.get(data, $2));
    }
    else {
      template = Evaluator.template(rawTemplate, hash);
    }
    if (typeof template === 'function') {
      try {
        return template(data);
      }
      catch (err) {
        console.warn('Error interpolating template', err, rawTemplate, data);
<<<<<<< HEAD
=======
        return err.message;
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
      }
    }
    return template;
  }
};

export default Evaluator;

// Keep lodash off the global scope.
import _ from 'lodash';
_.noConflict();

import StripeComponent from './stripe/stripe/Stripe';
import StripeCheckoutComponent from './stripe/checkout/StripeCheckout';
<<<<<<< HEAD
import SketchPad from './sketchpad/sketchpad';
import Tagpad from './tagpad/tagpad';
=======
import LocationComponent from './location/Location';
import EditTableComponent from './edittable/EditTable';
import ModalEdit from './modaledit/ModalEdit';
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e

const Contrib = {
  stripe: {
    stripe: StripeComponent,
<<<<<<< HEAD
    checkout: StripeCheckoutComponent
  },
  sketchpad: SketchPad,
  tagpad: Tagpad,
=======
    checkout: StripeCheckoutComponent,
  },
  location: LocationComponent,
  edittable: EditTableComponent,
  modaledit: ModalEdit,
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
};

export default Contrib;
if (typeof global === 'object' && global.Formio) {
  global.Formio.contrib = Contrib;

  if (global.Formio.Components) {
    global.Formio.Components.setComponents(Contrib);
  }
  else {
    console.log('Failed to register contrib components');
  }
}

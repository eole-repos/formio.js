import { EventEmitter2 } from 'eventemitter2';
import * as utils from './utils/utils';

export default class EventEmitter extends EventEmitter2 {
  constructor(conf = {}) {
<<<<<<< HEAD
    const {
      loadLimit = 50,
      eventsSafeInterval = 300,
      pause = 500,
      inspect = false,
      ...ee2conf
    } = conf;
=======
    const { loadLimit = 50, eventsSafeInterval = 300, pause = 500, ...ee2conf } = conf;
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
    super(ee2conf);

    const [isPaused, togglePause] = utils.withSwitch(false, true);

    const overloadHandler = () => {
<<<<<<< HEAD
      console.warn('Infinite loop detected');
=======
      console.warn('Infinite loop detected', this.id, pause);
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
      togglePause();
      setTimeout(togglePause, pause);
    };

    const dispatch = utils.observeOverload(overloadHandler, {
      limit: loadLimit,
      delay: eventsSafeInterval
    });

    this.emit = (...args) => {
<<<<<<< HEAD
      if (typeof inspect === 'function') {
        inspect();
      }

=======
>>>>>>> 6b7f42f47594eba47919f99b6fb356c8392aae4e
      if (isPaused()) {
        return;
      }

      super.emit(...args);
      dispatch();
    };
  }
}

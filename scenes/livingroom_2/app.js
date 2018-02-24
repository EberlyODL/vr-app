const scene = document.querySelector('a-scene');

const emitEvent = (eventName, listeners) => {
  listeners.forEach((listener) => {
      const el = document.querySelector(listener);
      el.emit(eventName);
  })
};

/**
 * Listen to hotspot clicks
 */
scene.addEventListener('click', (e) => {
  if (e.detail) {
    if (e.detail.target) {
      if (e.detail.target.classList) {
        if (e.detail.target.classList.contains('hotspot')) {
        }
      }
    }
  }
});
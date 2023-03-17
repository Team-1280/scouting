// register service worker
navigator.serviceWorker.register('offline.js', { scope: './' })
  .then(navigator.serviceWorker.ready)
  .then(() => {
    console.log('Service worker successfully registered!')
  })
  .catch(e => {
    console.log('Error when registering service worker.', e, arguments)
  })

// this is the service worker which intercepts all HTTP requests
self.addEventListener('fetch', getter = (e) => {
  var request = e.request
  e.respondWith(
    caches.match(e.request).then(res => {
      // return from cache, otherwise fetch from network
      return res || fetch(request)
    })
  )
  // otherwise: ignore event
})

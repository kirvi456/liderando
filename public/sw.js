const STATIC_CACHE      = 'static-v4';
const DYNAMIC_CACHE     = 'dynamic-v1';
const INMUTABLE_CACHE   = 'inmutable-v1';

const APP_SHELL = [
    '/',
    'index.html',
    'favicon.ico',
    'logo192.png',
    'logo512.png',

    'static/css/main.3ce23c5e.css',
    'static/js/main.e984b5e8.js',
    'static/media/calculator.5a01297bfefdde7d8a53f1044ede79b6.svg',
    'static/media/building.329c66f0728393baa7918c0ebc80d69a.svg',
    'static/media/logo.4951ee3b293e28867515.png',
]

const APP_SHEL_INMUTABLE = [
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap',
]

self.addEventListener('install', e => {

    const cacheStatic = caches.open( STATIC_CACHE )
    .then(cache => {
        cache.addAll( APP_SHELL );
    })

    const cacheInmutable = caches.open( INMUTABLE_CACHE )
    .then( cache => {
        cache.addAll( APP_SHEL_INMUTABLE );
    })


    e.waitUntil( Promise.all([cacheStatic, cacheInmutable]) );
});

self.addEventListener('activate', e => {

    const borrado = caches.keys()
    .then(keys => {
        keys.forEach(key => {
            if( key !== STATIC_CACHE && key.includes('static') ){
                caches.delete( key )
            }

            if( key !== DYNAMIC_CACHE && key.includes('dynamic') ){
                caches.delete( key )
            }
        });
    })

    e.waitUntil( borrado );
});

self.addEventListener( 'fetch', e => {
    let respuesta;

    if(e.request.url.includes('chrome-extension')) {
        respuesta = fetch(e.request).then(res => res)
    } else {
        respuesta = caches
            .match( e.request )
            .then( res => {

                if( res ) return res;
                else return fetch( e.request )

            });
    }
    e.respondWith( respuesta );
})

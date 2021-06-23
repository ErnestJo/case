

export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,
    //router: {
     // base: routerBase,
    //  routerNameSplitter: '/',
    //},
    
    env: {
      developmentUrl: process.env.BASE_URL || 'http://34.89.243.136/',
      releaseUrl: process.env.LIVE_URL || 'http://34.89.243.136/'
    },
  
    head: {
      titleTemplate: 'Police Case MS',
      title: process.env.npm_package_name || '',
      meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Provide management of cases in the Police stations'
      }
      ],
      link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat&display=swap"'
      }
      ]
    },
  
    loading: {
      color: '#333333',
      throttle: 0
    },
  
    //This indicator is imported from SpinKit project https://tobiasahlin.com/spinkit/
    loadingIndicator: {
      name: 'rotating-plane',
      color: ' #FFFFFF',
      background: '#021E34'
    },
  
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
      '@/assets/css/styles.css'
   
    ],
  
    plugins: [
      '@plugins/vuetify.js',
      '~/plugins/axios',
      '~/plugins/route',
      '~/plugins/vue-apexcharts.js'
   
    ],
  
    components: true,
  
    buildModules: [
      '@nuxtjs/vuetify',
    ],
  
    modules: [
      '@nuxtjs/axios',
      'nuxt-material-design-icons',
    ],
  
    axios: {},
  
    
  
    build: {
      /*
       ** You can extend webpack config here
       */
      publicPath: process.env.NODE_ENV !== 'dev' ? '/assets/' : '',
      extend(config, ctx) { },
      postcss: {
        preset: {
          features: {
            customProperties: false
          }
        }
      }
    },
    pwa: {
      manifest: {
        name: 'Kopasmart',
        lang: 'en'
      },
      meta: {
        /* meta options */
      },
      icon: {
        iconSrc: '/static/icon.png'
      }
    },
    server: {
      port: 3000, // default: 3000
      host: '127.0.0.1', // default: localhost
    },
  }
export default {
  mode: 'universal',
  head: {
    title: 'Cabinet IT — Conseil, Intégration & Formation · Lomé, Togo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Cabinet IT accompagne les entreprises de Lomé dans leur transformation numérique — conseil stratégique, intégration de solutions IT et formations professionnelles certifiantes.' }
    ],
    link: [
      { rel: "shortcut icon", type: "image/x-icon", href: "img/logo/favicon.ico" },
      { rel: "stylesheet", href: "css/bootstrap.min.css" },
      { rel: "stylesheet", href: "css/owl.carousel.css" },
      { rel: "stylesheet", href: "css/owl.transitions.css" },
      { rel: "stylesheet", href: "css/animate.css" },
      { rel: "stylesheet", href: "css/meanmenu.min.css" },
      { rel: "stylesheet", href: "css/font-awesome.min.css" },
      { rel: "stylesheet", href: "css/themify-icons.css" },
      { rel: "stylesheet", href: "css/flaticon.css" },
      { rel: "stylesheet", href: "css/venobox.css" },
      { rel: "stylesheet", href: "css/magnific.min.css" },
      { rel: "stylesheet", href: "css/style.css" },
      { rel: "stylesheet", href: "css/responsive.css" }
    ],
    script: [
      { src: "js/vendor/jquery-1.12.4.min.js" },
      { src: "js/bootstrap.min.js" },
      { src: "js/owl.carousel.min.js" },
      { src: "js/jquery.counterup.min.js" },
      { src: "js/waypoints.js" },
      { src: "js/magnific.min.js" },
      { src: "js/wow.min.js" },
      { src: "js/venobox.min.js" },
      { src: "js/jquery.meanmenu.js" },
      { src: "js/form-validator.min.js" },
      { src: "js/plugins.js" }
    ]
  },
  loading: { color: '#fff' },
  css: [],
  plugins: [],
  buildModules: [],
  modules: [],
  build: {
    extend(config, ctx) {}
  }
}

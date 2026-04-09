<template>
  <header class="header-one">
    <div class="topbar-area fix hidden-xs">
      <div class="container">
        <div class="row">
          <div class="col-md-9 col-sm-9">
            <div class="topbar-left">
              <ul>
                <li><a href="mailto:contact@cabinet-it.tg"><i class="fa fa-envelope"></i> contact@cabinet-it.tg</a></li>
                <li><a href="tel:+22890000000"><i class="fa fa-phone-square"></i> +228 90 00 00 00</a></li>
                <li><a href="#"><i class="fa fa-clock-o"></i> Lun - Ven : 8h00 - 18h00</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 col-sm-3">
            <div class="top-social">
              <ul>
                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-whatsapp"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="sticker" class="header-area hidden-xs">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-3">
            <div class="logo">
              <nuxt-link class="navbar-brand page-scroll black-logo" to="/">
                <logosvg />
              </nuxt-link>
            </div>
          </div>
          <div class="col-md-9 col-sm-9">
            <div class="header-right-link">
              <nuxt-link class="s-menu" to="/contact">Devis</nuxt-link>
            </div>
            <nav class="navbar navbar-default">
              <div class="collapse navbar-collapse" id="navbar-example">
                <div class="main-menu">
                  <ul class="nav navbar-nav navbar-right">
                    <li><nuxt-link to="/">Accueil</nuxt-link></li>
                    <li>
                      <a class="pages" href="#">Services</a>
                      <ul class="sub-menu">
                        <li><nuxt-link to="/services">Nos Services</nuxt-link></li>
                        <li><nuxt-link to="/service-details">Détail d'un service</nuxt-link></li>
                      </ul>
                    </li>
                    <li>
                      <a class="pages" href="#">Formations</a>
                      <ul class="sub-menu">
                        <li><nuxt-link to="/services-2">Nos Formations</nuxt-link></li>
                      </ul>
                    </li>
                    <li>
                      <a class="pages" href="#">À propos</a>
                      <ul class="sub-menu">
                        <li><nuxt-link to="/about">Qui sommes-nous</nuxt-link></li>
                        <li><nuxt-link to="/team">Notre équipe</nuxt-link></li>
                        <li><nuxt-link to="/review">Témoignages</nuxt-link></li>
                      </ul>
                    </li>
                    <li><nuxt-link to="/faq">FAQ</nuxt-link></li>
                    <li><nuxt-link to="/contact">Contact</nuxt-link></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div class="mobile-menu-area hidden-lg hidden-md hidden-sm">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="mobile-menu">
              <div class="logo">
                <nuxt-link to="/"><img src="/img/logo/logo.png" alt="Cabinet IT" /></nuxt-link>
              </div>
              <nav id="dropdown">
                <ul>
                  <li><nuxt-link to="/">Accueil</nuxt-link></li>
                  <li>
                    <a class="pages" href="#">Services</a>
                    <ul class="sub-menu">
                      <li><nuxt-link to="/services">Nos Services</nuxt-link></li>
                      <li><nuxt-link to="/service-details">Détail d'un service</nuxt-link></li>
                    </ul>
                  </li>
                  <li>
                    <a class="pages" href="#">Formations</a>
                    <ul class="sub-menu">
                      <li><nuxt-link to="/services-2">Nos Formations</nuxt-link></li>
                    </ul>
                  </li>
                  <li>
                    <a class="pages" href="#">À propos</a>
                    <ul class="sub-menu">
                      <li><nuxt-link to="/about">Qui sommes-nous</nuxt-link></li>
                      <li><nuxt-link to="/team">Notre équipe</nuxt-link></li>
                      <li><nuxt-link to="/review">Témoignages</nuxt-link></li>
                    </ul>
                  </li>
                  <li><nuxt-link to="/faq">FAQ</nuxt-link></li>
                  <li><nuxt-link to="/contact">Contact</nuxt-link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import logosvg  from '../commun/logosvg.vue';
export default {
  name: "Header",
  components: {
    logosvg
  },
  mounted() {
    var windows = $(window);
    var sticky = $("#sticker");
    windows.on("scroll", function () {
      var scroll = windows.scrollTop();
      if (scroll < 300) { sticky.removeClass("stick"); }
      else { sticky.addClass("stick"); }
    });
    var mean_menu = $("nav#dropdown");
    mean_menu.meanmenu();
  },
};
</script>
<style scoped></style>

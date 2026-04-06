<template>
  <footer class="footer1">
    <div class="footer-area">
      <div class="container">
        <div class="row">
          <div class="col-md-5 col-sm-5 col-xs-12">
            <div class="footer-content logo-footer">
              <div class="footer-head">
                <div class="footer-logo">
                  <nuxt-link to="/"><logosvg /></nuxt-link>
                </div>
                <p>Cabinet IT accompagne les entreprises et organisations de Lomé dans leur transformation numérique — du conseil stratégique à la formation de vos équipes.</p>
                <div class="subs-feilds">
                  <div class="suscribe-input">
                    <input type="email" class="email form-control width-80" placeholder="Votre email" />
                    <button type="submit" class="add-btn">S'abonner</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-3 col-xs-12">
            <div class="footer-content">
              <div class="footer-head">
                <h4>Nos Services</h4>
                <ul class="footer-list">
                  <li><nuxt-link to="/services">Audit & Conseil IT</nuxt-link></li>
                  <li><nuxt-link to="/services">Cloud & Infrastructure</nuxt-link></li>
                  <li><nuxt-link to="/services">Cybersécurité</nuxt-link></li>
                  <li><nuxt-link to="/services">Développement sur mesure</nuxt-link></li>
                  <li><nuxt-link to="/services">Data & Business Intelligence</nuxt-link></li>
                  <li><nuxt-link to="/services">Support & Maintenance</nuxt-link></li>
                </ul>
                <ul class="footer-list hidden-sm">
                  <li><nuxt-link to="/services-2">Cloud AWS / Azure</nuxt-link></li>
                  <li><nuxt-link to="/services-2">Cybersécurité</nuxt-link></li>
                  <li><nuxt-link to="/services-2">Data Science & BI</nuxt-link></li>
                  <li><nuxt-link to="/services-2">DevOps & CI/CD</nuxt-link></li>
                  <li><nuxt-link to="/services-2">Gestion de projet IT</nuxt-link></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-4 col-xs-12">
            <div class="footer-content last-content">
              <div class="footer-head">
                <h4>Contact</h4>
                <div class="footer-contacts">
                  <p><span>Adresse :</span> Lomé, Togo</p>
                  <p><span>Tél :</span> +228 90 00 00 00</p>
                  <p><span>Email :</span> contact@cabinet-it.tg</p>
                  <p><span>Horaires :</span> Lun - Ven : 8h - 18h</p>
                </div>
                <div class="footer-icons">
                  <ul>
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-whatsapp"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-area-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="copyright">
              <p>Copyright © 2025 <a href="#">Cabinet IT</a> — Tous droits réservés. Lomé, Togo 🇹🇬</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import logosvg  from '../commun/logosvg.vue';
export default {
  name: "Footer",
  components: {
    logosvg
  }
 }
</script>
<style scoped></style>

<template>
  <div class="about-area about-2 fix">
    <div class="container-full">
      <div class="row">
        <div class="col-md-5 col-sm-4 col-xs-12">
          <div class="about-image">
            <div class="video-content">
              <a href="https://www.youtube.com/watch?v=O33uuBh6nXA" class="video-play vid-zone">
                <i class="fa fa-play"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-7 col-sm-8 col-xs-12">
          <div class="support-all about-content">
            <div class="section-headline right-headline white-headline">
              <h3>Des experts IT <span class="color">à votre service</span> pour sécuriser et faire évoluer votre système</h3>
              <p>Depuis 2017, Cabinet IT accompagne les entreprises et organisations de Lomé dans leur transformation numérique. Nos consultants certifiés interviennent sur l'ensemble de votre chaîne SI — du conseil stratégique à la formation de vos équipes — avec une approche pragmatique adaptée aux réalités africaines.</p>
            </div>
            <div class="about-company">
              <div class="single-about">
                <span class="about-text">Équipe certifiée AWS & Microsoft</span>
                <span class="about-text">Paiements sécurisés</span>
                <span class="about-text">Support réactif</span>
              </div>
              <div class="single-about">
                <span class="about-text">Objectifs mesurables</span>
                <span class="about-text">Présence en Afrique de l'Ouest</span>
                <span class="about-text">Expertise métier</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
  mounted() {
    $('.video-play').magnificPopup({ type: 'iframe' });
  }
}
</script>
<style scoped></style>

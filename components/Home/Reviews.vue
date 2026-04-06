<template>
  <div class="reviews-area area-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="section-headline text-center">
            <h3>Ils nous font confiance</h3>
            <p>Des retours concrets de nos clients à Lomé et partout en Afrique de l'Ouest.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="Reviews-content">
            <div class="testimonial-carousel item-indicator">
              <div class="single-testi">
                <div class="testi-text"><div class="clients-text">
                  <div class="client-rating">
                    <a href="#"><i class="ti-star"></i></a><a href="#"><i class="ti-star"></i></a><a href="#"><i class="ti-star"></i></a><a href="#"><i class="ti-star"></i></a><a href="#"><i class="ti-star"></i></a>
                  </div>
                  <p>Cabinet IT a transformé notre infrastructure en moins de 3 mois. La migration cloud s'est déroulée sans interruption de service et nos charges informatiques ont baissé de 30 %. Un accompagnement vraiment sérieux et professionnel.</p>
                  <div class="testi-img"><div class="guest-details">
                    <h4>Kofi Mensah</h4>
                    <span class="guest-rev">DSI — Banque commerciale, Lomé</span>
                  </div></div>
                </div></div>
              </div>
              <div class="single-testi">
                <div class="testi-text"><div class="clients-text">
                  <div class="client-rating">
                    <a href="#"><i class="ti-star"></i></a><a href="#"><i class="ti-star"></i></a><a href="#"><i class="ti-star"></i></a><a href="#"><i class="ti-star"></i></a><a href="#"><i class="ti-star"></i></a>
                  </div>
                  <p>La formation Data Science a été un vrai tournant pour notre équipe. Les formateurs maîtrisent leur sujet et les cas pratiques sont directement tirés de notre réalité terrain. Je recommande sans hésiter.</p>
                  <div class="testi-img"><div class="guest-details">
                    <h4>Aminata Traoré</h4>
                    <span class="guest-rev">Directrice Marketing — Groupe de distribution</span>
                  </div></div>
                </div></div>
              </div>
              <div class="single-testi">
                <div class="testi-text"><div class="clients-text">
                  <div class="client-rating">
                    <a href="#"><i class="ti-star"></i></a><a href="#"><i class="ti-star"></i></a><a href="#"><i class="ti-star"></i></a><a href="#"><i class="ti-star"></i></a><a href="#"><i class="ti-star"></i></a>
                  </div>
                  <p>Après l'audit de cybersécurité, nous avons pu corriger des vulnérabilités critiques que nous ne soupçonnions pas. Le rapport était clair, priorisé et directement actionnable par nos équipes.</p>
                  <div class="testi-img"><div class="guest-details">
                    <h4>Marc Akakpo</h4>
                    <span class="guest-rev">Directeur Général — Cabinet de conseil, Lomé</span>
                  </div></div>
                </div></div>
              </div>
              <div class="single-testi">
                <div class="testi-text"><div class="clients-text">
                  <div class="client-rating">
                    <a href="#"><i class="ti-star"></i></a><a href="#"><i class="ti-star"></i></a><a href="#"><i class="ti-star"></i></a><a href="#"><i class="ti-star"></i></a><a href="#"><i class="ti-star"></i></a>
                  </div>
                  <p>Le support technique de Cabinet IT est réactif et compétent. Nos incidents sont pris en charge rapidement et nos équipes peuvent se concentrer sur leur cœur de métier sans stress IT.</p>
                  <div class="testi-img"><div class="guest-details">
                    <h4>Isabelle Koffi</h4>
                    <span class="guest-rev">Responsable SI — ONG internationale, Lomé</span>
                  </div></div>
                </div></div>
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
  name: "Reviews",
  mounted() {
    $('.testimonial-carousel').owlCarousel({
      loop: true, nav: false, margin: 15, center: true, dots: true,
      autoplay: true, autoplayTimeout: 5000,
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 1000: { items: 3 } }
    });
  }
}
</script>
<style scoped></style>

<template>
  <div class="service-area bg-color area-padding-2">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="section-headline text-center">
            <h3>Nos Services IT</h3>
            <p>Des prestations adaptées à la réalité des entreprises en Afrique de l'Ouest — pragmatiques, efficaces et orientées résultats.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="all-services">
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="single-service wow fadeInUp" data-wow-delay="0.3s">
              <div class="service-icon"><span class="flaticon-052-project-plan"></span></div>
              <div class="service-inner"><div class="service-content">
                <h4>Audit & Conseil IT</h4>
                <p>Évaluation de votre maturité numérique, identification des risques et élaboration de feuilles de route stratégiques adaptées à votre organisation.</p>
                <nuxt-link class="service-btn" to="/services"><i class="ti-arrow-right"></i></nuxt-link>
              </div></div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="single-service wow fadeInUp" data-wow-delay="0.5s">
              <div class="service-icon"><span class="flaticon-041-network"></span></div>
              <div class="service-inner"><div class="service-content">
                <h4>Cloud & Infrastructure</h4>
                <p>Migration, déploiement et optimisation d'infrastructures cloud hybrides (AWS, Azure) pour fiabiliser vos systèmes et réduire vos coûts opérationnels.</p>
                <nuxt-link class="service-btn" to="/services"><i class="ti-arrow-right"></i></nuxt-link>
              </div></div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="single-service wow fadeInUp" data-wow-delay="0.7s">
              <div class="service-icon"><span class="flaticon-057-statistics"></span></div>
              <div class="service-inner"><div class="service-content">
                <h4>Cybersécurité</h4>
                <p>Protection de votre patrimoine numérique : tests d'intrusion, audit ISO 27001, mise en place de politiques de sécurité et sensibilisation des équipes.</p>
                <nuxt-link class="service-btn" to="/services"><i class="ti-arrow-right"></i></nuxt-link>
              </div></div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="single-service wow fadeInUp" data-wow-delay="0.3s">
              <div class="service-icon"><span class="flaticon-012-business"></span></div>
              <div class="service-inner"><div class="service-content">
                <h4>Développement sur mesure</h4>
                <p>Conception et développement d'applications web et mobiles qui automatisent vos processus métier et améliorent l'expérience de vos utilisateurs.</p>
                <nuxt-link class="service-btn" to="/services"><i class="ti-arrow-right"></i></nuxt-link>
              </div></div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="single-service wow fadeInUp" data-wow-delay="0.5s">
              <div class="service-icon"><span class="flaticon-031-financial"></span></div>
              <div class="service-inner"><div class="service-content">
                <h4>Data & Business Intelligence</h4>
                <p>Transformez vos données en décisions grâce à des tableaux de bord temps réel, des entrepôts de données et des modèles d'analyse prédictive.</p>
                <nuxt-link class="service-btn" to="/services"><i class="ti-arrow-right"></i></nuxt-link>
              </div></div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="single-service wow fadeInUp" data-wow-delay="0.7s">
              <div class="service-icon"><span class="flaticon-002-analysis"></span></div>
              <div class="service-inner"><div class="service-content">
                <h4>Support & Maintenance</h4>
                <p>Assistance technique N1/N2/N3 et tierce maintenance applicative pour garantir la continuité de vos systèmes avec des SLA adaptés.</p>
                <nuxt-link class="service-btn" to="/services"><i class="ti-arrow-right"></i></nuxt-link>
              </div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default { name: "Service" }
</script>
<style scoped></style>

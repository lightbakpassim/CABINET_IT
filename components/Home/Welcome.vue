<template>
  <div class="welcome-area fix area-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="all-wel-services">
            <div class="well-services wow fadeInUp" data-wow-delay="0.3s">
              <div class="services-img">
                <a class="big-icon" href="#"><i class="flaticon-052-project-plan"></i></a>
              </div>
              <div class="main-wel">
                <div class="wel-content">
                  <h4>Expertise IT</h4>
                  <p>Des consultants certifiés qui maîtrisent les technologies actuelles pour accompagner votre croissance numérique.</p>
                  <nuxt-link to="/services">En savoir plus</nuxt-link>
                </div>
              </div>
            </div>
            <div class="well-services wow fadeInUp" data-wow-delay="0.5s">
              <div class="services-img">
                <a class="big-icon" href="#"><i class="flaticon-002-analysis"></i></a>
              </div>
              <div class="main-wel">
                <div class="wel-content">
                  <h4>Formations certifiantes</h4>
                  <p>Des parcours professionnels animés par des experts terrain pour monter en compétences rapidement.</p>
                  <nuxt-link to="/services-2">En savoir plus</nuxt-link>
                </div>
              </div>
            </div>
            <div class="well-services wow fadeInUp" data-wow-delay="0.7s">
              <div class="services-img">
                <a class="big-icon" href="#"><i class="flaticon-060-team-work"></i></a>
              </div>
              <div class="main-wel">
                <div class="wel-content">
                  <h4>Accompagnement local</h4>
                  <p>Basé à Lomé, nous comprenons les réalités des entreprises africaines et proposons des solutions adaptées.</p>
                  <nuxt-link to="/about">En savoir plus</nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default { name: "Welcome" }
</script>
<style scoped></style>

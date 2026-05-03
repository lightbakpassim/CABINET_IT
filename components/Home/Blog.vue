<template>
  <div class="blog-area fix bg-color area-padding-2">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="section-headline text-center">
            <h3>Actualités & Conseils IT</h3>
            <p>Restez informés des dernières tendances technologiques et des bonnes pratiques IT pour votre entreprise.</p>
          </div>
        </div>
      </div>

      <!-- Rangée 1 -->
      <div class="row blog-row">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="single-blog">
            <div class="blog-image">
              <a class="image-scale" href="#"><img src="/img/blog/b1.jpg" alt="" /></a>
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span class="admin-type"><i class="fa fa-user"></i>Cabinet IT</span>
                <span class="date-type"><i class="fa fa-calendar"></i>15 Jan, 2025</span>
              </div>
              <a href="#"><h4>Comment sécuriser votre système d'information en 5 étapes</h4></a>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="single-blog">
            <div class="blog-image">
              <a class="image-scale" href="#"><img src="/img/blog/b2.jpg" alt="" /></a>
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span class="admin-type"><i class="fa fa-user"></i>Cabinet IT</span>
                <span class="date-type"><i class="fa fa-calendar"></i>02 Fév, 2025</span>
              </div>
              <a href="#"><h4>Migration cloud : les erreurs à éviter pour les PME africaines</h4></a>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="single-blog">
            <div class="blog-image">
              <a class="image-scale" href="#"><img src="/img/blog/b3.jpg" alt="" /></a>
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span class="admin-type"><i class="fa fa-user"></i>Cabinet IT</span>
                <span class="date-type"><i class="fa fa-calendar"></i>20 Mar, 2025</span>
              </div>
              <a href="#"><h4>Data Science : pourquoi vos données valent de l'or</h4></a>
            </div>
          </div>
        </div>
      </div>

      <!-- Rangée 2 -->
      <div class="row blog-row">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="single-blog">
            <div class="blog-image">
              <a class="image-scale" href="#"><img src="/img/blog/b4.jpg" alt="" /></a>
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span class="admin-type"><i class="fa fa-user"></i>Cabinet IT</span>
                <span class="date-type"><i class="fa fa-calendar"></i>10 Avr, 2025</span>
              </div>
              <a href="#"><h4>DevOps en pratique : réduire vos délais de livraison</h4></a>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="single-blog">
            <div class="blog-image">
              <a class="image-scale" href="#"><img src="/img/blog/b5.jpg" alt="" /></a>
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span class="admin-type"><i class="fa fa-user"></i>Cabinet IT</span>
                <span class="date-type"><i class="fa fa-calendar"></i>05 Mai, 2025</span>
              </div>
              <a href="#"><h4>Certification AWS : guide complet pour débuter</h4></a>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="single-blog">
            <div class="blog-image">
              <a class="image-scale" href="#"><img src="/img/blog/b6.jpg" alt="" /></a>
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span class="admin-type"><i class="fa fa-user"></i>Cabinet IT</span>
                <span class="date-type"><i class="fa fa-calendar"></i>18 Juin, 2025</span>
              </div>
              <a href="#"><h4>Gestion de projet IT : méthodes agiles adaptées à l'Afrique</h4></a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default { name: "Blog" }
</script>

<style scoped>
.blog-row {
  margin-bottom: 30px;
}

.single-blog {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.single-blog .blog-image {
  overflow: hidden;
}

.single-blog .blog-image img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
}
</style>

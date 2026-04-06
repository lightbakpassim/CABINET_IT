<template>
  <div class="project-area area-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="section-headline text-center">
            <h3>Nos réalisations</h3>
            <p>Quelques projets concrets menés avec nos clients en Afrique de l'Ouest.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="project-carousel">
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="single-awesome-project">
              <div class="awesome-img">
                <a href="#"><img src="/img/project/p1.jpg" alt="" /></a>
                <div class="add-actions text-center">
                  <a class="venobox" data-gall="myGallery" href="/img/project/p1.jpg"><i class="port-icon ti-zoom-in"></i></a>
                </div>
              </div>
              <div class="project-dec">
                <h4>Migration Cloud — Banque régionale</h4>
                <p>Migration complète vers AWS avec réduction des coûts infra de 35% et zéro interruption de service.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="single-awesome-project">
              <div class="awesome-img">
                <a href="#"><img src="/img/project/p2.jpg" alt="" /></a>
                <div class="add-actions text-center">
                  <a class="venobox" data-gall="myGallery" href="/img/project/p2.jpg"><i class="port-icon ti-zoom-in"></i></a>
                </div>
              </div>
              <div class="project-dec">
                <h4>Audit Cybersécurité — ONG internationale</h4>
                <p>Identification et correction de 12 vulnérabilités critiques, mise en conformité ISO 27001.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="single-awesome-project">
              <div class="awesome-img">
                <a href="#"><img src="/img/project/p3.jpg" alt="" /></a>
                <div class="add-actions text-center">
                  <a class="venobox" data-gall="myGallery" href="/img/project/p3.jpg"><i class="port-icon ti-zoom-in"></i></a>
                </div>
              </div>
              <div class="project-dec">
                <h4>Tableau de bord BI — Groupe de distribution</h4>
                <p>Développement d'un dashboard Power BI temps réel centralisant les données de 5 filiales.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="single-awesome-project">
              <div class="awesome-img">
                <a href="#"><img src="/img/project/p4.jpg" alt="" /></a>
                <div class="add-actions text-center">
                  <a class="venobox" data-gall="myGallery" href="/img/project/p4.jpg"><i class="port-icon ti-zoom-in"></i></a>
                </div>
              </div>
              <div class="project-dec">
                <h4>Application métier — Cabinet médical</h4>
                <p>Développement d'une solution web de gestion des patients, RDV et facturation.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="single-awesome-project">
              <div class="awesome-img">
                <a href="#"><img src="/img/project/p5.jpg" alt="" /></a>
                <div class="add-actions text-center">
                  <a class="venobox" data-gall="myGallery" href="/img/project/p5.jpg"><i class="port-icon ti-zoom-in"></i></a>
                </div>
              </div>
              <div class="project-dec">
                <h4>Formation DevOps — Équipe technique, Lomé</h4>
                <p>Formation de 12 développeurs aux pratiques CI/CD avec Docker, Kubernetes et GitLab.</p>
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
  name: "Project",
  mounted() {
    $(".project-carousel").owlCarousel({
      loop: true, nav: true, autoplay: false, dots: false,
      navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
      responsive: { 0: { items: 1 }, 700: { items: 2 }, 1000: { items: 3 } },
    });
  },
}
</script>
<style scoped></style>

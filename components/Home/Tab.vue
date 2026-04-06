<template>
  <div class="tab-area fix area-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="tab-menu">
            <ul class="nav nav-tabs" role="tablist">
              <li class="active"><a href="#p-view-1" role="tab" data-toggle="tab"><span class="cha-title">Audit & Conseil</span></a></li>
              <li><a href="#p-view-2" role="tab" data-toggle="tab"><span class="cha-title">Cloud & Infrastructure</span></a></li>
              <li><a href="#p-view-3" role="tab" data-toggle="tab"><span class="cha-title">Cybersécurité</span></a></li>
              <li><a href="#p-view-4" role="tab" data-toggle="tab"><span class="cha-title">Développement</span></a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="tab-content">
            <div class="tab-pane active" id="p-view-1">
              <div class="tab-inner"><div class="single-machine row">
                <div class="col-md-6 col-sm-6 col-xs-12"><div class="tabe-img"><img src="/img/services/s1.jpg" alt="" /></div></div>
                <div class="col-md-6 col-sm-6 col-xs-12"><div class="machine-text">
                  <h3>Audit & Conseil IT — éclairez vos décisions stratégiques</h3>
                  <p>Nous évaluons votre maturité numérique, identifions vos risques et construisons avec vous une feuille de route réaliste et priorisée selon vos contraintes et vos objectifs.</p>
                  <ul>
                    <li><a href="#">Audit de système d'information</a></li>
                    <li><a href="#">Schéma directeur IT</a></li>
                    <li><a href="#">Gouvernance et conformité (ITIL, ISO)</a></li>
                    <li><a href="#">Alignement stratégique métier / IT</a></li>
                  </ul>
                </div></div>
              </div></div>
            </div>
            <div class="tab-pane" id="p-view-2">
              <div class="tab-inner"><div class="single-machine row">
                <div class="col-md-6 col-sm-6 col-xs-12"><div class="tabe-img"><img src="/img/services/s2.jpg" alt="" /></div></div>
                <div class="col-md-6 col-sm-6 col-xs-12"><div class="machine-text">
                  <h3>Cloud & Infrastructure — fiabilisez vos systèmes</h3>
                  <p>Nous migrons, déployons et optimisons vos infrastructures cloud hybrides pour réduire vos coûts, améliorer la disponibilité de vos services et renforcer votre résilience.</p>
                  <ul>
                    <li><a href="#">Migration cloud AWS & Azure</a></li>
                    <li><a href="#">Virtualisation et containerisation</a></li>
                    <li><a href="#">Plan de reprise d'activité (PRA)</a></li>
                    <li><a href="#">Supervision et monitoring</a></li>
                  </ul>
                </div></div>
              </div></div>
            </div>
            <div class="tab-pane" id="p-view-3">
              <div class="tab-inner"><div class="single-machine row">
                <div class="col-md-6 col-sm-6 col-xs-12"><div class="tabe-img"><img src="/img/services/s3.jpg" alt="" /></div></div>
                <div class="col-md-6 col-sm-6 col-xs-12"><div class="machine-text">
                  <h3>Cybersécurité — protégez votre patrimoine numérique</h3>
                  <p>Tests d'intrusion, audit de conformité ISO 27001, mise en place de politiques de sécurité et sensibilisation de vos équipes aux bonnes pratiques cyber.</p>
                  <ul>
                    <li><a href="#">Tests de pénétration (Pentest)</a></li>
                    <li><a href="#">Audit de conformité ISO 27001</a></li>
                    <li><a href="#">Gestion des identités (IAM)</a></li>
                    <li><a href="#">Sensibilisation et formation sécurité</a></li>
                  </ul>
                </div></div>
              </div></div>
            </div>
            <div class="tab-pane" id="p-view-4">
              <div class="tab-inner"><div class="single-machine row">
                <div class="col-md-6 col-sm-6 col-xs-12"><div class="tabe-img"><img src="/img/services/s4.jpg" alt="" /></div></div>
                <div class="col-md-6 col-sm-6 col-xs-12"><div class="machine-text">
                  <h3>Développement sur mesure — des solutions qui vous ressemblent</h3>
                  <p>Conception et développement d'applications web et mobiles qui automatisent vos processus métier et s'intègrent à votre SI existant.</p>
                  <ul>
                    <li><a href="#">Applications web & mobiles</a></li>
                    <li><a href="#">API et intégration SI</a></li>
                    <li><a href="#">ERP / CRM sur mesure</a></li>
                    <li><a href="#">Tableaux de bord & reporting</a></li>
                  </ul>
                </div></div>
              </div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default { name: "Tab" }
</script>
<style scoped></style>

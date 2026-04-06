<template>
  <div class="quote-area bg-color area-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <div class="row">
            <div class="col-md-5 col-sm-4 col-xs-12">
              <div class="sub-head white-headline">
                <h3>Demandez un <span class="color">rappel gratuit</span></h3>
                <p>Laissez-nous vos coordonnées, notre équipe vous contacte sous 24 heures pour discuter de votre projet IT sans engagement.</p>
              </div>
            </div>
            <div class="col-md-7 col-sm-8 col-xs-12">
              <div class="row">
                <form id="contactForm" method="POST" action="#" class="contact-form">
                  <div class="col-md-6 col-sm-6 col-xs-12">
                    <input type="text" id="name" class="form-control" placeholder="Votre nom" required />
                    <div class="help-block with-errors"></div>
                    <input type="email" class="email form-control" id="email" placeholder="Votre email" required />
                    <div class="help-block with-errors"></div>
                    <input type="text" id="msg_subject" class="form-control last-part" placeholder="Sujet" required />
                    <div class="help-block with-errors last-part"></div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-xs-12">
                    <textarea id="message" rows="7" placeholder="Décrivez votre besoin..." class="form-control" required></textarea>
                    <div class="help-block with-errors"></div>
                    <button type="submit" id="submit" class="quote-btn">Envoyer</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default { name: "Quote" }
</script>
<style scoped></style>

<template>
  <div class="contact-area area-padding">
    <div class="container">
      <div class="row">
        <div class="contact-inner">
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="contact-icon text-center">
              <div class="single-icon">
                <i class="ti-mobile"></i>
                <p>Tél : +228 90 00 00 00<br /><span>Lun - Ven : 8h00 - 18h00</span></p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="contact-icon text-center">
              <div class="single-icon">
                <i class="ti-email"></i>
                <p>Email : contact@cabinet-it.tg<br /><span>Web : www.cabinet-it.tg</span></p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="contact-icon text-center">
              <div class="single-icon">
                <i class="ti-location-pin"></i>
                <p>Adresse : Lomé, Togo<br /><span>Sur rendez-vous uniquement</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-sm-6 col-xs-12">
          <div class="map-area">
            <iframe width="550" height="334"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126821.85985667453!2d1.1426792!3d6.1724832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e1c113185419%3A0x3223abf4f27e4d1b!2sLom%C3%A9%2C%20Togo!5e0!3m2!1sfr!2stg!4v1680000000000!5m2!1sfr!2stg"
              allowfullscreen></iframe>
          </div>
        </div>
        <div class="col-md-6 col-sm-6 col-xs-12">
          <div class="contact-form">
            <div class="row">
              <form id="contactForm" method="POST" action="#" class="contact-form">
                <div class="col-md-6 col-sm-6 col-xs-12">
                  <input type="text" id="name" class="form-control" placeholder="Votre nom" required />
                  <div class="help-block with-errors"></div>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12">
                  <input type="email" class="email form-control" id="email" placeholder="Votre email" required />
                  <div class="help-block with-errors"></div>
                </div>
                <div class="col-md-12 col-sm-12 col-xs-12">
                  <input type="text" id="msg_subject" class="form-control" placeholder="Sujet" required />
                  <div class="help-block with-errors"></div>
                </div>
                <div class="col-md-12 col-sm-12 col-xs-12">
                  <textarea id="message" rows="7" placeholder="Décrivez votre besoin..." class="form-control" required></textarea>
                  <div class="help-block with-errors"></div>
                </div>
                <div class="col-md-12 col-sm-12 col-xs-12 text-center">
                  <button type="submit" id="submit" class="add-btn contact-btn">Envoyer le message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default { name: "ContactDetails" }
</script>
<style scoped></style>

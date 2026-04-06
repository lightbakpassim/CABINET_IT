<template>
  <div>
    <PageHeader />
    <PageTitle pageTitle="Détail d'un service" />
    <ServiceDetails />
    <Footer />
  </div>
</template>
<script>
import PageHeader from "~/components/Page/PageHeader";
import PageTitle from "~/components/Page/PageTitle";
import ServiceDetails from "~/components/Page/ServiceDetails";
import Footer from "~/components/Home/Footer";
export default {
  name: "service-details",
  components: { Footer, ServiceDetails, PageTitle, PageHeader },
  head() { return { title: "Cabinet IT | Détail d'un service" }; },
};
</script>
<style scoped></style>

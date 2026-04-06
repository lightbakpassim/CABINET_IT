<template>
  <div>
    <PageHeader />
    <PageTitle pageTitle="Formations Professionnelles" />
    <Services />
    <Footer />
  </div>
</template>
<script>
import PageHeader from "~/components/Page/PageHeader";
import PageTitle from "~/components/Page/PageTitle";
import Services from "~/components/Page/Services";
import Footer from "~/components/Home/Footer";
export default {
  name: "formations",
  components: { Footer, Services, PageTitle, PageHeader },
  head() { return { title: "Cabinet IT | Formations Professionnelles" }; },
};
</script>
<style scoped></style>

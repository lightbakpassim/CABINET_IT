<template>
  <div>
    <PageHeader />
    <PageTitle pageTitle="Qui sommes-nous" />
    <OverView />
    <Footer />
  </div>
</template>
<script>
import PageHeader from "~/components/Page/PageHeader";
import PageTitle from "~/components/Page/PageTitle";
import OverView from "~/components/Page/OverView";
import Footer from "~/components/Home/Footer";
export default {
  name: "about",
  components: { Footer, OverView, PageTitle, PageHeader },
  head() { return { title: "Cabinet IT | À propos" }; },
};
</script>
<style scoped></style>

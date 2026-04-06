<template>
  <div>
    <PageHeader />
    <PageTitle pageTitle="Témoignages" />
    <Reviews />
    <Footer />
  </div>
</template>
<script>
import PageHeader from "~/components/Page/PageHeader";
import PageTitle from "~/components/Page/PageTitle";
import Reviews from "~/components/Page/Review";
import Footer from "~/components/Home/Footer";
export default {
  name: "review",
  components: { Footer, Reviews, PageTitle, PageHeader },
  head() { return { title: "Cabinet IT | Témoignages" }; },
};
</script>
<style scoped></style>

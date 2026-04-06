<template>
  <div>
    <PageHeader />
    <PageTitle pageTitle="Notre équipe" />
    <OurTeam />
    <Footer />
  </div>
</template>
<script>
import PageHeader from "~/components/Page/PageHeader";
import PageTitle from "~/components/Page/PageTitle";
import OurTeam from "~/components/Page/OurTeam";
import Footer from "~/components/Home/Footer";
export default {
  name: "team",
  components: { Footer, OurTeam, PageTitle, PageHeader },
  head() { return { title: "Cabinet IT | Notre équipe" }; },
};
</script>
<style scoped></style>

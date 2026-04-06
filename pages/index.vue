<template>
  <div>
    <Header />
    <Slider />
    <Welcome />
    <About />
    <Service />
    <Counter />
    <Team />
    <Project />
    <Quote />
    <Tab />
    <Blog />
    <Reviews />
    <Footer />
  </div>
</template>
<script>
import Header from "~/components/Home/Header";
import Slider from "~/components/Home/Slider";
import Welcome from "~/components/Home/Welcome";
import About from "~/components/Home/About";
import Service from "~/components/Home/Service";
import Counter from "~/components/Home/Counter";
import Team from "~/components/Home/Team";
import Project from "~/components/Home/Project";
import Quote from "~/components/Home/Quote";
import Tab from "~/components/Home/Tab";
import Blog from "~/components/Home/Blog";
import Reviews from "~/components/Home/Reviews";
import Footer from "~/components/Home/Footer";
export default {
  components: { Header, Slider, Welcome, About, Service, Counter, Team, Project, Quote, Tab, Blog, Reviews, Footer },
  head() { return { title: "Cabinet IT — Conseil, Intégration & Formation · Lomé, Togo" }; },
};
</script>
<style></style>

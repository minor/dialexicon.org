import Head from "next/head";
import Image from "next/image";

import Landing from "../components/Landing";
import FeaturesHome from "../components/Features";
import FeaturesBlocks from "../components/FeaturesBlocks";
import Podcast from "../components/Podcast";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Landing />
      <FeaturesHome />
      <Podcast />
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
    </Layout>
  );
}

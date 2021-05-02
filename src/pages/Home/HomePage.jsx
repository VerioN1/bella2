import React from "react";
import Card from "../../components/NavBar/sections/Card";
import LandingLayout from "../../layouts/NavBarLayout";
import { Box, SimpleGrid } from "@chakra-ui/react"
import {config} from '../../utils/particelsConfig'
import Particles from 'react-particles-js'
import wave from '../../assets/pawel-czerwinski-eybM9n4yrpE-unsplash.jpg'


export default function HomePage() {
  return (
    <Box bg="#101011">
       <Particles className="particle_landing"
    params={config} />
     <LandingLayout className="landingPage">
     <SimpleGrid columns={[2, 2, 3, 4]} spacing="6rem">
      <Card IMAGE={wave} title="Exodus" team="spotify" />
      <Card IMAGE={wave} title="Exodus" team="spotify" />
      <Card IMAGE={wave} title="Exodus" team="spotify" />
      <Card IMAGE={wave} title="Exodus" team="spotify" />
      <Card IMAGE={wave} title="Exodus" team="spotify" />
      <Card IMAGE={wave} title="Exodus" team="spotify" />
      <Card IMAGE={wave} title="Exodus" team="spotify" />
      <Card IMAGE={wave} title="Exodus" team="spotify" />
      </SimpleGrid>
    </LandingLayout>
    </Box>
  );
}

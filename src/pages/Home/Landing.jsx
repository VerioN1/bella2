import React from "react";
import Card from "../../components/NavBar/sections/Card";
import LandingLayout from "../../components/NavBar/layouts/LandingLayout";
import { Box } from "@chakra-ui/react"
import {config} from '../../utils/particelsConfig'
import Particles from 'react-particles-js'
export default function Landing() {
  return (
    <Box bg="#101011">
       <Particles className="particle_landing"
    params={config} />
     <LandingLayout className="landingPage">
   
      <Card/>
    </LandingLayout>
    </Box>
  );
}

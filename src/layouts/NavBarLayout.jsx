import React from "react";
import { Flex } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

export default function LandingLayout(props) {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "2500px" }}
      m="0 auto"
      {...props}
    >
      <NavBar />
      {props.children}
    </Flex>
  );
}

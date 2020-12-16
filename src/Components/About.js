import React, { Fragment} from 'react';
import logo from "./img/logo3.png"
import {Box,Flex, useColorMode, Text, Button, Link as ChakraLink, Container, Heading} from "@chakra-ui/react";
import MenuDrawer from './button/drawer'
import ThemeToggle from './button/Colormode'
import {Link} from "react-router-dom"


const About = () =>{
  const { colorMode } = useColorMode();
    return(
      <Fragment>
        {/* Navigation Bar */}
          <Box
          as="header"
          width="100%"
          boxShadow="0px 4px 14px 1px rgba(0, 0, 0, 0.15);"
          borderRadius="12px"
          backgroundColor = {colorMode === "light" ? "gray.100" : "gray.700"}
          >
            <Flex align="center" maxWidth={800} margin="0 auto" padding={4}>
                <Box>
                    <img alt="logo" width="200px" src={logo}></img>
                </Box>
                <Box marginLeft="auto">
                  <MenuDrawer />
                  <ThemeToggle />
                </Box>
            </Flex>
          </Box>

          <Container>
            <Box marginTop="20px">
                <Heading> About </Heading>
                <Box  fontWeight="bold" marginTop="15px">
                  <Text fontWeight="bold" fontSize="2xl">
                    Created By:
                  </Text>
                  <Text>
                      <ChakraLink color="#2C7AD7" href="https://github.com/kejauhan">Mohamad Farhan - 00000037928</ChakraLink>
                  </Text>
                  <Text>
                      <ChakraLink color="#2C7AD7" href="https://github.com/tjaptjien1498/">Muhammad Rizky Febrian Syamsurie - 00000016443</ChakraLink>
                  </Text>
                  <Text>
                      <ChakraLink color="#2C7AD7" href="https://github.com/35891">Dharma Hutama Husein - 00000035891</ChakraLink>
                  </Text>


                </Box>

                <Box fontWeight="bold" marginTop="15px">
                  <Text fontSize="2xl">Powered By:</Text>
                      <ChakraLink color="#2C7AD7" href="https://www.edamam.com/">Edamam API</ChakraLink>
                </Box>

                <Box fontWeight="bold" marginTop="15px">
                  <Text fontSize="2xl">Logo By:</Text>
                  <Text>
                    <ChakraLink color="#2C7AD7" href="http://www.freepik.com">Designed by roserodionova / Freepik </ChakraLink>
                  </Text>
                  <Text>
                    <ChakraLink color="#2C7AD7" href="http://www.freepik.com">Designed by Freepik</ChakraLink>
                  </Text>

                </Box>

                <Box fontWeight="bold" marginTop="15px">
                  <Text fontWeight="bold" fontSize="2xl">Resources</Text>
                  <Text>
                     <ChakraLink color="#2C7AD7" href="youtube.com">Youtube</ChakraLink>
                  </Text>
                  <Text>
                    <ChakraLink color="#2C7AD7" href="w3schools.com">W3Schools</ChakraLink>
                  </Text>

                </Box>

                <Box>
                  <Text marginTop="25px" fontSize="xl">
                    Made Using <ChakraLink fontWeight="bold" color="#2C7AD7" href="https://reactjs.org/docs/getting-started.html">ReactJS</ChakraLink> and <ChakraLink fontWeight="bold" color="#2C7AD7" href="https://chakra-ui.com/">Chakra UI</ChakraLink>
                  </Text>
                </Box>
                <Link to="/">
                  <Button colorScheme="red" isFullWidth>
                    Back
                  </Button>
                </Link>
            </Box>
          </Container>

          </Fragment>
    )
}

export default About;
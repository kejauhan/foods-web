import React, { Fragment } from 'react';
import logo from "./img/logo3.png"
import {Box,Flex, SimpleGrid, useColorMode} from "@chakra-ui/react";
import MenuDrawer from './button/drawer'
import ThemeToggle from './button/Colormode'
import Search from './Search'


const Header = () =>{
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

          <Box>
            <SimpleGrid>
              <Search />
            </SimpleGrid>
          </Box>
        </Fragment>

    )
}
export default Header;
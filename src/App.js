import React from 'react';
import Header from "./Components/home"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './Components/About'
import {Box, useColorMode} from "@chakra-ui/react"


const App = () =>{
  const { colorMode } = useColorMode();
  return(
      <Router>
      <Switch>
        <Route path="/" exact component={Header} />
        <Route path="/about" component={About} />
      </Switch>
        <Box  
        as="footer"
        position="relative"
        textAlign="center"
        marginTop="200px"
        boxShadow="md"
        padding="30px"
        backgroundColor = {colorMode === "light" ? "gray.100" : "gray.700"}
        fontWeight="bold" 
        color="#515357"
        >
        <Link to="/about">
           Rambutan 2020 - About
        </Link>
        </Box>
      </Router>

  )
};
export default App;
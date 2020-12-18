/* eslint-disable no-lone-blocks */
import { 
    Container, 
    Flex, 
    Input, 
    Stack, 
    Heading, 
    Button, 
    Box,
    Text,
} from '@chakra-ui/react';
import Axios from 'axios';
import React,{useState} from 'react';
import { Fragment } from 'react';
import Recipe from "./Recipe"
import {v4 as keyform} from 'uuid'
import logo1 from "./img/logo1.png"

const Search = ()=>{
    const [input,setInput] = useState("")
    const [food,getFood] = useState([]);
    const url = `https://api.edamam.com/search?q=${input}&app_id=b6d2ba3f&app_key=1f0634628b6b883b38c77098974ac3ee`

{/*Fetch API*/}
    const getData = async() =>{
        const res = await Axios.get(url)
        getFood(res.data.hits);
        console.log(res)
        setInput("");

    }
{/*Get Value From input*/}
    const getValue = (e) =>{
        setInput(e.target.value)
    }
{/*Get Data Prevent Default*/}
    const fetchData = (e)=>{
        e.preventDefault();
        getData();
    }
    <Box>
   
</Box>
    return(
        <Fragment>
            <Container>
                <Box 
                bg="#ea2c62" 
                boxShadow="dark-lg" 
                marginTop="20px" 
                padding="35px" 
                borderRadius="12px"
                color="#f3f2da"
                textShadow="0px 2px 2px  #DDDDDD" 
                marginLeft="5px"
                >
                    <Stack spacing={2}>
                        <Heading textShadow="1px 1px BDBDBD" m="6" align="center" marginTop="30px" as="h2" size="xl">
                            Search Food Down Below!!!<br/>
                            <Text fontSize="xs">Then Magic Will Happen</Text>
                            <Flex marginTop="20px" marginLeft="45%" height="80px" width="50px">
                                <img src={logo1} alt="logo" />
                            </Flex>
                        </Heading>

                    </Stack>
                    <Flex marginLeft="auto">
                        <Input outline="blue.800" value={input} onChange={getValue} marginTop="50px" placeholder="Search Food" size="md" />
                        <Button marginLeft="1px" onClick={fetchData} marginTop="50px" colorScheme="blue">Search</Button>
                    </Flex>
                </Box>
            </Container>

            <Box>
                {food.map(recipe => <Recipe key={keyform()} foodRecipe={recipe} />)}
            </Box>

        </Fragment>
    )
}
export default Search;
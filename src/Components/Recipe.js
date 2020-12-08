import { 
    Box, 
    Button, 
    Container, 
    Flex,
    Text 
} from '@chakra-ui/react';
import React, { Fragment } from 'react'
import back1 from "./img/back4.png"


const Recipe = ({foodRecipe}) => {
    const {label, image, url, dietLabels } = foodRecipe.recipe;
    return (
        <Fragment>
            <Container>
                <Box  
                marginTop="60px" 
                boxShadow="0px 4px 14px 1px rgba(0, 0, 0, 0.15);"
                padding="30px"
                bgImage={back1}
                borderRadius="12px"
                bg="blue.300"
                textAlign="center"
                >
                    <Text 
                    textShadow="1px 1px 1px  #DDDDDD"  
                    fontWeight="bold" 
                    marginBottom="15px" 
                    fontSize="2xl"
                    >
                        {label}
                    </Text>
                    <Flex borderRadius="10px" maxWidth={300} margin="0 auto">
                        <img  src ={image} alt={label} />
                    </Flex><br/>
                    <Button bg="grey.800">
                        <a href={url} target="_blank" rel="noopener noreferrer"> Recipe & Tutorial</a>
                    </Button>
                    <Button bg="grey.800">
                        Diet Info : {dietLabels}
                    </Button>
                </Box>
            </Container>

        </Fragment>
    )
}

export default Recipe;

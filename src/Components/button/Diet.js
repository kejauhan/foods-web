import { Button, SimpleGrid } from '@chakra-ui/react';
import React from 'react'
import {v4 as keyform} from 'uuid'

const Diet = ({Diets}) => {
    return Diets.map(Diet => {
        return(
            <SimpleGrid minChildWidth="120px" key={keyform()}>
                <Button bg="grey.800"> {Diet} </Button>
            </SimpleGrid>
        );
    });
};

export default Diet;
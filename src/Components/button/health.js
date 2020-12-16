import { Button,  SimpleGrid} from '@chakra-ui/react';
import React from 'react'
import {v4 as keyform} from 'uuid'

const Health = ({Labels}) => {
    return Labels.map(another => {
        return(
            <SimpleGrid minChildWidth="120px" key={keyform()}>
                <Button bg="grey.800" > {another} </Button>
            </SimpleGrid>
        );
    });
};

export default Health;
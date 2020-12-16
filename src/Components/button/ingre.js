import { UnorderedList, ListItem} from '@chakra-ui/react';
import React from 'react'
import {v4 as keyform} from 'uuid'

const Ingredient = ({Details}) => {
    return Details.map(ingredient => {
        return(
            <UnorderedList key={keyform()} >
                <ListItem> {ingredient.text} </ListItem>
            </UnorderedList>
        );
    });
};

export default Ingredient;
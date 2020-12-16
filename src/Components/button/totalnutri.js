import { UnorderedList, ListItem} from '@chakra-ui/react';
import React  from 'react'
import {v4 as keyform} from 'uuid'

const IDetails = ({Digest}) => {
    return Digest.map(total => {
        return(
            <UnorderedList key={keyform()}>
                <ListItem > {total.label} : {total.daily.toFixed(1)}{total.unit} </ListItem>
            </UnorderedList>
        );
    });
};

export default IDetails;
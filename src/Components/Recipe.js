import { 
    Box, 
    Button, 
    Container, 
    Flex,
    Text,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon
} from '@chakra-ui/react';
import React, { Fragment } from 'react'
import Ingredient from './button/ingre'
import {v4 as keyform} from 'uuid'
import IDetails from './button/totalnutri'
import Health from './button/health'
import Diet from './button/Diet'


const Recipe = ({foodRecipe}) => {
    const {label, image, url, healthLabels, dietLabels, ingredients, digest } = foodRecipe.recipe;
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Fragment>
            <Container>
                <Box  
                boxShadow="dark-lg"
                marginTop="60px" 
                textShadow="0px 2px 2px  #DDDDDD"
                padding="30px"
                borderRadius="12px"
                bg="#28abb9"
                textAlign="center"
                color="blue.800"
                >
                    <Text 
                    textShadow="1px 1px 1px  #DDDDDD"  
                    fontWeight="bold" 
                    marginBottom="15px" 
                    fontSize="2xl"
                    >
                        {label}
                    </Text>
                        <Flex maxWidth={300} margin="0 auto">
                            <img src ={image} alt={label} />
                        </Flex><br/>
                        <Button bg="#ff9a8c">
                            <a href={url} target="_blank" rel="noopener noreferrer">Tutorial</a>
                        </Button>
                        <Button bg="#ff9a8c" onClick={onOpen}>Ingredients</Button>
                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                            <ModalHeader textAlign="center">{label}</ModalHeader>
                            <ModalBody key={keyform()} >
                                <Ingredient  Details={ingredients} />
                            </ModalBody>
                            <ModalFooter>
                                <Button colorScheme="blue" mr={3} onClick={onClose}>
                                Close
                                </Button>
                            </ModalFooter>
                            </ModalContent>
                        </Modal>

                        <Popover >
                        <PopoverTrigger>
                            <Button bg="#ff9a8c">Labels Info</Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverHeader>Diet and Health Info</PopoverHeader>
                            <PopoverBody>
                            <Diet Diets = {dietLabels} />
                            <Health Labels={healthLabels} />    
                            </PopoverBody>
                        </PopoverContent>
                        </Popover>

                        <Accordion allowToggle>
                        <AccordionItem>
                            <AccordionButton borderRadius="12px" bg="#ff9a8c">
                            <Box flex="1" textAlign="left">
                                Digest Information
                            </Box>
                            <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                            <IDetails Digest={digest} />
                            </AccordionPanel>
                        </AccordionItem>
                        </Accordion>

                        
                </Box>
            </Container>

        </Fragment>
    )
}

export default Recipe;

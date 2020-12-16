import React, {Fragment} from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  useDisclosure,
  Button,
  Box
} from "@chakra-ui/react";
import {HiMenu} from 'react-icons/hi'
import {Link} from "react-router-dom"

const MenuDrawer = () =>{
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return(
    <Fragment>
      <IconButton icon={<HiMenu />} ref={btnRef} onClick={onOpen} />
      <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader>
              Menu
            </DrawerHeader>
            <DrawerBody>
              <Box>
                <Link to="/about">
                <Button colorScheme="orange" isFullWidth>
                  About
                </Button>
                </Link>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Fragment>
  )
}
export default MenuDrawer;
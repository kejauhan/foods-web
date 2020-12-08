import React, {Fragment} from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Input,  
  Button,
  useDisclosure
} from "@chakra-ui/react";

const MenuDrawer = () =>{
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return(
    <Fragment>
      <Button ref={btnRef} onClick={onOpen}>Menu</Button>
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
              <Input placeholder="Type Something" />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Fragment>
  )
}
export default MenuDrawer;
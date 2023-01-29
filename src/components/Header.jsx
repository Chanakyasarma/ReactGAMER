import React from 'react'
import {Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerContent,
    DrawerOverlay,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Stack,
    HStack,
    DrawerFooter,Box, Container, Heading, Img, Text, VStack, Input
} from "@chakra-ui/react";
import { AiOutlineSend} from "react-icons/ai"
import {Link} from  "react-router-dom"
import {BiMenuAltLeft} from "react-icons/bi"
import{HashLink} from "react-router-hash-link"


const Header = () => {
    const {isOpen,onOpen,onClose}= useDisclosure()
  return ( <>
  <Button pos={"fixed"} top={'4'} left={'2'} zIndex={"overlay"} bg={"purple.900"} 
  p={"1"} w={['1','10']} h={['9','9']} borderRadius={'2'} onClick={onOpen} clipPath={"polygon(0% 0%, 80% 0%, 100% 20%, 100% 100%, 0% 100%)"}
  borderRight={'2px'} borderBottom={'2px'} borderColor={"purple.600"}> 

    <BiMenuAltLeft size={'20'} color={"white"}/>
  </Button>
  <Drawer isOpen={isOpen} placement="left" onClose={onClose} bgColor={"purple"}>
    <DrawerOverlay>
        <DrawerContent>
            <DrawerCloseButton/>
            <DrawerHeader color={"purple.500"} textTransform={'uppercase'}>GameSite</DrawerHeader>
            <DrawerBody>
                <Stack alignItems={"flex-start"}>
                    <Button onClick={onClose} variant={"ghost"}colorScheme={'purple'}>
                        <Link to={"/"}>Home</Link>
                    </Button>
                    <Button onClick={onClose} variant={"ghost"} colorScheme={'purple'}>
                        <HashLink to={"/Games"}>Games</HashLink>
                    </Button>
                    <Button onClick={onClose} variant={"ghost"} colorScheme={'purple'}>
                        <HashLink to={"/#about"}>About Us</HashLink>
                    </Button>
                    <Button onClick={onClose} variant={"ghost"} colorScheme={'purple'}>
                        <Link to={"/videos"}>Trailer</Link>
                    </Button>
                </Stack>
                
            </DrawerBody>
            <DrawerFooter bg={"purple.600"} >
            <VStack w={'full'} >
                <Heading textTransform={"uppercase"} >GameSite</Heading>
                <Text color={"black.500"}>All rights reserved</Text>
            </VStack>
            </DrawerFooter>
        </DrawerContent>
    </DrawerOverlay>
  </Drawer>
  </>);
};
export default Header;
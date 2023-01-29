import React from 'react'
import {Box, Button, Container, Heading, HStack, Img, Stack, Text, VStack, Input} from '@chakra-ui/react'
import { AiOutlineSend} from "react-icons/ai"
const Footer = () => {
  return (
    <Box bgColor={"purple.900"} minH={'40'} p={'15'} color={"white"}>
        <Stack direction={["column","row"]}>
            <VStack alignItems={"stretch"} w={'full'} px={'4'}> 
                <Heading size="md" textTransform={'uppercase'} textAlign={'center'}>
                    Subscribe to get Updates
                </Heading>
                <HStack
                borderBottom={"2px solid white"}
                py="2">
                    <Input  placeholder="Enter Email Here"
                    border={'none'}
                    borderRadius="none"
                    outline={"none"}/>
                    <Button p={"0"}
                    colorScheme={"purple"}
                    variant={"ghost"}
                    borderRadius={"0 20px 20px 0"}>
                       <AiOutlineSend /> 
                    </Button>
                </HStack>
            </VStack>
            <VStack w={'full'} 
            borderLeft={["none","1px solid white"]}
            borderRight={["none","1px solid white"]}>
                <Heading textTransform={"uppercase"}>GameSite</Heading>
                <Text color={"purple.500"}>All rights reserved</Text>
            </VStack>
            <VStack w={'full'}>
                <Heading size={"md"} textTransform={"uppercase"} >Social media</Heading>
                <Button variant={"link"} colorScheme={"purple"}>
                    <a target={"blank"} href="https://www.instagram.com/_mr.chanakya._/">Instagram</a>
                </Button>
                <Button variant={"link"} colorScheme={"purple"}>
                    <a target={"blank"} href="https://www.linkedin.com/in/chanakya-sarma/">Linkedin</a>
                </Button>
                
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer
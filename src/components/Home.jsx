import React from 'react'
import {Box, Container, Heading, Img, Stack, CardHeader, Text, Card, CardBody, CardFooter,Button, Image, SimpleGrid, Flex, Spacer} from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assests/1.png';
import bg from "../assests/bg.png"
import img2 from '../assests/2.jpg';
import img3 from '../assests/3.jpg'
import img4 from '../assests/red.jpg'
import img5 from '../assests/5.png'
import img6 from '../assests/6.jpg'
import img8 from '../assests/valorant.jpg'
import img9 from '../assests/cyberpunk.jpg'
import img0 from '../assests/zero.jpg'
import { transform } from 'framer-motion';
import{HashLink} from "react-router-hash-link"


const Home = () => {
  return (<Box>
    
    <Card bgColor={"#0e0c10"} h={{base:"70vh", xl:"100vh"}}  clipPath={"polygon(10% 0%, 100% 0%, 100% 85%, 90% 100%, 0% 100%, 0% 15%)"}
    >
        <Flex
      alignItems="center"
      w="full"
      px={ ['8','20']}
      py={['20','44']}
      minHeight="90vh"
      flexDirection={['column','row']}
    >
      <Box alignItems="center"
        >
        <Text
          fontSize={['25' , '50']}
          fontWeight="bold"
          mb="4"
          color={"purple.500"}
          alignItems="center"
        >
          
          Get Some Game Insight
        </Text>
 
        <Text mb="6" opacity={0.7} color={'white'}>
          GameSite is online platform that provide with you insight from the gaming industy.<br></br>
          Get information about new game trailer and link to the direct website.
        </Text>
 
        <Button
          
          bg={"purple.600"}
          variant="solid"
          h="40px" w="30"
          clipPath={"polygon(10% 0%, 100% 0%, 100% 85%, 90% 100%, 0% 100%, 0% 15%)"} border={"2px"}
          borderColor={"purple.100"}
        >
          Get Started
        </Button>
      </Box>
        <br></br>
 
      <Flex
        w={[ '85%' , '50%']}
        alignItems="center"
        justifyContent="center"
      >
        <Image src={bg} clipPath={"polygon(10% 0%, 100% 0%, 100% 85%, 90% 100%, 0% 100%, 0% 15%)"} py={'2'}/>
      </Flex>
    </Flex>
    </Card>
    <Heading id={"games"} textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={'2px solid'} m="auto" color={"purple.500"} p={'8'}>Games</Heading>
    <SimpleGrid  spacing={10} templateColumns='repeat(auto-fill, minmax(300px, 1fr))' p={'8'} alignItems={'center'} >
        
        <Card bg={"blackAlpha.500"} clipPath={"polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 10%)"}  borderRight={'2px'} borderBottom={'2px'} borderColor={"purple.600"}>
            <CardHeader p='8'>
            <Image
            src={img8}
            borderRadius='lg'
            />
            </CardHeader>
            <CardBody>
            <Heading fontSize={'28px'} color={"purple.700"}>VALORANT</Heading>
            <Text>Riot Games presents VALORANT: a 5v5 character-based tactical FPS where precise gunplay meets unique agent abilities.</Text>
            </CardBody>
            <CardFooter>
            <a href="https://playvalorant.com/en-us/?gclid=Cj0KCQiAw8OeBhCeARIsAGxWtUyPtCHeKRZPPkIVYMTmIlKJVZ7Wk1lGjNgaKMuiaXS9FHpCfzPadlIaAheWEALw_wcB&gclsrc=aw.ds">
                <Button bg={"purple.500"} color={"black"}>View here</Button></a>
            </CardFooter>
        </Card>
        <Card bg={"blackAlpha.500"} clipPath={"polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 10%)"} borderRight={'2px'} borderBottom={'2px'} borderColor={"purple.600"}>
            <CardHeader p='8'>
            <Image
            src={img9}
            borderRadius='lg'
            />
            </CardHeader>
            <CardBody>
            <Heading fontSize={'28px'} color={"purple.700"}>Cyberpunk 2077</Heading>
            <Text>Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City, a dangerous megalopolis.</Text>
            </CardBody>
            <CardFooter>
                <a href="https://www.cyberpunk.net/in/en/">
                    <Button bg={"purple.500"} color={"black"}>View here</Button></a>
            </CardFooter>
        </Card>
        <Card bg={"blackAlpha.500"} clipPath={"polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 10%)"}  borderRight={'2px'} borderBottom={'2px'} borderColor={"purple.600"}>
            <CardHeader p='8'>
            <Image
            src={img4}s
            borderRadius='lg'
            />
            </CardHeader>
            <CardBody>
            <Heading fontSize={['25px','25px','25px','25px']} color={"purple.700"}>Red-Dead Redemption 2</Heading>
            <Text >Red Dead Redemption 2 is a 2018 action-adventure game. The story is set in 1899 and follows the exploits of Arthur Morgan.</Text>
            </CardBody>
            <CardFooter>
                <a href="https://www.rockstargames.com/reddeadredemption2/restricted-content/agegate/form?redirect=https%3A%2F%2Fwww.rockstargames.com%2Freddeadredemption2%2F&options=&locale=en_us">
                    <Button bg={"purple.500"} color={"black"} >View here</Button></a>
            </CardFooter>
        </Card>
        <Card bg={"blackAlpha.500"} clipPath={"polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 10%)"}  borderRight={'2px'} borderBottom={'2px'} borderColor={"purple.600"} boxShadow='md'>
            <CardHeader p='8'>
            <Image
            src={img0}
            borderRadius='lg'
            />
            </CardHeader>
            <CardBody>
            <Heading fontSize={'28px'} color={"purple.700"}>Horizon Zero Dawn</Heading>
            <Text >Horizon Zero Dawn is a 2017 action game. The plot follows Aloy, a hunter in a world overrun by machines to uncover her past.</Text>
            </CardBody>
            <CardFooter>
                <a href="https://www.playstation.com/en-in/horizon/"><Button bg={"purple.500"} color={"black"} >View here</Button></a>
            </CardFooter>
        </Card>
        <Text color={"purple.600"}  w={'24'} h={'10'} right={'20px'} textDecoration={'underline'} >
            <HashLink to={"/Games"}>View More..</HashLink>
        </Text>
        
</SimpleGrid>
<Card h={{base:"30vh", md:"30vh", lg: "30vh", xl:"60vh"}} bg={"purple.900"} alignItems={'center'} p={['10','10','10','20']}>
        
        <Box h={["28vh","30vh","34vh","40vh"]} w={{base:"30vh", md:"45vh", lg: "50vh", xl:"65vh"}} overflow={"hidden"} p={"1"}  >
            <MyCarousel/>
            
        </Box>
        
        <Img src={img1} h={["19vh","22vh","24vh","40.5vh"]} w={["40vh","40vh","54vh",'95vh']} position={"absolute"} filter={" contrast(150%) drop-shadow(0px 4px 6px #4d0099) "}>
        </Img>          
    </Card>

    <Container id={"about"} maxW={'container.xl'}  p={["15", "11","4", "10"]}>
        <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={'2px solid'} m="auto" color={"purple.500"}>About us</Heading>
        <Stack h="full" p={"4"} alignItem={'center'} direction={['column','column','column','row']}>
            <Img src={img5} h={["96",'80','620', '400']} />
            <Text letterSpacing={"widest"} lineHeight={"150%"} p={[ 7, 6, 10, 10]} textAlign={"center"} 
            fontSize={{ base: '12px', md: '25px', lg: '20px' }} >Every year, the video game industry produces hundreds of upgraded games with a satisfying and pleasurable user experience through good user interfaces and design practices.Game websites are created and upgraded as well, as this is the main medium used to advertise and showcase games themselves.
             An appealing design helps potential players to understand the game better and engage in it faster.
             If you are new to the gaming world GameSight helps you to find a perfect game for you. 
             </Text>
        </Stack>
    </Container>

  </Box>
  );
};
const MyCarousel =()=>(
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showIndicators={false}>
        <Box >
            <Img src={img6}/>
        </Box>
        <Box  >
            <Img src={img2}/>
        </Box>
        <Box  >
            <Img src={img3}/>
        </Box>


    </Carousel>
)

export default Home
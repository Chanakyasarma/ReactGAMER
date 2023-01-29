import React from 'react'
import img1 from '../assests/1.png';
import img from "../assests/4.jpg"
import img2 from '../assests/2.jpg';
import img3 from '../assests/3.jpg'
import img4 from '../assests/red.jpg'
import img5 from '../assests/5.png'
import img6 from '../assests/6.jpg'
import img7 from '../assests/7.jpg'
import img8 from '../assests/valorant.jpg'
import img9 from '../assests/cyberpunk.jpg'
import img0 from '../assests/zero.jpg'
import {Box, Container, Heading, Img, Stack, CardHeader, Text, Card, CardBody, CardFooter, ButtonGroup, Divider, Button, Image, SimpleGrid} from '@chakra-ui/react'

const Games = () => {
  return (
    <Box><Heading id={"games"} textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={'2px solid'} m="auto" color={"purple.500"} p={'8'}>Games</Heading>
    <SimpleGrid  spacing={10} templateColumns='repeat(auto-fill, minmax(300px, 1fr))' p={'8'} alignItems={'center'} >
        
        <Card bg={"blackAlpha.500"} clipPath={"polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 10%)"} borderRight={'2px'} borderBottom={'2px'} borderColor={"purple.600"}>
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
            <Text>Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City,a dangerous megalopolis.</Text>
            </CardBody>
            <CardFooter>
                <a href="https://www.cyberpunk.net/in/en/">
                    <Button bg={"purple.500"} color={"black"}>View here</Button></a>
            </CardFooter>
        </Card>
        <Card bg={"blackAlpha.500"} clipPath={"polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 10%)"} borderRight={'2px'} borderBottom={'2px'} borderColor={"purple.600"}>
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
        <Card bg={"blackAlpha.500"} clipPath={"polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 10%)"} borderRight={'2px'} borderBottom={'2px'} borderColor={"purple.600"}>
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
        <Card bg={"blackAlpha.500"} clipPath={"polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 10%)"} borderRight={'2px'} borderBottom={'2px'} borderColor={"purple.600"}>
            <CardHeader p='8'>
            <Image
            src={img3}
            borderRadius='lg'
            />
            </CardHeader>
            <CardBody>
            <Heading fontSize={'28px'} color={"purple.700"}>Apex Legend</Heading>
            <Text>Apex Legends is a free-to-play hero shooter game where legendary competitors battle for glory, fame, and fortune on the fringes of the Frontier.</Text>
            </CardBody>
            <CardFooter>
            <a href="https://www.ea.com/en-gb/games/apex-legends">
                <Button bg={"purple.500"} color={"black"}>View here</Button></a>
            </CardFooter>
        </Card>
        <Card bg={"blackAlpha.500"} clipPath={"polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 10%)"} borderRight={'2px'} borderBottom={'2px'} borderColor={"purple.600"}>
            <CardHeader p='8'>
            <Image
            src={img2}
            borderRadius='lg'
            />
            </CardHeader>
            <CardBody>
            <Heading fontSize={'28px'} color={"purple.700"}>FortNite</Heading>
            <Text>Fortnite is a free-to-play Battle Royale game with numerous game modes for every type of game player.You build and you kill</Text>
            </CardBody>
            <CardFooter>
            <a href="https://www.fortnite.com/">
                <Button bg={"purple.500"} color={"black"}>View here</Button></a>
            </CardFooter>
        </Card>
        <Card bg={"blackAlpha.500"} clipPath={"polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 10%)"} borderRight={'2px'} borderBottom={'2px'} borderColor={"purple.600"}>
            <CardHeader p='8'>
            <Image
            src={img7}
            borderRadius='lg'
            />
            </CardHeader>
            <CardBody>
            <Heading fontSize={'28px'} color={"purple.700"}>Gotham Knights</Heading>
            <Text>Gotham Knights is an open-world, action RPG set in Gotham City. After Batman is dead you play as member of the Bat-Family.</Text></CardBody>
            <CardFooter>
            <a href="https://www.gothamknightsgame.com/en-gb">
                <Button bg={"purple.500"} color={"black"}>View here</Button></a>
            </CardFooter>
        </Card>
        <Card bg={"blackAlpha.500"} clipPath={"polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 10%)"} borderRight={'2px'} borderBottom={'2px'} borderColor={"purple.600"}>
            <CardHeader p='8'>
            <Image
            src={img}
            borderRadius='lg'
            />
            </CardHeader>
            <CardBody>
            <Heading fontSize={'28px'} color={"purple.700"}>Forza Horizon</Heading>
            <Text>Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world's greatest cars.</Text>
            </CardBody>
            <CardFooter>
            <a href="https://forza.net/horizon/">
                <Button bg={"purple.500"} color={"black"}>View here</Button></a>
            </CardFooter>
        </Card>
</SimpleGrid></Box>
  )
}

export default Games
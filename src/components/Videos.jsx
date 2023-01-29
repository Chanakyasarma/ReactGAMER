import { Heading, Stack, HStack, VStack, Text, Button} from '@chakra-ui/react';
import React, { useState } from 'react';
import v1 from "../assests/videos/2.mp4";
import v3 from "../assests/videos/1.mp4";
import v2 from "../assests/videos/3.mp4";



const Videos = () => {
    const videosArr=[v1,v2,v3];

    const [videoSrc, setVideoSrc]= useState(videosArr[0]);
  return <Stack direction={["column", "column" , "column" ,"column"]}
  h={["60vh", "130vh"]}>
    <VStack w={'full'} p={"12"} >
        <video
            controls
            controlsList="nodownload"
            src={videoSrc}
            
        >

        </video>
        <VStack alignItems={'center'} p='4' w={'full'}>
            <Heading color={'purple.500'} >Game Trailer</Heading>
        </VStack>
        <HStack  alignItems={"center"} p="4" spacing={'8'} >
        {videosArr.map(((item, index)=>(
            <Button variant={'ghost'} color={'purple.500'} onClick={()=> setVideoSrc(item)}>
                Game {index+1} 
            </Button>
        )))}
        
    </HStack>
    </VStack>
    
    
  </Stack>;
}

export default Videos
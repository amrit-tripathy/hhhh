import { Box, Button, Container, HStack, Heading, Img, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <Container backgroundColor={'black'} maxW={'full'} height={'container.xl'}>
      <Heading textAlign={'center'} fontSize={'6xl'} paddingTop={'12'}
        color={'white'}>Welcome to Dent/Crack Detection (DCD)</Heading>
      <HStack paddingTop={'20'} marginLeft={'10'}>
        <Img width={'90'} padding={'6'} shadow={'2xl'} borderRadius={'lg'} css={{"&:hover":{transform:"scale(1.2)"}}} transition={"all 0.3s"} 
          src='https://inspektlabs.com/blog/content/images/2022/11/13-1.jpg' /> 
          {/* //width={['630px']} */}
        <div style={{ display: "flex", flexDirection: "column"}}>

        <Box color={'white'} paddingLeft={'20'}
          fontSize={'3xl'} width={'container.sm'}>
          Scan pictures of vehicles and manufacturing subsystems
          and identify cracks and dents through our computer-vision based solutions.
        </Box>
        
        <VStack paddingTop={'24'}>
          <Text color='white' fontSize={'2xl'}>Detect Dent/Crack!! </Text>
          <Link to={'/home'}>
            <Button backgroundColor={'white'} color={'black'}
              width={'fit-content'} css={{"&:hover":{backgroundColor: "black",color:"white", border:"solid"}}}>Dent/Crack</Button>
          </Link>
        </VStack>
        </div>
      </HStack>

    </Container>
  )
}

export default Home;
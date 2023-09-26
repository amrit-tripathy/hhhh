import { Box, Button, Container, HStack, Heading, Img, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <Container backgroundColor={'black'} maxW={'full'} height={'container.xl'}>
        <Heading textAlign={'center'} fontSize={'6xl'} paddingTop={'12'}
        color={'white'}>Welcome to Crack Detective</Heading>
        <HStack paddingTop={'20'} marginLeft={'10'}>
            <Img src='https://inspektlabs.com/blog/content/images/2022/11/13-1.jpg' width={['630px']}/>
            <Box color={'white'} paddingLeft={'48'} 
            fontSize={'3xl'} width={'container.sm'}>
                    Scan pictures of vehicles and manufacturing subsystems 
                    and identify cracks and dents through our computer-vision based solutions.
            </Box>
        </HStack>
        <HStack paddingTop={'40'}>
                <Box color={'white'} fontSize={'3xl'} 
                paddingLeft={'20'} marginLeft={'28'}
                paddingRight={'52'} width={'container.sm'}>
                Measure the dimensions of simple objects such as 
                square, triangle, polygon, etc. using our Image Processing Techniques.
                </Box>
                <img src={require('../Screenshot (65).png')} width={['400px']}/>
        </HStack>
        <VStack paddingTop={'24'}>
        <Text color='white' fontSize={'2xl'}>Sign up and create your account now!!</Text>
        <Link to={'/signup'}>
        <Button backgroundColor={'white'} color={'black'}
        width={'fit-content'}>Sign Up</Button>
        </Link>
        </VStack>
    </Container>
  )
}

export default Home;
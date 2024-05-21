import { Button, HStack, Img, Heading, Text, VStack, useToast, Input} from '@chakra-ui/react';
import React, {useEffect,useState} from 'react';
import { useFirebase } from '../Firebase';
import {useParams, useLocation} from 'react-router-dom';
import axios from 'axios';
const Results = () => {
    const firebase=useFirebase();
    //const params=useParams();
    const location = useLocation();
    //const [image, setImage] = useState('');
    const toast=useToast();
      const res=async()=>{
        const result=await axios.get('http://127.0.0.1:5000/crack');
        
        console.log(result);
        const data = result.data; 
        const base64String = data.Image;
        const image = new Image();
        image.src = `data:image/png;base64, ${base64String}`;
        image.width = 400; // Set your desired width
        image.height = 300;
        image.style.paddingTop = '20px';
        image.style.display = 'block';
        image.style.margin = 'auto';
        document.body.appendChild(image);
      }  
    const signout=async()=>{
        await firebase.signout();
        toast({
            title: 'Sign Out Successful',
            description: "You have been signed out of your account",
            status: 'success',
            duration: 9000,
            isClosable: true,
            position: 'top',
            });
        window.location=('/');
    }
  return (
    <>
    <nav>
        <HStack backgroundColor={'black'} 
        maxW={'full'} border={'1px'} padding={'4'}>
        <Heading paddingLeft={'2'} 
        color={'white'}>Crack Detection</Heading>
        <HStack paddingLeft={['900px']}>
        {/* <Button>View History</Button> */}
        {/* <Button marginLeft={['200px']} onClick={signout} >Sign Out</Button> */}
        </HStack>
        </HStack>
    </nav>
    <VStack>
      <Text>Results are ready !! Click to view</Text>
      <Button onClick={res} color="white" bg="black" css={{"&:hover":{transform:"scale(1.1)"}}} _hover={{ bg: 'black' }}  transition="all 0.3s ease" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)" >Get Results</Button>
      
    </VStack>
    </>
  )
}

export default Results
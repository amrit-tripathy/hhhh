import { Button, HStack, Heading, Input, Text, VStack, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useFirebase} from '../Firebase';
import axios from 'axios';
const Signup = () => {
    const[email,setEmail]=useState('');
    const[password, setPassword]=useState('');
    const[name,setName]=useState('');
    const firebase=useFirebase();
    const toast=useToast();
    const sign=async()=>{
        try{
        const res=await firebase.signup(email,password);
        const id=res.user.accessToken;
        if(res.user.accessToken!=null)
        {
            toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
            position: 'top',
            });
            await axios.post("http://127.0.0.1:5000/create",{id,name});
            window.location=('/home');
        }}
        catch
        {
            toast({
                title: 'Account exists',
                description: "This email is already in use, Sign In!!",
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: 'top',
                });
        }
    }
  return (
    <>
    <Heading textAlign={'center'} size={'2xl'} color={'white'}
    paddingTop={'6'} paddingBottom={'6'} backgroundColor={'black'}>Crack Detective</Heading>
    <HStack>
    <VStack width={['600px']} paddingTop={'36'} 
    paddingLeft={'20'}>
        <Heading width={['500px']} paddingBottom={'4'}>Sign Up</Heading>
        <Input onChange={(e)=>setName(e.target.value)} 
        borderColor={'black'} border={'2px'} placeholder='Your Name'/>
        <Input onChange={(e)=>setEmail(e.target.value)}
        borderColor={'black'} border={'2px'} type='email' placeholder='Your Email'/>
        <Input onChange={(e)=>setPassword(e.target.value)}
        borderColor={'black'} border={'2px'} type='password' placeholder='Enter Password'/>
        <Text>Already have an account? <Link to={'/signin'}>Sign In</Link>
        </Text>
        <Button onClick={sign}>Sign Up</Button>
    </VStack>
    </HStack>
    </>
  )
}

export default Signup;
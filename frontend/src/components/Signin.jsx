import React, {useState} from 'react'
import { VStack, Input, Heading, Button, useToast } from '@chakra-ui/react'
import { useFirebase } from '../Firebase';
const Signin = () => {
    const[email,setEmail]=useState('');
    const[password, setPassword]=useState('');
    const firebase=useFirebase();
    const toast=useToast();
    const login=async()=>{
        try{
        await firebase.signin(email,password);
        toast({
            title: 'Sign In Successful',
            description: "You can now access your account",
            status: 'success',
            duration: 9000,
            isClosable: true,
            position: 'top',
            });
        window.location=('/home');
        }
        catch{
            toast({
                title: 'Sign In Failed',
                description: "Incorrect password or account does not exist",
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
    <VStack width={['600px']} paddingTop={'36'} 
    paddingLeft={'20'}>
        <Heading width={['500px']} paddingBottom={'4'}>Sign In</Heading>
        <Input onChange={(e)=>setEmail(e.target.value)}
        borderColor={'black'} border={'2px'} type='email' placeholder='Your Email'/>
        <Input onChange={(e)=>setPassword(e.target.value)}
        borderColor={'black'} border={'2px'} type='password' placeholder='Enter Password'/>
        <Button onClick={login}>Sign In</Button>
    </VStack>
    </>
  )
}

export default Signin;
import { Button, HStack, Img, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack, useToast, Input} from '@chakra-ui/react';
import React, { useState } from 'react'
import { useFirebase } from '../Firebase';
import Webcam from 'react-webcam';
import { useRef, useCallback } from 'react';
import axios from 'axios';

const Scan = () => {
    const firebase=useFirebase();
    const toast=useToast();
    const web=useRef(null);
    const[im,setIm]=useState(null);
    const[click,setClick]=useState(false);
    const live=async()=>{
      await axios.get('http://127.0.0.1:5000/live');
    }
    
    const capture = useCallback(() => {
      const imageSrc = web.current.getScreenshot();
      setIm(imageSrc);
    }, [web]);
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
        color={'white'}>Crack Detective</Heading>
        <HStack paddingLeft={['900px']}>
        {/* <Button>View History</Button> */}
        <Button onClick={signout}>Sign Out</Button>
        </HStack>
        </HStack>
    </nav>
    <Tabs isFitted variant='enclosed'>
        <TabList mb='1em' shadow={'xl'}>
        <Tab fontSize={'2xl'}>Crack and Dent Detection</Tab>
        <Tab fontSize={'2xl'}>Object Dimension Measurement</Tab>
        </TabList>
    <TabPanels>
    <TabPanel>
      <VStack padding={'16'}>
        <Text fontSize={'2xl'}>
        Scan an image to check possible cracks, dents or other dislocations on the vehicle.  
        </Text>
        <Button  padding={'36'} onClick={()=>setClick(true)}>
          {
            click==true?(
                im ? (
                  <img src={im} alt="webcam" />
                ) : (
                  <>
                  <Webcam height={600} width={600} ref={web} />
                  <Button onClick={capture}>Capture</Button>
                    </>
                )
            ):<></>
          }
        <Img width={'72'} padding={'6'} shadow={'2xl'} borderRadius={'lg'} css={{"&:hover":{transform:"scale(1.1)"}}} transition={"all 0.3s"} 
        src={'https://w7.pngwing.com/pngs/619/455/png-transparent-scanline-scanner-scan-barcode-security-qr-code-scanner-general-pack-icon.png'}/>
        </Button>
        <VStack padding={'14'}>
        <Text fontSize={'2xl'} paddingTop={'6'}>Or upload image from folder</Text>
        <form encType='multipart/form-data' method='post' action='http://127.0.0.1:5000/crack'>
        <Input type='file' width={'96'} paddingBottom={'6'} border={'2px'} name='image'/>
        <Input border={'2px'} type='submit' value='Upload' width={'24'}/>
        </form>
        </VStack>

      </VStack>
    </TabPanel>
    <TabPanel>
    <VStack padding={'16'}>
        <VStack>
        <Text fontSize={'2xl'}>
        Scan an image to measure dimensions of amy geometrical object.  
        </Text>
        <Button padding={'36'} onClick={live}>
        <Img width={'72'} padding={'6'} shadow={'2xl'} borderRadius={'lg'} css={{"&:hover":{transform:"scale(1.1)"}}} transition={"all 0.3s"} 
        src={'https://w7.pngwing.com/pngs/619/455/png-transparent-scanline-scanner-scan-barcode-security-qr-code-scanner-general-pack-icon.png'}/>
        </Button>
        <Text fontSize={'2xl'} paddingTop={'6'}>Or upload image from folder</Text>
        <form encType='multipart/form-data' method='post' action='http://127.0.0.1:5000/object'>
        <Input type='file' width={'96'} paddingBottom={'6'} border={'2px'} name='image'/>
        <Input border={'2px'} type='submit' value='Upload' width={'24'}/>
        </form>
          </VStack>
      </VStack>
    </TabPanel>
    </TabPanels>
    </Tabs>
    </>
  )
}

export default Scan;
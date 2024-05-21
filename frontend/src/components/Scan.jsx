import { Button, HStack, Img, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack, useToast, Input} from '@chakra-ui/react';
import React, { useState } from 'react'
import { useFirebase } from '../Firebase';
import Webcam from 'react-webcam';
import { useRef, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Scan = () => {
    const firebase=useFirebase();
    const toast=useToast();
    const web=useRef(null);
    const[im,setIm]=useState(null);
    const[click,setClick]=useState(false);
    const live=async()=>{
      await axios.get('http://127.0.0.1:5000/live');
    }
    
    const capture = useCallback(async() => {
      const imageSrc = web.current.getScreenshot();
      setIm(imageSrc);
      const blob = await (await fetch(imageSrc)).blob();
            
            // Save the image to the file system
            await saveImageToFileSystem(blob);
    }, [web]);
    async function saveImageToFileSystem(imageData) {
      try {
          // Request access to save the file using window.showSaveFilePicker()
          const handle = await window.showSaveFilePicker({
              types: [{
                  description: 'JPEG Files',
                  accept: {
                      'abc1/jpeg': ['.jpeg'],
                  },
              }],
              suggestedName: 'abc1.jpeg',
          });
  
          // Create a new file handle
          const fileHandle = await handle.createWritable();
  
          // Write the image data to the file
          await fileHandle.write(imageData);
          await fileHandle.close();
  
          console.log('Image saved successfully!');
      } catch (error) {
          console.error('Error saving image:', error);
      }
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
        <Link to={'/'}>
        <Heading paddingLeft={'2'} 
        color={'white'}>Crack Detection</Heading>
        </Link>
        <HStack paddingLeft={['900px']}>
        {/* <Button>View History</Button> */}
        {/* <Button onClick={signout}>Sign Out</Button> */}
        </HStack>
        </HStack>
    </nav>
    <Tabs isFitted variant='enclosed'>
        <TabList mb='1em' shadow={'xl'}>
        <Tab fontSize={'2xl'} fontWeight={'bold'}>Dent/Crack Detection</Tab>
        </TabList>
    <TabPanels>
    <TabPanel>
      <VStack padding={'16'}>
        <Text fontSize={'2xl'}>
        Scan an image to check possible cracks, dents or other dislocations on the vehicle.  
        </Text>
        <Button  padding={'40'} onClick={()=>setClick(true)}>
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
        <Input type='file' width={'96'} padding={'1'} border={'1px'} zIndex={"10"} shadow={'2xl'} margin={"1"}  name='image'/>
        <Input border={'2px'} type='submit' value='Upload' width={'24'} bg="black" color="white"  css={{"&:hover":{transform:"scale(1.1)"}}}  _hover={{ bg: 'gray.700' }} transition="all 0.3s ease" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)" />
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
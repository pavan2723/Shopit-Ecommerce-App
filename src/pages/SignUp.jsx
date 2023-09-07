import {  Box, Button, Card, CardBody, CardFooter, HStack, Heading, Image, Input, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase-config";

const SignUp = ()=>{

    const [registerEmail,setRegisterEmail] = useState("");
    const [registerPassword,setRegisterPassword] = useState("");
    const toast = useToast()
    const navigate = useNavigate();


    const register = async ()=>{
        if(registerEmail && registerPassword){
        try{
       const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword);
       toast({
        title: 'Registered Successfully..',
        description: " Try Login to your account",
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
      navigate("/");
        }
        catch(err){
            console.log(err);
        }
    }
    else{
        toast({
            title: 'Enter valid Email and Password',
            status: 'error',
            duration: 2000,
            isClosable: true,
          })
    }
    }

    return(
    <Box display="flex" justifyContent="center" m={9} pt={9}>
        <HStack mr={8} >
                <Card maxW='md' bg="gray.100">
                   
                    <CardBody>
                        <Text fontSize="2xl" as='b'>Shop Smart, Save Big..!</Text>
                    </CardBody>
                    <Image
                    width="320px"
                    height="295px"
                        src='https://scontent.fvga2-1.fna.fbcdn.net/v/t1.6435-9/106376693_3991402580933540_5965775172597109241_n.png?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=imXWsDKGrtEAX_djz2e&_nc_ht=scontent.fvga2-1.fna&oh=00_AfBDCbvyOdlMMJcRTOHwoz-U2lRYChAIOsgw_vafNTugGQ&oe=65162396'
                        alt='Chakra UI'
                    />
                
                </Card>
        </HStack>

        <HStack mr={8} >
                <Card maxW='md' bg="gray.100">
                   
                    <CardBody>
                    <Heading textAlign="center">Register</Heading>
                    </CardBody>
                    <Box maxW='md' textAlign="center" p={9} >

                        <Input m={2} type="text" placeholder="Email" value={registerEmail} onChange={(e)=>setRegisterEmail(e.target.value)}></Input>

                        <Input m={2} type="password" placeholder="Password" value={registerPassword} onChange={(e)=>setRegisterPassword(e.target.value)}></Input>
                    </Box>
                    <Box textAlign="center">
                    <Button colorScheme="red" onClick={register}>Signup</Button>
                    </Box>

                    <CardFooter
                        justify='space-between'
                        flexWrap='wrap'
                        sx={{
                        '& > button': {
                            minW: '136px',
                        },
                        }}
                    >
                        <Text>Already have an account ?</Text>
                            <NavLink to="/login">
                            <Text color="red.500" as='u'>Login</Text>
                            </NavLink>
                        
                    </CardFooter>
                </Card>
        </HStack>
    
        
    </Box>
    );
}

export default SignUp;





import {  Box, Button, Card, CardBody, CardFooter, HStack, Heading, Image, Input, Text, useToast } from "@chakra-ui/react";
import { signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase-config";

const Login = ()=>{

    const [loginEmail,setLoginEmail] = useState("");
    const [loginPassword,setLoginPassword] = useState("");

        

    
    const toast = useToast();
    const navigate = useNavigate();

        const Userlogin = async ()=>{
            if(loginEmail && loginPassword){
            try{
                const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
                toast({
                    title: 'Login Succesfull.',
                    description: "You've logged in to your account.",
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                  });
                navigate("/");
            }
            catch(err){
                console.log(err);
            }
        }
        else{
            toast({
                title: 'InValid Credentials.',
                status: 'error',
                duration: 4000,
                isClosable: true,
              });
        }
        };
        
          
    return(
        <>

    <Box display="flex" justifyContent="center" m={9} pt={9}>
        <HStack mr={8} >
                <Card maxW='md' bg="gray.100">
                   
                    <CardBody>
                        <Text fontSize="2xl" as='b'>Welcome Back..!</Text>
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
                    <Heading textAlign="center">Login</Heading>
                    </CardBody>
                    <Box maxW='md' textAlign="center" p={9} >

                        <Input m={2} type="email" placeholder="Email" value={loginEmail} onChange={(e)=>setLoginEmail(e.target.value)}></Input>

                        <Input m={2} type="password" placeholder="Password" value={loginPassword} onChange={(e)=>setLoginPassword(e.target.value)}></Input>
                    </Box>
                    <Box textAlign="center">
                    <Button colorScheme="red" onClick={Userlogin }>Login</Button>
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
                        <Text>Doesn't have an account ?</Text>
                            <NavLink to="/signup">
                            <Text color="red.500" as='u'>Register</Text>
                            </NavLink>
                            
                        
                    </CardFooter>
                </Card>
        </HStack>
        
    </Box>

    </>
    );
}

export default Login;





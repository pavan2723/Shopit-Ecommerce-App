import { Box, Button, Divider, Grid, GridItem,  Heading, Input, InputGroup, InputLeftAddon, Text, textDecoration, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import {LiaShoppingBagSolid} from "react-icons/lia";
import {BsSearch} from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut} from "firebase/auth";
import { auth } from "../utils/firebase-config";


const Navbar = ()=>{
    const [user,setUser] = useState({});
        const navigate = useNavigate();
        const toast = useToast();
        // console.log(user);
        
        useEffect(()=>{
            onAuthStateChanged(auth,(currentUser)=>{
                setUser(currentUser);
            })
        },[])


    const Logout = async ()=>{
        await signOut(auth);
        toast({
            title: 'Logout Successfully.',
            description: "You've logged out from your account.",
            status: 'success',
            duration: 4000,
            isClosable: true,
          });
        navigate("/login");
    };

   

    return(
        <>
        <Box boxShadow='lg' bg="white">
            <Grid templateColumns='repeat(7, 1fr)' gap={6} pl={10} pt={2}>
                <GridItem>
                    <Box m={3}>
                    <Heading size="lg" color="red.500">ShopIt</Heading>
                    </Box>                      
                </GridItem>
            
                <GridItem pt={3} minW="900">
                    <Box >
                    <InputGroup>
                        <InputLeftAddon children={ <BsSearch/>} />
                        <Input placeholder="Search Products....." />
                    </InputGroup>
                    </Box>                      
                </GridItem>
    
                <GridItem m={3} pl={4} pr={1}>
                    <Box m={3}>
                        <NavLink to="/bag">
                            <LiaShoppingBagSolid title="Bag"/>
                        </NavLink>
                    </Box>                      
                </GridItem>

                <GridItem display="flex" pt={5}>
                    <Box pt={1} pr={1}>
                        { auth.currentUser?.email ? <CgProfile/> : ""}
                        </Box>
                        <Box>
                            <Text>{auth.currentUser?.email}</Text>
                        </Box> 
                                         
                </GridItem>
                <GridItem m={3}>
                    <Box>
                       { user?.email ?
                            <NavLink>
                                    <Button colorScheme="red" size='md' onClick={Logout}>Logout</Button>
                            </NavLink> :
                            <NavLink to="/login">
                                    <Button colorScheme="red" size='md' >Login</Button>
                                        
                            </NavLink>
                        }         
                    </Box>                      
                </GridItem>
                
            </Grid>

            <Grid templateColumns='repeat(5, 1fr)' pl={10} pb={2}>
            
                <GridItem>
                    <Box pt={1}>
                        <NavLink to="/">
                            <Text colorScheme="gray" fontSize="md">Home</Text>
                        </NavLink>
                    </Box>                      
            </GridItem>

            <GridItem>
                    <Box pt={1}>
                        <NavLink to="/electronics">
                                <Text colorScheme="gray" fontSize="md">Electronics</Text>
                        </NavLink>
                    </Box>                      
            </GridItem>
            <GridItem>
                    <Box pt={1}>
                        <NavLink to="/fashion">
                                <Text colorScheme="gray" fontSize="md">Beauty</Text>
                        </NavLink>
                    </Box>                      
            </GridItem>
            <GridItem>
                    <Box pt={1}>
                        <NavLink to="/groceries">
                                <Text colorScheme="gray" fontSize="md">Groceries</Text>
                        </NavLink>
                    </Box>                      
            </GridItem>
            <GridItem>
                    <Box pt={1}>
                        <NavLink to="/offers">
                                <Text colorScheme="gray" fontSize="md">Offers</Text>
                        </NavLink>
                    </Box>                      
            </GridItem>
             
            </Grid>
        </Box>
        <Divider/>
        </>
    );
}

export default Navbar;
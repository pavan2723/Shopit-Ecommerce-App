import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase-config";
import axios from "axios";
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Heading, Image, Stack, Text, useDisclosure, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const Bag = ()=>{

    const [email,setEmail] = useState(undefined);
    const [cartdata,setCartdata] = useState([]);
    const toast = useToast();
  

    onAuthStateChanged(auth,(currentUser)=>{
        if(currentUser) {
            setEmail(currentUser.email);
        }
    })

       

         const handleRemoveFromCart = async (id)=>{
            try{
                toast({
                    title: 'Item Removed from Cart',
                    description: "You've successfully removed item.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  });
                await axios.put("http://localhost:5001/user/remove",{
                    email,
                    id
                });
            }
            catch(err){
                console.log(err);

            }
        };
       
        useEffect(()=>{
                axios.get(`http://localhost:5001/user/cartItems/${email}`)
                .then((res)=>setCartdata(res.data.items))
                .catch((err)=>console.log(err));
                      
        },[handleRemoveFromCart])

        console.log("rendering",cartdata);

    return(
        <>      
        {
            ( cartdata === undefined) && <Heading>Loading..........</Heading>
        }
        {
            (cartdata === undefined || cartdata.length === 0 ) && <Heading>Your Cart is Empty</Heading>
        }
        
       
        {
            cartdata && cartdata.map((item)=>{
                return(
                    <>

            <Card
                key={item.id}
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                bg="gray.100"
                p={2}
                
                >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '150px' }}
                    src={item.avatar}
                    alt='Caffe Latte'
                />

                <Stack>
                    <CardBody>
                    <Heading size='md'>{item.mname}</Heading>
                    <Box pt={8}>
                    <Text fontSize="xl" as='b'>
                        price : ₹{item.cost}
                    </Text>
                    </Box>
                    
                    </CardBody>

                    <CardFooter display="block">
                    
                    <Button variant='solid' colorScheme='red' size="sm" onClick={()=>handleRemoveFromCart(item.id)}>
                        Remove
                    </Button>
                    
                    </CardFooter>
                </Stack>
            </Card>
            

            </>
                )
            })   
        }

            <Divider/>
            { 
                cartdata?.length > 0 &&
                <Box textAlign="center" pt={5}>
                <Button colorScheme="green">
                    <Link to="/ordersuccess">Place Order</Link>
                </Button>
                </Box>
            }    
    </>
    );
}

export default Bag;
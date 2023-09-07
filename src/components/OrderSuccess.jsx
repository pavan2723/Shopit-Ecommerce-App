import { Box, Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const OrderSuccess = ()=>{
    return (
        <>
        
        <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    justifyContent="center"
                    
                    >
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '400px' }}
                        src='https://cdn.dribbble.com/users/4358240/screenshots/14825308/preview.gif'
                        alt='Caffe Latte'
                    />

                    <Stack>
                        <CardBody>
                        <Heading size='md'>Your Order has been Placed Successfully.......!</Heading>

                        </CardBody>

                        <CardFooter>
                        <Button variant='link' colorScheme='blue'>
                        <AiOutlineLeft/>
                            <Link to="/">Go Back</Link>
                            
                        </Button>
                        </CardFooter>
                    </Stack>
            </Card>
        </>
    );
}

export default OrderSuccess;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams} from "react-router-dom";
import { Box, Button, Card, CardBody, CardFooter, Heading, Image, Stack, Tag, Text, useToast } from "@chakra-ui/react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase-config";

const SingleProduct = ()=>{

    const {path,id} = useParams();
    const [product,setProduct] = useState([]);
    const [email,setEmail] = useState(undefined);
    const navigate = useNavigate();

    const toast = useToast();

    

    const getProduct = ()=>{
        // console.log("inside product",id,path)
      return axios(`http://localhost:8080/${path}/${id}`)
    }
    useEffect(()=>{
        getProduct()
        .then((res)=>setProduct(res.data))
        .catch((err)=>{console.log(err)})
    },[]);
    // console.log(product);

    onAuthStateChanged(auth,(currentUser)=>{
        if(currentUser) setEmail(currentUser.email);
        else{
            navigate("/login");
        }
    })

    const handleAddToCart = async ()=>{
        try{
            toast({
                title: 'Item Added to Cart',
                description: "You've successfully added item.",
                status: 'success',
                duration: 3000,
                isClosable: true,
              });
            await axios.post("http://localhost:5001/user/add",{
                email,
                data: product
            });   
            
        }
        catch(err){
            console.log(err);
        }
    };

    

    return(
        <>              
                        <Card
                            bg="gray.100"
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            pt={5}
                            >
                            <Image
                                objectFit='cover'
                                maxW={{ base: '100%', sm: '400px' }}
                                src={product.avatar}
                                alt='Caffe Latte'
                                p={5}
                            />

                            <Stack>
                                <CardBody>
                                <Heading pb={2} size='lg'>{product.mname}</Heading>

                                <Tag size="md" variant='solid' colorScheme='green'>
                                {product.category ? product.category : "Natural"}
                                </Tag>
                                <Text py='2'>
                                    {product.description ? product.description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                                </Text>
                                </CardBody>
                                <Box pl={5}>
                                <Text as='b' fontSize="3xl">Price - ₹ {product.cost}</Text>
                                </Box>
                                

                                <CardFooter>
                                   
                                <Button variant='solid' colorScheme='orange' onClick={handleAddToCart}>
                                    Add to Cart
                                </Button>
                                </CardFooter>
                            </Stack>
                    </Card>
                    
                
           
        </>
    );
}

export default SingleProduct;
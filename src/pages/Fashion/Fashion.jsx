import React,{ useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Image, Stack, Tag, Text, useToast } from "@chakra-ui/react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getFashionData } from "../../Redux/FashionReducer/action";

const Fashion = ()=>{

    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const fashion = useSelector((store)=>store.FashionReducer.fashion);
    const location = useLocation();
    const [page,setPage] = useState(1);

    useEffect(()=>{
        if(location || fashion.length === 0){
            const category = searchParams.getAll("category");
            const queryParams = {
                params:{
                    category:category,
                    _sort:searchParams.get("sortBy") && "cost",
                    _order:searchParams.get("sortBy"),
                    _page:page,
                    _limit:6
                }
            }

        dispatch(getFashionData(queryParams));
        }
    },[location.search,page])

    return(
        <>
        {
            fashion.length >0 && fashion.map((item)=>{
                return(
                    
                    <Box boxShadow="lg" rounded="md" p={5} key={item.id}>
                        
                        <Stack alignItems="center">
                            <Link to={`/collection/${item.id}`}>
                                <Image src={item.avatar} boxSize="10rem" />
                            </Link>
                            <Box>
                                <Tag size="sm" colorScheme="red">{item.category ? item.category :"Natural"}</Tag>                                        
                            </Box> 
                            <Text as="b">{item.mname}</Text>
                            <Text>{item.subname}</Text>
                            <Text as='b'>₹ {item.cost}/-</Text>  
                                                                    
                        </Stack>
                    </Box>
                )
            })
        }
        <br/>
        <Box pl={9} m={5}>
            
            <Button colorScheme="red" size="sm" isDisabled={page === 1} onClick={()=>setPage(prev=>prev - 1)}>PREV</Button>
            <Button size="sm">{page}</Button>
            <Button colorScheme="red" size="sm"onClick={()=>setPage(prev=>prev + 1)}>NEXT</Button>
        </Box>

        </>
    )
}

export default Fashion;
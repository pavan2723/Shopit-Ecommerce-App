import React,{ useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getElectronicsData } from "../../Redux/ElectronicsReducer/action";
import { Box, Button, Image, Stack, Tag, Text, useToast } from "@chakra-ui/react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";


const Electronics = ()=>{

    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const electronics = useSelector((store)=>store.ElectronicsReducer.electronics);
    const location = useLocation();
    const [page,setPage] = useState(1);
   

    useEffect(()=>{
        if(location || electronics.length === 0){
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

        dispatch(getElectronicsData(queryParams));
        }
    },[location.search,page]);

   
    return(
        <>
        {
            electronics.length >0 && electronics.map((item)=>{
                return(
                    <Box boxShadow="lg" rounded="md" p={2} key={item.id}>
                        <Stack alignItems="center">
                            <Link to={`/electronics/${item.id}`}>
                            <Image src={item.avatar} boxSize="10rem" />
                            </Link>  
                            <Text as="b">{item.brand}</Text>
                           
                            <Box>
                                <Tag size="sm" colorScheme="red">{item.category}</Tag>                                        
                            </Box> 
                            <Text>{item.mname}</Text>
                            <Text as='b'>₹ {item.cost}/-</Text>  
                                                                  
                        </Stack>
                    </Box>
                )
            })
        }
        <Box></Box>
           <Box pl={9} m={5}>
               
               <Button colorScheme="red" size="sm" isDisabled={page === 1} onClick={()=>setPage(prev=>prev - 1)}>PREV</Button>
               <Button size="sm">{page}</Button>
               <Button colorScheme="red" size="sm"onClick={()=>setPage(prev=>prev + 1)}>NEXT</Button>
           </Box>

        </>
    )
}

export default Electronics;
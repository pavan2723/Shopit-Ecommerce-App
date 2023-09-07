import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGroceriesData } from "../../Redux/GroceriesReducer/action";
import { Box, Button, Image, Stack, Tag, Text, useToast } from "@chakra-ui/react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const Groceries = ()=>{

    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const groceries = useSelector((store)=>store.GroceriesReducer.groceries);
    const location = useLocation();
    const toast = useToast();
    const [page,setPage] = useState(1);


    useEffect(()=>{
        if(location || groceries.length === 0){
            const queryParams = {
                params:{
                    _sort:searchParams.get("sortBy") && "cost",
                    _order:searchParams.get("sortBy"),
                    _page:page,
                    _limit:6
                }
            }
        
            dispatch(getGroceriesData(queryParams));
        }
    },[location.search,page]);

    
    return(
        <>
        
        {
            groceries.length > 0 && groceries.map((item)=>{
                return(
                    <Box boxShadow="lg" rounded="md" p={2} key={item.id}>
                        <Stack alignItems="center">
                        <Link to={`/groceries/${item.id}`}>
                            <Image src={item.avatar} boxSize="13rem" />
                        </Link>
                            <Box>
                                <Tag size="sm" colorScheme="red">{item.category}</Tag>                                        
                            </Box> 
                            <Text as="b">{item.mname}</Text>
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

export default Groceries;
import {  Box, Divider, Radio, RadioGroup, Spacer, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


const FilterSort = ()=>{
    const [searchParams,setSearchParams] = useSearchParams();
    const [sortBy,setSortBy] = useState(searchParams.get("sortBy") || "");

    

    const handleSortBy = (e)=>{
        setSortBy(e.target.value)
    };

    useEffect(()=>{
        const params = {};
        sortBy && (params.sortBy = sortBy);
        setSearchParams(params);
    },[setSearchParams,sortBy]);

    return(
        <>
            
        <Box textAlign="center" pt={5}>
        <Text  as='b' fontSize="xl">Price</Text>

        </Box>

        <RadioGroup >
            <Stack m={5} direction='column' onChange={handleSortBy}>
                <Radio name="sortBy" value="asc">
                Low to High
                </Radio>
                <Radio name="sortBy" value="desc">
                High to Low
                </Radio>
            </Stack>
        </RadioGroup>
       
       </>
    )
}

export default FilterSort;
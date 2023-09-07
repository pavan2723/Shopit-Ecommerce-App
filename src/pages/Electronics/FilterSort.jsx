import { Box, Checkbox, Divider, Radio, RadioGroup, Spacer, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


const FilterSort = ()=>{
    const [searchParams,setSearchParams] = useSearchParams();
    const [sortBy,setSortBy] = useState(searchParams.get("sortBy") || "");
    const [category,setCategory] = useState(searchParams.getAll("category") || []);

    const handleFilter = (e)=>{
        const option = e.target.value;

        let newCategory =[...category];
        //check the category present in the array
        if(newCategory.includes(option)){
            //remove it
            newCategory.splice(newCategory.indexOf(option),1);
        }
        else{
            //add it
            newCategory.push(option);
        }
        setCategory(newCategory);
    };

    const handleSortBy = (e)=>{
        setSortBy(e.target.value)
    };

    useEffect(()=>{
        const params = {};
        category && (params.category = category);
        sortBy && (params.sortBy = sortBy);
        setSearchParams(params);
    },[category,setSearchParams,sortBy]);

    return(
        <>
        <Box pt={5} textAlign="center">
        <Text as='b' fontSize="xl">Category</Text>
        </Box>
        
        <Stack direction="column" m={5}>
            <Checkbox defaultChecked={category.includes("AirPods")} onChange={handleFilter} value="AirPods">
                AirPods
            </Checkbox>
            <Checkbox defaultChecked={category.includes("EarPhones")} onChange={handleFilter} value="EarPhones">
                EarPhones
            </Checkbox>
            <Checkbox defaultChecked={category.includes("Watches")} onChange={handleFilter} value="Watches">
                Watches
            </Checkbox>
            <Checkbox defaultChecked={category.includes("PowerBanks")} onChange={handleFilter} value="PowerBanks">
                PowerBanks
            </Checkbox>

        </Stack>
        
        <Box pt={5} textAlign="center">
        <Text as='b' fontSize="xl">Price</Text>
        </Box>

        <RadioGroup>
            <Stack m={5} direction='column' onChange={handleSortBy}>
                <Radio name="sortBy" value="asc" >
                Low to High
                </Radio>
                <Radio name="sortBy" value="desc" >
                High to Low
                </Radio>
            </Stack>
        </RadioGroup>
       
       </>
    )
}

export default FilterSort;
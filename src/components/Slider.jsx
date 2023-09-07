import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box,  Flex, Image } from "@chakra-ui/react";
import {NavLink} from "react-router-dom";



const getSlide = ()=>{
      return axios("http://localhost:8080/corosel");
    };

const HomeSlides = ()=>{
    const [mainSlide,setMainSlide] = useState([]);
    useEffect(()=>{
        getSlide().then((res)=>{setMainSlide(res.data)})
        .catch((err)=>{console.log(err)})
    },[]);

    return(
        <>
        
        <Flex display="block" >
                {
                    mainSlide && mainSlide.map((slide,index)=>{
                        return(
                            <Box key={index} >
                                <NavLink to={slide.link}>
                                <Image className="img" p={1} src={slide.image} alt="slide" width="100%" height="500px"></Image>
                                </NavLink>
                            </Box>
                        );
                    })
                }
            
        </Flex>
        </>
    );
}

export default HomeSlides;
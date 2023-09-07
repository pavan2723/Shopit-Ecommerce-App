import React from "react";
import styled from "styled-components";
import FilterSort from "./FilterSort";
import Fashion from "./Fashion";
const FashionPage = ()=>{
    return(
        <Wrapper>
        <WrapperFilterSort>
            <FilterSort />
        </WrapperFilterSort>
        <WrapperFashionPage>
            <Fashion />
        </WrapperFashionPage>
    </Wrapper>
    );
}

const Wrapper = styled.div`
display:flex;
min-height:83vh;  //navbar is occupying 8 vh height
`;
const WrapperFilterSort = styled.div`
width:200px;
`;


const WrapperFashionPage = styled.div`
width:100%;
display:grid;
grid-template-columns:repeat(auto-fit,minmax(400px,max-content));
grid-gap:10px;
justify-content:center;
background-color:#F0F0EE;

`;

export default FashionPage;
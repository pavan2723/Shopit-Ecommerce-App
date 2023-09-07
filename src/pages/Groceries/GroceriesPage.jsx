import React from "react";
import styled from "styled-components";
import FilterSort from "./FilterSort";
import Groceries from "./Groceries";

const GroceriesPage = ()=>{

    return(
        <Wrapper>
            <WrapperFilterSort>
                <FilterSort/>
            </WrapperFilterSort>
            <WrapperElectronicsPage>
                <Groceries />
            </WrapperElectronicsPage>
        </Wrapper>
    )
};

const Wrapper = styled.div`
display:flex;
min-height:83vh;  //navbar is occupying 8 vh height

`;
const WrapperFilterSort = styled.div`
width:200px;
`;

const WrapperElectronicsPage = styled.div`
width:100%;
display:grid;
grid-template-columns:repeat(auto-fit,minmax(400px,max-content));
grid-gap:10px;
justify-content:center;
background-color:#F0F0EE;

`;

export default GroceriesPage;
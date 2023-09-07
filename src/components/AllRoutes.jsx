import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Bag from "../pages/Bag";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ElectronicsPage from "../pages/Electronics/ElectronicsPage";
import GroceriesPage from "../pages/Groceries/GroceriesPage";
import FashionPage from "../pages/Fashion/FashionPage";
import Offers from "../pages/Offers/Offers";
import SingleProduct from "../pages/SingleProduct";
import OrderSuccess from "./OrderSuccess";
const AllRoutes = ()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/electronics" element={<ElectronicsPage/>}/>
            <Route path="/fashion" element={<FashionPage/>}/>
            <Route path="/groceries" element={<GroceriesPage/>}/>
            <Route path="/offers" element={<Offers/>}/>
            <Route path="/bag" element={<Bag/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/:path/:id" element={<SingleProduct/>}/>
            <Route path="/ordersuccess" element={<OrderSuccess/>}/>

        </Routes>
        </>
    );
}

export default AllRoutes;
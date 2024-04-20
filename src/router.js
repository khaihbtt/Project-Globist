import { Component } from "react";
import HomePage from "./pages/users/homepage/homePage";
import ConutriesPage from "./pages/users/conutries/conutries";
import { Route, Routes } from "react-router-dom";
import { ROUTERS } from "./ulits/router";
import MasterLayout from "./pages/users/theme/masterLayout/masterLayout";


const renderUserRouter = ()=>{
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            Component: <HomePage/>
        },
        {
            path: ROUTERS.USER.CONUTRIES,
            Component: <ConutriesPage/>
        }
    ]

    return (
        <MasterLayout>
            <Routes>
                {
                    userRouters.map((item, key)=>(
                        <Route key={key} path={item.path} element={item.Component}/>
                    ))
                }
            </Routes>
        </MasterLayout>
    )
}





const Routercustom = () => {
    return renderUserRouter();
};

export default Routercustom;
import React from 'react';
import {useSelector} from "react-redux";
import {currentSelector} from "../../features/user/userSlice";
import BodyContent from "../containerOcontent/bodyContainer";
import Home from "../containerIcontent/Home"
import NavBar from "../navBar/navBar";


const Manage = () => {
    const current = useSelector(currentSelector)
    console.log(current)
    return (
        <div>
            <NavBar/>
            {
                current ? <Home/> : <BodyContent/>
            }
        </div>
    );
};

export default Manage;
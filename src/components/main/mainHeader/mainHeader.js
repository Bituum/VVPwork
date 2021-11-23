import React from "react";
import "./mainHeader.css"
import HeaderNavbar from "./header-havbar/header-navbar";

const MainHeader = () =>{
    return(
            <div className="myLogo">
                <div className="headerSign">
                    <h3>
                        Личный новостной портал Дегтева Андрея!
                    </h3>
                    <HeaderNavbar/>
                </div>
            </div>
    );
}

export default MainHeader;
import React from "react";
import "./about.css";

const AboutMe = () =>{
    return(
        <div className="about">
            <div className="AboutMeContent">
                <img src="https://sun9-71.userapi.com/impg/aFSwYBh04r6iYhLMAOX2Nh6Q7yTJbOYydTogtw/LtP41iEXrVo.jpg?size=1024x1024&quality=95&sign=1cf75ea0fa4a5351775351be34c2bfb8&type=album" alt=""
                height="50" width="50"/>
                <a href="https://vk.com/bituum">Страница ВК</a>
            </div>
            <div className="AboutMeContent">
                <img src="https://avatars.githubusercontent.com/u/44177096?v=4" alt=""
                     height="50" width="50"/>
                <a href="https://github.com/Bituum">Github</a>
            </div>
            <div className="AboutMeContent">
                <h3>Почта</h3>
                <h3>sagaty236@gmail.com</h3>
            </div>
            <div className="back">
                <a href="/">Назад</a>
            </div>
        </div>
    );
}

export default AboutMe;
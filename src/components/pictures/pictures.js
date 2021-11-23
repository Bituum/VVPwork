import React from "react";
import "./pictures.css";

const PicturesComponent= () =>{
    return(
        <div className="picturesContainer">
           <div className="back">
               <a href="/">Назад</a>
           </div>
            <div className="pic">
                <img src="https://www.sut.ru/news/data/textimages8/.thumbs/230a0438c47a65526ac91edec5fa30f4_745_0_0.jpg" alt=""/>
            </div>
            <div className="pic">
                <img src="https://www.tadviser.ru/images/0/07/%D0%A1%D0%9F%D0%B1%D0%93%D0%A3%D0%A2.jpg" alt=""/>
            </div>
            <div className="pic">
                <img src="https://www.sut.ru/images/bonc85big.jpg" alt="" width="800"
                     height="400"/>
            </div>

        </div>
    );
}

export default PicturesComponent;
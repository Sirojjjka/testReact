import React from "react";

let Header = () =>{
    return(
        <div className="Header">
            <div className="logo"></div>
            <div className="nav">
                <ul>
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Услуги</a></li>
                    <li><a href="#">Наши работы</a></li>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </div>
            <div className="flags">
                <button className="dropbtn">Choose Country</button>
                    <ul className="flag">
                        <li className="flag1"><a href="#"></a></li>
                        <li className="flag2"><a href="#"></a></li>
                        <li className="flag3"><a href="#"></a></li>

                    </ul>
            </div>
        </div>
    )
}
export default Header;
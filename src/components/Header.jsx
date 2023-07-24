import React from 'react';
import '../style/Header.css'
import search from '../images/Search.svg'
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className="header">
            <h1 className="logotype">LOGO</h1>
            <div className="header-components">
                <img src={search} alt=""/>
                <p className="header-par">Популярне</p>
                <p className="header-par">Типи аккаунтів</p>
                <button className="sign" onClick={() => {navigate('/watch')}}>Увійти</button>
            </div>
        </div>
    );
};

export default Header;
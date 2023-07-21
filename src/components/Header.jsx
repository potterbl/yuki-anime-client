import React from 'react';
import '../style/Header.css'
import search from '../images/Search.svg'

const Header = () => {
    return (
        <div className="header">
            <h1 className="logotype">LOGO</h1>
            <div className="header-components">
                <img src={search} alt=""/>
                <p className="header-par">Популярне</p>
                <p className="header-par">Типи аккаунтів</p>
                <button className="sign">Увійти</button>
            </div>
        </div>
    );
};

export default Header;
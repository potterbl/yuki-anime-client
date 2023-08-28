import React, { useState, useEffect } from 'react';
import '../style/UserMenu.css';
import logout from '../images/logout.svg';
import history from '../images/history.svg';
import login from '../images/login.svg'
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const UserMenu = (props) => {
    const isSearch = useSelector(state => state.header.isSearch)

    const navigate = useNavigate()

    const [isMenu, setIsMenu] = useState(false);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (isMenu && !event.target.closest(".user-menu") && !event.target.closest(".user-menu__btn")) {
                setIsMenu(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isMenu]);

    return (
        <>
            {
                window.innerWidth <= 425 && !isSearch ?
                    <>
                        <button
                            className={`user-menu__btn ${!props.isLogged ? 'notification' : ''}`}
                            onClick={() => setIsMenu(!isMenu)}
                        >

                        </button>
                        <div className={`user-menu ${isMenu ? 'user-menu__active' : ''} ${!props.isLogged ? 'user-menu__single' : ''}`}>
                            {props.isLogged ?
                                <>
                                    <button
                                        className="user-menu__action"
                                        style={{ backgroundImage: `url(${history})` }}
                                        onClick={() => {
                                            navigate('/history')
                                        }}
                                    >
                                        Історія перегляду
                                    </button>
                                    <button
                                        className="user-menu__action"
                                        style={{ backgroundImage: `url(${logout})` }}
                                        onClick={() => {
                                            localStorage.removeItem('token')
                                            window.location.reload()
                                        }}
                                    >
                                        Вийти з аккаунту
                                    </button>
                                </>
                                :
                                <button
                                    className="user-menu__action"
                                    style={{backgroundImage: `url(${login})`}}
                                    onClick={() => navigate('/auth/login')}
                                >
                                    Увійти в аккаунт
                                </button>
                            }
                        </div>
                    </>
                    : window.innerWidth > 425 ?
                        <>
                            <button
                                className={`user-menu__btn ${!props.isLogged ? 'notification' : ''}`}
                                onClick={() => setIsMenu(!isMenu)}
                            >

                            </button>
                            <div className={`user-menu ${isMenu ? 'user-menu__active' : ''} ${!props.isLogged ? 'user-menu__single' : ''}`}>
                                {props.isLogged ?
                                    <>
                                        <button
                                            className="user-menu__action"
                                            style={{ backgroundImage: `url(${history})` }}
                                            onClick={() => {
                                                navigate('/history')
                                            }}
                                        >
                                            Історія перегляду
                                        </button>
                                        <button
                                            className="user-menu__action"
                                            style={{ backgroundImage: `url(${logout})` }}
                                            onClick={() => {
                                                localStorage.removeItem('token')
                                                window.location.reload()
                                            }}
                                        >
                                            Вийти з аккаунту
                                        </button>
                                    </>
                                    :
                                    <button
                                        className="user-menu__action"
                                        style={{backgroundImage: `url(${login})`}}
                                        onClick={() => navigate('/auth/login')}
                                    >
                                        Увійти в аккаунт
                                    </button>
                                }
                            </div>
                        </> : null
            }
        </>
    );
};

export default UserMenu;
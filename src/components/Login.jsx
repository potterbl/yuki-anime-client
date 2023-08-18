import React, { useEffect, useState } from 'react';
import validator from 'validator';
import '../style/Login.css';
import emailIcon from "../images/Email.svg";
import passwordIcon from "../images/Password.svg";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isEmail, setIsEmail] = useState(false);
    const [isPassword, setIsPassword] = useState(false);

    const [isBadMail, setIsBadMail] = useState(false);
    const [isBadPass, setIsBadPass] = useState(false);

    const [isBadAccount, setIsBadAccount] = useState(false)

    useEffect(() => {
        setEmail(email.trim()); // Убираем начальные и конечные пробелы из email
        setPassword(password.trim()); // Убираем начальные и конечные пробелы из пароля

        setIsEmail(email !== '');
        setIsPassword(password !== '');

        if (email !== '') {
            setIsBadMail(!validator.isEmail(email));
        } else {
            setIsBadMail(false);
        }

        if (password !== '') {
            setIsBadPass(!validator.isLength(password, { min: 6 }) || !/\d{2}/.test(password));
        } else {
            setIsBadPass(false);
        }
    }, [email, password]);

    const loginMe = (email, password) => {
        axios
            .post('https://yuki-anime.up.railway.app/auth/login', {
                login: email,
                password: password
            })
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data)
                navigate('/')
            })
            .catch(err => {
                console.log(err)
                setIsBadAccount(true)
            })
    }

    return (
        <div className="login">
            <h2 className="login-header">Log in</h2>
            <div className="sign-inp__wrapper">
                <input
                    type="email"
                    className="sign-inp"
                    style={{ backgroundImage: `url(${emailIcon})` }}
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <p className={`sign-text ${isEmail ? 'sign-text__active' : ''} ${isBadMail || isBadAccount ? 'sign-text__bad' : ''}`}>
                    {isBadAccount ? 'Логін або пароль не вірний' : isBadMail ? 'Введіть корректну пошту' : 'Введіть ваш емейл'}
                </p>
            </div>
            <div className="sign-inp__wrapper">
                <input
                    type="password"
                    className="sign-inp"
                    style={{ backgroundImage: `url(${passwordIcon})` }}
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <p className={`sign-text ${isPassword ? 'sign-text__active' : ''} ${isBadPass ? 'sign-text__bad' : ''}`}>
                    {isBadPass ? 'Введіть пароль (від 6 символів і 2 цифри)' : 'Введіть пароль'}
                </p>
            </div>
            <div className="sign-btns">
                <button
                    onClick={() => loginMe(email,password)}
                    className={`sign-btn ${isBadMail || isBadPass ? 'sign-btn__disabled' : ''}`}
                >
                    Sign Up
                </button>
                <p
                    className="sign-btns__login-sign"
                    onClick={() => navigate('/auth/sign')}
                >
                    У важ ще немає аккаунту?
                </p>
                <p className="sign-btns__remeber">Забули пароль?</p>
            </div>
        </div>
    );
};

export default Login;
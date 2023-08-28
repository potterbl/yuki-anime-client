import React, { useEffect, useState } from 'react';
import validator from 'validator';
import '../style/Login.css';
import emailIcon from "../images/Email.svg";
import passwordIcon from "../images/Password.svg";
import {useNavigate} from "react-router-dom";
import {useLoginMutation} from "../store/userApi/user.api";

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
        setEmail(email.trim());
        setPassword(password.trim());

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

    const [loginMe] = useLoginMutation()

    const handleLogin = async (email, password) => {
        const res = await loginMe({login: email, password})
        if(res.data) {
            localStorage.setItem('token', res.data.token)
            navigate('/')
        }
        if(res.error){
            setIsBadAccount(true)
        }
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
                    onClick={() => handleLogin(email, password)}
                    className={`sign-btn ${isBadMail || isBadPass ? 'sign-btn__disabled' : ''}`}
                >
                    Log In
                </button>
                <p
                    className="sign-btns__login-sign"
                    onClick={() => navigate('/auth/sign')}
                >
                    У важ ще немає аккаунту?
                </p>
                <p
                    className="sign-btns__remeber"
                    onClick={() => navigate('/auth/forget')}
                >
                    Забули пароль?
                </p>
            </div>
        </div>
    );
};

export default Login;
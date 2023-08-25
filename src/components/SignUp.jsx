import React, {useEffect, useState} from 'react';
import emailIcon from '../images/Email.svg'
import passwordIcon from '../images/Password.svg'
import validator from "validator";
import {useNavigate} from "react-router-dom";
import {useRegistrationMutation} from "../store/userApi/user.api";

const SignUp = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVerify, setPasswordVerify] = useState('');

    const [isEmail, setIsEmail] = useState(false);
    const [isPassword, setIsPassword] = useState(false);
    const [isPasswordVerify, setIsPasswordVerify] = useState(false);

    const [isBadMail, setIsBadMail] = useState(false);
    const [isBadPass, setIsBadPass] = useState(false);
    const [isBadPassVerify, setIsBadPassVerify] = useState(false);

    const [isBadAccount, setIsBadAccount] = useState(false);

    useEffect(() => {
        setEmail(email.trim()); // Убираем начальные и конечные пробелы из email
        setPassword(password.trim()); // Убираем начальные и конечные пробелы из пароля

        setIsEmail(email !== '');
        setIsPassword(password !== '');
        setIsPasswordVerify(passwordVerify !== '')

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

        if (passwordVerify !== '') {
            setIsBadPassVerify(!validator.isLength(passwordVerify, { min: 6 }) || !/\d{2}/.test(password));
            setIsBadPassVerify(passwordVerify !== password)
        } else {
            setIsBadPassVerify(true);
        }
    }, [email, password, passwordVerify]);

    const [registerMe] = useRegistrationMutation()

    const handleRegistration = async (login, password) => {
        const payload = {login: login, password: password}

        const res = await registerMe({payload})

        if(res.data) {
            localStorage.setItem('token', res.data.token)
            navigate('/')
        } else if (res.error) {
            setIsBadAccount(true)
        }
    }

    return (
        <div className="login">
            <h2 className="login-header">Sign Up</h2>
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
                    {isBadAccount ? 'Дана електрона адреса вже використовується' : isBadMail ? 'Введіть корректну пошту' : 'Введіть ваш емейл'}
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
            <div className="sign-inp__wrapper">
                <input
                    type="password"
                    className="sign-inp"
                    style={{ backgroundImage: `url(${passwordIcon})` }}
                    value={passwordVerify}
                    onChange={(e) => {
                        setPasswordVerify(e.target.value);
                    }}
                />
                <p className={`sign-text ${isPasswordVerify ? 'sign-text__active' : ''} ${isBadPassVerify ? 'sign-text__bad' : ''}`}>
                    {isBadPassVerify ? 'Підтвердіть пароль' : 'Повторіть ваш пароль (від 6 символів і 2 цифри)'}
                </p>
            </div>
            <div className="sign-btns">
                <button
                    onClick={() => handleRegistration(email, password)}
                    className={`sign-btn ${isBadMail || isBadPass || isBadPassVerify ? 'sign-btn__disabled' : ''}`}
                >
                    Sign Up
                </button>
                <p
                    className="sign-btns__login-sign"
                    onClick={() => navigate('/auth/login')}
                >
                    У важ вже є акаунт?
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

export default SignUp;
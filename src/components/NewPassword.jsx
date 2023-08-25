import React, {useEffect, useState} from 'react';
import passwordIcon from "../images/Password.svg";
import validator from "validator";
import {useForgetUpdateMutation} from "../store/userApi/user.api";
import {useNavigate} from "react-router-dom";

const NewPassword = ({token}) => {
    const navigate = useNavigate()

    const [password, setPassword] = useState('')
    const [isBadPass, setIsBadPass] = useState(false)

    useEffect(() => {
        if(password !== ''){
            setIsBadPass(!validator.isLength(password, { min: 6 }) || !/\d{2}/.test(password))
        } else {
            setIsBadPass(true)
        }
    }, [password])

    const [updatePassword] = useForgetUpdateMutation()

    const handleUpdatePassword = async (token, password) => {
        const updatePasswordRes = await updatePassword({token, password})

        if(updatePasswordRes.data){
            localStorage.setItem('token', updatePasswordRes.data.token)
            navigate('/')
        }
        if(updatePasswordRes.error){
            console.log(updatePasswordRes.error)
        }
    }

    return (
        <div className="login">
            <h2 className="login-header">Log in</h2>
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
                <p className={`sign-text ${password !== '' ? 'sign-text__active' : ''} ${isBadPass ? 'sign-text__bad' : ''}`}>
                    {isBadPass ? 'Введіть пароль (від 6 символів і 2 цифри)' : 'Введіть пароль'}
                </p>
            </div>
            <div className="sign-btns">
                <button
                    onClick={() => handleUpdatePassword(token, password)}
                    className={`sign-btn ${isBadPass ? 'sign-btn__disabled' : ''}`}
                >
                    Sign In
                </button>
            </div>
        </div>
    );
};

export default NewPassword;
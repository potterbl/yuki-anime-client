import React, {useEffect, useState} from 'react';
import emailIcon from "../images/Email.svg";
import validator from 'validator'
import {useNavigate} from "react-router-dom";
import {useForgetSendMailMutation} from "../store/userApi/user.api";
import Swal from 'sweetalert2'
import '@sweetalert2/theme-dark/dark.css'

const Forget = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')

    const [isBadAccount, setIsBadAccount] = useState(false)
    const [isBadMail, setIsBadMail] = useState(true);

    const [isEmail, setIsEmail] = useState(false);

    useEffect(() => {
        setEmail(email.trim());

        if(email !== ''){
            setIsBadMail(!validator.isEmail(email))
        } else {
            setIsBadMail(true)
        }

        setIsEmail(email !== '')
    }, [email])

    const [sendMail] = useForgetSendMailMutation()

    const handleMailSend = async (email) => {
        const sendMailRes = await sendMail({email})

        if(sendMailRes.data) {
            Swal.fire({
                title: 'Success',
                text: sendMailRes.data.message,
                icon: 'success',
            })
            console.log(sendMailRes.data)
        }
        if(sendMailRes.error) {
            console.log(sendMailRes.error)
            setIsBadAccount(true)
        }
    }

    return (
            <div className="login">
                <h2 className="login-header">Forget password</h2>
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
                        {isBadAccount ? 'Аккаунта з такою поштою не знайдено' : isBadMail ? 'Введіть корректну пошту' : 'Введіть ваш емейл'}
                    </p>
                </div>
                <div className="sign-btns">
                    <button
                        onClick={() => handleMailSend(email)}
                        className={`sign-btn ${isBadMail ? 'sign-btn__disabled' : ''}`}
                    >
                        Send Mail
                    </button>
                    <p
                        className="sign-btns__login-sign"
                        onClick={() => navigate('/auth/login')}
                    >
                        У вас вже є аккаунт?
                    </p>
                </div>
            </div>
    );
};

export default Forget;
import React from 'react';
import '../style/mainScreen.css'
import {useNavigate} from "react-router-dom";

const MainScreen = () => {
    const navigate = useNavigate()
    return (
        <div className="main__screen">
            <div className="main__inner">
                <div className="main__text-box">
                    <h1 className='gradient'>Дивись аніме з хмари</h1>
                    <div className="main__sign-up">
                        <button className="sign" onClick={() => navigate('/watch')}>Зареєструватися</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainScreen;
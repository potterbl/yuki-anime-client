import React from 'react';
import '../style/mainScreen.css'

const MainScreen = () => {
    return (
        <div className="main__screen">
            <div className="main__inner">
                <div className="main__text-box">
                    <h1 className='gradient'>Дивись аніме з хмари</h1>
                    <div className="main__sign-up">
                        <button className="sign">Зареєструватися</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainScreen;
import React from 'react';
import '../style/Plans.css'
import x from '../images/X.svg'
import checked from '../images/Check.svg'
const Plans = () => {
    return (
        <div className="plans">
            <h2 className="plans-caption">Тарифні плани</h2>
            <div className="plans-cards">
                <div className="plans-card">
                    <div className="card-header">
                        <p className="card-heading">Starter</p>
                    </div>
                    <div className="card-body">
                        <div className="card-punkt">
                            <img src={checked} alt=""/>
                            <p className="can">Ачівки</p>
                            <img src={checked} alt=""/>
                            <p className="can">Рівень акаунту</p>
                            <img src={x} alt=""/>
                            <p className="cant">Буст рівня 3 г. на добу</p>
                            <img src={x} alt=""/>
                            <p className="cant">Перегляд без реклами</p>
                            <img src={x} alt=""/>
                            <p className="cant">Можливість робити свої підбірки</p>
                        </div>
                    </div>
                    <div className="card-bottom">
                        <p className="price-card">0 ₴ / mo.</p>
                        <button className="sign">Перейти</button>
                    </div>
                </div>
                <div className="plans-card">
                    <div className="card-header">
                        <p className="card-heading">Comfort</p>
                    </div>
                    <div className="card-body">
                        <div className="card-punkt">
                            <img src={checked} alt=""/>
                            <p className="can">Ачівки</p>
                            <img src={checked} alt=""/>
                            <p className="can">Рівень акаунту</p>
                            <img src={checked} alt=""/>
                            <p className="can">Буст рівня 3 г. на добу</p>
                            <img src={checked} alt=""/>
                            <p className="can">Перегляд без реклами</p>
                            <img src={checked} alt=""/>
                            <p className="can">Можливість робити свої підбірки</p>
                        </div>
                    </div>
                    <div className="card-bottom">
                        <p className="price-card">80 ₴ / mo.</p>
                        <button className="sign">Перейти</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plans;
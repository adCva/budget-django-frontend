import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openAddItemForm } from "../Redux/globalVarSlice";
import { openLimitForm } from "../Redux/limitSlice";
import LimitForm from './LimitForm';

function Hero() {
    const dispatch = useDispatch();
    const totalLimit = useSelector((state) => state.limit.totalLimit);
    const reamaningDaysLimit = useSelector((state) => state.limit.remainingDays)

    return (
        <div className='hero-wrapper'>
            <div className='hero-container'>

            <LimitForm />

                {/* =========== Logo & Add expense button =========== */}
                <nav>
                    <p className='logo'>quko</p>
                    <button onClick={() => dispatch(openAddItemForm())}>Add</button>
                </nav>

                {/* =========== Total limit display and change button =========== */}
                <div className='hero-group'>
                    <div className='hero-text'>
                        <span>current total</span>
                        <p>this month you have set a limit for yourself of</p>
                        <h1>$ {totalLimit}</h1>
                        <button onClick={() => dispatch(openLimitForm())}>Change</button>
                    </div>
                    <img src="./finance.svg" alt="Save money." />
                </div>

                {/* =========== Do androids dream of electric sheep ? =========== */}
                <h4>Remaining days for this limit</h4>
                <h5>{reamaningDaysLimit} days left</h5>


                
            </div>
        </div>
    )
}

export default Hero;
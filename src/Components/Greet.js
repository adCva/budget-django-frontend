import React, { useState } from 'react';

function Greet() {
    const [showMessage, setShowMessage] = useState(true);

    return (
        <div className={showMessage ? "greet-wrapper" : "greet-wrapper-hide"}>
            <div className='greet-container'>
                <h1>This functions as the frontend demo for the Budget Django App in this repo: <a href="https://github.com/adCva/budget-django" target="_blank" rel="noreferrer">Repo</a></h1>
                <button onClick={() => setShowMessage(false)}>Close</button>
            </div>
        </div>
    )
}

export default Greet;
import React, { useState } from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { createData } from "../Redux/expenditureSlice";
import { closeAddItemForm } from "../Redux/globalVarSlice";

function Form() {
    const dispatch = useDispatch();

    // ================== Redux state.
    const isAddStarted = useSelector((state) => state.globalVar.addFormOpened);
    const lastElementInState = useSelector((state) => state.expenditures.expData); // Get the id of the last element and add 1, used for when creating a new element.

    // ================== Local state.
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [spent, setSpent] = useState();
    const [type, setType] = useState("");


    // ================== Handle form submit.
    const handleSubmit = (e) => {
        e.preventDefault();

        const date = new Date();
        let lastIDValue = lastElementInState[lastElementInState.length - 1].id;
        let objectData = {
            id: lastIDValue + 1,
            name: name,
            desc: desc,
            spent: spent,
             type: type,
            created_at: `${date.getFullYear()}-${date.getDate()}-${date.getDay()}`
        }

        dispatch(createData({newElement: objectData}));
        dispatch(closeAddItemForm());
    }
    


    return (
        <div className={isAddStarted ? "create-form-wrapper" : "create-form-wrapper hide-create-form-wrapper"}>
            <div className='form-container'>
                {/* ======================= Form ======================= */}
                <form onSubmit={handleSubmit}>

                    {/* ======================= Form Group ======================= */}
                    <div className='form-group'>
                        <label>Name</label>
                        <input type="text" onChange={(e) => setName(e.target.value)} />
                    </div>

                    {/* ======================= Form Group ======================= */}
                    <div className='form-group'>
                        <label>Description</label>
                        <textarea onChange={(e) => setDesc(e.target.value)}></textarea>
                    </div>

                    {/* ======================= Form Group ======================= */}
                    <div className='form-group'>
                        <label>Total spent</label>
                        <input type="number" onChange={(e) => setSpent(e.target.value)} />
                    </div>

                    {/* ======================= Form Group ======================= */}
                    <div className='form-group'>
                        <label>Expenditure type</label>
                        <select onChange={(e) => setType(e.target.value)} >
                            <option value="HM">Home</option>
                            <option value="BL">Bill</option>
                            <option value="FD">Food</option>
                            <option value="TR">Transport</option>
                            <option value="MC">Miscellaneous</option>
                        </select>
                    </div>

                    <button type="submit">Submit</button>
                </form>

                <button onClick={() => dispatch(closeAddItemForm())}>Close Form</button>
            </div>
        </div>
    )
}

export default Form;
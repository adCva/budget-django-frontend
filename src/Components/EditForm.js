import React, { useState, useEffect } from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { updateData } from "../Redux/expenditureSlice";
import { closeEdit } from "../Redux/editSlice";

function EditForm() {
    const dispatch = useDispatch();
    const editItemData = useSelector((state) => state.edit.editExp);
    const isEditStarted = useSelector((state) => state.edit.editFormOpened);

    // ================== Local state.
    const [name, setName] = useState("");
    const [desc, setDesc] = useState('');
    const [spent, setSpent] = useState();
    const [type, setType] = useState('');



    // ================== Handle form submit.
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name)
        console.log(editItemData.name)

        let updatedEl = {
            id: editItemData.id, 
            name: name,
            desc: desc,
            spent: spent,
            type: type,
            created_at: editItemData.created_at
        }

        dispatch(updateData({updatedElelemnt: updatedEl}));
        dispatch(closeEdit());
    };

    useEffect(() => {
        setName(editItemData.name);
        setDesc(editItemData.desc);
        setSpent(editItemData.spent);
        setType(editItemData.type);
    }, [isEditStarted])

    
    return (
        <div className={isEditStarted ? "edit-form-wrapper" : "edit-form-wrapper hide-edit-form-wrapper"}>
            <div className='form-container'>

                {/* ======================= Form ======================= */}
                <form onSubmit={handleSubmit}>

                    {/* ======================= Form Group ======================= */}
                    <div className='form-group'>
                        <label>Name</label>
                        <input type="text" onChange={(e) => setName(e.target.value)} defaultValue={name} />
                    </div>

                    {/* ======================= Form Group ======================= */}
                    <div className='form-group'>
                        <label>Description</label>
                        <textarea onChange={(e) => setDesc(e.target.value)} defaultValue={desc}></textarea>
                    </div>

                    {/* ======================= Form Group ======================= */}
                    <div className='form-group'>
                        <label>Total spent</label>
                        <input type="number" onChange={(e) => setSpent(e.target.value)} defaultValue={spent} />
                    </div>

                    {/* ======================= Form Group ======================= */}
                    <div className='form-group'>
                        <label>Expenditure type</label>
                        <select onChange={(e) => setType(e.target.value)} value={type}>
                            <option value="HM">Home</option>
                            <option value="BL">Bill</option>
                            <option value="FD">Food</option>
                            <option value="TR">Transport</option>
                            <option value="MC">Miscellaneous</option>
                        </select>
                    </div>

                    <button type="submit">Submit</button>

                </form>

                <button onClick={() => dispatch(closeEdit())}>Close form</button>
            </div>
        </div>
    )
}

export default EditForm;
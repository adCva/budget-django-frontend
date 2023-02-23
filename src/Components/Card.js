import React, { useState } from 'react';
// ================== Redux.
import { useSelector, useDispatch } from 'react-redux';
import { startEdit } from "../Redux/editSlice";
import { deleteData } from "../Redux/expenditureSlice";
// ================== React icons.
import { MdOutlineEmojiTransportation } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline, MdOutlineDescription, MdMiscellaneousServices, MdOutlineFastfood } from 'react-icons/md';
import { BsTypeStrikethrough } from 'react-icons/bs';
import { GiReceiveMoney } from 'react-icons/gi';
import { BiHomeSmile } from 'react-icons/bi';
import { FaRegMoneyBillAlt } from 'react-icons/fa';



function Card(props) {
    const dispatch = useDispatch();
    const filterBy = useSelector((state) => state.globalVar.filterBy);
    const [confirmDelete, setConfirmDelete] = useState(false);

    
    const typeSymbol = {
        'HM': <BiHomeSmile />,
        'MC': <MdMiscellaneousServices />,
        'TR': <MdOutlineEmojiTransportation />,
        'FD': <MdOutlineFastfood />,
        'BL': <FaRegMoneyBillAlt />,
    }


    const expTypes = {
        "HM": "Home",
        "BL": "Bill",
        "FD": "Food",
        "TR": "Transport",
        "MC": "Miscellaneous",
    }


    // For editing. Could also pass {...el} in Content, could also do other things. Too lazy to change the JSX with this instead of props.etc .
    const elementData = {
        id: props.pk,
        name: props.name,
        desc: props.description,
        spent: props.spent,
        type: props.type,
        created_at: props.createdAt
    };


    const deleteItem = (pk) => {
        dispatch(deleteData({deleteId: pk}));
        setConfirmDelete(false);
    }

    
    return (
        <div className={filterBy === 'All' ? "card-wrapper show-card" : filterBy === expTypes[props.type] ? "card-wrapper show-card" : "hide-card"}>
            <div className='card-container'>
                <span className={`type-logo type-logo-${props.type}`}>{typeSymbol[props.type]}</span>

                {/* =========== Card details, name, description, total spent & type =========== */}
                <div className='card-details'>

                    <div className='detail-group'>
                        <span><MdOutlineDriveFileRenameOutline/></span>
                        <h2>{props.name}</h2>
                    </div>

                    <div className='detail-group'>
                        <span><MdOutlineDescription /></span>
                        <h2>{props.description}</h2>
                    </div>

                    <div className='detail-group'>
                        <span><GiReceiveMoney /></span>
                        <h2>{props.spent}</h2>
                    </div>

                    <div className='detail-group'>
                        <span><BsTypeStrikethrough /></span>
                        <h2>{expTypes[props.type]}</h2>
                    </div>

                </div>

                {/* =========== Card buttons, edit & delete =========== */}
                <div className='card-buttons'>
                    <button onClick={() => dispatch(startEdit({editItem: elementData}))}>Edit</button>
                    <button onClick={() => setConfirmDelete(true)}>Delete</button>
                </div>

            </div>


        </div>
    )
}

export default Card;

/*
            <div className={confirmDelete ? 'confirmDelete-wrapper' : 'confirmDelete-wrapper confirmDelete-wrapper-hide'}>
                <div className='confirmDelete-container'>
                    <button onClick={() => deleteItem(props.pk)}>Confirm</button>
                    <button onClick={() => setConfirmDelete(false)}>Cancel</button>
                </div>
            </div>

*/
import React, { useState } from 'react';
import { RiDeleteBinLine, FiEdit } from 'react-icons/all';

const ListItem = (props) => {

    const [editedItem, setEditedItem] = useState(props.item.task);
    const [editmode, setEditMode] = useState(false);

    const saveTaskHandler = () => {
        props.editItemHandler(editedItem,props.idx);
        setEditMode(false);

        
    }

    const editHandler = () => {
        setEditMode(true);
    }


    return (
        <div className="item">

            <div className="name">
                {props.item.userName}
                <button className="delete-btn" onClick={() => props.deleteHandler(props.idx)}><RiDeleteBinLine /></button>
            </div>

            <div className="ability">
                Ability: {props.item.ability}
            </div>

            <div className="task">
                {editmode ? (<>
                    <textarea value={editedItem} onChange={e =>setEditedItem(e.target.value) } className="edit-box" name="Text1" cols="40" rows="5"></textarea>
                    <button className="save-btn" onClick={saveTaskHandler}>Save Task</button>
                </>) : (
                    <div>
                        Task: {props.item.task}
                        <button className="edit-btn" onClick={editHandler}><FiEdit /></button>
                    </div>)
                }
            </div>

        </div>
    )
}

export default ListItem;
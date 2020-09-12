import React, { useState } from 'react'
import { connect } from 'react-redux'
import { editStore } from '../../../actions/editStore'
import { Link } from 'react-router-dom'

const StoreItem = (props) => {
    const [settings, setSettings] = useState(false)
    const [editing, setEditing] = useState(false)
    const [item, setItem] = useState({
        item_name: props.item.item_name,
        item_price: props.item.item_price,
    })

    const toggleSettings = () => {
        setSettings(!settings)
    }

    const changeHandler = (e) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value
        })
    }

    const editItemBtn = () => {
        setEditing(true)
    }

    const closeModal = () => {
        setEditing(false)
    }

    const updateItem = () => {
        props.editItem(props.item.item_id, {
            item_name: item.name,
            item_price: item.item_price,
        })
        closeModal()
        document.querySelector('#edit-item-form').reset()
    }

    const deleteItemBtn = () => {
        props.deleteItem(props.item.item_id)
    }

    return(
        <div className="item-box">
            {editing ?
                <div>
                    <div className="edit-item-modal">
                        <div className="modal-info">
                            <h1 className="edit-item-modal-title">Edit Item</h1>
                            <form id="edit-item-form">
                                <input onChange={changeHandler} name='item_name' placeholder={item.item_name}/>
                                <input onChange={changeHandler} name='item_price' placeholder={item.item_price}/>
                            </form>
                            <div className="modal-button-box">
                                <h2 onClick={closeModal} id="item-cancel">Cancel</h2>
                                <h2 onClick={updateItem} id="item-update">Update item</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div onClick={toggleSettings} className="item-settings-icon">
                            <ion-icon name="ios-settings" />
                        </div>
                        <h1>{item.item_name}</h1>
                        <h2>{props.price}</h2>
                    </div>
                </div>
            :
                <div>
                    {settings ?
                        <div>
                            <div onClick={toggleSettings} className="item-settings-icon">
                                <ion-icon name="ios-close" />
                            </div>
                            <h1>{item.item_name}</h1>
                            <div className="item-buttons">
                                <h2 onClick={editItemBtn} id="item-edit">Edit</h2>
                                <h2 onClick={deleteItemBtn} id="item-remove">Remove</h2>
                            </div>
                        </div>
                        :
                        <div>
                            <div onClick={toggleSettings} className="item-settings-icon">
                                <ion-icon name="ios-settings" />
                            </div>
                            <h1>{item.item_name}</h1>
                            <h2>${item.item_price}</h2>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        // updateditem: state.itemReducer.item,
        // isFetching: state.itemReducer.isFetching,
        // error: state.itemReducer.error
    }
}

export default connect(mapStateToProps)(StoreItem)
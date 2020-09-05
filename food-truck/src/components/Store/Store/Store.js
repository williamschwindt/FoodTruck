import React, { useState } from 'react'
import { connect } from 'react-redux'
import { editStore } from '../../../actions/editStore'
import { Link } from 'react-router-dom'

const Store = (props) => {
    const [settings, setSettings] = useState(false)
    const [editing, setEditing] = useState(false)
    const [store, setStore] = useState({
        store_name: props.store.store_name,
        store_address: props.store.store_address,
        city_state: props.store.city_state
    })

    const toggleSettings = () => {
        setSettings(!settings)
    }

    const changeHandler = (e) => {
        setStore({
            ...store,
            [e.target.name]: e.target.value
        })
    }

    const editStoreBtn = () => {
        setEditing(true)
    }

    const closeModal = () => {
        setEditing(false)
    }

    const updateStore = () => {
        props.editStore(props.store.store_id, {
            store_name: store.store_name,
            store_address: store.store_address,
            city_state: `${store.city}, ${store.state}`
        })
        closeModal()
        document.querySelector('#edit-store-form').reset()
    }

    const deleteStoreBtn = () => {
        props.deleteStore(props.store.store_id)
    }

    return(
        <div className="store-box">
            {editing ?
                <div>
                    <div className="edit-store-modal">
                        <div className="modal-info">
                            <h1 className="edit-store-modal-title">Edit Store</h1>
                            <form id="edit-store-form">
                                <input onChange={changeHandler} name='store_name' placeholder={store.store_name}/>
                                <input onChange={changeHandler} name='store_address' placeholder={store.store_address}/>
                                <input onChange={changeHandler} name='city' placeholder={store.city_state.slice(0, -4)}/>
                                <input onChange={changeHandler} name='state' maxLength="2" placeholder={store.city_state.slice(-2)}/>
                            </form>
                            <div className="modal-button-box">
                                <h2 onClick={closeModal} id="store-cancel">Cancel</h2>
                                <h2 onClick={updateStore} id="store-update">Update Store</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div onClick={toggleSettings} className="store-settings-icon">
                            <ion-icon name="ios-settings" />
                        </div>
                        <h1>{store.store_name}</h1>
                        <h2>{store.store_address}</h2>
                        <Link to={`store/${props.store.store_id}`}>View Store</Link>
                    </div>
                </div>
            :
                <div>
                    {settings ?
                        <div>
                            <div onClick={toggleSettings} className="store-settings-icon">
                                <ion-icon name="ios-close" />
                            </div>
                            <h1>{store.store_name}</h1>
                            <h2>{store.store_address}</h2>
                            <div className="store-buttons">
                                <h2 onClick={editStoreBtn} id="store-edit">Edit</h2>
                                <h2 onClick={deleteStoreBtn} id="store-remove">Remove</h2>
                            </div>
                        </div>
                        :
                        <div>
                            <div onClick={toggleSettings} className="store-settings-icon">
                                <ion-icon name="ios-settings" />
                            </div>
                            <h1>{store.store_name}</h1>
                            <h2>{store.store_address}</h2>
                            <Link to={`store/${props.store.store_id}`}>View Store</Link>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        updatedStore: state.storeReducer.store,
        isFetching: state.storeReducer.isFetching,
        error: state.storeReducer.error
    }
}

export default connect(mapStateToProps, {editStore})(Store)
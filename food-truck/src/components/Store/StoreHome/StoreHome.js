import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addStore } from '../../../actions/addStore'
import { getStores } from '../../../actions/getStores'
import { deleteStore } from '../../../actions/deleteStore'
import StoreNav from '../StoreNav/StoreNav'
import Store from '../Store/Store'

const StoreHome = (props) => {
    const userId = localStorage.getItem('userId')

   const [storeValues, setStoreValues] = useState({})

   const changeHandler = (e) => {
        setStoreValues({
            ...storeValues,
            [e.target.name]: e.target.value 
        })
   }

    useEffect(() => {
        props.getStores(userId)
    }, [userId])


    const modal = document.querySelector('.add-store-modal')
    const showModal = () => {
        modal.style.display = 'block'
    }

    const closeModal = () => {
        modal.style.display = 'none'
    }

    const addUserStore = () => {
        props.addStore(userId, {
            store_name: storeValues.store_name,
            store_address: storeValues.store_address,
            city_state: `${storeValues.city}, ${storeValues.state}`
        }, props.getStores)
        closeModal()
        document.querySelector('#add-store-form').reset()
    }

    const deleteStoreStateRefresh = (id) => {
        props.deleteStore(id, props.getStores, userId)
    }
    
    return (
        <div>
            <StoreNav />
            <div className='store-home-container'>
                <div className="add-store-modal">
                    <div className="modal-info">
                        <h1 className="add-store-modal-title">Add Store</h1>
                        <form id="add-store-form">
                            <input onChange={changeHandler} name='store_name' placeholder="Store Name"/>
                            <input onChange={changeHandler} name='store_address' placeholder="Address"/>
                            <input onChange={changeHandler} name='city' placeholder="City"/>
                            <input onChange={changeHandler} name='state' maxLength="2" placeholder="Sttate"/>
                        </form>
                        <div className="modal-button-box">
                            <h2 onClick={closeModal} id="store-cancel">Cancel</h2>
                            <h2 onClick={addUserStore} id="store-add">Create Store</h2>
                        </div>
                    </div>
                </div>
                <h1 id='store-home-title'>Stores</h1>
                <button onClick={showModal} id="store-add-btn">Add</button>
                <div className='stores-container'>
                    <div className='stores'>
                        {props.stores.map(store => {
                            return <Store key={store.store_id} store={store} deleteStore={deleteStoreStateRefresh}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        stores: state.storesReducer.stores,
        store: state.storeReducer.store
    }
}

export default connect(mapStateToProps, {addStore, getStores, deleteStore})(StoreHome)
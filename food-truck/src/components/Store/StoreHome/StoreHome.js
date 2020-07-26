import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addStore } from '../../../actions/addStore'
import { getStores } from '../../../actions/getStores'
import { deleteStore } from '../../../actions/deleteStore'
import StoreNav from '../StoreNav/StoreNav'
import Store from '../Store/Store'

const StoreHome = (props) => {
    const userId = localStorage.getItem('userId')
    if(props.error) {
        console.log(props.error.response)
    }

   const [storeValues, setStoreValues] = useState({
        store_name: '',
        store_address: '',
        state: '',
        city: ''
   })

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

    const validateForm = () => {
        for(let input in storeValues){
            if (storeValues[input] === '') {
                return false
            } 
        }
        return true
    }

    const addUserStore = () => {
        if(validateForm()) {
            document.getElementById('store-props-error').innerHTML = ''
            props.addStore(userId, {
                store_name: storeValues.store_name,
                store_address: storeValues.store_address,
                city_state: `${storeValues.city}, ${storeValues.state}`
            }, props.getStores)
            closeModal()
            document.querySelector('#add-store-form').reset()
        } else {
            document.getElementById('add-store-error').innerHTML = 'Please fill out all feilds'
        }
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
                        <p id="add-store-error"></p>
                    </div>
                </div>
                
                <h1 id='store-home-title'>Stores</h1>
                <button onClick={showModal} id="store-add-btn">Add</button>
                {props.storeError ?
                    <p id="store-props-error">{props.storeError.response.data.message}</p>
                    :
                    <p id="store-props-error"></p>
                }
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
        storeError: state.storesReducer.error,
        store: state.storeReducer.store
    }
}

export default connect(mapStateToProps, {addStore, getStores, deleteStore})(StoreHome)
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getStore } from '../../../actions/getStore'
import StoreNav from '../StoreNav/StoreNav'

const StoreHomePage = (props, {getStore}) => {
    console.log(props)
    const userId = localStorage.getItem('userId')

    useEffect(() => {
        props.getStore(userId, props.match.params.id)
    }, [])

    if(props.error) {
        console.log(props.error.response)
    }

   const [itemValues, setItemValues] = useState({
        item_name: '',
        item_address: '',
        state: '',
        city: ''
   })

   const changeHandler = (e) => {
        setItemValues({
            ...itemValues,
            [e.target.name]: e.target.value 
        })
   }

   const modal = document.querySelector('.add-item-modal')
   const showModal = () => {
       modal.style.display = 'block'
   }

   const closeModal = () => {
       modal.style.display = 'none'
   }

   const validateForm = () => {
       for(let input in itemValues){
           if (itemValues[input] === '') {
               return false
           } 
       }
       return true
   }

   const addStoreItem = () => {
       if(validateForm()) {
           document.getElementById('store-props-error').innerHTML = ''
           props.addItem(userId, {
               store_name: itemValues.item_name,
               item_address: itemValues.item_address,
               city_state: `${itemValues.city}, ${itemValues.state}`
           }, props.getStores)
           closeModal()
           document.querySelector('#add-item-form').reset()
       } else {
           document.getElementById('add-item-error').innerHTML = 'Please fill out all feilds'
       }
   }

   const deleteItemStateRefresh = (id) => {
       props.deleteStore(id, props.getStores, userId)
   }

    return (
        <div className="store-home-page">
            <StoreNav />
            <div className="add-item-modal">
                <div className="modal-info">
                    <h1 className="add-item-modal-title">Add Item</h1>
                    <form id="add-item-form">
                        <input onChange={changeHandler} name='store_name' placeholder="Store Name"/>
                        <input onChange={changeHandler} name='store_address' placeholder="Address"/>
                        <input onChange={changeHandler} name='city' placeholder="City"/>
                        <input onChange={changeHandler} name='state' maxLength="2" placeholder="Sttate"/>
                    </form>
                    <div className="modal-button-box">
                        <h2 onClick={closeModal} id="item-cancel">Cancel</h2>
                        <h2 onClick={addStoreItem} id="item-add">Create Item</h2>
                    </div>
                    <p id="add-item-error"></p>
                </div>
            </div>
            <div className="store-home-page-container">
                <h1 id='store-home-page-title'>{props.store.store_name}</h1>
                <button onClick={showModal} id="item-add-btn">Add Item</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        store: state.storeReducer.store,
        error: state.storeReducer.error
    }
}

export default connect(mapStateToProps, {getStore})(StoreHomePage)
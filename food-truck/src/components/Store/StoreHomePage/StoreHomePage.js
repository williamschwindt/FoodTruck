import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getStore } from '../../../actions/getStore'
import { addItem } from '../../../actions/addItem'
import { getItems } from '../../../actions/getItems'
import StoreNav from '../StoreNav/StoreNav'
import StoreItem from '../StoreItems/StoreItem'

const StoreHomePage = (props) => {
    console.log(props)
    console.log(props.items)
    const userId = localStorage.getItem('userId')

    //add . to item prices to indicate cents
    props.items.map(item => {
        let price = item.item_price
        let priceString = price.toString()
        let newPrice = priceString.slice(0, -2) +  '.' + priceString.slice(-2)

        item.item_price = newPrice
    })

    useEffect(() => {
        props.getStore(userId, props.match.params.id)
        props.getItems(props.match.params.id)
    }, [])

    if(props.error) {
        console.log(props.error.response)
    }

   const [itemValues, setItemValues] = useState({
        item_name: '',
        item_price: '',
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
           document.getElementById('add-item-error').innerHTML = ''
           props.addItem(props.store.store_id, {
               name: itemValues.item_name,
               price: itemValues.item_price,
           }, props.getItems)
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
                        <input onChange={changeHandler} name='item_name' placeholder="Item Name"/>
                        <input onChange={changeHandler} name='item_price' placeholder="Price"/>
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
                <div className='items'>
                    {props.items.map(item => {
                        return <StoreItem key={item.item_id} item={item} deleteStore={deleteItemStateRefresh}/>
                    })}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        store: state.storeReducer.store,
        error: state.storeReducer.error,

        items: state.itemsReducer.items
    }
}

export default connect(mapStateToProps, {getStore, getItems, addItem})(StoreHomePage)
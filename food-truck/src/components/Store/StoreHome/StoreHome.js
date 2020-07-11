import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addStore } from '../../../actions/addStore'
import { getStores } from '../../../actions/getStores'
import StoreNav from '../StoreNav/StoreNav'
import Store from '../Store/Store'

const StoreHome = (props) => {
    const userId = localStorage.getItem('userId')
    console.log(props.stores)

    useEffect(() => {
        props.getStores(userId)
    }, [userId])

    const addStoreBtn = () => {
        props.addStore(userId, {
            store_name: 'tested4',
            store_address: '12345678',
            city_state: 'bend, or'
        })
        props.getStores(userId)
    }
    
    return (
        <div>
            <StoreNav />
            <div className='store-home-container'>
                <h1 id='store-home-title'>Stores</h1>
                <div className='stores-container'>
                    <button onClick={addStoreBtn} id="store-add-btn">Add</button>
                    <div className='stores'>
                        {props.stores.map(store => {
                            return <Store key={store.store_id} store={store}/>
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
    }
}

export default connect(mapStateToProps, {addStore, getStores})(StoreHome)
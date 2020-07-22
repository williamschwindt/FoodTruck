import React from 'react'

const Store = ({store}) => {

    const editStore = () => {

    }

    const deleteStore = () => {

    }

    return(
        <div className="store-box">
            <div className="store-settings-icon">
                <ion-icon name="ios-settings" />
            </div>
            <h1>{store.store_name}</h1>
            <div className="store-buttons">
                <h2 onClick={editStore} id="store-edit">Edit</h2>
                <h2 onClick={deleteStore} id="store-remove">Remove</h2>
            </div>
        </div>
    )
}

export default Store
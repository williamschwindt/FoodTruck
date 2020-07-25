import React, { useState } from 'react'

const Store = ({store}) => {
    const [settings, setSettings] = useState(false)

    const toggleSettings = () => {
        setSettings(!settings)
    }

    const editStore = () => {

    }

    const deleteStore = () => {

    }

    return(
        <div className="store-box">
            {settings ?
                <div>
                    <div onClick={toggleSettings} className="store-settings-icon">
                        <ion-icon name="ios-close" />
                    </div>
                    <h1>{store.store_name}</h1>
                    <div className="store-buttons">
                        <h2 onClick={editStore} id="store-edit">Edit</h2>
                        <h2 onClick={deleteStore} id="store-remove">Remove</h2>
                    </div>
                </div>
                :
                <div>
                    <div onClick={toggleSettings} className="store-settings-icon">
                        <ion-icon name="ios-settings" />
                    </div>
                    <h1>{store.store_name}</h1>
                    <h2>{store.store_address}</h2>
                    <h2>View Store</h2>
                </div>
            }
        </div>
    )
}

export default Store
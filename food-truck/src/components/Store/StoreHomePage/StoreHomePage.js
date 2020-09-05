import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getStore } from '../../../actions/getStore'
import StoreNav from '../StoreNav/StoreNav'

const StoreHomePage = (props, {getStore}) => {
    console.log(props)
    const userId = localStorage.getItem('userId')

    useEffect(() => {
        props.getStore(userId, props.match.params.id)
    }, [])

    return (
        <div className="store-home-page">
            <StoreNav />
            <div className="store-home-page-container">
                <h1 id='store-home-page-title'>{props.store.store_name}</h1>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        store: state.storeReducer.store
    }
}

export default connect(mapStateToProps, {getStore})(StoreHomePage)
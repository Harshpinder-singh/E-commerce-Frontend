import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { startRemoveUser } from '../../actions/userActions'

function Logout(props) {
    if (props.user._id) {
        props.dispatch(startRemoveUser())
        return (
            <div>

            </div>
        )
    }
    else {
        return (
            <Redirect to='/login' />
        )
    }



}
const mapStateToProps = (state) => {
    return {
        user: state.user

    }
}

export default connect(mapStateToProps)(Logout)

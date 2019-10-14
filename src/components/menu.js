import { Menu } from 'antd'
import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


function MyMenu(props) {
    return (
        <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[props.location.pathname]}
            style={{ lineHeight: '64px' }}
        >
            <Menu.Item key="/products"><Link to='/products'>Products</Link></Menu.Item>
            {!Boolean(props.user._id) ? (<Menu.Item key="/login"><Link to='/login'>Login</Link></Menu.Item>) : (<Menu.Item key="/logout"><Link to='/logout'>Logout</Link></Menu.Item>)}
            {!Boolean(props.user._id) ? (<Menu.Item key="/register"><Link to='/register'>Register</Link></Menu.Item>) : (<Menu.Item key="/cart"> <Link to='/cart'>Cart</Link></Menu.Item>)}


        </Menu>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(MyMenu);

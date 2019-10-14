import React from 'react';
import UserRegister from './components/register/registerUser'
import './App.css';
import UserLogin from './components/login/loginUser'
import ProductsList from './components/product/productsList'
import Logout from './components/logout/logout'
import Cart from './components/cart/cart'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import MyMenu from './components/menu'
import { connect } from 'react-redux'
import singleProduct from './components/product/singleProduct';

const { Header, Content, Footer } = Layout;

function App(props) {

  return (
    <BrowserRouter>
      <div className="App">

        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Route path='/' component={MyMenu} />
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>

              <Route path='/register' exact component={UserRegister} />
              <Route path='/login' exact component={UserLogin} />
              <Route path='/products' exact component={ProductsList} />
              <Route path='/products/:id' exact component={singleProduct} />
              <Route path='/logout' exact component={Logout} />
              <Route path='/cart' exact component={Cart} />
              <Route path='/orders' exact component={Cart} />

            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>HD Design ©2019 Created by Harsh</Footer>
        </Layout>



      </div>
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App);

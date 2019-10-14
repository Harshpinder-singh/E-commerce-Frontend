import React from 'react'
import ProductShow from './productShow'
import { Col, Row, Icon, Input } from 'antd'
import { connect } from 'react-redux'

const { Search } = Input;


function ProductsList(props) {
    if (props.products.length == 0) {
        return (

            <Icon style={{ fontSize: "40px" }} type="loading" spin />

        )
    }

    return (
        <div >
            <Search
                placeholder="input search text"
                enterButton="Search"
                //value={}
                //onChange={this.handleChange}
                size="large"
                style={{ width: 400, marginBottom: 20, zIndex: -5 }}
            //onSearch={value => this.searchHandle(value)}

            />
            <Row>
                {props.products.map(product => <Col key={product._id} xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <ProductShow {...product} /> </Col>)}
            </Row>

        </div>

    )
}
const mapStateToProps = (state) => {
    return {
        products: state.products,
        isLoading: state.isLoading
    }
}
export default connect(mapStateToProps)(ProductsList)


import React from 'react'
import styled from 'styled-components'
import StarRatings from 'react-star-ratings'
import { Redirect } from 'react-router-dom'
import { startAddItem } from '../../actions/cartAction'
import { connect } from 'react-redux'
import { Button, Icon } from 'antd'


const Div = styled.div`
    display:flex;
    justify-content:space-evenly;
    border:0.5px solid gray;
    border-radius:5px;
    margin: 15px;
   


`
const Cont = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

`
const RatingContainer = styled.div`
  
    height:15px;
    width: 95px;

`

function SingleProduct(props) {

    const handleClick = (data) => {
        console.log(data)
        props.dispatch(startAddItem({ productId: data, quantity: 1 }))

    }
    if (props.flag) {
        return (
            <Redirect to='/cart' />

        )
    }
    if (props.product) {
        return (
            <Div>
                <div>

                </div>
                <Cont>
                    <h2>{props.product.name}</h2>
                    <p>description: {props.product.description}</p>
                    <p>{props.product.categoryId.name}</p>
                    <RatingContainer> <StarRatings
                        rating={props.product.rating}
                        starRatedColor="blue"
                        numberOfStars={5}
                        name='rating'
                        starDimension="15px"
                        starSpacing="2px"

                    /></RatingContainer>
                    <p>Price: Rs. {props.product.price}</p>
                </Cont>
                <div>
                    <Button type="primary" shape="round" icon="download" size='small' onClick={() => { handleClick(props.match.params.id) }}>
                        Add to cart
            </Button>
                </div>
            </Div>
        )

    }
    else {
        return (
            <Icon style={{ fontSize: "40px" }} type="loading" spin />
        )
    }

}
const mapStateToProps = (state, ownProps) => {
    return {
        product: state.products.find(product => ownProps.match.params.id == product._id),
        flag: state.flag
    }
}

export default connect(mapStateToProps)(SingleProduct)
import React from 'react'
import styled from 'styled-components'
import StarRatings from 'react-star-ratings'
import { Link } from 'react-router-dom'


const Div = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    border:1.5px solid gray;
    margin: 15px;
    height:300px;


`
const RatingContainer = styled.div`
  
    height:15px;
    width: 95px;

`

function ProductShow(props) {
    return (
        <Div>
            <Link to={`/products/${props._id}`}><h2>{props.name}</h2></Link>
            <p>{props.categoryId.name}</p>
            <RatingContainer> <StarRatings
                rating={props.rating}
                starRatedColor="blue"
                numberOfStars={5}
                name='rating'
                starDimension="15px"
                starSpacing="2px"

            /></RatingContainer>
            <p>Price: Rs. {props.price}</p>
        </Div>
    )
}

export default ProductShow
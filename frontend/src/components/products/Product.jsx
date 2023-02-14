import React from "react";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    return (

        <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://devinci-media-prod.azureedge.net/media/amvgpag4/wilson_2022_v2.png?center=0.5,0.5&mode=max&bgcolor=FFFFFF&format=jpeg&width=1800&height=768" />
                <Card.Body>
                    <img src={product.images[0].url} alt="wilson" className='card-img-top mx-auto' />
                    <Card.Title><Link to={`/product/${product._id}`} >{product.name}</Link></Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ut dignissimos voluptatem reprehenderit nobis quo velit, placeat nostrum alias itaque totam deserunt rerum veniam magni porro dolorum provident excepturi eligendi.
                    </Card.Text>
                    <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-block">Ver</Link>
                    <div className='rating mt-auto'>
                        <div className='rating-outer'>
                            <div className='rating-inner'></div>
                        </div>
                        <span id='no_of_reviews'>({product.numOfReviews})</span>
                    </div>
                    <Card.Text>
                        <span>${product.price}</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

    )
}

export default Product
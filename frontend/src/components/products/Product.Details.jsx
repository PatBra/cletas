import React from 'react'

const ProductDetails = () => {
    return (

        <div className="row f-flex justify-content-around">
            <div className="col-12 col-lg-5 img-fluid" id="product_image">
                <img src="https://devinci-media-prod.azureedge.net/media/amvgpag4/wilson_2022_v2.png?center=0.5,0.5&mode=max&bgcolor=FFFFFF&format=webp&width=1300&height=640" alt="Wilson" height="320" />
            </div>

            <div className="col-12 col-lg-5 mt-5">
                <h3>Devinci Wilson GX DH 7S </h3>
                <p id="product_id">Product # sklfjdk35fsdf5090</p>

                <hr />

                <div className="rating-outer">
                    <div className="rating-inner"></div>
                </div>
                <span id="no_of_reviews">(5 Reviews)</span>

                <hr />

                <p id="product_price">$6.000.000</p>
                <div className="stockCounter d-inline">
                    <span className="btn btn-danger minus">-</span>

                    <input type="number" className="form-control count d-inline" value="1" readOnly />

                    <span className="btn btn-primary plus">+</span>
                </div>
                <button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4">Agregar al Carrito</button>

                <hr />

                <p>Status: <span id="stock_status">Disponible</span></p>

                <hr />

                <h4 className="mt-2">Description:</h4>
                <p>Devinci’s flagship DH ride, The Wilson, first stormed the World Cup scene in 2011. Since then—from pocketing podiums to blazing parks —the bike has set the bar for both innovation and inspiration. Wilson’s lightweight, yet durable, aluminum front triangle is synergized with carbon seatstays for responsive performance that craves aggressive terrain. Coupled with EPS-molded frame tech, where vertical compliance meets lateral stiffness, high-speed handling enters the realm of unbeatable. And so does overall flow, thanks to the Wilson’s Split-Pivot suspension system, with savvy shock positioning that bucks muck and lowers your gravitational center. Wilson DH. Fierce by nature. A force by design.</p>
                <hr />
                <p id="product_seller mb-3">Sold by: <strong>Cletas</strong></p>

                <button id="review_btn" type="button" className="btn btn-primary mt-4" data-toggle="modal" data-target="#ratingModal">
                    Submit Your Review
                </button>

                <div className="row mt-2 mb-5">
                    <div className="rating w-50">

                        <div className="modal fade" id="ratingModal" tabIndex="-1" role="dialog" aria-labelledby="ratingModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="ratingModalLabel">Submit Review</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">

                                        <ul className="stars" >
                                            <li className="star"><i className="fa fa-star"></i></li>
                                            <li className="star"><i className="fa fa-star"></i></li>
                                            <li className="star"><i className="fa fa-star"></i></li>
                                            <li className="star"><i className="fa fa-star"></i></li>
                                            <li className="star"><i className="fa fa-star"></i></li>
                                        </ul>

                                        <textarea name="review" id="review" className="form-control mt-3">

                                        </textarea>

                                        <button className="btn my-3 float-right review-btn px-4 text-white" data-dismiss="modal" aria-label="Close">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>

    )
}

export default ProductDetails
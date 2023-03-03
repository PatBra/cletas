//import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import MetaData from '../components/layout/MetaData';
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/product.Actions'
import Product from '../components/products/Product';
import { Fragment } from 'react';
import Loader from '../components/layout/Loader';
import { useAlert } from 'react-alert';
import Pagination from 'react-js-pagination';
import { useParams } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


const Home = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([1, 1000])
    const [category, setCategory] = useState("")
    const [rating, setRating] = useState(0)

    const categories = [
        "Electronics",
        "Cameras",
        "Laptops",
        "Accessories",
        "Headphones",
        "Food",
        "Books",
        "Clothes/Shoes",
        "Beauty/Health",
        "Sports",
        "Outdoor",
        "Home",
    ]

    const alert = useAlert();
    const dispatch = useDispatch();
    const { loading, products, error, productsCount, resPerPage, filteredProductsCount } = useSelector(state => state.products)
    console.log(productsCount);

    const params = useParams();
    const keyword = params.keyword

    useEffect(() => {
        if (error) {
            return alert.error(error)
        }
        dispatch(getProducts(keyword, currentPage, price, category, rating));

    }, [dispatch, alert, error, keyword, currentPage, price, category, rating])

    function setCurrentPageNo(pageNumber) {
        setCurrentPage(pageNumber)
    }

    let count = productsCount;
    if (keyword) {
        count = filteredProductsCount
    }

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <div>
                    <MetaData title={`El mega titulo`} />
                    {/* <div className='row jumbito'>
                        <div className='col-12 col-md-9 col-lg-7 col-xl-6'>
                            <div className='container-fluid py-5 mt-5 text-black-50 px-3'>
                                <h1 className='display-5 fw-bold'>Casual y Técnico</h1>
                                <p className='col-md-8 fs-4'>Una bicicleta para cada momento de tu día</p>
                                <p className='fs-5 fw-bolder'>Descubre más <i className='fa-solid fa-skull'></i></p>
                            </div>
                        </div>
                    </div> */}

                    <div>
                        <h1 className='text-center fw-bold pt-5' id='productos'>Productos</h1>
                        <section id='products' className='container mt-5'>
                            <div className='row'>

                                {keyword ? (
                                    <Fragment>

                                        <div className="col-6 col-md-3 mb-5 mt-5">
                                            <div className="px5">
                                                <Slider
                                                    range
                                                    marks={{
                                                        1: `$1`,
                                                        1000: `$1000`
                                                    }}
                                                    min={1}
                                                    max={1000}
                                                    defaultValue={[1, 1000]}
                                                    tipFormatter={value => `${value}`}
                                                    tipProps={{
                                                        placement: "top",
                                                        visible: true
                                                    }}
                                                    value={price}
                                                    onChange={price => setPrice(price)}
                                                />
                                                {/* filtro categorias */}
                                                <hr className='my-5' />
                                                <div className="mt-5">
                                                    <h4 className="mb-3">
                                                        Categorias
                                                    </h4>

                                                    <ul className="pl-0">
                                                        {categories.map(category => (
                                                            <li
                                                                style={{
                                                                    cursor: 'pointer',
                                                                    listStyleType: 'none'
                                                                }}
                                                                key={category}
                                                                onClick={() => setCategory(category)}
                                                            >
                                                                {category}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                filtro por rating
                                                <hr className='my-3' />
                                                <div className="mt-5">
                                                    <h4 className="mb-3">
                                                        Ratings
                                                    </h4>

                                                    <ul className="pl-0">
                                                        {[5, 4, 3, 2, 1].map(star => (
                                                            <li
                                                                style={{
                                                                    cursor: 'pointer',
                                                                    listStyleType: 'none'
                                                                }}
                                                                key={star}
                                                                onClick={() => setRating(star)}
                                                            >
                                                                <div className='rating-outer'>
                                                                    <div className='rating-inner'
                                                                        style={{
                                                                            width: `${star * 20}%`
                                                                        }}></div>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-6 col-md-9">
                                            <div className="row">
                                                {products && products.map(product => (
                                                    <Product key={product._id} product={product} col={4} />
                                                ))}
                                            </div>
                                        </div>

                                    </Fragment>
                                ) : (
                                    products && products.map(product => (
                                        <Product key={product._id} product={product} col={3} />
                                    ))
                                )}

                            </div>
                        </section>
                    </div>

                    {resPerPage <= count && (
                        <div className="d-flex justify-content-center mt-5">
                            <Pagination
                                activePage={currentPage}
                                itemsCountPerPage={resPerPage}
                                totalItemsCount={productsCount}
                                onChange={setCurrentPageNo}
                                nextPageText={'>'}
                                prevPageText={'<'}
                                firstPageText={'<<'}
                                lastPageText={'>>'}
                                itemClass="page-item"
                                linkClass="page-link"
                            />
                        </div>
                    )}
                </div>
            )}
        </Fragment>

    );
}

export default Home;
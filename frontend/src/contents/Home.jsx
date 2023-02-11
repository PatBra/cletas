//import { Link } from 'react-router-dom'
import React, { useEffect } from 'react';
import MetaData from '../components/layout/MetaData';
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/product.Actions'
import Product from '../components/products/Product';
import { Fragment } from 'react';

const Home = () => {
    const dispatch = useDispatch()
    const { loading, products, error, productsCount } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <Fragment>
            {loading ? <h1>Cargando...</h1> : (
                <div>
                    <MetaData title={`El mega titulo`} />
                    <div className='row jumbito'>
                        <div className='col-12 col-md-9 col-lg-7 col-xl-6'>
                            <div className='container-fluid py-5 mt-5 text-black-50 px-3'>
                                <h1 className='display-5 fw-bold'>Casual y Técnico</h1>
                                <p className='col-md-8 fs-4'>Una bicicleta para cada momento de tu día</p>
                                <p className='fs-5 fw-bolder'>Descubre más <i className='fa-solid fa-skull'></i></p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-center fw-bold pt-5' id='bicicletas'>Bicicletas</h1>
                        <section id='products' className='container mt-5'>
                            <div className='row'>
                                {products && products.map(product => (
                                    <Product key={product._id} product={product} />
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            )}
        </Fragment>

    );
}

export default Home;
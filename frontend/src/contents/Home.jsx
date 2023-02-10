//import { Link } from 'react-router-dom'
import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MetaData from '../components/layout/MetaData';
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/product.Actions'

const Home = () => {
    const dispatch = useDispatch()
    const { loading, products, error, productsCount } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <div>
            <MetaData title={`El mega titulo`} />

            <div className='row jumbito'>
                <div className='col-12 col-md-9 col-lg-7 col-xl-6'>
                    <div className='container-fluid py-5 mt-5 text-black-50 px-3'>
                        <h1 className='display-5 fw-bold'>Casual y Técnico</h1>
                        <p className='col-md-8 fs-4'>Una bicicleta para cada momento de tu día</p>
                        <p className='fs-5 fw-bolder'>Descubre más, escribenos <i className='fa-solid fa-skull'></i></p>
                    </div>
                </div>
            </div>


            <div>
                <h1 className='text-center fw-bold pt-5' id='bicicletas'>Bicicletas</h1>
                <section id='products' className='container mt-5'>
                    <div className='row'>
                        {products && products.map(product => (
                            <div key={product._id} className='col-sm-12 col-md-6 col-lg-3 my-3'>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://devinci-media-prod.azureedge.net/media/amvgpag4/wilson_2022_v2.png?center=0.5,0.5&mode=max&bgcolor=FFFFFF&format=jpeg&width=1800&height=768" />
                                    <Card.Body>
                                        <img src={product.images[0].url} alt="wilson" className='card-img-top mx-auto' />
                                        <Card.Title><a>{product.name}</a></Card.Title>
                                        <Card.Text>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ut dignissimos voluptatem reprehenderit nobis quo velit, placeat nostrum alias itaque totam deserunt rerum veniam magni porro dolorum provident excepturi eligendi.
                                        </Card.Text>
                                        <Button variant="primary">Ver</Button>
                                        <Button variant="primary">Agregar al Carrito</Button>
                                        <Card.Text>
                                            Precio
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;
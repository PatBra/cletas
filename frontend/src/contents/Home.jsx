//import { Link } from 'react-router-dom'
import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MetaData from '../components/layout/MetaData';
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/product.Actions'

const Home = () => {
    const dispatch =useDispatch()

    useEffect (()=>{
dispatch(getProducts())
    }, [dispatch])

    return (
        <div>
            <MetaData title ={`El mega titulo`}/>
            {/* <div className='col-12 col-md-9 col-lg-7 col-xl-6 pt-5 px-5'>
                    <div className='container-fluid py-5 mt-5 px-3'>
                        <h1 className='fw-bold'>Visitanos</h1>
                        <p className='pt-2'>
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio consequatur quis quasi suscipit nihil! Laboriosam pariatur, eius sed ipsum debitis ratione repellendus deserunt eum quo molestias asperiores tempora, mollitia nobis?
                        </p>
                    </div>
                    <div className='botoncitojt'>
                        <Link to='/Inicio'>
                            <button className='btn btn-warning btn-lg mt-5 m b-5 fw-bold rounded-pill'>Catalogo</button>
                        </Link>
                    </div>
                
                </div> */}
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
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="#" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
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
        </div>
    );
}

export default Home;
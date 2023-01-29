import { Link } from 'react-router-dom'

const Jumbotron = () => {
    return (
        <div>
                <div className='col-12 col-md-9 col-lg-7 col-xl-6 pt-5 px-5'>
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
                
                </div>
        </div>
    );
}

export default Jumbotron;
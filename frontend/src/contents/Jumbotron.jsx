import { Fragment } from 'react';
import MetaData from '../components/layout/MetaData';

const Jumbotron =() => {
    return(
<Fragment>
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
</Fragment>
    )

}

export default Jumbotron;

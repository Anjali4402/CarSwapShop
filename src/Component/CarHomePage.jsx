// import required components
import Navbar from './Navbar';
import Pagination from './Pagination';
import CarItems from './CarItems';

const CarHomePage = () => {
    return (
        <div className='container-fluid custom-container custom-bg-color py-2'>
            <Navbar/>
            <CarItems/>
            <Pagination/>
        </div>
    )
}

export default CarHomePage;

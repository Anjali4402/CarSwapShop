import React from 'react';
import { useSelector } from 'react-redux';
import CarCard from './CarCard';


const CarItems = () => {
    const searchingval = useSelector((state) => state.FindCar.carName);
    const records = useSelector((state) => state.FindCar.displayCarItems)
    const resultsaftersearch = useSelector((state)=> state.FindCar.SearchCarResult)
    const resultdisplay = useSelector((state)=> state.FindCar.displayCarItems)
    console.log(resultdisplay)
    return (
        <div className='container-fluid my-4 cutom-carItem'>
            <div className='row gap'>
                {/* start from here */}
                {
                    resultdisplay.length > 0 ?
                    resultdisplay.map((val,index)=>{
                        return(
                            <div className='col-4 my-3 d-flex justify-content-center'>
                            <CarCard values={val}/>
                            </div>       
                    )
                    })
                    :
                    <div>Adding new items </div>
            }
            </div>
        </div>
    )
}

export default CarItems

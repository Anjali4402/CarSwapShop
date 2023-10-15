import React from 'react';
import { useSelector } from 'react-redux';
import CarCard from './CarCard';
import data from '../Data.json'

const CarItems = () => {
    const resultdisplay = useSelector((state)=> state.FindCar.displayCarItems)
    
    return (
        <div className='container-fluid my-4 cutom-carItem'>
            <div className='row gap'>
                {/* start from here */}
                {
                    resultdisplay.length > 0 ?
                    resultdisplay.map((val,index)=>{
                        return(
                            <div key={index} className='col-4 my-3 d-flex justify-content-center'>
                            <CarCard values={val}/>
                            </div>       
                    )
                    })
                    :
                    <div className='text-center my-5 '>
                        <h4>No Item Found</h4>
                    </div>
            }
            </div>
        </div>
    )
}

export default CarItems

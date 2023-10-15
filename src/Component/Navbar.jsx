import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SearchCarByName } from '../store/slices/UserSlice';
import data from '../Data.json';
import { TotalCarsResultsAfterSearch } from '../store/slices/UserSlice';

const Navbar = () => {
    // assign useDispatch
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(TotalCarsResultsAfterSearch(data))
    },[])
    
    // This function will run, When user search any car name.
    const searchCar = (value) =>{
        dispatch(SearchCarByName(value))


        // The serarchItems will store all car items that the user searches and that are available.
        const searchItems = data.filter((val)=>{
            if(value == ""){
                return (
                    <div>your searchin is not present</div>
                )
            }
            else if(val.carName.toLowerCase().includes(value.toLocaleLowerCase())){
                return val;
            }
        })
        dispatch(TotalCarsResultsAfterSearch(searchItems))
    }

    return (
        <div className='contianer mx-4 px-2 custom-navbar'>
            <div className="row py-1">
                <div className="col-4">
                    <div className="input-group m-2 ">
                        <input 
                            type="search" 
                            className="form-control rounded-pill" 
                            placeholder='Search...' 
                            aria-label='Search' aria-describedby='search-addon' 
                            onChange={(e)=>{searchCar(e.target.value)}}
                        />
                    </div>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-center">
                    <h5>Relevance</h5>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-center">
                    <h5>All brands</h5>
                </div>
            </div>
        </div>

    )
}

export default Navbar

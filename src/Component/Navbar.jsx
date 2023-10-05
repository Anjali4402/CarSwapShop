import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { SearchCarByName } from '../store/slices/UserSlice';
import data from '../Data.json';
import { TotalCarsResultsAfterSearch } from '../store/slices/UserSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    const searchingval = useSelector((state) => state.FindCar.carName);

    const [searchResults, setSearchResults] = useState(data)
    useEffect(()=>{
        dispatch(TotalCarsResultsAfterSearch(searchResults))
    },[])
    
    const searchCar = (value) =>{
        dispatch(SearchCarByName(value))
        console.log(searchingval)

        const newsitems = data.filter((val)=>{
            if(value == ""){
                return (
                    <div>your searchin is not present</div>
                )
            }
            else if(val.carName.toLowerCase().includes(value.toLocaleLowerCase())){
                return val;
            }
        })
        console.log(newsitems)
        console.log(searchResults)
        setSearchResults(newsitems)
        // dispatch(TotalCarsResultsAfterSearch(searchResults))
        dispatch(TotalCarsResultsAfterSearch(newsitems))
    }

    return (
        <div className='contianer mx-4 px-2 custom-navbar'>
            <div className="row py-1">
                <div className="col-4">
                    <div className="input-group m-2 ">
                        <input type="search" className="form-control rounded-pill" placeholder='Search...' aria-label='Search' aria-describedby='search-addon' 
                            onChange={(e)=>{searchCar(e.target.value)}}
                        />
                {/* <span className="custom-searchicon" id='search-addon'> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg> */}
                {/* </span> */}
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

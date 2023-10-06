import React, { useEffect , useRef } from 'react'
import { useState } from 'react';
import data from '../Data.json'
import CarCard from './CarCard';
import { DisplayCarOnTheScreen } from '../store/slices/UserSlice';
import { useSelector , useDispatch } from 'react-redux';
import { SearchCarByName } from '../store/slices/UserSlice';
// import { SetsNew } from '../store/slices/UserSlice';

const Pagination = () => {
    const dispatch = useDispatch();
    const searchingval = useSelector((state) => state.FindCar.carName);
    const resultsaftersearch = useSelector((state)=> state.FindCar.SearchCarResult)
    console.log('carcar is ', searchingval)
    // const [count , setCount] = useState(0)
    const count = useRef([])

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerpage = 6;
    const lastIndex = currentPage * recordsPerpage;
    const firstIndex = lastIndex - recordsPerpage;
    const  records = resultsaftersearch.slice(firstIndex, lastIndex)
    console.log(records)
    // const npage = Math.ceil(displayNotesss.length / recordsPerpage);
    //number of pages should be 10 so i am changin it with 10;
    const npage = 10;
    const numbers = [...Array(npage + 1).keys()].slice(1);
    console.log('this is final number are', numbers)
    console.log('first and last index are',firstIndex, lastIndex);
    console.log('how many numbers of pages is',npage)
    console.log('what is my current page', currentPage)
    console.log(records)
    console.log(numbers)


    useEffect(()=>{
        // setCount(count+1);
        count.current = records;
        console.log(count.current)
        // dispatch(DisplayCarOnTheScreen(count.current))
        // dispatch(SearchCarByName(count.current))
        // dispatch(SetsNew(count.current))
        dispatch(DisplayCarOnTheScreen(count.current))
    })




    const prePage = ()=>{
        if(currentPage !== firstIndex+1){
            // console.log('current page is not equal to first page')
            setCurrentPage(currentPage - 1)
        }
        else{
            console.log('now current page === firstPage')
        }
    }

    const nextPage = ()=>{
        if(currentPage !== npage){
            setCurrentPage(currentPage + 1)
            // console.log('last page is not equal to npage')
        }
        else{
            console.log('now last page === npage')
        }
    }

    const changeCPage = (id)=>{
        setCurrentPage(id)
    }


    return (
        <div className='my-4'>
        <nav>
            {/* <div className="contianer mx-2 px-4 py-2 custom-navbar border d-flex justify-content-between"> */}
            <div className="row mx-2 my-4 px-4 py-2 custom-navbar border">
                <div className='col-6 d-flex align-items-center'>
                    <h5>{currentPage} from 10</h5>
                </div>
                {
                npage > 1 ?
                <div className='col-6 border d-flex align-items-center justify-content-end gap-4 border'>
                    <div>
                        <button className='btn btn-primary'
                        onClick={()=>prePage()}>Prev</button>
                    </div>
                    {
                        numbers.map((n,i)=>(
                            <a className='link-primary' key={i}onClick={()=>changeCPage(n)}>{n}
                            </a>
                        ))
                    }
                    <div>
                        <button className='btn btn-primary'
                        onClick={()=>nextPage()}>Next</button>
                    </div>
                </div>
                : null
            }
            </div>
            {/* {
                npage > 1 ?
            
                <ul className='bg-danger'>
                    <li>
                        <a href="#" className='page-link'
                        onClick={()=>prePage()}>Prev</a>
                    </li>
                    {
                        numbers.map((n,i)=>(
                            <li key={i}>
                                <a href="#" 
                                onClick={()=>changeCPage(n)}>{n}</a>
                            </li>
                        ))
                    }
                    <li>
                        <a href="#" 
                        onClick={()=>nextPage()}>Next</a>
                    </li>
                </ul>
                : null
            } */}
            </nav>
        </div>
    )
}

export default Pagination
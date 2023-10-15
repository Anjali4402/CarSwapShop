import React, { useEffect , useRef } from 'react'
import { useState } from 'react';
import { DisplayCarOnTheScreen } from '../store/slices/UserSlice';
import { useSelector , useDispatch } from 'react-redux';

const Pagination = () => {
    // assign usedispatch
    const dispatch = useDispatch();

    // when user search any name the current display page will set 1;
    const carname = useSelector((state)=> state.FindCar.carName);
    useEffect(()=>{
        setCurrentPage(1)
    },[carname])
    

    // It will store those items which will be found after the user's search.
    const resultsaftersearch = useSelector((state)=> state.FindCar.SearchCarResult);

    const count = useRef([])

    // the current page that display in the webiste.
    const [currentPage, setCurrentPage] = useState(1);

    // how many items will display in one page.
    const recordsPerpage = 6;
    
    // last index and firstindex
    const lastIndex = currentPage * recordsPerpage;
    const firstIndex = lastIndex - recordsPerpage;

    // which items will display in one page.
    const  records = resultsaftersearch.slice(firstIndex, lastIndex)

    // Total how many number of pages in the website , it is by default 10;
    const npage = 10;

    const numbers = [...Array(npage + 1).keys()].slice(1);


    useEffect(()=>{
        count.current = records;
        dispatch(DisplayCarOnTheScreen(count.current))
    })




    const prePage = ()=>{
        if(currentPage !== firstIndex+1){
            setCurrentPage(currentPage - 1)
        }
    }

    const nextPage = ()=>{
        if(currentPage !== npage){
            setCurrentPage(currentPage + 1)
        }
    }

    const changeCPage = (id)=>{
        setCurrentPage(id)
    }


    return (
        <div className='my-4'>
        <nav>
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
                            <a className='link-primary' key={i} onClick={()=>changeCPage(n)}>{n}
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
        </nav>
    </div>
    )
}

export default Pagination

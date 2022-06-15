import React, { useEffect, useState, useCallback } from 'react';
import ReactPaginate from 'react-paginate'; 
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import hotels from '../hotels.json';
import dummyImage from '../assets/img/dummy-otel-image.jpeg';


export default function Hotels() {
  const [data, setData] = useState(hotels);
  const [count, setCount] = useState(1);
  const [countRender, setCountRender] = useState(1);
  const [pageCount, setPageCount] = useState(1); 
  const [currentPage, setcurrentPage] = useState(1); 
  const [isLoaded, setisLoaded] = useState(false);


  // let newHotels = JSON.parse(localStorage.getItem("hotel"))
  // if(newHotels !== null) {
  //   setData([...newHotels, ...data])
  // }

  useEffect(() => {
    setPageCount(data.length / 5);
    setisLoaded(true); 
  }, [currentPage])

  const handlePageChange = (selectedObject) => {
    setcurrentPage(selectedObject.selected + 1);
  };

  const changeHandler = (e) => {
    if(e.target.value == 1) {
      setData(data.sort((a, b) => (a.rating > b.rating) ? -1 : 1))
      setCountRender(countRender+1)
    } else if(e.target.value == 2) {
      setData(data.sort((a, b) => (a.rating > b.rating) ? 1 : -1))
      setCountRender(countRender+1)
    } 
  };

  const deleteOtel = (key) => {
    setData(data => data.filter((item, index) => key.id !== index));
    document.querySelector('.list .delete').style.display = 'none';
  }

  const mouseEnter = useCallback(
    () => {
      document.querySelector('.list .delete').style.display = 'inline-block';
    }, []
  )

  const mouseLeave = useCallback (
    () => {
      document.querySelector('.list .delete').style.display = 'none';
    }, []
  )

  const increaseRating = (item) => {
    item.rating = parseFloat(item.rating) + 1;
    setCount(item.rating);
  }

  const decreaseRating = (item) => {
    let changeRating = item.rating = (item.rating -1).toFixed(1);
    
    if(changeRating > 0) {
      setCount(changeRating);
    } else {
      setCount(item.rating = 0)
    }
  }

  return (
    <div className='list'>
      <div className='sorting-area flex justify-center mb-4'>
        <select className='border-2 border-solid border-inherit rounded-md p-1' onChange={changeHandler} defaultValue={'1'}>
          <option value="1">Point (increase)</option>
          <option value="2">Point (decrease)</option>
        </select>
      </div>

      {data.map(item => (
        <div key={item.id} className="item xl:w-2/5 mx-auto mb-8" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
          <Popup
            trigger={ 
            <div className='hidden delete absolute w-6 bg-red-600 text-white rounded-full'>
              <button className='w-6 dark:text-white'>X</button>
            </div>} modal nested>

            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> Delete Hotel </div>
                <div className="content">
                  {' '}
                  Are you sure you want to delete {item.name}?
                </div>
                <div className="actions">
                  <button className="button mr-8 bg-cyan-500 rounded text-white inline-block p-2 xl:w-24" onClick={() => deleteOtel(item)}>
                    Delete Hotel
                  </button>

                  <button className="button bg-white-500 border-2 border-cyan-500 rounded text-cyan-500 inline-block p-2 xl:w-24" onClick={() => { close(); document.querySelector('.list .delete').style.display = 'none'}}>
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </Popup>
          
          <a href="#" className="flex flex-col rounded-lg border shadow-md md:flex-row hover:bg-gray-200 border-gray-200 bg-gray-100 dark:hover:bg-gray-100">
            <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={dummyImage} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600 text-gray-800">{item.name}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.rating}</p>
              <div className='flex space-x-4'>
                <button className='bg-cyan-500 rounded text-white inline-block p-2' onClick={()=> increaseRating(item)}>INCREASE</button>
                <button className='bg-cyan-500 rounded text-white inline-block p-2' onClick={()=> decreaseRating(item)}>DECREASE</button>
              </div>
            </div>
          </a> 
        </div>
      ))}

      {isLoaded && data ? (
				<ReactPaginate
          breakLabel="..."
					pageCount={pageCount}
          onPageChange={handlePageChange}
					pageRange={2}
					marginPagesDisplayed={2}
					containerClassName={'container paginate'}
          previousLabel="<"
					previousLinkClassName={'page'}
					breakClassName={'page'}
          nextLabel=">"
					nextLinkClassName={'page'}
					pageClassName={'page'}
					disabledClassNae={'disabled'}
					activeClassName={'active'}
				/>
			) : (
				<div>Nothing to display</div>
			)}
    </div>
  )
}

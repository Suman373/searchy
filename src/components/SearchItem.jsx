import React from 'react'
import '../styles/SearchItem.scss';

const SearchItem = ({itm}) => {
  return (
    <div className='image-container'>
      <img src={itm?.url} 
      alt="An image returned from the api" />
    </div>
  )
}

export default SearchItem;



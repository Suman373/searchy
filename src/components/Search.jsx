import React, { useEffect, useState } from 'react'
import '../styles/Search.scss';
import SearchItem from './SearchItem';
import axios from 'axios';
// env vars
const endpoint = process.env.REACT_APP_API_URI;
const key = process.env.REACT_APP_API_KEY;
const host = process.env.REACT_APP_API_HOST;

const Search = () => {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);

  // use your own keys 
  const options = {
    method: 'GET',
    url: `${endpoint}`,
    contentType: 'Application/json',
    params: {
      q: `${search}`,
      pageNumber: '5',
      pageSize: '20',
      autoCorrect: 'true'
    },
    headers: {
      'X-RapidAPI-Key': `${key}`,
      'X-RapidAPI-Host': `${host}`
    }
  };

  const getSearchQuery = async () => {
    return await axios.request(options);
  }

  const searchSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSearchQuery(search);
    setImages(data.value);
    setSearch("");
  }


  return (
    <div className='searchbar-wrapper'>
      <form onSubmit={searchSubmit} >
        <input type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search image ...' />
      </form>

      {search !== "" ?
        <>
          <section className="search-box">
            <p className="query-text">
              {search}
            </p>
          </section>
        </>
        : ""
  }
      
      <section className="search-results-wrapper">
        {images.map((itm) => {
          return (
            <>
              <SearchItem
              key={itm.url} 
              itm={itm} />
            </>
          );
        })}
      </section>

    </div>
  )
}

export default Search;

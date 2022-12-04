import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SearchBar() {

  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const heandelSubmit = (e) => {
    e.preventDefault();
    setKeyword('');
    navigate(`/videos/${keyword}`)
  }

  return (
    <div className='flex'>
      <Link to='/'>
        <h1 className='text-3xl'>zetube</h1>
      </Link>
      <form onSubmit={heandelSubmit}>
        <input type='text' value={keyword} onChange={((e) => setKeyword(e.target.value))} placeholder='Search'></input>
      </form>
    </div>
  );
};

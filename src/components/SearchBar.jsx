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
        <input type="text" value={keyword} onChange={((e) => setKeyword(e.target.value))} placeholder='Search'
          class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500
        "/>
      </form>
    </div>
  );
};

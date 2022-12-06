import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsYoutube, BsSearch } from 'react-icons/bs'

export default function SearchBar() {

  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const heandelSubmit = (e) => {
    e.preventDefault();
    setKeyword('');
    navigate(`/videos/${keyword}`)
  }

  return (
    <header className='w-full flex p-4 border-b border-zinc-600 mb-4'>
      <Link to='/' className='flex items-center'>
        <BsYoutube className='text-4xl text-brand mt-2 mr-1' />
        <h1 className='font-bold ml-2 text-3xl'>zetube</h1>
      </Link>

      <form className='w-full flex justify-center' onSubmit={heandelSubmit}>
        <input className='w-7/12 p-2 outline-none bg-black text-green-50' type="text" value={keyword} onChange={((e) => setKeyword(e.target.value))} placeholder='Search' />
        <button className='bg-zinc-600 px-4'>
          <BsSearch />
        </button>
      </form>
    </header>
  );
};

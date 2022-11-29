import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {

  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const heandelSubmit = (e) => {
    e.preventDefault();
    setKeyword('');
    navigate(`/videos/${keyword}`)
  }

  return (
    <div>
      <h1>zetube</h1>
      <form onSubmit={heandelSubmit}>
        <input type='text' value={keyword} onChange={((e) => setKeyword(e.target.value))} placeholder='Search'></input>
      </form>
    </div>
  );
};

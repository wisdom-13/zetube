import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function Videos() {
  const { keyword } = useParams();
  return (
    <>
      <h3>검색어 : {keyword}</h3>

      <Link to='/videos/watch/jfweoifjwoefj'>
        Vidoes1
      </Link>
      <br></br>
      <Link to='/videos/watch/fewfwfwef'>
        Vidoes2
      </Link>
    </>
  );
}
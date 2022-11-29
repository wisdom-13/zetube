import React from 'react';
import { Outlet } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

export default function Root() {
  return (
    <>
      <SearchBar />
      <Outlet></Outlet>
    </>
  )
} 
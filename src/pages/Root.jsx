import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <h1>여기에 네비게이션</h1>
      <Outlet></Outlet>
    </>
  )
} 
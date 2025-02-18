// ContentWrapper.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const ContentWrapper = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full text-center p-[1vw]">
      <Outlet />
    </div>
  );
};

export default ContentWrapper;

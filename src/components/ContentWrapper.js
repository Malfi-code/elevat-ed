// ContentWrapper.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const ContentWrapper = () => {
  return (
    <div className="w-full text-center h-[calc(100vh-80px)] lg:h-[calc(100vh-153px)] overflow-auto grid p-4">
      <div className="m-auto w-full">
        <div className="flex flex-col items-center space-y-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ContentWrapper;

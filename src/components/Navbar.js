import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={require('../assets/icons/stock-management.svg').default} className="h-8" alt="Stock Management Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Stock Management</span>
          </div>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="tel:5541251234" className="text-sm text-gray-500 dark:text-white hover:underline">(555) 412-1234</a>
            <Link to="/login" className="text-sm text-blue-600 dark:text-blue-500 hover:underline">Login</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

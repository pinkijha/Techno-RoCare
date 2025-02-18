import React from 'react'
import { CiSearch } from "react-icons/ci";
import { useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    // Define Page Titles
  const pageTitles = {
    "/admin": "Dashboard",
    "/admin/city": "Add City",
    "/admin/product": "Add Product",
    "/admin/services": "Add Services",
  };

  // Get the current page title or default to "Page Not Found"
  const currentPage = pageTitles[location.pathname] || "Page Not Found";
  return (
    <div className='flex justify-between'>
      <div className='p-3'>
        <h1 className='text-[32px] font-semibold'>{currentPage}</h1>
        </div>
      <div>
        <input type='text ' placeholder='Search' className='rounded-full' />
        <span className='absolute'><CiSearch /></span>

      </div>
    </div>
  )
}

export default Header

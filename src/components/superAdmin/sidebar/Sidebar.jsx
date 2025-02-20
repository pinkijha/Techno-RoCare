import React from 'react'
import logo from '../../../assets/logo.png'
import { sidebarItems } from '../../../utils/constant'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-white md:w-[270px]  pb-4 space-y-4  shadow-lg border-r-2 border-gray-400'>
      <div className='ml-2 border-b-2 border-gray-400'>
        <img className='py-4 md:ml-3 h-[73px]'
        src={logo} alt='logo' />
      </div>
      <div className='flex flex-col md:mx-6 overflow-y-auto h-screen scrollbar-hidden '>
      {sidebarItems.map((group)=> (
       <div className=''>
        <h1 className='text-[16px] font-semibold '>{group.groupName}</h1>
        {group.groupItems.map(({id, name, icon, path, color})=>(
           <NavLink to={path} className="items-center">
             <ul key={id} className='flex space-y-2 text-[15px] hover:rounded-xl hover:bg-[#7EC1B1] hover:text-white
            font-semibold text-[#7EC1B1] space-x-4 p-2'>
                <li className={`text-xl cursor-pointer ${color ==='red' ? 'text-[#ef393c]': '' }`}>{icon}</li>
                <li className={`${color ==='red' ? 'text-[#ef393c]': '' } cursor-pointer`}>{name}</li>
            </ul>
           </NavLink>
        ))}
      
       </div>
      ))}
      </div>
    </div>
  )
}

export default Sidebar

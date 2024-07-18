import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    
<>
<nav className={` bg-grey-200 ${props.mode}:bg-gray-800`}>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className={`self-center text-2xl font-semibold whitespace-nowrap text-${props.mode} ${props.mode}:text-gray-300`} >{props.title}</span>
    </a>
   
    <label className="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer"onClick={props.toggleMode}/>
  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span className={`ms-3 text-sm font-medium text-${props.mode} ${props.mode}:text-gray-300`} >Enable Dark Mode</span>
</label>
  </div>
</nav>
</>
  )
}

Navbar.prototype ={
    title:PropTypes.string.isRequired,
}
Navbar.defaultProps = {
    title:"set title here"
}
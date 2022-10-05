import React from 'react'
import './Header.css';

function Header() {
const {name,status} =user

  return (
    <div>
    <div className='Header_name'>{name}</div>
    <div className='Header_status'>{status}</div>
    </div>
  )
}

export default Header
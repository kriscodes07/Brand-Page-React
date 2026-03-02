import React from 'react'


const Navbar = () => {
  return (
    <div className='nav'>
<nav>
    <div className="logo">
        <img src="/brand_logo.png" alt="logo" />
    </div>
    <ul className='menu'>
        <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
    </ul>

    <button>Login</button>
</nav>

    </div>
  )
}

export default Navbar
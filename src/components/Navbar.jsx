import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo_image">
            <img src="src/assets/news.png" alt="" />
        </div>

        <div className="links">
            <li><Link to="/">general</Link></li>
            <li><Link to="/business">business</Link></li>
            <li><Link to="/entertainment">entertainment</Link></li>
            <li><Link to="/health">health</Link></li>
            <li><Link to="/science">science</Link></li>
            <li><Link to="/sports">sports</Link></li>
            <li><Link to="/technology">technology</Link></li>
            
        </div>
    </div>
  )
}

export default Navbar
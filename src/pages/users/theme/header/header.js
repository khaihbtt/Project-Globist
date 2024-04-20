import { useState } from 'react';
import './header.scss';
import { MdOutlineMenu , MdClear } from "react-icons/md";
import { AiFillAccountBook, AiOutlineHome } from "react-icons/ai";
const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return (
        <>
        <div className="menu-container">
      <button className="toggle-button" onClick={toggleMenu}>
        {isOpen ? <MdClear/> : < MdOutlineMenu  />} {/* Sử dụng icon bars hoặc times */}
      </button>
      <div className={`menu ${isOpen ? 'open' : 'closed'}`}>
        <ul>
          <li> <a href="/"></a> <AiOutlineHome /> Home</li>
          <li><AiFillAccountBook /> Countries</li>
          
          {/* Add more menu items here */}
        </ul>
      </div>
    </div>
        </>
    )
}

export default Header;
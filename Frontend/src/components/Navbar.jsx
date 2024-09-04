import { useState } from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-between py-5 font-medium">

      <Link to={'/'}><img className="w-36" src={assets.logo} alt="Logo" /></Link>

      <ul className="hidden sm:flex gap-5  text-sm text-gray-700">
        <NavLink to={'/'} className="flex flex-col items-center gap-1">
          <p className="uppercase">Home</p>
          <hr className="w-10 border-none h-[1.8px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to={'/collection'}
          className="flex flex-col items-center gap-1"
        >
          <p className="uppercase">Collection</p>
          <hr className="w-10 border-none h-[1.8px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={'/about'} className="flex flex-col items-center gap-1">
          <p className="uppercase">About</p>
          <hr className="w-10 border-none h-[1.8px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={'/contact'} className="flex flex-col items-center gap-1">
          <p className="uppercase">contact</p>
          <hr className="w-10 border-none h-[1.8px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img
          className="w-5 cursor-pointer"
          src={assets.search_icon}
          alt="search"
        />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt="profile"
            className="w-5 cursor-pointer"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-300 text-gray-700">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Order</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img className="w-5 min-w-5" src={assets.cart_icon} alt="cart-icon" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>
        <img
          onClick={() => {
            setVisible(true);
          }}
          src={assets.menu_icon}
          alt="menu-icon"
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>
      {/* Sidebar Menu for small screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-gray-300 transition-all ${
          visible ? 'w-full' : ' w-0'
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex item-center gap-4 p-3 cursor-pointer"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            to="/"
            className="py-2 pl-6 border uppercase"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/collection"
            className="py-2 pl-6 border uppercase"
          >
            Collection
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/about"
            className="py-2 pl-6 border uppercase"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/contact"
            className="py-2 pl-6 border uppercase"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

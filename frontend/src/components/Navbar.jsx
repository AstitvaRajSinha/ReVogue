import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import {
  FiSearch,
  FiUser,
  FiShoppingCart,
  FiMenu,
  FiChevronLeft,
} from "react-icons/fi";
import ThemeBtn from "./ThemeBtn";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <span className="text-[30px] md:text-[50px] text-black dark:text-white">
          Revogue
        </span>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-5 text-sm text-zinc-700 dark:text-zinc-300">
        {["/", "/collection", "/about", "/contact"].map((path, idx) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 ${
                isActive ? "text-black dark:text-white" : ""
              }`
            }
          >
            <p>{["HOME", "COLLECTION", "ABOUT", "CONTACT"][idx]}</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-zinc-700 hidden" />
          </NavLink>
        ))}
      </ul>
      <Link to={'/resell'}>
      <button 
              className="hidden sm:flex items-center px-4 py-1.5 rounded-full border border-zinc-800 dark:border-zinc-200 text-sm font-medium text-black dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"

      >
        Be a Seller

      </button>
      </Link>
      

      {/* Icons */}
      <ThemeBtn />
      <div className="flex items-center gap-6">
        {/* Search Icon */}
        <FiSearch
          onClick={() => {
            setShowSearch(true);
            navigate("/collection");
          }}
          className="text-xl cursor-pointer text-black dark:text-white"
          aria-label="Search"
        />

        {/* Profile Icon */}
        <div className="group relative">
          <FiUser
            onClick={() => (token ? null : navigate("/login"))}
            className="text-xl cursor-pointer text-black dark:text-white"
            aria-label="Profile"
          />

          {/* Dropdown */}
          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-10">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 dark:bg-slate-800 text-gray-500 dark:text-gray-300 rounded">
                <p className="cursor-pointer hover:text-black dark:hover:text-white">
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/orders")}
                  className="cursor-pointer hover:text-black dark:hover:text-white"
                >
                  Orders
                </p>
                <p
                  onClick={logout}
                  className="cursor-pointer hover:text-black dark:hover:text-white"
                >
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <FiShoppingCart
            className="text-xl text-black dark:text-white"
            aria-label="Cart"
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        {/* Hamburger / Menu Icon */}
        <FiMenu
          onClick={() => setVisible(true)}
          className="text-xl cursor-pointer sm:hidden text-black dark:text-white"
          aria-label="Open menu"
        />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white dark:bg-[#111827] transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-zinc-600 dark:text-zinc-300">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              src={assets.dropdown_icon}
              alt="Close"
              className="h-4 rotate-180"
            />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

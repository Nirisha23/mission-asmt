import React from 'react'
import NavLogoImg from "../../Assets/mercato-2color1.svg"
import { FiUser, FiShoppingCart } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";

import "./navbar.css"

function NavBar() {

    const NavSm = (() => {
        return (
            <div className='nav-container'>
                <div className="nav-content">
                    <div className="nav-logo">
                        <img src={NavLogoImg} alt="mercato-logo" />
                    </div>
                    <div className="nav-links">
                        <a href="#">
                            <div className="categories-link">
                                <BiCategory size={24} className='nav-icons' />
                            </div>
                        </a>
                        <a href="#">
                            <div className="categories-link">
                                <FiShoppingCart size={24} className='nav-icons' />
                            </div>
                        </a>
                        <a href="#">
                            <div className="categories-link">
                                <FiUser size={24} className='nav-icons' />
                            </div>
                        </a>
                    </div>
                </div>
                <div className="nav-search">
                    <div className="nav-location">
                        <CiLocationOn className='location-icon' />
                        <select name="" id="">
                            <option value="">Coimbatore</option>
                            <option value="">Chennai</option>
                            <option value="">Madurai</option>
                        </select>
                    </div>
                    <input type="text" placeholder='Search for any products' />
                </div>


            </div>


        )
    })

    const NavMd = (() => {
        return (
            <div className='nav-container'>
                <div className="nav-content">
                    <div className="nav-logo">
                        <img src={NavLogoImg} alt="mercato-logo" />
                    </div>
                    <div className="nav-links">
                        <a href="#">
                            <div className="categories-link">
                                <BiCategory size={24} className='nav-icons' />
                                <p>Categories</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="categories-link">
                                <FiShoppingCart size={24} className='nav-icons' />
                                <p>My Cart</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="categories-link">
                                <FiUser size={24} className='nav-icons' />
                                <p>Hi, Guest</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="nav-search">
                    <div className="nav-location">
                        <CiLocationOn className='location-icon' />
                        <select name="" id="">
                            <option value="">Coimbatore</option>
                            <option value="">Chennai</option>
                            <option value="">Madurai</option>
                        </select>
                    </div>
                    <input type="text" placeholder='Search for any products' />
                </div>


            </div>


        )
    })

    const NavLg = (() => {
        return (
            <div className='nav-container'>
                <div className="nav-content">
                    <div className="nav-logo">
                        <img src={NavLogoImg} alt="mercato-logo" />
                    </div>
                    <div className="nav-search">
                        <div className="nav-location">
                            <CiLocationOn className='location-icon' />
                            <select name="" id="">
                                <option value="">Coimbatore</option>
                                <option value="">Chennai</option>
                                <option value="">Madurai</option>
                            </select>
                        </div>
                        <input type="text" placeholder='Search for any products' />
                    </div>
                    <div className="nav-links">
                        <a href="#">
                            <div className="categories-link">
                                <FiShoppingCart className='nav-icons' />
                                <p>My Cart</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="categories-link">
                                <FiUser className='nav-icons' />
                                <p>Hi, Guest</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="navbar-level-two">
                    <div className='navbar-two-container'>
                        <div className="categories-sell">
                            <a href="#" className='categories-border'>
                                <div className="categories-link">
                                    <BiCategory className='nav-icons' />
                                    <select name="" id="">
                                        <option value="">Categories</option>
                                        <option value="">Chennai</option>
                                        <option value="">Madurai</option>
                                    </select>
                                </div>
                            </a>
                            <div className="sell-on-merceto">
                                <a href="#">Sell on Mercato</a>
                                <a href="#">Help</a>
                            </div>
                        </div>
                        <div className="offers-tag">
                            <a href="#">🎉 Get exclusive Offers on selected products 🎉</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <nav className="NavLg"><NavLg /></nav>
            <nav className="NavMd"><NavMd /></nav>
            <nav className="NavSm"><NavSm /></nav>
        </div>
    )
}

export default NavBar
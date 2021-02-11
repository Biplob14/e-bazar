import React from 'react';
import './Header.css';
import Logo from './img/e-bazar.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src={Logo} alt="e-bazar logo"/>            
            </Link>
            
            <div className="header__search">
                <input 
                type="text" 
                className="header__searchInput"/>
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello </span> 
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span> 
                    <span className="header__optionLineTwo">& Orders</span> 
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span> 
                    <span className="header__optionLineTwo">Prime</span> 
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon className=""/>
                        <span className="header__optionLineTwo header__basketCount">0</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header;
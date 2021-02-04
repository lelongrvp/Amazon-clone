import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthenticaton = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <nav className='header'>
            <Link to="/">
                <img 
                    className="header_logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="" 
                />
            </Link>
            {/* search box */}
            <div className="header_search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header_searchIcon" />
            </div>
            {/* 3 links */}
            <div className="header__nav">
                {/* 1st link */}
                <Link to={!user && "/login"} className="header_link">
                    <div onClick={login} className="header_option">
                        <span className="header_optionLineOne">Hello {user?.email}</span>
                        <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign in'}</span>
                    </div>
                </Link>
                {/* 2nd link */}
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">Returns</span>
                        <span className="header_optionLineTwo">& Orders</span>
                    </div>
                </Link>
                {/* 3rd link */}
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span  className="header_optionLineOne">Your</span>
                        <span className="header_optionLineTwo">Prime</span>
                    </div>
                </Link>
                {/* 4th link */}
                <Link to="/checkout" className="header_link">
                    <div className="header_optionBasket"></div>
                        {/* Shopping Basket Icon */}
                        <ShoppingBasketIcon />
                        {/* Number of items in the basket */}
                        <span className="header_basketCount">{basket?.length}</span>
                </Link>
            </div>
            {/* basket icon with number */}
        </nav>
    );
}

export default Header;

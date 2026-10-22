
import React from "react";
import logo from "./assets/logo.png";

const Navbar = () => {
    return (
        <div>
            <div>
                <div>
                    <a href="#" className="font-bold text-2xl sm:text-2xl gap-2">
                        <img src={logo} alt="E-commerce Logo" />
                    </a>
                </div>
                <div>
                    <div className="search-bar">
                        <input type="text" placeholder="Search for products, brands and more..." 
                        className="w-[200px] h-[40px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
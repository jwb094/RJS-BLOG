import React from 'react';
import { useState } from "react";

function Header(props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <header>
                <nav className="bg-gray-400 shadow-md px-4 py-3">
                    <div className="flex justify-between items-center">

                        {/* Brand */}
                        <div className="font-bold text-xl">
                            MyBrand
                        </div>

                        {/* Toggle */}
                        <button
                            className="md:hidden text-2xl"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            ☰
                        </button>

                        {/* Menu */}
                        <div
                            className={`
            flex-col md:flex md:flex-row md:items-center gap-4
            absolute md:static top-16 left-0 w-full md:w-auto bg-amber-300 md:bg-transparent
            ${isOpen ? "flex" : "hidden md:flex"}
          `}
                        >
                            <a href="/">Home</a>
                            {/* <a href="/blog/categories">Categories</a> */}
                            <a href="/search">Search</a>
                            <a href="/contact-us">Contact</a>
                        </div>

                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;
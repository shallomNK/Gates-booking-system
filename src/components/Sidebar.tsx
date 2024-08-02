import React from 'react';
import { Link } from 'react-router-dom';

// Define an interface for any props if needed (currently empty for simplicity)
interface NavbarProps {
    navText1?: string,
    navText2?: string,
    navText3?: string,
    navText4?: string,
    navText5?: string,
}

const Navbar: React.FC<NavbarProps> = ({ navText1, navText2, navText3, navText4, navText5 }: NavbarProps) => {
    return (
        <nav className="bg-gray-800 text-white fixed top-0 w-full z-10">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <div className="text-xl font-bold">PK GATES</div>
                <ul className="flex space-x-6 text-sm">
                    <li>
                        <Link to="/" className="hover:bg-gray-700 transition duration-200 px-3 py-2 rounded">
                            {navText1}
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:bg-gray-700 transition duration-200 px-3 py-2 rounded">
                            {navText2}
                        </Link>
                    </li>
                    <li>
                        <Link to="/gatepage" className="hover:bg-gray-700 transition duration-200 px-3 py-2 rounded">
                            {navText3}
                        </Link>
                    </li>
                    <li>
                        <Link to="/booking" className="hover:bg-gray-700 transition duration-200 px-3 py-2 rounded">
                            {navText4}
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:bg-gray-700 transition duration-200 px-3 py-2 rounded">
                            {navText5}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/MyPortfolio"
                  className="hover:text-gray-400 transition duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="/About"
                  className="hover:text-gray-400 transition duration-200">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/emma-olsson22/"
            className="hover:text-gray-400 transition duration-200"
            target="_blank"
            rel="noopener noreferrer">
            LinkedIn
          </a>
          <a
            href="https://github.com/Emmasi"
            className="hover:text-gray-400 transition duration-200"
            target="_blank"
            rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

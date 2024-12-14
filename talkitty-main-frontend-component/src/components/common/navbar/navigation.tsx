import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <ul className="flex space-x-4 justify-center">
        <li>
          <Link href="/">
            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
              About
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
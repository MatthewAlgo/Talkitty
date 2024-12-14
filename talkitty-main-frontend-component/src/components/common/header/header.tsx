import React from 'react';
import { Button } from '@nextui-org/react';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { useAuth } from '../../../context/authcontext'; // Adjust the path as necessary

const Header: React.FC = () => {
    const { isAuthenticated, login, logout } = useAuth();

    const handleAuthAction = () => {
        if (isAuthenticated) {
            logout();
        } else {
            // For demonstration purposes, we use a dummy token
            login('dummy-token');
        }
    };

    return (
        <header className="bg-gray-800 bg-opacity-75 text-white rounded-lg p-4 m-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-4xl font-bold text-white tracking-wider">
                    <span className="text-yellow-300">T</span>
                    <span className="text-green-300">a</span>
                    <span className="text-blue-300">l</span>
                    <span className="text-purple-300">k</span>
                    <span className="text-red-300">i</span>
                    <span className="text-pink-300">t</span>
                    <span className="text-indigo-300">t</span>
                    <span className="text-yellow-300">y</span>
                </h1>
                <Button
                    color="primary"
                    onClick={handleAuthAction}
                    className="ml-4 flex items-center"
                >
                    {isAuthenticated ? <FiLogOut className="mr-2" /> : <FiLogIn className="mr-2" />}
                    {isAuthenticated ? 'Logout' : 'Login'}
                </Button>
            </div>
        </header>
    );
};

export default Header;
import React from 'react';

const Homepage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 bg-opacity-75 text-white p-4 m-4 rounded-lg">
      <h1 className="text-5xl font-bold mb-4">Welcome to Talkitty</h1>
      <p className="text-xl mb-8">Your friendly AI chatbot</p>
      <div className="relative group mb-8">
        <div className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-50 transition duration-300 ease-in-out"></div>
      </div>
      <ul className="list-disc list-inside text-left text-lg space-y-2">
        <li className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-yellow-300">
          Real-time AI-powered conversations
        </li>
        <li className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-yellow-300">
          Personalized responses tailored to your needs
        </li>
        <li className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-yellow-300">
          Seamless integration with your favorite apps
        </li>
        <li className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-yellow-300">
          Secure and private interactions
        </li>
        <li className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-yellow-300">
          24/7 availability to assist you anytime
        </li>
      </ul>
    </div>
  );
};

export default Homepage;
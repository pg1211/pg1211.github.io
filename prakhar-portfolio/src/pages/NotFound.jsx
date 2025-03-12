import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-5 font-['Plus_Jakarta_Sans']">
      <h1 className="text-8xl font-bold text-red-500 m-0">404</h1>
      <p className="text-2xl text-gray-700 my-4">Oops! The page you're looking for doesn't exist.</p>
      <Link 
        to="/" 
        className="inline-block px-5 py-3 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;


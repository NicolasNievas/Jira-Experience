import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-800">
      <div className="flex flex-row justify-between w-full max-w-screen-lg">
        <div className="flex flex-col justify-center mr-8">
          <h1 className="text-5xl font-extrabold mb-8 drop-shadow-lg text-white">
            Welcome! Unify your tasks,<br />
            teammates and tools. <br />
          </h1>
          <div className="space-y-4"> 
            <Link href="/table">
              <button className="bg-white text-blue-500 hover:text-white hover:bg-blue-700 font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300">
                Go to Work
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="shadow-2xl">
            <img src="https://blog.vantagecircle.com/content/images/2022/04/Improving-Teamwork-in-the-workplace.png" alt="Image" className="max-w-md rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

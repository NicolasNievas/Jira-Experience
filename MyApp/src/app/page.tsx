import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="flex flex-row justify-between w-full max-w-screen-lg">
        <div className="flex flex-col justify-center mr-8">
          <h1 className="text-5xl font-extrabold mb-8 drop-shadow-lg">
            Welcome! Unify your tasks,<br />
            teammates and tools. <br />
          </h1>
          <div className="space-y-4"> 
            <Link href="/usage">
              <button className="bg-white text-blue-500 hover:text-white hover:bg-blue-700 font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300">
                How to use
              </button>
            </Link>
            <Link href="/page/table">
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

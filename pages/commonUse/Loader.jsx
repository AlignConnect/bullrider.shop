import React from 'react'

const Loader = ({ visible }) => {
    return (
      <div
        className={`text-center align-items-center z-50 place-items-center bg-purple-600 bg-opacity-25 fixed top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <a href="https://bit.ly/3JvDOKa" className=""><img 
          src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/60212e18-1a8e-448c-9b88-c164f4670800/public" 
          alt="Loading..." 
          className="LoaderApp-logo rounded-full mx-auto" 
        /></a>
      </div>
    );
  };

export default Loader
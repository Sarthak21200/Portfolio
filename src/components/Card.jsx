import React from 'react';

function Card({ imageUrl, text1, text2, text3 ,text4}){
  return (
    <div className="max-w-sm w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 bg-white bg-opacity-90 m-4">
      <img className="w-full" src={imageUrl} alt="Card image cap" />
      <div className="px-6 py-5 bg-gradient-to-b from-gray-300 to-white-400">
        <p className="text-black-800 text-lg font-semibold mb-2">{text1}</p>
        <p className="text-gray-700 text-base mb-2">{text2}</p>
        <p className="text-gray-700 text-base mb-2">{text3}</p>
        <p className="text-gray-700 text-base mb-2">{text4}</p>
      </div>
    </div>
  );
};

export default Card;

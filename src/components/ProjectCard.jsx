import React, { useState } from 'react';

const Card = ({ image, text1, text2, text3, text4,text5,text6 }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="relative w-64 h-80 m-10 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 bg-gradient-to-b from-blue-400 to-green-200"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card content when not hovered */}
      {!hovered && (
        <>
          <img src={image} alt="Card" className="w-full h-48 object-cover" />
          <p className="p-5 text-center text-base font-semibold mt-5">{text1}</p>
          
        </>
      )}

      {/* Card content when hovered */}
      {hovered && (
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-opacity-75 backdrop-filter backdrop-blur-lg transition-opacity duration-300 ease-in-out bg-green-300">
          <p className="text-base text-slate-950">{text2}</p>
          <div className="mt-4">
            <a href={text3} target="_blank" >
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2 transition-all duration-300 ease-in-out">
              Live
            </button>
            </a>
            <a href={text4} target="_blank" >
            <button onClick={text4} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out">
              GitHub Link
            </button>
            </a>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;

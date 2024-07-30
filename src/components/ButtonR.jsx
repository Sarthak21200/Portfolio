// ButtonComponent.js
import React from 'react';

const ButtonComponent = () => {
  const handleButtonClick = () => {
    // Open the resume in a new tab
    window.open('https://drive.google.com/file/d/1kcjbWU6lvkeRzw_tg1o8dxl1TpzOqPT4/view?usp=sharing', '_blank');
  };

  return (
    <button
      onClick={handleButtonClick}
      className="bg-gold text-black font-bold py-2 px-4 rounded hover:bg-red-700 hover:scale-105 "
    >
      Resume
    </button>
  );
};

export default ButtonComponent;

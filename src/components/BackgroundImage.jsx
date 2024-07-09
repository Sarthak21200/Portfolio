// BackgroundImage.jsx
import React from 'react';

const BackgroundImage = ({ children }) => {
  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/back1.jpg')" }}>
      {children}
    </div>
  );
};

export default BackgroundImage;

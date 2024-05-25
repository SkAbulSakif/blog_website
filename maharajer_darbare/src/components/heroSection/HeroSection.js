import React, { useEffect, useState } from 'react';
import '../heroSection/HeroSection.css'; // Import CSS file for styling

const HeroSection = () => {
  const [textToShow, setTextToShow] = useState('');
  const mainText = 'MAHARAJER DARBARE';
  const subText = 'Welcome to ';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= mainText.length) {
        setTextToShow(mainText.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 200); // Adjust the interval as needed for animation speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section">
      <div className="content">
        <h1 className='sub-text'>{subText}</h1><br />
        <h1 className="main-text">{textToShow}</h1>
      </div>
    </div>
  );
};

export default HeroSection;

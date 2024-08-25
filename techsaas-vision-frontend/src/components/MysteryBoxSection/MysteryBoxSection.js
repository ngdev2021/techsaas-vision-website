import React, { useState } from 'react';
import './MysteryBoxSection.css';
import Confetti from 'react-confetti';
import CTAButton from '../CTAButton/CTAButton';

const MysteryBoxSection = ({ onReveal }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened(true);
    if (onReveal) {
      onReveal();
    }
  };

  return (
    <div className="mystery-box-container" onClick={handleClick}>
      {!isOpened ? (
        <div className="mystery-box">
          <div className="box-side front"></div>
          <div className="box-side back"></div>
          <div className="box-side left"></div>
          <div className="box-side right"></div>
          <div className="box-side top"></div>
          <div className="box-side bottom"></div>
          <div className="lid"></div>
          <div className="ribbon"></div>
          <div className="ribbon-cross"></div>
          <div className="cta-text">
            <CTAButton text="Open the Mystery Box" />
          </div>
        </div>
      ) : (
        <>
          <Confetti numberOfPieces={300} recycle={false} />
          <div className="cta-text"></div>
        </>
      )}
    </div>
  );
};

export default MysteryBoxSection;

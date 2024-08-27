import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './AdCarousel.css';

const AdCarousel = () => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselInterval = useRef(null);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/ad/ads'
        );
        setAds(response.data);
      } catch (error) {
        console.error('Error fetching ads:', error);

        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status < 600
        ) {
          setError(
            'There was an error fetching the ads. Please try again later.'
          );
        } else {
          setError(
            'Unexpected error occurred. Please try again later.'
          );
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAds();
  }, []);

  useEffect(() => {
    // Set up auto-scrolling
    carouselInterval.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(carouselInterval.current);
    };
  }, [ads]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length);
    resetInterval();
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + ads.length) % ads.length
    );
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(carouselInterval.current);
    carouselInterval.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 5000);
  };

  if (loading) return <div className="loading">Loading...</div>;

  if (error) return <div className="error">{error}</div>;

  return (
    <div className="ad-carousel-container">
      <h2>Advertisement Carousel</h2>
      <div className="ad-carousel">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {ads.map((ad) => (
            <div
              key={ad._id}
              className="ad-item"
              style={{
                background: ad.primaryColor,
                color: ad.secondaryText,
              }}
            >
              <h3 style={{ color: ad.primaryText }}>{ad.adText}</h3>
              <img src={ad.qrCodeUrl} alt="QR Code" />
            </div>
          ))}
        </div>
        <button className="carousel-control prev" onClick={goToPrev}>
          &#10094;
        </button>
        <button className="carousel-control next" onClick={goToNext}>
          &#10095;
        </button>
        <div className="carousel-indicators">
          {ads.map((_, index) => (
            <span
              key={index}
              className={`indicator ${
                index === currentIndex ? 'active' : ''
              }`}
              onClick={() => {
                setCurrentIndex(index);
                resetInterval();
              }}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdCarousel;

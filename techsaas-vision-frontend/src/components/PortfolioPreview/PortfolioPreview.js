import './PortfolioPreview.css';

const PortfolioPreview = () => {
  return (
    <div className="portfolio-preview" data-aos="fade-up">
      <h3>Our Latest Projects</h3>
      <div className="portfolio-item">
        <img src="/path-to-image.jpg" alt="Project 1" />
        <p>Project 1 Description</p>
      </div>
      {/* Add more portfolio items here */}
    </div>
  );
};

export default PortfolioPreview;
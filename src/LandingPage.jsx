
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="background-image"></div>
      <div className="content">
        <div className="landing_content">
          <h1>Paradise Nursery</h1>
          <div className="divider"></div>
          <p>
            Welcome to Paradise Nursery, where green meets serenity! We are passionate about 
            bringing nature closer to you with our wide range of beautiful houseplants. 
            Whether you&apos;re a seasoned plant enthusiast or just beginning your green journey, 
            we have the perfect plants to transform your space into a lush paradise.
          </p>
          <Link to="/products">
            <button className="get-started-button">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

import React, { useEffect } from 'react';
import styles from './YelpReview.module.css';

const YelpReview = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.yelp.com/embed/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.yelpReview}>
      <h3>What Our Customers Say</h3>
      <div className={styles.reviewContainer}>
        <span 
          className="yelp-review" 
          data-review-id="Igz1mNi-e9lRN9TEHCYVYg" 
          data-hostname="www.yelp.com"
        >
          Read <a href="https://www.yelp.com/user_details?userid=0pwHUIXiCS1dz2oMqiIzsg" rel="nofollow noopener">Carmella M.</a>'s <a href="https://www.yelp.com/biz/dizzy-doze-smoke-and-vape-austin?hrid=Igz1mNi-e9lRN9TEHCYVYg" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/3meIYjTcZ49DPzoGp8t61g" rel="nofollow noopener">Dizzy Doze Smoke & Vape</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a>
        </span>
      </div>
    </div>
  );
};

export default YelpReview;
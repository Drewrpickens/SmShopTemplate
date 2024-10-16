import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { GeekBar1, GeekBar2, Raz, Royalty, Royalty1 ,Alternative
  ,Disposable
  ,ELiquid
  ,podSystem
  ,tanksAndCoils
  ,Vapekits
  ,CherryStraz
  ,VapeJuice
  ,VapeDevice
} from './images/imagerepository'
import YelpReview from './YelpReview';


function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [GeekBar1, GeekBar2, Raz, Royalty, Royalty1];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const categories = [
    { name: "Alternative", image: Alternative },
    { name: "Disposable", image: Disposable },
    { name: "E-Liquid", image: ELiquid },
    { name: "Pod System", image: podSystem },
    { name: "Tanks & Coils", image: tanksAndCoils },
    { name: "Vape Kits", image: Vapekits }
  ];

  return (
    <div className={styles.home}>
      <section className={styles.slider}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          >
            <img src={image} alt={`Slide ${index + 1}`} className={styles.slideImage} />
          </div>
        ))}
        <div className={styles.slideOverlay}>
          <h2>Premium Vape Products</h2>
          <p>Discover our latest collection</p>
          <Link to="/shop" className={styles.ctaButton}>Shop Now</Link>
        </div>
      </section>
      
      <section className={styles.features}>
        <div className={styles.feature}>
          <svg className={styles.featureIcon} viewBox="0 0 24 24" width="48" height="48">
            <path fill="Blue" d="M12 2L1 21h22L12 2zm0 4l7.53 13H4.47L12 6zm-1 10h2v2h-2v-2zm0-6h2v4h-2v-4z"/>
          </svg>
          <h3>Premium Selection</h3>
          <p>Curated collection of top-tier vapes, e-liquids, and accessories</p>
        </div>
        <div className={styles.feature}>
          <svg className={styles.featureIcon} viewBox="0 0 24 24" width="48" height="48">
            <path fill="Blue" d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
          <h3>100% Original Products</h3>
          <p>No Clone Zone</p>
        </div>
        <div className={styles.feature}>
          <svg className={styles.featureIcon} viewBox="0 0 24 24" width="48" height="48">
            <path fill="Blue" d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
          </svg>
          <h3>Best Market Price</h3>
          <p>Savings Guaranteed</p>
        </div>
      </section>
      
      <section className={styles.featuredProducts}>
        <h3>Featured Products</h3>
        <div className={styles.productGrid}>
          <div className={styles.product}>
            <img src={CherryStraz} alt="Geek Bar Pulse 15000" />
            <h4>Geek Bar Pulse 15000</h4>
            <p>$59.99</p>
            <button className={styles.addToCartButton}>Add to Cart</button>
          </div>
          <div className={styles.product}>
            <img src={VapeJuice} alt="Geek Bar Pulse X 25000" />
            <h4>Geek Bar Pulse X 25000</h4>
            <p>$24.99</p>
            <button className={styles.addToCartButton}>Add to Cart</button>
          </div>
          <div className={styles.product}>
            <img src={VapeDevice} alt="RAZ DC25000 Disposable" />
            <h4>RAZ DC25000 Disposable</h4>
            <p>$129.99</p>
            <button className={styles.addToCartButton}>Add to Cart</button>
          </div>
        </div>
      </section>

      <section className={styles.storeInfo}>
        <h4>Visit Our Store</h4>
        <div className={styles.storeInfoContent}>
          <p>4415 Menchaca Road Suite B, Austin, TX 78745 | Phone: (512)-551-9390</p>
          <p>Hours: Mon-Thu 11am-9pm, Fri-Sat 11am-9:30pm, Sun 11am-8pm</p>
        </div>
      </section>

      <section className={styles.shopByCategories}>
        <h3>Shop by Categories</h3>
        <div className={styles.categoriesGrid}>
          {categories.map((category, index) => (
            <div key={index} className={styles.category}>
              <div className={styles.categoryImageContainer}>
                <img src={category.image} alt={category.name} />
              </div>
              <h4>{category.name}</h4>
              <Link to={`/shop/${category.name.toLowerCase().replace(' & ', '-')}`} className={styles.shopNowButton}>
                Shop Now
              </Link>
            </div>
          ))}
        </div>
      </section>
      <YelpReview />

    </div>
  );
}

export default Home;
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Shop from './Shop';
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <div className={styles.warning}>
          WARNING: This Product Contains Nicotine. Nicotine is an addictive chemical.
        </div>
        <header className={styles.header}>
          <div className={styles.logo}>
            <h1>Dizzy Dose</h1>
            <p>Smoke & Vape</p>
          </div>
          <nav>
            <ul className={styles.navList}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </main>
        <footer className={styles.footer}>
          <p>&copy; 2024 Dizzy Dose Smoke & Vape. All rights reserved.</p>
          <p>Must be 21+ to purchase. Please vape responsibly.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
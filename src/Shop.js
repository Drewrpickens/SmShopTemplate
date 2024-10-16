import React from 'react';
import styles from './Shop.module.css';

const products = [
  { id: 1, name: 'E-liquid 1', price: 19.99 },
  { id: 2, name: 'Vape Pen', price: 39.99 },
  { id: 3, name: 'Mod Kit', price: 89.99 },
  { id: 4, name: 'Coils (Pack of 5)', price: 14.99 },
  { id: 5, name: 'E-liquid 2', price: 24.99 },
  { id: 6, name: 'Atomizer', price: 29.99 },
];

function Shop() {
  return (
    <div className={styles.shop}>
      <h2>Shop Our Products</h2>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
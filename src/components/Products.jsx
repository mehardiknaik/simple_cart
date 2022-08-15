import React from "react";
import styles from "../../styles/Products.module.css";
import { useData } from "../util/context";

const Products = () => {
  const {
    data: { products },
  } = useData();
  return (
    <div className={styles.container}>
      {products.map((product) => (
        <div className={styles.widget} key={product.title}>
          <img
            className={styles.image}
            src={product.thumbnail}
            alt={product.title}
          />
          <div className={styles.wrapper}>
            {" "}
            <div className={styles.title}>{product.title}</div>
            <button className={styles.button}>add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

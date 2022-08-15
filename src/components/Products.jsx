import React from "react";
import Image from "next/image";
import styles from "../../styles/Products.module.css";
import { useData } from "../util/context";

const css = { width: "100%", height: "auto" };
const Products = ({products}) => {
  const {
    data: {  cart },
    dispatch,
  } = useData();
  return (
    <div className="mainWrapper">
      <div className={"header"}>Products</div>
      <div className={styles.container}>
        {products.map((product) => (
          <div className={styles.widget} key={product.id}>
            <div className={styles.imagecontainer}>
              <Image
                src={product.thumbnail}
                alt={product.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.wrapper}>
              {" "}
              <div className={styles.title}>{product.title}</div>
              {cart.some((e) => e.id === product.id) ? (
                <button
                  className={styles.button}
                  onClick={() =>
                    dispatch({
                      type: "updateCart",
                      payload: { id: product.id, qty: 0 },
                    })
                  }
                >
                  Remove
                </button>
              ) : (
                <button
                  className={styles.button}
                  onClick={() =>
                    dispatch({
                      type: "addToCart",
                      payload: { ...product, qty: 1 },
                    })
                  }
                >
                  add to cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

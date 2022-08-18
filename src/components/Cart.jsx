import React, { useMemo } from "react";
import Image from "next/image";
import styles from "../../styles/Cart.module.css";
import { useData } from "../util/context";

const Cart = () => {
  const {
    data: { cart },
    dispatch,
  } = useData();

  const total = useMemo(
    () => cart.reduce((a, b) => (a += b.price * b.qty), 0),
    [cart]
  );
  
  return (
    <div className="mainWrapper">
      <div className={"header"}>Cart</div>
      <div> Total = {total}</div>
      <div className={styles.container}>
        {cart.map((item) => (
          <div className={styles.widget} key={item.id}>
            <div className={styles.imagecontainer}>
              <Image
                src={item.thumbnail}
                alt={item.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.qtyContainer}>
              <button
                className={styles.qtyButton}
                onClick={() =>
                  dispatch({
                    type: "updateCart",
                    payload: { id: item.id, qty: item.qty - 1 },
                  })
                }
              >
                -
              </button>
              <span className={styles.qty}>{item.qty}</span>
              <button
                className={styles.qtyButton}
                onClick={() =>
                  dispatch({
                    type: "updateCart",
                    payload: { id: item.id, qty: item.qty + 1 },
                  })
                }
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;

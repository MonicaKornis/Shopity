"use client";
import styles from "./../ui/cart.module.css";
import ItemCollectionDisplay from "../ui/ItemCollectionDisplay";

export default function Page() {
  return (
    <div className={styles.main}>
      <div className={styles.cartCollectionContainer}>
        <ItemCollectionDisplay collectionLocation={"cart"} />
      </div>
    </div>
  );
}

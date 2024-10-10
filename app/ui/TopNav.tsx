"use client";
import { useState } from "react";
import styles from "./../page.module.css"
import useCart from "./../context/context-hooks";
import Link from "next/link";
import Image from "next/image";
import ItemCollectionDisplay from "./ItemCollectionDisplay";
import React from "react";

export default function TopNav() {
  const { cart } = useCart();
  const [cartVisible, setCartVisible] = useState(false);

  const cartSize = Object.keys(cart).reduce(
    (accumulator, id) => accumulator + cart[id][1],
    0
  );

  return (
    <>
      <div className={styles.topNav}>
        <div className={styles.logoContainer}>
          <Image
            src={`/Logo.svg`}
            alt="company-logo"
            width="120"
            height="120"
          ></Image>
        </div>
        <Link className={styles.navItem} href="/collections">
          Our Collection
        </Link>
        <Link
          href="/cart"
          className={styles.navItem}
          onMouseEnter={() => setCartVisible(true)}
          onMouseLeave={() => setCartVisible(false)}
        >
          {`View Shopping Cart (${cartSize})`}
        </Link>
        {cartVisible && (
          <div className={styles.cartPopOut}
          onMouseEnter={() => setCartVisible(true)}
          onMouseLeave={() => setCartVisible(false)}
          >
            <h3 className={styles.cartPopOutHeader}>Your Bag</h3>
            <ItemCollectionDisplay collectionLocation="pop-out" />
          </div>
        )}
      </div>
    </>
  );
}

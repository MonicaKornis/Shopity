"use client";

import styles from "./../ui/collections.module.css";
import useCart from "../context/context-hooks";
import { ProductItem, OpertationType } from "../types";
import React, { useEffect } from "react";

export default function ModifyCartButton({
  label,
  type,
  ammount,
  item,
}: {
  label: string;
  type: OpertationType;
  ammount?: number;
  item: ProductItem;
}) {
  const { removeAllFromCart, removeOneFromCart, addAmmountToCart } = useCart();
  let button;
    (() => {
      switch(type) {
        case "remove-all":
          button = <div data-testid={`remove-all-button-${item.product_id}`}
                onClick={() => {
                  removeAllFromCart(item.product_id);
                }}
                className={styles.removeFromCartButton}
              >
                {label}
              </div>
          break;
        case "remove-ammount":
          button = <div data-testid={`remove-ammount-button-${item.product_id}`}
                onClick={() => {
                  addAmmountToCart(item, ammount);
                }}
                className={styles.removeFromCartButton}
              >
                {label}
              </div>
          break;
        case "remove-one":
            button =  <div data-testid={`remove-one-button-${item.product_id}`}
                  onClick={() => {
                    removeOneFromCart(item.product_id);
                  }}
                  className={styles.removeFromCartButton}
                >
                  {label}
                </div>
            break;
        default:
          // code block
      }

    })()

  return <>{button}</>;
}

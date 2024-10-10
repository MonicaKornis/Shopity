"use client";

import { memo } from "react";
import useCart from "../context/context-hooks";
import { ProductItem } from "../types";
import styles from "./../ui/collections.module.css";

export default memo(function AddToCartButton({
  item,
  label,
}: {
  item: ProductItem;
  label?: string;
}) {
  const { addToCart } = useCart();
  return (
    <div>
      <div data-testid={`add-one-button-${item.product_id}`}
        onClick={() => {

          addToCart(item);
        }}
        className={styles.addToCartButton}
      >
        {label || "Add To Cart"}
      </div>
    </div>
  );
});

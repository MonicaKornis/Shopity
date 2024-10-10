"use client";

import { useEffect, useState } from "react";
import styles from "./cart.module.css";
import ModifyCartButton from "./ModifyCartButton";
import { ProductItem } from "./../types";

export default function CartInput({
  inputLimit,
  defaultNumber,
  label,
  item,
}: {
  inputLimit: number;
  defaultNumber: number;
  label: string;
  item: ProductItem;
}) {
  const [invalid, setInvalid] = useState(false);
  const [inputValue, setInputValue] = useState(defaultNumber);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(event.target.value);
    setInputValue(value);
    if (value > inputLimit) {
      setInvalid(true);
    } else {
      setInvalid(false);
    }
  };


  return (
    <div className={styles.cartInputContainer}>
      <label>{label}</label>
      <div className={styles.cartInputError}>
        {invalid && "Value Exceeds Amount In Stock"}
      </div>
      <input
        min="0"
        className={styles.cartInput}
        type="number"
        onChange={handleInputChange}
        defaultValue={defaultNumber}
      />
      {!invalid && inputValue ? (
        <ModifyCartButton
          ammount={inputValue}
          item={item}
          label="Update Quantity"
          type="remove-ammount"
        />
      ) : null}
    </div>
  );
}

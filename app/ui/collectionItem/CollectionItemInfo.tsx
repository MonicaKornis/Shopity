"use client";
import styles from "./../collectionItem.module.css";
import Image from 'next/image'
import { ProductItem } from "./../../types";
import AddToCartButton from "../AddToCartButton";
import ModifyCartButton from "../ModifyCartButton";
import useCart from "./../../context/context-hooks";

export default function CollectionItemInfo({ item }: { item: ProductItem }) {
  const { cart } = useCart();
  const numOfItemsInCart = cart[item.product_id] ? cart[item.product_id][1] : 0;
  const showAddToCartButton =
    numOfItemsInCart < item.quantity_in_stock ? true : false;
  const showRemoveFromCartButton = numOfItemsInCart > 0 ? true : false;
  const numItemsLeftInStock = cart[item.product_id]
    ? item.quantity_in_stock - cart[item.product_id][1]
    : item.quantity_in_stock;

  return (
    <div className={styles.collectionItemPhotoAndInfoContainer}>
      <div className={styles.collectionItemPhotoAndInfo}>
        <div className={styles.collectionItemImageContainer}>
          <Image
            className={styles.collectionItemImage}
            src={item?.image_url}
            width='300'
            height='300'
            alt='item-image'
          ></Image>
        </div>
        <div className={styles.collectionItemDescriptionContainer}>
          <h2
            className={styles.collectionItemHeader}
          >{`${item?.product_name}`}</h2>
          <p
            className={styles.itemDataPoint}
          >{`Description: ${item?.description}`}</p>
          <strong>
            <p className={styles.itemDataPoint}>{`Price: $${item?.price}`}</p>
          </strong>
          <div className={styles.categoryBadge}>{`${item?.category}`}</div>
          <p className={styles.itemDataPoint}>{`Brand: ${item?.brand}`}</p>
          <p className={styles.itemDataPoint}>{`Size: ${item?.size}`}</p>
          <p className={styles.itemDataPoint}>{`Color: ${item?.color}`}</p>
          <p
            className={styles.itemDataPoint}
          >{`Quanitiy Left For Purchase: ${numItemsLeftInStock}`}</p>
          <p
            className={styles.itemDataPoint}
          >{`Release Date: ${item?.release_date}`}</p>{" "}
          {showAddToCartButton && <AddToCartButton item={item} />}
          {showRemoveFromCartButton && (
            <ModifyCartButton
              item={item}
              type="remove-one"
              label="Remove One From Cart"
            />
          )}
          {showRemoveFromCartButton && (
            <ModifyCartButton
              item={item}
              type="remove-all"
              label="Remove All From Cart"
            />
          )}
        </div>
      </div>
      <div className={styles.testimonialsContainer}></div>
    </div>
  );
}

"use client";
import Image from 'next/image';
import Link from 'next/link';
import useCart from "./../context/context-hooks";
import styles from "./../page.module.css";
import { IItemCollectionDisplay } from "./../types";
import AddToCartButton from "./AddToCartButton";
import CartInput from "./CartInput";
import ModifyCartButton from "./ModifyCartButton";

export default function ItemCollectionDisplay({
  collectionLocation,
}: IItemCollectionDisplay) {
  const { cart, clearCart } = useCart();

  const cartIds: Array<string> = Object.keys(cart);

  const collectionButton =
    cartIds.length > 0 && collectionLocation === "cart" ? (
      <div>
        <div className={styles.viewCartButtonPadding}></div>
        <div onClick={clearCart} className={styles.viewCartButton}>
          <div>Clear Cart</div>
        </div>
      </div>
    ) : null;

  const emptyMessage =
    collectionLocation === "cart" ? (
      <div className={styles.emptyMessage}>
        <h3>Your Bag</h3>
        {`You haven't put any items in your bag`}
      </div>
    ) : (
      <div className={styles.emptyMessagePopOut}>
        <h3>Your Bag</h3>
        {`You haven't put any items in your bag`}
      </div>
    );

  return (
    <div className={styles.itemCollectionContainer}>
      {cartIds.length
        ? cartIds.map((id: string) => {
            let item = cart[id][0];
            let numberOfItems = cart[id][1];
            return (
              <div className={styles.cartPopOutItem} key={id}>
                <div className={styles.cartPopOutItemImageInfo}>
                  <Link href={`/collections/${item?.product_id}`}>
                    <Image src={item?.image_url} width="140" height="150" alt={`image from product ${item.product_id}`}></Image>
                  </Link>
                  <strong>
                    <p>{item?.product_name}</p>
                  </strong>
                  <p>{`$${item?.price}`}</p>
                  <p>{`${numberOfItems} in cart`}</p>
                </div>

                <div className={styles.cartButtons}>
                  {collectionLocation === "cart" &&
                    cart[id][1] < cart[id][0].quantity_in_stock && (
                      <AddToCartButton item={item} label='Add More To Cart'/>
                    )}
                  {collectionLocation === "cart" && (
                    <>
                      <ModifyCartButton
                        label="Remove All From Cart"
                        type={"remove-all"}
                        item={item}
                      />
                      <ModifyCartButton
                        label="Remove One From Cart"
                        type={"remove-one"}
                        item={item}
                      />
                      <div className={styles.addToCartInput}>
                        <CartInput
                          defaultNumber={cart[id][1]}
                          label="Update Quantity"
                          inputLimit={item.quantity_in_stock}
                          item={item}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })
        : emptyMessage}
      {collectionButton}
    </div>
  );
}

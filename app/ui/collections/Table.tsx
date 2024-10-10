import Image from 'next/image';
import Link from "next/link";
import AddToCartButton from "../AddToCartButton";
import styles from "./../../ui/collections.module.css";

export default async function Table({
  items,
}: {
  query: string;
  currentPage: number;
  items?: any;
}) {
  return (
    <div>
      <div className={styles.grid}>
        {items?.map((item: any) => {
          return (
            <div className={styles.tableItem} key={item.product_id}>
              <div data-testid="table-element">
                <Link href={`/collections/${item.product_id}`}>
                  <Image src={item.image_url} width="150" height="200" alt={`Image for ${item.product_name}`}/>
                </Link>
                <p>{item.product_name}</p>
                <p>{`$${item.price}`}</p>
                <div className={styles.categoryBadge}>{`${item.category}`}</div>
              </div>
              {item.quantity_in_stock > 0 ? (
                <AddToCartButton item={item} />
              ) : (
                <div className={styles.addToCartButtonDisabled}>
                  Add To Cart
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

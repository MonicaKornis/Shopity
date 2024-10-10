
import styles from "./../../ui/collectionItem.module.css";
import CollectionItemInfo from "./../../ui/collectionItem/CollectionItemInfo";
import { getItem } from "./../actions";


export default async function Page({ params }: { params: { id: string } }) {
  const { item }: any = await getItem(parseInt(params.id));

  const itemNotFound = item ? <div></div> : <h4>Item Not Found 🥲</h4>;
  return (
    <div>
      <div className={styles.main}>
        {item ? <CollectionItemInfo item={item} /> : itemNotFound}
      </div>
    </div>
  );
}

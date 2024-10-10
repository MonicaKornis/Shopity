export type ProductItem = {
  product_id: number;
  product_name: string;
  description: string;
  price: number;
  quantity_in_stock: number;
  category: string;
  brand: string;
  color: string;
  size: string;
  release_date: string;
  image_url: string;
};

export type Cart = {
  [key: number]: [ProductItem, number];
};

export interface IItemCollectionDisplay {
  collectionLocation: collectionLocation;
}

export type collectionLocation = "pop-out" | "cart";

export type OpertationType = "remove-all" | "remove-one" | "remove-ammount";

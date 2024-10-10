"use server";

import { promises as fs } from "fs";
import { ProductItem } from "./../../types";

export async function getItem(id: number) {
  let data;
  try {
    //mock fetching product list
    const file = await fs.readFile(
      process.cwd() + "/app/test_data.json",
      "utf8"
    );
    data = JSON.parse(file);
  } catch (error) {
    return error;
  }

  return data;
  //   return data.filter((item: ProductItem) => item.product_id == id);
}

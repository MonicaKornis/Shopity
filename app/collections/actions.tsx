"use server";
import { promises as fs } from "fs";
import { ProductItem } from "./../types";

export async function getItems(
  query: string,
  currentPage: number,
  itemsPerPage: number,
  categoryFilter: string,
  sort: string,
) {
  let data;
  try {
    //mock fetching product list
    const file = await fs.readFile(
      process.cwd() + "/app/test_data_large.json",
      "utf8"
    );
    data = JSON.parse(file);
  } catch (error) {
    return error;
  }

  let queryData = query
    ? data.filter((item: ProductItem) =>
        item.product_name.toLowerCase().startsWith(query.toLowerCase())
      )
    : data;
  let categories = new Set();
  data.forEach((item: ProductItem) => categories.add(item.category));
  const start = currentPage == 1 ? 0 : (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  if (categoryFilter) {
    queryData = queryData.filter((item: ProductItem) => item.category === categoryFilter);
  }

  if (sort) {
    if (sort === "ASC") {
      queryData.sort((a:ProductItem, b:ProductItem) => a.price - b.price);
    } else if (sort === "DEC") {
      queryData.sort((a:ProductItem, b:ProductItem) => b.price - a.price);
    }
  }
  const finalList = queryData.slice(start, end) || [];
  return {
    items: finalList,
    totalPages: Math.ceil(queryData.length / itemsPerPage),
    categories: [...categories],
  };
}

export async function getItem(id: number) {
  let data;
  try {
    //mock fetching product list
    const file = await fs.readFile(
      process.cwd() + "/app/test_data_large.json",
      "utf8"
    );
    data = JSON.parse(file);
  } catch (error) {
    return error;
  }
  return {
    item: data.filter((item: ProductItem) => item.product_id === id)[0],
  };
}

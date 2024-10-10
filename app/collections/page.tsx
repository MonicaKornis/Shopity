// main collection page
import styles from "./../ui/collections.module.css";
import { getItems } from "./actions";
import Search from "./../ui/collections/Search";
import Table from "./../ui/collections/Table";
import Filters from "../ui/collections/Filters";
import TablePagination from "./../ui/collections/TablePagination";
import React from "react";

export default async function Page({
  searchParams
}: {
  searchParams: {
    query?: string;
    page?: string;
    perPage?: string;
    sort?: string;
    filter?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const perPage = Number(searchParams?.perPage) || 5;
  const sort = searchParams?.sort || "ASC";
  const filter = searchParams?.filter || "";

  const { items, totalPages, categories } = await getItems(
    query,
    currentPage,
    perPage,
    filter,
    sort
  ) || [];

  const emptyTableMessage = <h4>No Results 🥲</h4>;
  return (
    <>
      <div className={styles.main}>
        <div className={styles.searchAndFilterContainer}>
          <Search placeholder="Search product titles..." />
          <Filters categories={categories} />
        </div>

        {items.length > 0 ? (
          <Table query={query} currentPage={currentPage} items={items} />
        ) : (
          emptyTableMessage
        )}
        {totalPages > 1 ? (
          <TablePagination totalPages={totalPages} />
        ) : items.length > 0 ? (
          <div>Page 1 of 1</div>
        ) : null}
      </div>
    </>
  );
}

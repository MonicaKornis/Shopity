"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import styles from "./../collections.module.css";
import { memo } from "react";
import React from "react";

export default memo(function Filters({ categories }: { categories: [] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentSort = searchParams.get("sort") || "";
  const currentFilter = searchParams.get("filter") || "";
  const { replace } = useRouter();

  const addSortToURL = (sortType: string) => {
    const params = new URLSearchParams(searchParams);
    if (sortType.length > 0) {
      params.set("sort", sortType.toString());
    } else {
      params.delete("sort");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const addFilterCategoryToURL = (filterCategory: string) => {
    const params = new URLSearchParams(searchParams);
    if (filterCategory.length > 0) {
      params.set("filter", filterCategory.toString());
      params.set("page", "1");
    } else {
      params.delete("filter");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <div>
        <div className={styles.filterContainer}>
          <label className={styles.filterLabel} htmlFor="sort">
            Sort By Price
          </label>
          <select
            id="sort"
            className={styles.select}
            onChange={(e) => addSortToURL(e.target.value)}
          >
            <option selected={currentSort === ""} value=""></option>
            <option selected={currentSort === "ASC"} value="ASC">
              Low to High
            </option>
            <option selected={currentSort === "DEC"} value="DEC">
              High To Low
            </option>
          </select>
          <label className={styles.filterLabel} htmlFor="filter">
            Filter By Category
          </label>
          <select
            className={styles.select}
            id="filter"
            onChange={(e) => addFilterCategoryToURL(e.target.value)}
          >
            <option selected={true} value=""></option>
            {categories.map((category) => (
              <option
                key={category}
                selected={currentFilter === category}
                value={category}
              >{`${category}`}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
});

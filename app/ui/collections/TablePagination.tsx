"use client";

import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import styles from "./../../ui/collections.module.css";
import { memo } from "react";
import React from "react";

export default memo(function TablePagination({
  totalPages,
}: {
  totalPages: number;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const currentNumPerPage = Number(searchParams.get("perPage")) || 5;
  const { replace } = useRouter();

  const addPageToURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const addPerPageToURL = (perPage: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("perPage", perPage.toString());
    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);
  };

  const forwardButton =
    currentPage >= totalPages ? (
      <div className={styles.paginationButton}>{`>`}</div>
    ) : (
      <Link
        className={styles.paginationButton}
        href={addPageToURL(currentPage + 1)}
        scroll={false}
      >{`>`}</Link>
    );

  const backButton =
    currentPage == 1 ? (
      <div className={styles.paginationButton}>{`<`}</div>
    ) : (
      <Link
        className={styles.paginationButton}
        href={addPageToURL(currentPage - 1)}
        scroll={false}
      >{`<`}</Link>
    );

  return (
    <>
      <div className={styles.paginationContainer}>
        <div className={styles.paginationNumPerPageContainer}>
          <label className={styles.paginationLabel} htmlFor="numPerPge">
            Items Per Page
          </label>
          <select
            className={styles.select}
            id="numPerPge"
            onChange={(e) => addPerPageToURL(e.target.value)}
          >
            <option selected={currentNumPerPage == 5} value="5">
              5
            </option>
            <option selected={currentNumPerPage == 10} value="10">
              10
            </option>
            <option value="20" selected={currentNumPerPage == 20}>
              20
            </option>
          </select>
        </div>
        <div className={styles.paginationButtonContainer}>
          {backButton}
          {`Page ${currentPage} of ${totalPages}`}
          {forwardButton}
        </div>
      </div>
    </>
  );
});

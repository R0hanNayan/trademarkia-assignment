import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Pagination } from "@mui/material";

function Pages() {
  const { trademarks, setCurrentPage, currentPage } = useContext(Context);
  const totalPages = Math.ceil(trademarks?.total?.value / 10);

  if (!trademarks || totalPages <= 1) return null;

  return (
    <div className="bg-white w-full flex items-center justify-center pb-6 max-[650px]:pb-10">
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(event, value) => setCurrentPage(value)}
        color="primary"
        size={window.innerWidth <= 650 ? "small" : "medium"}
        shape="rounded"
        siblingCount={1}
        boundaryCount={1}
      />
    </div>
  );
}

export default Pages;

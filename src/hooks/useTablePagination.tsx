import { useState } from "react";

export default function useTablePagination(data: any) {
  // Step 1: Create state variables for current page and page size.
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // Set your desired page size.

  // Step 2: Define functions to handle page changes.
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil((data?.length || 0) / pageSize) || 1;
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Step 3: Calculate the data to display based on the current page and page size.
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedData = data.slice(startIndex, endIndex);
  return {
    handleNextPage,
    handlePreviousPage,
    currentPage,
    displayedData,
    setCurrentPage,
    pageSize,
  };
}

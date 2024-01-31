import useTablePagination from "@/hooks/useTablePagination";
import { Button, Pagination } from "antd";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

interface TablePagination {
  tableData: any;
}
function TablePagination({ tableData }: TablePagination) {
  const {
    handleNextPage,
    handlePreviousPage,
    currentPage,
    setCurrentPage,
    pageSize,
  } = useTablePagination(tableData);
  return (
    <div className="flex justify-between w-full py-4 ">
      <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
        <div className="flex items-center justify-center gap-x-1 text-primaryDark">
          <span>
            <BsArrowLeftShort size={22} />
          </span>
          <span>Previous</span>
        </div>
      </Button>
      <Pagination
        current={currentPage}
        defaultCurrent={1}
        total={tableData.length}
        pageSize={pageSize}
        onChange={(page) => setCurrentPage(page)}
      />
      <Button
        onClick={handleNextPage}
        disabled={currentPage === Math.ceil(tableData.length / pageSize)}
      >
        <div className="flex items-center justify-center gap-x-1 text-primaryDark">
          <span>Next</span>
          <span>
            <BsArrowRightShort size={22} />
          </span>
        </div>
      </Button>
    </div>
  );
}

export default TablePagination;

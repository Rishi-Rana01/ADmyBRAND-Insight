import { Button } from '@/components/ui/button';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DataTablePaginationProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
  canPreviousPage: boolean;
  canNextPage: boolean;
  pageSize: number;
  setPageSize: (size: number) => void;
  totalRows: number;
}

export function DataTablePagination({
  page,
  totalPages,
  setPage,
  canPreviousPage,
  canNextPage,
  pageSize,
  setPageSize,
  totalRows,
}: DataTablePaginationProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
        <div className="text-sm text-muted-foreground">
            {`Showing ${Math.min((page - 1) * pageSize + 1, totalRows)}-${Math.min(page * pageSize, totalRows)} of ${totalRows} records`}
        </div>
        <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground hidden md:block">Rows per page:</span>
            <Select
                value={`${pageSize}`}
                onValueChange={(value) => {
                    setPageSize(Number(value))
                }}
            >
                <SelectTrigger className="h-8 w-[70px]">
                    <SelectValue placeholder={pageSize} />
                </SelectTrigger>
                <SelectContent side="top">
                    {[5, 7, 10, 20, 50].map((size) => (
                        <SelectItem key={size} value={`${size}`}>
                            {size}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
        <div className="flex items-center justify-end space-x-2">
        <span className="text-sm text-muted-foreground">
            Page {page} of {totalPages}
        </span>
        <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => setPage(1)}
            disabled={!canPreviousPage}
        >
            <span className="sr-only">Go to first page</span>
            <ChevronsLeft className="h-4 w-4" />
        </Button>
        <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => setPage(page - 1)}
            disabled={!canPreviousPage}
        >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => setPage(page + 1)}
            disabled={!canNextPage}
        >
            <span className="sr-only">Go to next page</span>
            <ChevronRight className="h-4 w-4" />
        </Button>
        <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => setPage(totalPages)}
            disabled={!canNextPage}
        >
            <span className="sr-only">Go to last page</span>
            <ChevronsRight className="h-4 w-4" />
        </Button>
        </div>
    </div>
  );
}

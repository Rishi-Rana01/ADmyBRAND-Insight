"use client";

import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { TableRow as DataTableRow } from '@/types';
import { DataTableToolbar } from './data-table-toolbar';
import { DataTablePagination } from './data-table-pagination';
import { DataTableRowActions } from './data-table-row-actions';
import { DataTableColumnHeader } from './data-table-column-header';
import { getStatusBadge } from './columns';
import { useIsMobile } from '@/hooks/use-mobile';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDown, PlusCircle, MinusCircle } from 'lucide-react';
import { Card, CardContent } from '../ui/card';


interface DataTableProps {
  columns: {
    key: keyof DataTableRow;
    header: string;
    sortable?: boolean;
  }[];
  data: DataTableRow[];
}

export function DataTable({ columns, data }: DataTableProps) {
  const [filter, setFilter] = React.useState('');
  const [sorting, setSorting] = React.useState<{
    key: keyof DataTableRow;
    direction: 'asc' | 'desc';
  } | null>({ key: 'date', direction: 'desc' });
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(7);
  
  const tableRef = React.useRef<HTMLTableElement>(null);
  const isMobile = useIsMobile();
  const [openRows, setOpenRows] = React.useState<Set<string>>(new Set());

  const toggleRow = (id: string) => {
    setOpenRows(prev => {
        const newSet = new Set(prev);
        if (newSet.has(id)) {
            newSet.delete(id);
        } else {
            newSet.add(id);
        }
        return newSet;
    });
  };

  const filteredData = React.useMemo(() => {
    return data.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [data, filter]);

  const sortedData = React.useMemo(() => {
    if (!sorting) return filteredData;

    return [...filteredData].sort((a, b) => {
      const aValue = a[sorting.key];
      const bValue = b[sorting.key];

      if (aValue < bValue) return sorting.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sorting.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filteredData, sorting]);

  const paginatedData = React.useMemo(() => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return sortedData.slice(start, end);
  }, [sortedData, page, pageSize]);

  const totalPages = Math.ceil(sortedData.length / pageSize);

  React.useEffect(() => {
    setPage(1);
  }, [pageSize, filter]);


  const handleSort = (key: keyof DataTableRow) => {
    if (sorting?.key === key) {
      setSorting({ key, direction: sorting.direction === 'asc' ? 'desc' : 'asc' });
    } else {
      setSorting({ key, direction: 'asc' });
    }
  };

  const renderValue = (row: DataTableRow, columnKey: keyof DataTableRow) => {
      if (columnKey === 'status') {
          return getStatusBadge(row[columnKey]);
      }
      if (columnKey === 'amount') {
          return `$${(row[columnKey] as number).toFixed(2)}`;
      }
      return String(row[columnKey]);
  }

  if (isMobile) {
    return (
        <div className="space-y-4">
            <DataTableToolbar
                filter={filter}
                setFilter={setFilter}
                data={data}
                tableRef={tableRef}
            />
            <div className="space-y-3">
                {paginatedData.map((row) => (
                    <Card key={row.id}>
                      <Collapsible open={openRows.has(row.id)} onOpenChange={() => toggleRow(row.id)}>
                          <CollapsibleTrigger asChild>
                              <div className="flex items-center justify-between w-full p-4 cursor-pointer">
                                  <div className="font-medium">{row.customerName}</div>
                                  <div className="flex items-center gap-2">
                                      {renderValue(row, 'amount')}
                                      <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
                                  </div>
                              </div>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                              <CardContent className="p-4 pt-0 space-y-2">
                                  {columns.map(col => col.key !== 'customerName' && col.key !== 'amount' && (
                                       <div key={col.key} className="flex justify-between text-sm">
                                           <span className="font-medium text-muted-foreground">{col.header}:</span>
                                           <span className="text-right">{renderValue(row, col.key)}</span>
                                       </div>
                                  ))}
                                  <div className="mt-4 flex justify-end">
                                      <DataTableRowActions row={row} />
                                  </div>
                              </CardContent>
                          </CollapsibleContent>
                      </Collapsible>
                    </Card>
                ))}
            </div>
             <DataTablePagination
                page={page}
                totalPages={totalPages}
                setPage={setPage}
                canPreviousPage={page > 1}
                canNextPage={page < totalPages}
                pageSize={pageSize}
                setPageSize={setPageSize}
                totalRows={sortedData.length}
            />
        </div>
    )
  }

  return (
    <div className="space-y-4">
      <DataTableToolbar
        filter={filter}
        setFilter={setFilter}
        data={data}
        tableRef={tableRef}
      />
      <div className="rounded-md border">
        <Table ref={tableRef}>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.key}>
                  {column.sortable ? (
                    <DataTableColumnHeader
                      columnKey={column.key}
                      header={column.header}
                      sorting={sorting}
                      onSort={handleSort}
                    />
                  ) : (
                    column.header
                  )}
                </TableHead>
              ))}
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length ? (
              paginatedData.map((row) => (
                <TableRow key={row.id}>
                  {columns.map((column) => (
                    <TableCell key={column.key}>
                      {renderValue(row, column.key)}
                    </TableCell>
                  ))}
                  <TableCell>
                    <DataTableRowActions row={row} />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length + 1} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination
        page={page}
        totalPages={totalPages}
        setPage={setPage}
        canPreviousPage={page > 1}
        canNextPage={page < totalPages}
        pageSize={pageSize}
        setPageSize={setPageSize}
        totalRows={sortedData.length}
      />
    </div>
  );
}

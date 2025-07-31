import { ArrowDown, ArrowUp, ChevronsUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TableRow as DataTableRow } from '@/types';

interface DataTableColumnHeaderProps {
  columnKey: keyof DataTableRow;
  header: string;
  sorting: { key: keyof DataTableRow; direction: 'asc' | 'desc' } | null;
  onSort: (key: keyof DataTableRow) => void;
}

export function DataTableColumnHeader({
  columnKey,
  header,
  sorting,
  onSort,
}: DataTableColumnHeaderProps) {
  const isSorted = sorting?.key === columnKey;
  const SortIcon = isSorted
    ? sorting.direction === 'asc'
      ? ArrowUp
      : ArrowDown
    : ChevronsUpDown;

  return (
    <Button variant="ghost" onClick={() => onSort(columnKey)}>
      {header}
      <SortIcon className="ml-2 h-4 w-4" />
    </Button>
  );
}

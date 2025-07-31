import * as React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Download, FileDown } from 'lucide-react';
import { TableRow as DataTableRow } from '@/types';
import { exportToCSV, exportToPDF } from '@/lib/utils';


interface DataTableToolbarProps {
  filter: string;
  setFilter: (value: string) => void;
  data: DataTableRow[];
  tableRef: React.RefObject<HTMLTableElement>;
}

export function DataTableToolbar({ filter, setFilter, data, tableRef }: DataTableToolbarProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
      <div className="flex flex-1 w-full items-center space-x-2">
        <Input
          placeholder="Filter records..."
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          className="h-8 w-full sm:w-[200px] lg:w-[250px]"
        />
      </div>
      <div className="flex w-full sm:w-auto space-x-2">
        <Button variant="outline" size="sm" className="h-8 flex-1 sm:flex-initial" onClick={() => exportToCSV(data, 'dashboard_data.csv')}>
          <Download className="mr-2 h-4 w-4" />
          CSV
        </Button>
        <Button variant="outline" size="sm" className="h-8 flex-1 sm:flex-initial" onClick={() => exportToPDF(tableRef, 'dashboard_data.pdf')}>
          <FileDown className="mr-2 h-4 w-4" />
          PDF
        </Button>
      </div>
    </div>
  );
}

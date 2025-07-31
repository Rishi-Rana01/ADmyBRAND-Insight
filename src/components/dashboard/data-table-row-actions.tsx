import { MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { TableRow } from '@/types';
import { useToast } from '@/hooks/use-toast';

interface DataTableRowActionsProps {
  row: TableRow;
}

export function DataTableRowActions({ row }: DataTableRowActionsProps) {
  const { toast } = useToast();

  const handleAction = (action: string) => {
    toast({
        title: `Action: ${action}`,
        description: `Triggered for customer: ${row.customerName}`,
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(row.id)}>
          Copy payment ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleAction('View details')}>View details</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleAction('Edit')}>Edit</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleAction('Delete')} className="text-red-600">
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

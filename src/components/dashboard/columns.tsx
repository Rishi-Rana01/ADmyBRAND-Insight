import { Badge } from '@/components/ui/badge';
import type { TableRow as DataTableRow, PaymentStatus } from '@/types';

type ColumnDefinition = {
  key: keyof DataTableRow;
  header: string;
  sortable?: boolean;
};

export const columns: ColumnDefinition[] = [
  {
    key: 'customerName',
    header: 'Customer',
    sortable: true,
  },
  {
    key: 'customerEmail',
    header: 'Email',
    sortable: true,
  },
  {
    key: 'status',
    header: 'Status',
    sortable: true,
  },
  {
    key: 'date',
    header: 'Date',
    sortable: true,
  },
  {
    key: 'amount',
    header: 'Amount',
    sortable: true,
  },
];

export const getStatusBadge = (status: PaymentStatus) => {
  const variant: "default" | "secondary" | "destructive" = {
    paid: 'default',
    pending: 'secondary',
    failed: 'destructive',
  }[status];

  return <Badge variant={variant}>{status}</Badge>;
};

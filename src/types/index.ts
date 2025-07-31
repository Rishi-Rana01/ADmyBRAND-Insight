export interface Metric {
  value: number;
  change: number;
  period: string;
}

export interface TimeSeriesData {
  month: string;
  stream1: number;
  stream2: number;
}

export interface ChannelData {
  channel: string;
  current: number;
  previous: number;
}

export interface CampaignData {
  name: string;
  value: number;
  fill: string;
}

export type PaymentStatus = "pending" | "paid" | "failed";

export interface TableRow {
  id: string;
  customerName: string;
  customerEmail: string;
  amount: number;
  status: PaymentStatus;
  date: string;
}

export interface DashboardData {
  metrics: {
    revenue: Metric;
    users: Metric;
    conversions: Metric;
    growth: Metric;
  };
  charts: {
    revenue: TimeSeriesData[];
    channels: ChannelData[];
    campaigns: CampaignData[];
  };
  tableData: TableRow[];
}

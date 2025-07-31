import { DashboardData } from "@/types";

export const dashboardData: DashboardData = {
  metrics: {
    revenue: { value: 1200000, change: 12.5, period: "from last month" },
    users: { value: 45200, change: 8.3, period: "growth" },
    conversions: { value: 2847, change: 15.2, period: "increase" },
    growth: { value: 18.7, change: 2.1, period: "from previous period" },
  },
  charts: {
    revenue: [
      { month: "Jan", stream1: 4000, stream2: 2400 },
      { month: "Feb", stream1: 3000, stream2: 1398 },
      { month: "Mar", stream1: 2000, stream2: 9800 },
      { month: "Apr", stream1: 2780, stream2: 3908 },
      { month: "May", stream1: 1890, stream2: 4800 },
      { month: "Jun", stream1: 2390, stream2: 3800 },
      { month: "Jul", stream1: 3490, stream2: 4300 },
      { month: "Aug", stream1: 3620, stream2: 4100 },
      { month: "Sep", stream1: 3140, stream2: 4400 },
      { month: "Oct", stream1: 4210, stream2: 4700 },
      { month: "Nov", stream1: 4550, stream2: 5100 },
      { month: "Dec", stream1: 4880, stream2: 5400 },
    ],
    channels: [
        { channel: 'Organic', current: 120, previous: 90 },
        { channel: 'Social', current: 80, previous: 85 },
        { channel: 'Direct', current: 60, previous: 50 },
        { channel: 'Paid', current: 150, previous: 130 },
    ],
    campaigns: [
        { name: "Summer Sale", value: 45, fill: "hsl(var(--chart-1))" },
        { name: "Q4 Push", value: 25, fill: "hsl(var(--chart-2))" },
        { name: "Holiday Special", value: 15, fill: "hsl(var(--chart-3))" },
        { name: "New Product", value: 10, fill: "hsl(var(--chart-4))" },
        { name: "Other", value: 5, fill: "hsl(var(--chart-5))" },
    ],
  },
  tableData: [
    { id: 't1', customerName: 'John Doe', customerEmail: 'john.d@example.com', amount: 150.75, status: 'paid', date: '2023-10-01' },
    { id: 't2', customerName: 'Jane Smith', customerEmail: 'jane.s@example.com', amount: 200.00, status: 'paid', date: '2023-10-02' },
    { id: 't3', customerName: 'Sam Wilson', customerEmail: 'sam.w@example.com', amount: 75.50, status: 'pending', date: '2023-10-02' },
    { id: 't4', customerName: 'Alice Brown', customerEmail: 'alice.b@example.com', amount: 300.25, status: 'failed', date: '2023-10-03' },
    { id: 't5', customerName: 'Bob Johnson', customerEmail: 'bob.j@example.com', amount: 50.00, status: 'paid', date: '2023-10-04' },
    { id: 't6', customerName: 'Charlie Green', customerEmail: 'charlie.g@example.com', amount: 120.00, status: 'paid', date: '2023-10-05' },
    { id: 't7', customerName: 'Diana Prince', customerEmail: 'diana.p@example.com', amount: 99.99, status: 'pending', date: '2023-10-05' },
    { id: 't8', customerName: 'Evan Wright', customerEmail: 'evan.w@example.com', amount: 250.00, status: 'paid', date: '2023-10-06' },
    { id: 't9', customerName: 'Fiona Apple', customerEmail: 'fiona.a@example.com', amount: 88.88, status: 'failed', date: '2023-10-07' },
    { id: 't10', customerName: 'George King', customerEmail: 'george.k@example.com', amount: 175.00, status: 'paid', date: '2023-10-08' },
    { id: 't11', customerName: 'Hannah Montana', customerEmail: 'hannah.m@example.com', amount: 42.00, status: 'paid', date: '2023-11-01' },
    { id: 't12', customerName: 'Ian Malcolm', customerEmail: 'ian.m@example.com', amount: 199.99, status: 'pending', date: '2023-11-02' },
  ],
};


"use client";

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from 'recharts';
import type { ChannelData } from '@/types';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart';

interface AcquisitionChartProps {
  data: ChannelData[];
}

const chartConfig = {
  current: {
    label: "This Month",
    color: "hsl(var(--chart-1))",
  },
  previous: {
    label: "Last Month",
    color: "hsl(var(--chart-2))",
  },
};

export default function AcquisitionChart({ data }: AcquisitionChartProps) {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart data={data} layout="vertical" barGap={4} accessibilityLayer>
        <XAxis type="number" hide />
        <YAxis dataKey="channel" type="category" tickLine={false} axisLine={false} stroke="hsl(var(--muted-foreground))" fontSize={12} width={60} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Legend />
        <Bar dataKey="current" name="This Month" fill="var(--color-current)" radius={[0, 4, 4, 0]} />
        <Bar dataKey="previous" name="Last Month" fill="var(--color-previous)" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ChartContainer>
  );
}


"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import type { TimeSeriesData } from '@/types';

interface RevenueChartProps {
  data: TimeSeriesData[];
}

const chartConfig = {
  stream1: {
    label: "Stream 1",
    color: "hsl(var(--chart-1))",
  },
  stream2: {
    label: "Stream 2",
    color: "hsl(var(--chart-2))",
  },
};

export default function RevenueChart({ data }: RevenueChartProps) {
  return (
    <ChartContainer config={chartConfig} className="min-h-[350px] w-full">
      <LineChart data={data} accessibilityLayer>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))"/>
        <XAxis
          dataKey="month"
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value / 1000}K`}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
        <Line
          type="monotone"
          dataKey="stream1"
          stroke="var(--color-stream1)"
          strokeWidth={2}
          dot={{ r: 4, fill: "var(--color-stream1)" }}
          activeDot={{ r: 6, strokeWidth: 2 }}
        />
        <Line 
            type="monotone" 
            dataKey="stream2" 
            stroke="var(--color-stream2)" 
            strokeWidth={2} 
            dot={{ r: 4, fill: "var(--color-stream2)" }}
            activeDot={{ r: 6, strokeWidth: 2 }}
        />
      </LineChart>
    </ChartContainer>
  );
}

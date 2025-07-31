
"use client";

import { Pie, PieChart, ResponsiveContainer, Tooltip, Cell, Legend } from 'recharts';
import type { CampaignData } from '@/types';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart';

interface CampaignChartProps {
  data: CampaignData[];
}

const chartConfig = {
  value: {
    label: 'Campaigns',
  },
  "Summer Sale": {
    label: "Summer Sale",
    color: "hsl(var(--chart-1))",
  },
  "Q4 Push": {
    label: "Q4 Push",
    color: "hsl(var(--chart-2))",
  },
  "Holiday Special": {
    label: "Holiday Special",
    color: "hsl(var(--chart-3))",
  },
  "New Product": {
    label: "New Product",
    color: "hsl(var(--chart-4))",
  },
  Other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
};


export default function CampaignChart({ data }: CampaignChartProps) {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <PieChart accessibilityLayer>
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          stroke="hsl(var(--background))"
          strokeWidth={2}
        >
          {data.map((entry) => (
            <Cell key={`cell-${entry.name}`} fill={`var(--color-${entry.name.replace(/ /g, "-")})`} />
          ))}
        </Pie>
         <Legend
          iconSize={10}
          layout="vertical"
          verticalAlign="middle"
          align="right"
          content={({ payload }) => (
            <ul>
              {payload?.map((entry, index) => (
                <li key={`item-${index}`} className="flex items-center text-sm mb-1">
                  <span className="w-2.5 h-2.5 mr-2" style={{ backgroundColor: entry.color }}></span>
                  {entry.value}
                </li>
              ))}
            </ul>
          )}
        />
      </PieChart>
    </ChartContainer>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface MetricCardProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    value: string;
    change: number;
    period: string;
}

export default function MetricCard({ title, value, change, period, className, ...props }: MetricCardProps) {
    const isPositive = change >= 0;

    return (
        <Card className={cn("transition-all duration-300 hover:shadow-2xl hover:-translate-y-1", className)} {...props}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium font-headline">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-2xl md:text-3xl font-bold">{value}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                    <span className={`flex items-center gap-1 ${isPositive ? 'text-[hsl(142.1,70.6%,45.3%)]' : 'text-[hsl(0,84.2%,60.2%)]'}`}>
                        {isPositive ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                        {Math.abs(change)}%
                    </span>
                    <span className="ml-2 truncate">{period}</span>
                </div>
            </CardContent>
        </Card>
    );
}

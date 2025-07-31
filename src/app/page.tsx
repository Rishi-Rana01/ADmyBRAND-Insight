
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { dashboardData } from '@/data/mock-data';
import MetricCard from '@/components/dashboard/metric-card';
import RevenueChart from '@/components/charts/revenue-chart';
import AcquisitionChart from '@/components/charts/acquisition-chart';
import CampaignChart from '@/components/charts/campaign-chart';
import { DataTable } from '@/components/dashboard/data-table';
import { columns } from '@/components/dashboard/columns';
import ClientLayout from '@/components/layout/client-layout';
import { cn } from '@/lib/utils';

export default function Home() {
  const { metrics, charts, tableData } = dashboardData;

  const cardAnimation =
    'animate-in fade-in zoom-in-95 duration-500 ease-out fill-mode-backwards';

  return (
    <ClientLayout>
      <main className="flex-1 space-y-8 p-4 md:p-6 lg:p-8 perspective-1000">
        <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Revenue"
            value={`$${(metrics.revenue.value / 1000000).toFixed(1)}M`}
            change={metrics.revenue.change}
            period={metrics.revenue.period}
            className={cn(cardAnimation)}
            style={{ animationDelay: '100ms' }}
          />
          <MetricCard
            title="Active Users"
            value={`${(metrics.users.value / 1000).toFixed(1)}K`}
            change={metrics.users.change}
            period={metrics.users.period}
            className={cn(cardAnimation)}
            style={{ animationDelay: '200ms' }}
          />
          <MetricCard
            title="Conversions"
            value={metrics.conversions.value.toLocaleString()}
            change={metrics.conversions.change}
            period={metrics.conversions.period}
            className={cn(cardAnimation)}
            style={{ animationDelay: '300ms' }}
          />
          <MetricCard
            title="Growth Rate"
            value={`${metrics.growth.value}%`}
            change={metrics.growth.change}
            period={metrics.growth.period}
            className={cn(cardAnimation)}
            style={{ animationDelay: '400ms' }}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6">
          <Card
            className={cn(
              'lg:col-span-3 transition-all duration-300 hover:shadow-2xl hover:[transform:rotateX(5deg)_rotateY(-5deg)]',
              cardAnimation
            )}
            style={{ animationDelay: '500ms' }}
          >
            <CardHeader>
              <CardTitle className="font-headline text-xl md:text-2xl">Revenue Trends</CardTitle>
              <CardDescription>12-month revenue progression</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <RevenueChart data={charts.revenue} />
            </CardContent>
          </Card>
          <div className="grid gap-4 md:gap-6 lg:col-span-2 md:grid-cols-2 lg:grid-cols-1">
            <Card
              className={cn(
                'transition-all duration-300 hover:shadow-2xl hover:[transform:rotateX(5deg)_rotateY(5deg)]',
                cardAnimation
              )}
              style={{ animationDelay: '600ms' }}
            >
              <CardHeader>
                <CardTitle className="font-headline text-lg md:text-xl">Acquisition Channels</CardTitle>
              </CardHeader>
              <CardContent>
                <AcquisitionChart data={charts.channels} />
              </CardContent>
            </Card>
            <Card
              className={cn(
                'transition-all duration-300 hover:shadow-2xl hover:[transform:rotateX(5deg)_rotateY(5deg)]',
                cardAnimation
              )}
              style={{ animationDelay: '700ms' }}
            >
              <CardHeader>
                <CardTitle className="font-headline text-lg md:text-xl">Campaign Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <CampaignChart data={charts.campaigns} />
              </CardContent>
            </Card>
          </div>
        </div>
        <div
          className={cn('preserve-3d', cardAnimation)}
          style={{ animationDelay: '800ms' }}
        >
          <DataTable columns={columns} data={tableData} />
        </div>
      </main>
    </ClientLayout>
  );
}

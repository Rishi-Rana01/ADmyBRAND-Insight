
"use client";

import { useState, useEffect } from "react";
import AppSidebar from '@/components/layout/app-sidebar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import AppHeader from "./app-header";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return (
          <div className="flex min-h-screen w-full items-center justify-center">
            {/* You can add a loader here */}
          </div>
        );
    }

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <AppHeader />
                {children}
            </SidebarInset>
        </SidebarProvider>
    );
}

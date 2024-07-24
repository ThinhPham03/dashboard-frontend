import { Metadata } from 'next';
import React, { Suspense } from 'react';
import PivotTable from '@/app/ui/pivottable/table';
import { getPage, getReport } from '@/app/api/apiSales';
import Pagination from '@/app/ui/pagination';
import Search from '@/app/ui/search';
import { ExportButton } from '@/app/ui/pivottable/buttons';
import { PivotTableSkeleton } from '@/app/ui/skeletons';
import Setting from '@/app/ui/pivottable/setting';
import { getSettings } from '@/app/api/apiAccount';

export const metadata: Metadata = {
    title: 'Analytics',
};

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = await getPage(query);
    const salesReport = await getReport(query, currentPage);
    const settings = await getSettings();
    const selectedSetting = settings.find((setting: any) => setting.isSelect === 1);

    return (
        <div className="w-full">
            <Setting settings={settings} />
            <div className="my-2 flex items-center justify-between gap-2">
                <Search placeholder="Search..." />
                <ExportButton query={query} />
            </div>
            <Suspense key={query + currentPage} fallback={<PivotTableSkeleton />}>
                <PivotTable salesReport={salesReport} data={selectedSetting} />
            </Suspense>
            <div className="my-5 flex w-full justify-center sticky bottom-0 z-10">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    );
}
import Pagination from '@/app/ui/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/account/table';
import { CreateAccount } from '@/app/ui/account/buttons';
import { lusitana } from '@/app/ui/fonts';
import { AccountsTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { Metadata } from 'next';
import { authenticateToken, getPages } from '@/app/api/apiAccount';

export const metadata: Metadata = {
  title: 'Accounts',
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
  const totalPages = await getPages(query);
  const { role } = await authenticateToken();

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl font-bold`}>Accounts</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt  -8">
        <Search placeholder="Search accounts..." />
        <CreateAccount role={role} />
      </div>
      <Suspense key={query + currentPage} fallback={<AccountsTableSkeleton />}>
        <Table query={query} currentPage={currentPage} role={role} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center sticky bottom-0">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
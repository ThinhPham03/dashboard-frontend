import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';

export default async function Page() {

  return (
    <div>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl font-bold`}>Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      </div>
    </div>
  );
}
"use client";

import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { exportData } from '@/app/lib/clientActions';
import { getCurrentTime } from '@/app/lib/utils';


export function ExportButton({ query }: { query: string }) {
  const eventExportData = exportData.bind(null, query);

  const handleExportData = (event: React.FormEvent) => {
    event.preventDefault();
    const fileName = window.prompt(`(Filter your data before exporting it for best performance)\nPlease enter filename:`, `Sales Report ${getCurrentTime()}`)
    if (fileName) {
      eventExportData(`${fileName}.xlsx`);
    }
  };

  return (
    <button
      onClick={handleExportData}
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
      <span className="hidden md:block">Export Data</span>
      <ArrowDownTrayIcon className="h-5 md:ml-4" />
    </button>
  );
}
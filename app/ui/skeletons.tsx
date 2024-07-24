// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function AccountTableRowSkeleton() {
  return (
    <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {/* Id */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-96 rounded bg-gray-100"></div>
      </td>
      {/* Position */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-8 rounded bg-gray-100"></div>
      </td>
      {/* Actions */}
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
        </div>
      </td>
    </tr>
  );
}

export function AccountsMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-white p-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-8">
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
        </div>
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </div>
    </div>
  );
}

export function AccountsTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            <AccountsMobileSkeleton />
            <AccountsMobileSkeleton />
            <AccountsMobileSkeleton />
            <AccountsMobileSkeleton />
            <AccountsMobileSkeleton />
            <AccountsMobileSkeleton />
            <AccountsMobileSkeleton />
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6 font-bold">
                  Id
                </th>
                <th scope="col" className="px-3 py-5 font-medium font-bold">
                  Position
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3 font-bold">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <AccountTableRowSkeleton />
              <AccountTableRowSkeleton />
              <AccountTableRowSkeleton />
              <AccountTableRowSkeleton />
              <AccountTableRowSkeleton />
              <AccountTableRowSkeleton />
              <AccountTableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function PivotTableRowSkeleton() {
  return (
    <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-full rounded bg-gray-100"></div>
      </td>
    </tr>
  );
}

export function PivotTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6 font-bold" />
              </tr>
            </thead>
            <tbody className="bg-white">
              <PivotTableRowSkeleton />
              <PivotTableRowSkeleton />
              <PivotTableRowSkeleton />
              <PivotTableRowSkeleton />
              <PivotTableRowSkeleton />
              <PivotTableRowSkeleton />
              <PivotTableRowSkeleton />
              <PivotTableRowSkeleton />
              <PivotTableRowSkeleton />
              <PivotTableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
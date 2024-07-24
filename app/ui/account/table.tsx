import { ResetPassword, ChangeStatus } from '@/app/ui/account/buttons';
import { getPosition, getStatus } from '@/app/lib/utils';
import { getList } from '@/app/api/apiAccount';

export default async function Table({
  query,
  currentPage,
  role,
}: {
  query: string;
  currentPage: number;
  role: string;
}) {
  const accounts = await getList(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-100 p-2 md:pt-0">
          <div className="md:hidden">
            {accounts?.map((account: { tedisPositionId: string, loginActive: number }) => (
              <div
                key={account.tedisPositionId}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center font-medium">
                      <p>{account.tedisPositionId}</p>
                    </div>
                    <p className="text-sm text-gray-500">{getPosition(account.tedisPositionId)}</p>
                  </div>
                  <div className={`inline-flex items-center rounded-full px-2 py-1 text-xs
                    ${account.loginActive === 0 ? 'bg-gray-100 text-gray-500' : 'bg-green-500 text-white'}`}>
                    {getStatus(account.loginActive)}
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div className="flex justify-end gap-2">
                    <ResetPassword id={account.tedisPositionId} role={role} />
                    <ChangeStatus id={account.tedisPositionId} status={account.loginActive} role={role} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-bold sm:pl-6">
                  Id
                </th>
                <th scope="col" className="px-3 py-5 font-bold ">
                  Position
                </th>
                <th scope="col" className="px-3 py-5 font-bold ">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3 font-bold">
                  <span className="sr-only">Reset Password</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {accounts?.map((account: { tedisPositionId: string, loginActive: number }) => (
                <tr
                  key={account.tedisPositionId}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-3">
                    {account.tedisPositionId}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {getPosition(account.tedisPositionId)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {getStatus(account.loginActive)}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <ResetPassword id={account.tedisPositionId} role={role} />
                      <ChangeStatus id={account.tedisPositionId} status={account.loginActive} role={role} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
import SideNav from '@/app/ui/sidenav';
import { authenticateToken } from '../api/apiAccount';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const { role } = await authenticateToken();

  return (
    <main className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav role={role} />
      </div>
      <div className="flex-grow p-4 md:overflow-y-auto md:p-4">{children}</div>
    </main>
  );
}
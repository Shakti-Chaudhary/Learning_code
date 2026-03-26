import { Outlet } from 'react-router-dom';
import { LayoutDashboard, LogOut, User as UserIcon } from 'lucide-react';

export const DashboardLayout = () => (
  <div className="flex min-h-screen bg-slate-50">
    <aside className="w-64 bg-brand-900 text-white p-6 hidden md:block">
      <h2 className="text-xl font-bold mb-8">Enterprise Admin</h2>
      <nav className="space-y-4">
        <div className="flex items-center gap-3 opacity-80 hover:opacity-100 cursor-pointer">
          <LayoutDashboard size={20} /> Dashboard
        </div>
      </nav>
    </aside>
    <main className="flex-1 p-app-pd">
      <header className="flex justify-end mb-8"><UserIcon /></header>
      <div className="bg-white rounded-enterprise shadow-enterprise p-6">
        <Outlet />
      </div>
    </main>
  </div>
);

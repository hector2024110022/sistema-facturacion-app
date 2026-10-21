
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "@/components/logout-button";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 md:flex">
      <aside className="w-full bg-slate-900 p-6 text-white md:min-h-screen md:w-64">
        <h1 className="text-xl font-bold">Sistema de Facturación</h1>

        <p className="mt-2 text-sm text-slate-300">
          Panel de administración
        </p>

        <nav className="mt-8 flex flex-col gap-3">
          <Link
            href="/dashboard"
            className="rounded-lg px-4 py-3 hover:bg-slate-800"
          >
            Inicio
          </Link>

          <Link
            href="/dashboard/clients"
            className="rounded-lg px-4 py-3 hover:bg-slate-800"
          >
            Clientes
          </Link>

          <Link
            href="/dashboard/products"
            className="rounded-lg px-4 py-3 hover:bg-slate-800"
          >
            Productos
          </Link>

          <Link
            href="/dashboard/invoices"
            className="rounded-lg px-4 py-3 hover:bg-slate-800"
          >
            Facturas
          </Link>
        </nav>

        <LogoutButton />
      </aside>

      <main className="flex-1 p-6 md:p-10">{children}</main>
    </div>
  );
}

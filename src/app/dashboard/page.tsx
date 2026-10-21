
export default function DashboardPage() {
  return (
    <section>
      <h2 className="text-3xl font-bold">Panel principal</h2>

      <p className="mt-2 text-gray-600">
        Bienvenido al sistema de facturación.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <article className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Clientes</h3>
          <p className="mt-2 text-sm text-gray-500">
            Administra la información de tus clientes.
          </p>
        </article>

        <article className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Productos</h3>
          <p className="mt-2 text-sm text-gray-500">
            Organiza tu catálogo de productos.
          </p>
        </article>

        <article className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Facturas</h3>
          <p className="mt-2 text-sm text-gray-500">
            Consulta y administra tus facturas.
          </p>
        </article>
      </div>
    </section>
  );
}
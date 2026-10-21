
export default function ClientsPage() {
  return (
    <section>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold">Clientes</h2>
          <p className="mt-2 text-gray-600">
            Administra los clientes del sistema.
          </p>
        </div>

        <button
          type="button"
          disabled
          className="rounded-lg bg-blue-600 px-5 py-3 text-white opacity-60"
        >
          Próximamente: agregar cliente
        </button>
      </div>

      <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
        <p className="text-gray-500">
          Aquí aparecerá la lista de clientes cuando se configure la base de
          datos.
        </p>
      </div>
    </section>
  );
}
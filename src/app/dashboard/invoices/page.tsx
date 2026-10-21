
export default function InvoicesPage() {
  return (
    <section>
      <div>
        <h2 className="text-3xl font-bold">Facturas</h2>
        <p className="mt-2 text-gray-600">
          Consulta y administra las facturas emitidas.
        </p>
      </div>

      <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
        <p className="text-gray-500">
          Aquí aparecerán las facturas cuando se configure la base de datos.
        </p>
      </div>
    </section>
  );
}
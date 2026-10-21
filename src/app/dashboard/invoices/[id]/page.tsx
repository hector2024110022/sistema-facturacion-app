export default async function InvoiceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Detalle de factura</h1>
      <p className="mt-2 text-gray-600">
        Factura: {id}
      </p>
      <p className="mt-2 text-gray-600">
        Aquí se mostrarán los detalles cuando esté definida la estructura
        de la base de datos.
      </p>
    </main>
  );
}
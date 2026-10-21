
export default function ProductsPage() {
  return (
    <section>
      <div>
        <h2 className="text-3xl font-bold">Productos</h2>
        <p className="mt-2 text-gray-600">
          Administra el catálogo de productos y servicios.
        </p>
      </div>

      <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
        <p className="text-gray-500">
          Aquí aparecerá el catálogo cuando se configure la base de datos.
        </p>
      </div>
    </section>
  );
}
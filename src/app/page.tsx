
export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-8">
      <div className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900">
          Sistema de Facturación
        </h1>

        <p className="mt-3 text-gray-600">
          Bienvenido. Accede al panel para administrar clientes, productos y facturas.
        </p>

        <a
          href="/dashboard"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
        >
          Ir al panel
        </a>
      </div>
    </main>
  );
}

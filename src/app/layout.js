import '../app/globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Go Fast Web</title>
        <meta name="description" content="Go Fast Web - Conectamos el futuro, juntos." />
      </head>
      <body>
        <header className="bg-primary sticky top-0 z-50">
          <nav className="flex justify-center space-x-4 py-4">
            <Link href="/" className="text-white px-4 py-2 rounded" aria-label="Ir a la página de inicio">
              Inicio
            </Link>
            <Link href="/nosotros" className="text-white px-4 py-2 rounded" aria-label="Ir a la página de nosotros">
              Nosotros
            </Link>
            <Link href="/servicios" className="text-white px-4 py-2 rounded" aria-label="Ir a la página de servicios">
              Servicios
            </Link>
            <Link href="/contacto" className="text-white px-4 py-2 rounded" aria-label="Ir a la página de contacto">
              Contacto
            </Link>
          </nav>
        </header>
        <main className="max-w-6xl mx-auto py-8">{children}</main>
        <footer className="text-center py-4 bg-primary text-white">
          <p>© 2024 Go Fast Web. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  );
}

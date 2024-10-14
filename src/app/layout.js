import '../app/globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Go Fast Web</title>
      </head>
      <body>
        <header className="bg-orange-500 sticky top-0 z-50">
          <nav className="flex justify-center space-x-4 py-4">
            <Link href="/" className="text-white hover:bg-orange-400 px-4 py-2 rounded">
              Inicio
            </Link>
            <Link href="/about" className="text-white hover:bg-orange-400 px-4 py-2 rounded">
              Nosotros
            </Link>
            <Link href="/services" className="text-white hover:bg-orange-400 px-4 py-2 rounded">
              Servicios
            </Link>
            <Link href="/contact" className="text-white hover:bg-orange-400 px-4 py-2 rounded">
              Contacto
            </Link>
          </nav>
        </header>
        <main className="max-w-3xl mx-auto py-8">{children}</main>
        <footer className="text-center py-4 bg-gray-800 text-white">
          <p>© 2024 Go Fast Web. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  );
}

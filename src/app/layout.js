// app/layout.js

import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>GoFastWeb</title>
      </head>
      <body>
        <header>
          <nav>
            <Link href="/">Inicio</Link>
            <Link href="/about">Sobre Nosotros</Link>
            <Link href="/contact">Contacto</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2024 GoFastWeb. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  );
}

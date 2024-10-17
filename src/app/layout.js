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
          <div className="flex justify-between items-center px-6 py-4">
            {/* Logo a la izquierda */}
            <div className="flex-shrink-0">

              <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="150.000000pt" height="50.000000pt" viewBox="0 0 500.000000 113.000000"
                preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,113.000000) scale(0.100000,-0.100000)"
                  fill="white" stroke="none">
                  <path d="M4295 968 c-7 -43 -45 -307 -45 -316 0 -4 -14 10 -31 31 -48 58 -99
80 -179 75 -55 -3 -78 -10 -119 -36 -29 -17 -54 -32 -56 -32 -2 0 19 55 46
122 27 67 49 126 49 130 0 5 -34 8 -75 6 l-76 -3 -81 -205 c-94 -236 -86 -237
-112 10 -24 222 -14 201 -94 198 l-67 -3 -80 -202 c-44 -112 -83 -203 -86
-203 -3 0 -11 53 -17 118 -7 64 -17 156 -24 205 l-11 87 -73 0 c-64 0 -74 -2
-74 -17 0 -10 16 -168 37 -350 l38 -333 85 0 85 0 69 175 c38 96 71 174 72
172 2 -2 10 -64 19 -138 8 -73 18 -151 21 -171 l6 -38 83 0 83 0 32 83 c41
101 46 107 54 64 4 -19 19 -53 35 -74 76 -106 242 -112 353 -14 20 17 38 31
40 31 3 0 2 -20 -2 -45 l-7 -45 75 0 c66 0 74 2 79 21 6 20 6 20 30 -3 37 -35
135 -38 205 -6 108 50 176 140 185 247 6 67 -6 113 -46 169 -58 79 -183 106
-268 57 -24 -13 -43 -20 -43 -15 0 10 27 207 35 253 l5 27 -75 0 -74 0 -6 -32z
m-200 -363 c14 -13 25 -29 25 -35 0 -6 -34 -10 -90 -10 -49 0 -90 4 -90 9 0 5
14 21 31 35 40 34 91 35 124 1z m474 -1 c59 -42 60 -138 1 -188 -39 -32 -64
-39 -106 -31 -66 12 -94 97 -54 163 39 63 112 89 159 56z m-349 -178 c0 -35
-9 -37 -75 -20 -54 14 -62 14 -86 0 -51 -30 -129 -11 -129 31 0 10 30 13 145
13 l145 0 0 -24z"/>
                  <path d="M512 941 c-66 -23 -154 -82 -192 -131 -83 -104 -117 -242 -87 -350
43 -153 147 -227 308 -219 96 5 186 47 252 118 l47 50 18 -42 c24 -54 91 -114
137 -123 53 -10 135 0 180 21 56 27 113 88 142 152 21 46 25 66 21 133 -3 69
-7 83 -35 122 -67 92 -177 114 -292 57 -36 -18 -75 -47 -93 -70 l-31 -39 -118
0 c-65 0 -120 -3 -122 -7 -3 -5 -8 -34 -11 -65 l-7 -58 40 0 c48 0 51 -7 14
-42 -65 -61 -166 -77 -231 -38 -162 99 -52 400 147 400 46 0 73 -11 109 -43
l22 -21 70 34 c39 19 70 38 70 42 0 5 -21 30 -47 56 -79 78 -197 102 -311 63z
m653 -356 c19 -18 25 -35 25 -65 0 -78 -45 -130 -112 -130 -66 0 -101 57 -79
130 24 82 115 117 166 65z"/>
                  <path d="M1520 938 c-1 -7 -22 -164 -48 -348 l-48 -335 69 -3 c38 -2 72 0 75
3 3 3 15 69 26 148 l21 142 83 0 83 0 2 -81 c2 -69 6 -86 30 -122 42 -64 97
-95 173 -100 51 -4 70 0 99 17 43 25 45 25 45 6 0 -12 15 -15 74 -15 65 0 75
2 81 19 6 20 6 20 39 0 19 -11 57 -22 85 -26 129 -15 241 70 241 183 0 52 -66
115 -147 141 -45 14 -58 22 -58 38 0 32 48 43 89 21 31 -17 36 -17 65 -2 30
16 31 16 31 -4 0 -16 7 -20 30 -20 37 0 37 -4 10 -185 -27 -182 -33 -165 54
-165 l73 0 24 173 24 172 42 3 c46 3 44 1 58 105 l6 47 -41 0 -42 0 7 58 c3
31 7 66 8 77 2 18 -5 20 -69 23 -81 3 -76 9 -89 -100 -7 -57 -8 -58 -40 -58
-18 0 -35 -5 -37 -10 -2 -7 -17 -5 -42 5 -60 25 -148 21 -203 -9 -55 -31 -53
-31 -53 -6 0 18 -7 20 -75 20 -68 0 -75 -2 -75 -19 0 -19 -2 -19 -42 4 -74 43
-181 28 -260 -35 -42 -34 -48 -36 -48 -15 0 12 -18 15 -105 15 -116 0 -113 -2
-99 69 l7 31 132 0 132 0 7 46 c3 26 6 60 6 75 l0 29 -205 0 c-157 0 -205 -3
-205 -12z m597 -340 c9 -7 22 -28 30 -46 30 -72 -27 -160 -109 -169 -121 -14
-147 148 -36 218 36 22 87 21 115 -3z m291 -152 c9 -3 36 -10 60 -16 36 -9 43
-15 40 -33 -2 -18 -11 -23 -41 -25 -22 -2 -48 3 -61 11 -19 13 -27 13 -55 1
-50 -21 -52 -19 -46 39 10 80 10 80 50 52 20 -13 44 -26 53 -29z"/>
                </g>
              </svg>

            </div>

            {/* Menú en el medio */}
            <nav className="flex-grow flex justify-center space-x-6 font-urbanist text-lg">
              {['Inicio', 'Nosotros', 'Servicios', 'Contacto'].map((item, index) => (
                <Link
                  key={index}
                  href={`/${item.toLowerCase()}`}
                  className="text-white px-4 py-2 rounded hover:bg-white hover:text-red-500 transition duration-300"
                  aria-label={`Ir a la página de ${item.toLowerCase()}`}>
                  {item}
                </Link>
              ))}
            </nav>

            {/* Botón de contacto a la derecha */}
            <div className="flex-shrink-0 font-urbanist">
              <Link href="/contacto" className="bg-white text-primary px-4 py-2 rounded transition hover:bg-red-500 hover:text-white" aria-label="Contactar">
                📞 +34 644 03 23 29
              </Link>
            </div>
          </div>
        </header>

        <main className="bg-backgroundLight min-h-screen transition-colors duration-500">
          {children}
        </main>

        <footer className="text-center py-4 bg-primary text-white font-urbanist text-sm">
          <p>© 2024 Go Fast Web. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  );
}

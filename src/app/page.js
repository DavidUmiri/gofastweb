// app/page.js
export default function Home() {
  return (
    <main className="p-6">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-2">Go Fast Web</h1>
        <p className="text-lg text-gray-700">
          El mundo está cambiando. Conectemos el futuro, juntos.
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Sobre Nosotros</h2>
        <p className="mb-4">
          En Go Fast Web, somos apasionados por la tecnología y el diseño. Nuestro equipo de expertos en desarrollo web y marketing digital está aquí para ayudarte a construir una presencia en línea sólida y efectiva. 
        </p>
        <p className="mb-4">
          Desde el desarrollo de sitios web personalizados hasta la optimización SEO, trabajamos en estrecha colaboración contigo para garantizar que tus necesidades y expectativas se cumplan.
        </p>
        <p>
          Nos comprometemos a ofrecer soluciones de alta calidad y un servicio al cliente excepcional en cada proyecto.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-300 p-4 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Desarrollo Web Personalizado</h3>
            <p>
              Creamos sitios web adaptados a tus necesidades específicas, asegurando una experiencia de usuario fluida y atractiva.
            </p>
          </div>
          <div className="border border-gray-300 p-4 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Optimización SEO</h3>
            <p>
              Mejoramos la visibilidad de tu sitio web en los motores de búsqueda para atraer más tráfico y potenciales clientes.
            </p>
          </div>
          <div className="border border-gray-300 p-4 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Diseño de Experiencias de Usuario</h3>
            <p>
              Nos enfocamos en crear interfaces intuitivas y atractivas que mantengan a tus usuarios comprometidos.
            </p>
          </div>
          <div className="border border-gray-300 p-4 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Consultoría en Marketing Digital</h3>
            <p>
              Te ayudamos a desarrollar estrategias de marketing efectivas para maximizar tu alcance y crecimiento.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">¿Por qué elegirnos?</h2>
        <ul className="list-disc list-inside mb-4">
          <li>🎯 **Enfoque en el Cliente**: Trabajamos de la mano contigo para comprender tus objetivos y necesidades.</li>
          <li>⏱️ **Entrega Rápida**: Sabemos que el tiempo es oro, por lo que nos esforzamos por cumplir con los plazos acordados.</li>
          <li>💡 **Innovación**: Utilizamos las últimas tecnologías y tendencias para ofrecer soluciones modernas y efectivas.</li>
          <li>📞 **Soporte Continuo**: Nuestro equipo está siempre disponible para ayudarte, incluso después de que el proyecto esté terminado.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">¡Contáctanos!</h2>
        <p className="mb-4">
          Si estás listo para llevar tu negocio al siguiente nivel o si tienes alguna pregunta, no dudes en
          <a href="/contacto" className="text-orange-500 hover:underline"> contactarnos</a>. Estamos aquí para ayudarte.
        </p>
      </section>
    </main>
  );
}

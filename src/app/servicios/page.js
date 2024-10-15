// app/servicios/page.js
export default function Servicios() {
    return (
      <main className="p-6">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-2">Nuestros Servicios</h1>
          <p className="text-lg text-gray-700">
            Descubre cómo podemos ayudarte a llevar tu negocio al siguiente nivel.
          </p>
        </header>
  
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Desarrollo Web Personalizado</h2>
          <p className="mb-4">
            Creamos sitios web adaptados a tus necesidades específicas, asegurando una experiencia de usuario fluida y atractiva. 
            Nuestro proceso de desarrollo incluye:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>✔️ **Análisis de Requisitos**: Estudiamos tus necesidades y objetivos.</li>
            <li>✔️ **Diseño de Prototipos**: Creamos maquetas y prototipos para tu revisión.</li>
            <li>✔️ **Desarrollo Ágil**: Utilizamos metodologías ágiles para un desarrollo eficiente.</li>
            <li>✔️ **Pruebas Exhaustivas**: Realizamos pruebas para garantizar la funcionalidad y calidad.</li>
            <li>✔️ **Despliegue y Mantenimiento**: Ayudamos en el lanzamiento y ofrecemos soporte continuo.</li>
          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Optimización SEO</h2>
          <p className="mb-4">
            Mejoramos la visibilidad de tu sitio web en los motores de búsqueda para atraer más tráfico y potenciales clientes. 
            Nuestros servicios de SEO incluyen:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>🔍 **Investigación de Palabras Clave**: Identificamos las palabras clave relevantes para tu negocio.</li>
            <li>📝 **Optimización On-Page**: Mejoramos el contenido y la estructura de tu sitio.</li>
            <li>🌐 **Construcción de Enlaces**: Desarrollamos una estrategia de backlinks de calidad.</li>
            <li>📊 **Análisis y Seguimiento**: Monitoreamos el rendimiento y ajustamos las estrategias según sea necesario.</li>
          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Diseño de Experiencias de Usuario</h2>
          <p className="mb-4">
            Nos enfocamos en crear interfaces intuitivas y atractivas que mantengan a tus usuarios comprometidos. 
            Nuestro enfoque en diseño UX incluye:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>🎨 **Investigación de Usuarios**: Realizamos entrevistas y pruebas de usuario para entender sus necesidades.</li>
            <li>🖌️ **Diseño de Interfaces**: Creamos diseños visualmente atractivos y funcionales.</li>
            <li>🔄 **Prototipos Interactivos**: Desarrollamos prototipos para pruebas y retroalimentación.</li>
            <li>📐 **Pruebas de Usabilidad**: Realizamos pruebas con usuarios reales para asegurar la efectividad del diseño.</li>
          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Consultoría en Marketing Digital</h2>
          <p className="mb-4">
            Te ayudamos a desarrollar estrategias de marketing efectivas para maximizar tu alcance y crecimiento. 
            Nuestros servicios incluyen:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>📈 **Análisis de Mercado**: Evaluamos el mercado y la competencia para identificar oportunidades.</li>
            <li>📣 **Estrategias de Contenido**: Creamos contenido que resuene con tu audiencia.</li>
            <li>📱 **Gestión de Redes Sociales**: Administramos tus perfiles para aumentar la interacción y el alcance.</li>
            <li>📧 **Campañas de Email Marketing**: Diseñamos campañas efectivas para fidelizar a tus clientes.</li>
          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Soporte y Mantenimiento</h2>
          <p className="mb-4">
            Ofrecemos servicios de soporte y mantenimiento para garantizar que tu sitio web funcione sin problemas. 
            Nuestros servicios incluyen:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>🔧 **Actualizaciones Regulares**: Mantenemos tu sitio al día con las últimas tecnologías y características.</li>
            <li>🛡️ **Seguridad**: Implementamos medidas de seguridad para proteger tu sitio y datos.</li>
            <li>📊 **Monitoreo de Rendimiento**: Evaluamos el rendimiento del sitio y realizamos mejoras necesarias.</li>
            <li>🔄 **Resolución de Problemas**: Estamos disponibles para solucionar cualquier inconveniente que surja.</li>
          </ul>
        </section>
  
        <section>
          <h2 className="text-3xl font-semibold mb-4">¿Listo para comenzar?</h2>
          <p className="mb-4">
            Si estás interesado en alguno de nuestros servicios o deseas más información, no dudes en <a href="/contacto" className="text-orange-500 hover:underline">contactarnos</a>. Estamos aquí para ayudarte a transformar tu visión en realidad.
          </p>
        </section>
      </main>
    );
  }
  
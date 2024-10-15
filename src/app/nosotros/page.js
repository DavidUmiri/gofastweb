// app/nosotros/page.js
export default function Nosotros() {
    return (
      <main className="p-6">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-2">Nosotros</h1>
          <p className="text-lg text-gray-700">
            Conoce más sobre nuestra misión, visión y valores.
          </p>
        </header>
  
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Nuestra Misión</h2>
          <p className="mb-4">
            En Go Fast Web, nuestra misión es proporcionar soluciones web innovadoras que ayuden a las empresas a alcanzar su máximo potencial. Nos esforzamos por ofrecer productos y servicios de alta calidad que satisfagan las necesidades únicas de nuestros clientes.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Nuestra Visión</h2>
          <p className="mb-4">
            Nuestra visión es ser reconocidos como líderes en la industria del desarrollo web y marketing digital. Queremos ser la primera opción para las empresas que buscan transformar su presencia en línea y conectar con sus clientes de manera efectiva.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Nuestros Valores</h2>
          <ul className="list-disc list-inside mb-4">
            <li>🔍 **Transparencia**: Creemos en la honestidad y la comunicación abierta con nuestros clientes.</li>
            <li>🤝 **Colaboración**: Trabajamos en equipo para garantizar el éxito de cada proyecto.</li>
            <li>📈 **Excelencia**: Nos comprometemos a ofrecer la más alta calidad en todo lo que hacemos.</li>
            <li>🌱 **Innovación**: Estamos siempre en busca de nuevas formas de mejorar y adaptarnos a las tendencias del mercado.</li>
          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Nuestro Equipo</h2>
          <p className="mb-4">
            Nuestro equipo está compuesto por profesionales apasionados y altamente capacitados en diversas áreas, incluyendo desarrollo web, diseño, marketing digital y atención al cliente. Cada miembro aporta su experiencia y habilidades para brindar un servicio excepcional a nuestros clientes.
          </p>
          <p className="mb-4">
            Creemos que un equipo diverso y colaborativo es la clave para el éxito, y estamos comprometidos a fomentar un ambiente de trabajo inclusivo donde todos puedan contribuir y crecer.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Nuestra Historia</h2>
          <p className="mb-4">
            Go Fast Web fue fundada en [AÑO] con el objetivo de ayudar a las empresas a establecer su presencia en línea. Desde entonces, hemos crecido significativamente, expandiendo nuestros servicios y nuestro equipo para adaptarnos a las necesidades cambiantes de nuestros clientes.
          </p>
          <p className="mb-4">
            A lo largo de los años, hemos trabajado con una variedad de clientes, desde pequeñas empresas hasta grandes corporaciones, brindando soluciones personalizadas que impulsan su crecimiento y éxito en el mundo digital.
          </p>
        </section>
  
        <section>
          <h2 className="text-3xl font-semibold mb-4">Contáctanos</h2>
          <p className="mb-4">
            Si deseas saber más sobre nosotros o cómo podemos ayudarte, no dudes en <a href="/contacto" className="text-orange-500 hover:underline">contactarnos</a>. Estamos aquí para responder a tus preguntas y trabajar juntos en tu próximo proyecto.
          </p>
        </section>
      </main>
    );
  }
  
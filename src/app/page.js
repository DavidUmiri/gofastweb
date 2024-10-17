'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="text-gray-800">
      {/* Sección de fondo con imagen completa */}
      <article className="relative w-full h-screen overflow-hidden mb-20">
        <Image
          src="/images/fondo1.jpg"
          alt="Fondo de tecnología"
          layout="fill"
          objectFit="cover"
          quality={85}
          priority
          className="opacity-50"
        />

        {/* Contenido sobre la imagen de fondo */}
        <header className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-70 backdrop-blur-sm text-center font-urbanist p-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="transform -translate-y-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
              Go Fast Web
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl md:text-2xl text-gray-300"
            >
              El mundo está cambiando. Conectemos el futuro, juntos.
            </motion.p>
          </motion.div>
        </header>
      </article>

      {/* Sección de Servicios */}
      <section className="h-screen py-20 bg-gray-800 mb-20" aria-labelledby="servicios">
        <h2 id="servicios" className="text-4xl font-bold mb-8 text-primary text-center">Nuestros Servicios</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {['Servicio 1', 'Servicio 2', 'Servicio 3'].map((servicio, index) => (
            <article
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              aria-labelledby={`servicio${index}`}
            >
              <Image
                src={`/images/fondo${index + 2}.jpg`}
                alt={servicio}
                width={500}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 id={`servicio${index}`} className="text-2xl font-semibold text-white">{servicio}</h3>
              <p className="mt-2 text-gray-300">Descripción breve del {servicio.toLowerCase()}.</p>
            </article>
          ))}
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="h-screen py-20 bg-gray-800 mb-20" aria-labelledby="testimonios">
        <h2 id="testimonios" className="text-4xl font-bold mb-8 text-primary text-center">Testimonios</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { nombre: 'Cliente 1', testimonio: '¡Un servicio excelente! Me ayudaron a mejorar mi página web.', imagen: '/images/persona1.jpg' },
            { nombre: 'Cliente 2', testimonio: 'Su atención al cliente es inigualable. Recomiendo sus servicios.', imagen: '/images/persona2.jpg' },
            { nombre: 'Cliente 3', testimonio: 'Gran equipo, muy profesionales y creativos. Estoy muy satisfecho.', imagen: '/images/persona3.jpg' }
          ].map((testimonio, index) => (
            <aside
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              aria-labelledby={`testimonio${index}`}
            >
              <Image
                src={testimonio.imagen}
                alt={testimonio.nombre}
                width={500}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 id={`testimonio${index}`} className="text-2xl font-semibold text-white">{testimonio.nombre}</h3>
              <p className="mt-2 text-gray-300">{testimonio.testimonio}</p>
            </aside>
          ))}
        </div>
      </section>

      {/* Sección de Contacto */}
      <section className="h-screen py-20 bg-gray-800 mb-20" aria-labelledby="contacto">
        <h2 id="contacto" className="text-4xl font-bold mb-8 text-primary text-center">Contáctanos</h2>
        <p className="mb-10 text-gray-300 text-center">Estamos aquí para ayudarte. Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.</p>
        <div className="flex justify-center">
          <form className="bg-gray-700 p-8 rounded-lg shadow-lg w-full max-w-lg">
            <fieldset>
              {['Tu nombre', 'Tu correo electrónico', 'Tu mensaje'].map((placeholder, index) => (
                <div className="mb-4" key={index}>
                  {placeholder !== 'Tu mensaje' ? (
                    <input
                      type={placeholder === 'Tu correo electrónico' ? 'email' : 'text'}
                      placeholder={placeholder}
                      className="w-full p-4 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
                      required
                    />
                  ) : (
                    <textarea
                      placeholder={placeholder}
                      className="w-full p-4 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
                      rows="4"
                      required
                    />
                  )}
                </div>
              ))}
              <div className="flex justify-between mb-4">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" required />
                  <label className="text-gray-300">Acepto los términos y condiciones</label>
                </div>
              </div>
              <button className="bg-primary text-white p-4 rounded-lg hover:bg-accent transition duration-300 w-full">
                Enviar
              </button>
            </fieldset>
          </form>
        </div>
      </section>
    </main>
  );
}

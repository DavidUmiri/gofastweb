'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        el.classList.toggle('in-view', isVisible);
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="text-white bg-gray-900">
      {/* Sección de fondo con imagen completa */}
      <article className="relative w-full h-screen overflow-hidden mb-20">
        <Image
          src="/images/fondo1.jpg"
          alt="Fondo de tecnología"
          layout="fill"
          objectFit="cover"
          quality={85}
          priority
          className="opacity-40"
        />

        {/* Contenido sobre la imagen de fondo */}
        <header className="absolute inset-0 flex flex-col items-center justify-center text-center font-urbanist p-10">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="animate-on-scroll mt-[-15%]"
            viewport={{ once: false, amount: 0.5 }} // Repetir animación al hacer scroll
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-4 text-primary hover:text-accent transition-colors duration-300">
              Go Fast Web
            </h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 hover:text-white transition-colors duration-300"
            >
              El mundo está cambiando. Conectemos el futuro, juntos.
            </motion.p>
          </motion.div>
        </header>
      </article>

      {/* Sección de Servicios */}
      <section className="h-screen py-20 bg-gray-800 mb-20 animate-on-scroll">
        <h2 className="text-4xl font-bold mb-8 text-primary text-center hover:text-accent transition-colors duration-300">
          Nuestros Servicios
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {['Servicio 1', 'Servicio 2', 'Servicio 3'].map((servicio, index) => (
            <motion.article
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-on-scroll"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.5 }}
              whileHover={{ scale: 1.05 }} // Efecto de hover suave
            >
              <Image
                src={`/images/fondo${index + 2}.jpg`}
                alt={servicio}
                width={500}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-white hover:text-primary transition-colors duration-300">
                {servicio}
              </h3>
              <p className="mt-2 text-gray-300 hover:text-white transition-colors duration-300">
                Descripción breve del {servicio.toLowerCase()}.
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="h-screen py-20 bg-gray-800 mb-20 animate-on-scroll">
        <h2 className="text-4xl font-bold mb-8 text-primary text-center hover:text-accent transition-colors duration-300">
          Testimonios
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { nombre: 'Cliente 1', testimonio: '¡Un servicio excelente!', imagen: '/images/persona1.jpg' },
            { nombre: 'Cliente 2', testimonio: 'Atención al cliente inigualable.', imagen: '/images/persona2.jpg' },
            { nombre: 'Cliente 3', testimonio: 'Gran equipo, muy satisfecho.', imagen: '/images/persona3.jpg' }
          ].map((testimonio, index) => (
            <motion.aside
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-on-scroll"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.5 }}
              whileHover={{ scale: 1.05 }} // Efecto de hover
            >
              <Image
                src={testimonio.imagen}
                alt={testimonio.nombre}
                width={500}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-white hover:text-primary transition-colors duration-300">
                {testimonio.nombre}
              </h3>
              <p className="mt-2 text-gray-300 hover:text-white transition-colors duration-300">
                {testimonio.testimonio}
              </p>
            </motion.aside>
          ))}
        </div>
      </section>

      {/* Sección de Contacto */}
      <section className="h-screen py-20 bg-gray-800 mb-0 animate-on-scroll">
        <h2 className="text-4xl font-bold mb-8 text-primary text-center hover:text-accent transition-colors duration-300">
          Contáctanos
        </h2>
        <div className="flex justify-center">
          <form className="bg-gray-700 p-8 rounded-lg shadow-lg w-full max-w-lg hover:shadow-2xl transition-shadow duration-300">
            <fieldset>
              {['Tu nombre', 'Tu correo electrónico', 'Tu mensaje'].map((placeholder, index) => (
                <div className="mb-4" key={index}>
                  {placeholder !== 'Tu mensaje' ? (
                    <motion.input
                      type={placeholder === 'Tu correo electrónico' ? 'email' : 'text'}
                      placeholder={placeholder}
                      className="w-full p-4 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary transition duration-300 hover:ring-accent"
                      required
                      whileHover={{ scale: 1.05 }}
                    />
                  ) : (
                    <motion.textarea
                      placeholder={placeholder}
                      className="w-full p-4 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary transition duration-300 hover:ring-accent"
                      rows="4"
                      required
                      whileHover={{ scale: 1.05 }}
                    />
                  )}
                </div>
              ))}
              <motion.button
                className="bg-primary text-white p-4 rounded-lg hover:bg-accent transition duration-300 w-full"
                whileHover={{ scale: 1.05 }}
              >
                Enviar
              </motion.button>
            </fieldset>
          </form>
        </div>
      </section>
    </main>
  );
}

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="text-gray-300 min-h-screen">
      {/* Sección de fondo con imagen completa */}
      <div className="relative w-full h-[calc(100vh-4rem)] overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-70 backdrop-blur-sm text-center font-urbanist"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">Go Fast Web</h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl text-gray-300"
          >
            El mundo está cambiando. Conectemos el futuro, juntos.
          </motion.p>
        </motion.div>
      </div>

      {/* Sección de Servicios */}
      <section className="py-20 bg-gray-800">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <Image src="/images/fondo2.jpg" alt="Servicio 1" width={500} height={300} className="rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold">Servicio 1</h3>
              <p className="mt-2">Descripción breve del servicio 1.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <Image src="/images/fondo3.jpg" alt="Servicio 2" width={500} height={300} className="rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold">Servicio 2</h3>
              <p className="mt-2">Descripción breve del servicio 2.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <Image src="/images/fondo4.jpg" alt="Servicio 3" width={500} height={300} className="rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold">Servicio 3</h3>
              <p className="mt-2">Descripción breve del servicio 3.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Sección de Testimonios */}
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8">Testimonios</h2>
          <div className="flex flex-col md:flex-row md:justify-around">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-4 md:mb-0">
              <p>Excelente servicio, muy recomendable!</p>
              <p className="mt-2 font-semibold">- Cliente 1</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-4 md:mb-0">
              <p>Realmente ayudaron a mejorar mi negocio.</p>
              <p className="mt-2 font-semibold">- Cliente 2</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-4 md:mb-0">
              <p>Un equipo profesional y confiable.</p>
              <p className="mt-2 font-semibold">- Cliente 3</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Sección de Contacto */}
      <section className="py-20 bg-gray-800">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8">Contáctanos</h2>
          <p className="mb-10">Estamos aquí para ayudarte. Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.</p>

          <div className="flex justify-center">
            <form className="bg-gray-700 p-8 rounded-lg shadow-lg w-full max-w-lg">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full p-4 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="w-full p-4 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Tu mensaje"
                  className="w-full p-4 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                  rows="4"
                  required
                />
              </div>
              <div className="flex justify-between mb-4">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" required />
                  <label className="text-gray-300">Acepto los términos y condiciones</label>
                </div>
              </div>
              <button className="bg-red-500 text-white p-4 rounded-lg hover:bg-red-600 transition duration-300 w-full">
                Enviar
              </button>
            </form>
          </div>
        </motion.div>
      </section>

    </main>
  );
}

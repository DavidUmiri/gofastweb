"use client";
import React, { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario, como una API
    console.log('Datos enviados:', formData);
    // Reinicia el formulario después de enviar
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <div className="max-w-md mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Contacto</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
            rows="4"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-primary text-white px-4 py-2 rounded hover:bg-orange-400">
          Enviar
        </button>
      </form>
      <div className="mt-8">
        <h2 className="text-lg font-semibold">Información de Contacto</h2>
        <p className="text-gray-700">Teléfono: +34 644 03 23 29</p>
        <p className="text-gray-700">Email: flomresvioleta@gmail.com</p>
        <p className="text-gray-700">Dirección: Calle Cuesta 11</p>
        <p className="text-gray-700">Sitio web: <a href="https://www.gofastweb.es" className="text-blue-500 hover:underline">gofastweb.es</a></p>
      </div>
    </div>
  );
};

export default Contacto;

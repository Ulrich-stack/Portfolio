import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mgegqedp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="contact"
      className="p-12 md:px-80 bg-primary text-sm border-b border-gray-600"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={formVariants}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-textMain">Contacter</h2>
      <div className="w-12 h-1 bg-accentPink mx-auto mb-8 rounded"></div>

      <form
        onSubmit={handleSubmit}
        className="bg-secondary p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-primary transition-all duration-300 flex flex-col gap-4 w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Votre nom"
          required
          className="p-2 rounded bg-gray-200 text-black"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Votre email"
          required
          className="p-2 rounded bg-gray-200 text-black"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Votre message"
          required
          className="p-2 rounded bg-gray-200 text-black h-32 resize-none"
        ></textarea>
        <button
          type="submit"
          className="bg-accentPink text-textMain p-2 rounded hover:bg-accentGreen transition duration-200 ease-in-out"
        >
          {status === 'sending' ? 'Envoi...' : 'Envoyer'}
        </button>
      </form>

      {status === 'success' && (
        <div className="mt-4 text-accentPink text-center">Votre message a été envoyé avec succès!</div>
      )}
      {status === 'error' && (
        <div className="mt-4 text-red-500 text-center">Erreur: Votre message n'a pas pu être envoyé.</div>
      )}
    </motion.section>
  );
}

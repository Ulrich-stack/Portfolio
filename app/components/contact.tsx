import React from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
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
      <h2 className="text-4xl font-bold mb-8 text-center text-textMain">Contact</h2>
      <div className="w-12 h-1 bg-accentPink mx-auto mb-8 rounded"></div>

      <form
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
        className="bg-secondary p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-primary transition-all duration-300 flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          required
          className="p-2 rounded bg-gray-200 text-black"
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          required
          className="p-2 rounded bg-gray-200 text-black"
        />
        <textarea
          name="message"
          placeholder="Votre message"
          required
          className="p-2 rounded bg-gray-200 text-black h-32 resize-none"
        ></textarea>
        <button
          type="submit"
          className="bg-accentPink text-textMain p-2 rounded hover:bg-accentGreen transition duration-200 ease-in-out"
        >
          Envoyer
        </button>
      </form>
    </motion.section>
  );
}

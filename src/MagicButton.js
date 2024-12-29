import React from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MagicButton = () => {
  return (
    <motion.a
      href="https://drive.google.com/file/d/1vGScHwANDuj1A8cmc9XXnLTOpSYTNodH/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="magic-btn px-6 py-3 text-xl font-bold text-white bg-black rounded-md shadow-lg transform transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-black"
      style={{ marginBottom: '1rem', fontFamily: 'Nunito, sans-serif' }}
      initial={{ scale: 1 }}
      whileHover={{
        scale: 1.05, // Menambah ukuran tombol sedikit saat hover
        backgroundColor: '#333', // Ubah warna latar belakang saat hover
        color: '#fff', // Menjaga warna teks tetap putih
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)', // Tambahkan efek bayangan saat hover
        transition: { type: 'spring', stiffness: 300, damping: 20 } // Efek transisi yang lebih halus
      }}
      whileTap={{
        scale: 0.95, // Mengurangi ukuran tombol saat diklik
        transition: { duration: 0.1 },
        color: '#fff' // Tetap warna teks putih saat diklik
      }}
      data-aos="zoom-in"
    >
      Download CV
    </motion.a>
  );
};

export default MagicButton;

AOS.init({
  duration: 1200, // Durasi animasi AOS
});


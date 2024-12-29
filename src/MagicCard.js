import React from 'react';
import { motion } from 'framer-motion';

const MagicCard = ({ title, description }) => {
  return (
    <motion.div
      className="magic-card bg-secondary p-6 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out"
      whileHover={{
        scale: 1.05,
        translateY: -10, // Memberikan efek naik sedikit saat hover untuk lebih dinamis
        transition: { duration: 0.3 }, // Durasi transisi yang lebih halus
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1 }, // Efek tap yang lebih cepat
      }}
      data-aos="flip-left"
    >
      <h4 className="text-2xl font-semibold text-primary">{title}</h4>
      <p className="text-lg text-accent mt-3">{description}</p>
    </motion.div>
  );
};

export default MagicCard;

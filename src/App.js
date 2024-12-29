import React, { useEffect } from 'react';

import AOS from 'aos';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';
import MagicButton from './MagicButton';
import MagicCard from './MagicCard';
import MagicCursor from './MagicCursor';

import './App.css';
import Menu from './Menu';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen relative font-nunito">
      <MagicCursor />

      {/* Header */}
      <header className="py-10 bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-bold font-nunito text-white" data-aos="zoom-in" data-aos-duration="1000">Fadli's Photography</h1>
          <Menu />
        </div>
      </header>

      {/* Hero Section */}
          <section id="hero" className="relative text-center py-40 flex justify-center items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700" data-aos="fade-up">
            {/* Background animation */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute bg-white opacity-10 rounded-full"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: [0.8, 1.2, 0.9], opacity: [0, 0.2, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{ width: '500px', height: '500px', top: '-100px', left: '-100px' }}
              />
              <motion.div
                className="absolute bg-white opacity-10 rounded-full"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: [1, 1.5, 1.1], opacity: [0, 0.1, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                style={{ width: '400px', height: '400px', bottom: '-80px', right: '-80px' }}
              />
            </div>

            <div className="max-w-2xl relative">
              <motion.h2
                className="text-6xl font-extrabold leading-tight"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
              >
                Capturing Moments <br /> Through the Lens
              </motion.h2>
              <motion.p
                className="text-2xl mt-5"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
              >
                Specializing in portrait and landscape photography. Let's create timeless images together.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.8, delay: 0.6, ease: "easeOut" }}
              >
                <div className="mt-10 mb-10">
                  <MagicButton />
                </div>
              </motion.div>
            </div>

            <motion.img
              src={require('./assets/images/photographer.jpg')}
              alt="Fadli Photographer"
              className="ml-10 w-72 h-72 rounded-full transform transition-all duration-700 hover:scale-110 hover:rotate-3 shadow-lg mb-10"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
              data-aos="fade-left"
            />
          </section>

{/* Portfolio Section */}
<section id="portfolio" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 text-white" data-aos="fade-up">
  <div className="max-w-6xl mx-auto text-center">
    <motion.h3
      className="text-5xl font-extrabold"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      My Portfolio
    </motion.h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 relative">
      <MagicCard
        title="Wedding Photography"
        description="Capturing the special moments of your big day with elegance and style."
      />
      <MagicCard
        title="Landscape Photography"
        description="Exploring the beauty of nature through breathtaking landscape shots."
      />
      <MagicCard
        title="Portrait Photography"
        description="Creating stunning portraits that tell a story and capture personality."
      />
    </div>
  </div>
</section>

{/* Services Section */}
<section id="services" className="py-20 bg-gray-900 text-white" data-aos="fade-up">
  <div className="max-w-6xl mx-auto text-center">
    <h3 className="text-4xl font-bold">My Services</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
      <MagicCard
        title="Event Photography"
        description="Professional coverage for your events with high-quality images."
      />
      <MagicCard
        title="Product Photography"
        description="Showcase your products with visually appealing and detailed photos."
      />
      <MagicCard
        title="Editing Services"
        description="Enhance and retouch your photos for a polished final product."
      />
    </div>
  </div>
</section>

{/* About Section */}
<section id="about" className="py-20 bg-gray-800 text-white" data-aos="fade-up">
  <div className="max-w-5xl mx-auto text-center">
    <motion.h3
      className="text-4xl font-bold"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      About Me
    </motion.h3>
    <motion.p
      className="text-lg mt-5 max-w-xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      I'm a passionate photographer with a keen eye for detail and a love for capturing the essence of every moment. I have years of experience in various photography styles and a commitment to providing the best service for my clients.
    </motion.p>
  </div>
</section>

{/* Contact Section */}
<section id="contact" className="py-20 bg-gray-900 text-white" data-aos="fade-up">
  <div className="max-w-6xl mx-auto text-center">
    <motion.h3
      className="text-4xl font-bold"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      Contact Me
    </motion.h3>
    <motion.p
      className="text-lg mt-5 max-w-lg mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      Let's connect! Reach out to discuss your photography needs or for any inquiries. You can also email me directly at <a href="mailto:kudhen123@gmail.com" target="_blank" rel="noopener noreferrer" className="text-yellow-300 underline">kudhen123@gmail.com</a>.
    </motion.p>
    <div className="flex justify-center mt-10 space-x-5">
      <motion.a
        href="https://twitter.com/fadli"
        target="_blank"
        rel="noopener noreferrer"
        className="transform hover:scale-110 transition duration-300"
      >
        <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter" />
      </motion.a>
      <motion.a
        href="https://github.com/fadlimuh"
        target="_blank"
        rel="noopener noreferrer"
        className="transform hover:scale-110 transition duration-300"
      >
        <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/fadliarsyi/"
        target="_blank"
        rel="noopener noreferrer"
        className="transform hover:scale-110 transition duration-300"
      >
        <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
      </motion.a>
    </div>
  </div>
</section>

{/* Footer */}
<footer className="py-10 text-center bg-gray-900 text-white">
  <p>&copy; 2024 Fadli. All Rights Reserved.</p>
</footer>

</div>
);
};

export default App;




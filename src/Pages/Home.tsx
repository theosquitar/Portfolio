import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-between px-16 bg-background">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-16">
        {/* Texto con animaciones */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-8xl font-extrabold text-textDark leading-tight mb-8">
            Hola, soy Oscar
          </h1>
          <p className="text-2xl text-textSecondary leading-relaxed mb-8">
            Desarrollador Full-Stack apasionado por crear experiencias intuitivas y significativas que conecten personas y tecnología.
          </p>
          <motion.a
            href="/projects"
            className="text-accent text-xl font-semibold underline hover:text-textDark"
            whileHover={{ scale: 1.1 }}
          >
            Ver mis proyectos
          </motion.a>
        </motion.div>

        {/* Animación con espacio ajustado */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <DotLottieReact
            src="https://lottie.host/63063fef-8743-48ce-9f95-88977bb817f7/ldCDnV3U9S.lottie"
            loop
            autoplay
            style={{ width: '500px', height: '500px' }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;

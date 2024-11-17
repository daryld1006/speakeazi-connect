import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cream to-white pt-20">
      <div className="container mx-auto px-6 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <motion.span 
            className="inline-block px-6 py-2 text-sm font-medium text-primary bg-primary-light rounded-bubble animate-bounce-slight"
            whileHover={{ scale: 1.05 }}
          >
            Fun Speech Therapy for Kids
          </motion.span>
          <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
            Let's Make Speaking
            <br />
            <span className="text-primary animate-float inline-block">Fun & Easy!</span>
          </h1>
          <p className="text-xl text-secondary-light mb-8 max-w-2xl mx-auto leading-relaxed">
            We help children find their voice through playful and engaging speech therapy sessions. Every word is a new adventure!
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-4 text-lg font-medium text-white bg-primary hover:bg-primary-dark transition-colors duration-200 rounded-bubble shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start the Journey
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
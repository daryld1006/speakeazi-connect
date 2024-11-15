import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cream to-white pt-20">
      <div className="container mx-auto px-6 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium text-primary bg-primary-light rounded-full">
            Professional Speech Therapy Services
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6">
            Empowering Communication,<br />One Voice at a Time
          </h1>
          <p className="text-xl text-secondary-light mb-8 max-w-2xl mx-auto">
            Expert speech therapy services tailored to your unique needs. We help children and adults overcome communication challenges with personalized care.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 text-lg font-medium text-white bg-primary hover:bg-primary-dark transition-colors duration-200 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Schedule a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
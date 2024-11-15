import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <Hero />
      <Services />
      <Contact />
    </motion.div>
  );
};

export default Index;
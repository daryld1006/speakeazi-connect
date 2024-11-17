import { Sparkles, Rainbow, Star, Flower } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Sparkles,
    title: "Fun Speech Activities",
    description: "Interactive games and exercises that make speech practice exciting!",
  },
  {
    icon: Rainbow,
    title: "Kid-Friendly Sessions",
    description: "Engaging therapy sessions designed specifically for children.",
  },
  {
    icon: Star,
    title: "Learning Through Play",
    description: "Making progress while having fun with games and activities.",
  },
  {
    icon: Flower,
    title: "Early Learning",
    description: "Helping young minds develop strong communication skills early.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block px-6 py-2 mb-4 text-sm font-medium text-primary bg-primary-light rounded-bubble"
            whileHover={{ scale: 1.05 }}
          >
            How We Help
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Making Speech Therapy Fun!
          </h2>
          <p className="text-lg text-secondary-light mb-8 max-w-2xl mx-auto">
            Every session is an adventure filled with games, stories, and activities that children love!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-bubble shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary-light rounded-bubble flex items-center justify-center mb-4 mx-auto">
                <service.icon className="w-8 h-8 text-primary animate-bounce-slight" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-secondary text-center">{service.title}</h3>
              <p className="text-secondary-light text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
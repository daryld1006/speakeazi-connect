import { Speech, Users, Brain, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Speech,
    title: "Speech & Language Therapy",
    description: "Comprehensive assessment and treatment for speech and language disorders.",
  },
  {
    icon: Users,
    title: "Child & Adult Services",
    description: "Specialized programs for both children and adults with communication needs.",
  },
  {
    icon: Brain,
    title: "Cognitive Communication",
    description: "Support for cognitive aspects of communication and problem-solving.",
  },
  {
    icon: Clock,
    title: "Early Intervention",
    description: "Early assessment and therapy for young children showing signs of delay.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-primary bg-primary-light rounded-full">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Comprehensive Speech Therapy Solutions
          </h2>
          <p className="text-lg text-secondary-light mb-8 max-w-2xl mx-auto">
            We offer a wide range of specialized services to help you or your loved ones achieve better communication skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-cream rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-secondary">{service.title}</h3>
              <p className="text-secondary-light">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block px-6 py-2 mb-4 text-sm font-medium text-primary-dark bg-primary-light rounded-bubble"
            whileHover={{ scale: 1.05 }}
          >
            Let's Connect
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Start your child's journey to better communication today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-light rounded-bubble flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary-dark" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-secondary-dark">Phone</h3>
                <p className="text-gray-700">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-light rounded-bubble flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary-dark" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-secondary-dark">Email</h3>
                <p className="text-gray-700">contact@speakeazi.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-light rounded-bubble flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary-dark" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-secondary-dark">Location</h3>
                <p className="text-gray-700">63 La Trobe Street<br />Melbourne, VIC 3000</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white rounded-bubble shadow-lg p-8"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary-dark mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-bubble focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-dark mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-bubble focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-dark mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-bubble focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-3 text-white bg-primary hover:bg-primary-dark transition-colors duration-200 rounded-bubble shadow-lg hover:shadow-xl"
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
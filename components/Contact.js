import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = ({ darkMode }) => (
  <section className="mb-12">
    <motion.div
      className="text-center mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-2">
        Get in <span className="text-orange-400">Touch</span>
      </h2>
      <p className="text-gray-500 dark:text-gray-400">
        Feel free to reach out for any inquiries, collaborations, or just to say hello!
      </p>
    </motion.div>

    {/* Contact Cards */}
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
    >
      {/* Email */}
      <ContactCard
        icon={<FaEnvelope />}
        title="Email"
        description="desmetlars5@gmail.com"
        href="mailto:desmetlars5@gmail.com"
        darkMode={darkMode}
      />

      {/* Phone */}
      <ContactCard
        icon={<FaPhone />}
        title="Phone"
        description="+32 492 837 168"
        href="tel:+320492837168"
        darkMode={darkMode}
      />

      {/* Address */}
      <ContactCard
        icon={<FaMapMarkerAlt />}
        title="Address"
        description="33 Brugstraat, Aalter, Belgium"
        darkMode={darkMode}
      />

      {/* GitHub */}
      <ContactCard
        icon={<FaGithub />}
        title="GitHub"
        description="https://github.com/Desmet-Lars"
        href="https://github.com/Desmet-Lars"
        darkMode={darkMode}
      />
    </motion.div>
  </section>
);

// Reusable ContactCard Component
const ContactCard = ({ icon, title, description, href, darkMode }) => (
  <motion.div
    className={`p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl ${
      darkMode
        ? "bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 hover:border-orange-400"
        : "bg-gray-100 text-black border border-gray-300 hover:bg-gray-200"
    }`}
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    <div className="text-4xl text-orange-400 mb-4">{icon}</div>
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="hover:underline">
          {description}
        </a>
      ) : (
        description
      )}
    </p>
  </motion.div>
);

export default Contact;

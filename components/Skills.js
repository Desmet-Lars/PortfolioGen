import { motion } from 'framer-motion';
import {
  FaJs, FaReact, FaNodeJs, FaPython, FaCss3Alt, FaHtml5, FaGit, FaGithub, FaAngular, FaJava, FaPhp,
} from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

const skills = [
  { Icon: FaJs, label: 'JavaScript' },
  { Icon: FaReact, label: 'React' },
  { Icon: FaNodeJs, label: 'Node.js' },
  { Icon: FaPython, label: 'Python' },
  { Icon: FaCss3Alt, label: 'CSS' },
  { Icon: FaHtml5, label: 'HTML' },
  { Icon: FaGit, label: 'Git' },
  { Icon: FaGithub, label: 'GitHub' },
  { Icon: FaAngular, label: 'Angular' },
  { Icon: FaPhp, label: 'PHP' },
  { Icon: FaJava, label: 'Java' },
  { Icon: SiNextdotjs, label: 'Next.js' },
];

const Skills = ({ darkMode }) => (
    <section >
    <h2
      className={`text-3xl font-bold mb-4 ${
        darkMode ? 'text-white' : 'text-black'
      }`}
    >
      Skills
    </h2>
    <motion.ul
      className="grid grid-cols-2 sm:grid-cols-4 gap-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
      }}
    >
      {skills.map(({ Icon, label }, idx) => (
        <motion.li
          key={idx}
          className={`flex flex-col items-center p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 ${
            darkMode
              ? 'bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 hover:border-orange-400'
              : 'bg-gray-100 text-black border border-gray-300 hover:bg-gray-200'
          }`}
        >
          <Icon
            className={`text-4xl mb-2 transition-all duration-500 ${
              darkMode ? 'text-orange-500' : 'text-gray-700'
            }`}
          />
          <span>{label}</span>
        </motion.li>
      ))}
    </motion.ul>
  </section>
);

export default Skills;

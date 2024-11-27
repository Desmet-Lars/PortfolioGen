import { motion } from 'framer-motion';

const Header = ({ profile, darkMode, toggleTheme }) => (
  <header className={`text-center p-6 ${darkMode ? "bg-orange-500": "bg-gradient-to-r from-blue-500 to-indigo-500"} text-white`}>
    <motion.button
      onClick={toggleTheme}
      className="mb-6 px-4 py-2 rounded-full bg-white text-black shadow-md hover:shadow-lg transition-all"
      whileTap={{ scale: 0.9 }}
    >
      Toggle {darkMode ? 'Light' : 'Dark'} Mode
    </motion.button>
    <motion.h1
      className="text-4xl font-extrabold"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {profile.login}'s GitHub Portfolio
    </motion.h1>
    <motion.img
      src={profile.avatar_url}
      alt="Profile Avatar"
      className="mx-auto w-24 h-24 rounded-full mt-4 border-4 border-white"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}
    />
  </header>
);

export default Header;

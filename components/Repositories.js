import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaCodeBranch, FaClock } from "react-icons/fa";

const Repositories = ({ repos, darkMode }) => {
  const [showAll, setShowAll] = useState(false);

  // Sort repos by creation date (newest first)
  const sortedRepos = [...repos].sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  // Determine which repos to display
  const displayedRepos = showAll ? sortedRepos : sortedRepos.slice(0, 9);

  return (
    <section className="mb-8">
      <h2 className="text-3xl font-bold mb-4">Repositories</h2>
      <motion.ul
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
      >
        <AnimatePresence>
          {displayedRepos.map((repo) => (
            <motion.li
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`transition-all duration-500 p-4 rounded-lg shadow-lg hover:scale-105 transform ${
                darkMode
                  ? "bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 hover:border-orange-400"
                  : "bg-gray-100 text-black border border-gray-300 hover:bg-gray-200"
              } hover:shadow-xl`}
            >
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold hover:underline"
              >
                {repo.name}
              </a>
              <p className="mt-2">
                {repo.description || "No description available"}
              </p>

              {/* Language Badge */}
              <span
                className={`inline-block px-2 py-1 mt-2 rounded text-xs font-semibold ${
                  repo.language === "JavaScript"
                    ? "bg-yellow-200 text-yellow-800"
                    : repo.language === "Python"
                    ? "bg-blue-200 text-blue-800"
                    : "bg-gray-200 text-gray-800"
                } hover:bg-opacity-80`}
              >
                {repo.language || "Unknown"}
              </span>

              <div className="flex justify-between text-sm mt-4 items-center">
                <motion.span
                  className="flex items-center gap-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <FaStar className="hover-icon" style={{ color: "orange" }} />
                  {repo.stargazers_count}
                </motion.span>
                <motion.span
                  className="flex items-center gap-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <FaCodeBranch
                    className="hover-icon"
                    style={{ color: "orange" }}
                  />
                  {repo.forks_count}
                </motion.span>
                <motion.span
                  className="flex items-center gap-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <FaClock className="hover-icon" style={{ color: "orange" }} />
                  {new Date(repo.created_at).toLocaleDateString()}
                </motion.span>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {/* Show More / Show Less Button */}
      <div className="mt-6 text-center">
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className={`px-4 py-2 text-sm font-medium rounded-lg shadow-md transition ${
            darkMode
              ? "bg-gray-700 text-white hover:bg-orange-500"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default Repositories;

'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Skills from '@/components/Skills';
import Repositories from '@/components/Repositories';
import Footer from '@/components/Footer';
import SkeletonLoader from '@/components/SkeletonLoader';
import Contact from '@/components/Contact';

const Portfolio = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileResponse = await axios.get('https://api.github.com/users/Desmet-Lars');
        setProfile(profileResponse.data);

        const reposResponse = await axios.get('https://api.github.com/users/Desmet-Lars/repos');
        setRepos(reposResponse.data);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    };

    fetchData();
  }, []);

  if (!profile) return <SkeletonLoader />;

  return (
    <>
      <Head>
        <title>{profile.login}'s GitHub Portfolio</title>
        <meta name="description" content="A professional GitHub portfolio showcasing my projects and skills." />
        <meta property="og:title" content={`${profile.login}'s GitHub Portfolio`} />
        <meta property="og:image" content={profile.avatar_url} />
      </Head>

      {/* Main container with smooth background color transition */}
      <motion.div
        className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}`}
        animate={{ backgroundColor: darkMode ? '#1f2937' : '#f9fafb' }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <Header profile={profile} darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />
        </motion.div>

        <main className="p-8 md:p-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
            }}
            className="space-y-12"
          >
            {/* Skills Section with Scroll Animation */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: false }}
            >
              <Skills darkMode={darkMode} />
            </motion.div>

            {/* Repositories Section with Scroll Animation */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <Repositories repos={repos} darkMode={darkMode} />
            </motion.div>

            {/* Contact Section with Scroll Animation */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: false }}
            >
              <Contact darkMode={darkMode} />
            </motion.div>
          </motion.div>
        </main>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Footer profile={profile} darkMode={darkMode} />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Portfolio;

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
      <div className={`min-h-screen ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        <Header profile={profile} darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />

        <main className="p-8">
          <Skills darkMode={darkMode} />
          <Repositories repos={repos} darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </main>

        <Footer profile={profile} darkMode={darkMode} />
      </div>
    </>
  );
};

export default Portfolio;

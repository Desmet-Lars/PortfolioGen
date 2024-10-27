'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import { FaJs, FaReact, FaNodeJs, FaPython, FaCss3Alt, FaHtml5, FaGit, FaGithub, FaAngular, FaJava, FaPhp, FaStar, FaCodeBranch, FaClock } from 'react-icons/fa';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const Portfolio = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileResponse = await axios.get('https://api.github.com/users/Desmet-Lars');
        setProfile(profileResponse.data);

        const reposResponse = await axios.get(`https://api.github.com/users/Desmet-Lars/repos`);
        setRepos(reposResponse.data);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };

    fetchData();
  }, []);

  if (!profile) return <p className="text-center text-xl">Loading...</p>;

  return (
    <>
    <div className={`min-h-screen flex flex-col items-center p-8  shadow-lg transition-all duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Head>
        <title>{profile.login}'{profile.login.endsWith('s') ? '' : 's'} GitHub Portfolio</title>
      </Head>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`mb-6 p-2 rounded-lg border transition duration-300
            ${darkMode ? 'text-white border-gray-700 hover:bg-gray-300 hover:text-black' : 'text-black border-gray-300 hover:bg-gray-800 hover:text-white'}`}
        >
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>

      <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 text-center">{profile.login}'{profile.login.endsWith('s') ? '' : 's'} GitHub Portfolio</h1>
      <img src={profile.avatar_url} alt={`Profile Picture of ${profile.name}`} className="w-32 h-32 rounded-full border-4 border-gray-300 shadow-lg mb-6 dark:border-gray-700" />
      <p className="text-lg mb-4 italic text-center">{profile.bio || 'No bio available'}</p>

      {/* Skills Section */}
      <section className="mb-8 w-full">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-6 gap-4">
          {[
            { icon: <FaJs className="text-4xl text-yellow-500 mb-2" />, label: 'JavaScript' },
            { icon: <FaReact className="text-4xl text-blue-500 mb-2" />, label: 'React' },
            { icon: <FaNodeJs className="text-4xl text-green-500 mb-2" />, label: 'Node.js' },
            { icon: <FaPython className="text-4xl text-blue-400 mb-2" />, label: 'Python' },
            { icon: <FaCss3Alt className="text-4xl text-blue-600 mb-2" />, label: 'CSS' },
            { icon: <FaHtml5 className="text-4xl text-orange-500 mb-2" />, label: 'HTML' },
            { icon: <FaGit className="text-4xl text-red-500 mb-2" />, label: 'Git' },
            { icon: <FaGithub className="text-4xl text-black mb-2" />, label: 'GitHub' },
            { icon: <FaAngular className="text-4xl text-red-600 mb-2" />, label: 'Angular' },
            { icon: <FaPhp className="text-4xl text-blue-600 mb-2" />, label: 'PHP' },
            { icon: <FaJava className="text-4xl text-red-600 mb-2" />, label: 'Java' }
          ].map((skill, index) => (
            <li key={index} className={`flex flex-col items-center p-4 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} hover:shadow-xl transition-shadow duration-300`}>
              {skill.icon}
              <span>{skill.label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Repositories Section */}
      <section className="mb-8 w-full">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-4">Repositories</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {repos.map(repo => (
            <li key={repo.id} className={`p-4 rounded-lg transition-shadow duration-300 shadow-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}>
                <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline text-lg"
                >
                {repo.name}
                </a>
                <p className="text-gray-600 mt-1">{repo.description || 'No description'}</p>
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>
                    <FaStar className="mb-1 inline-block mr-1 text-yellow-500" />
                    {repo.stargazers_count}
                </span>
                <span>
                    <FaCodeBranch className="inline-block mr-1 text-green-500" />
                    {repo.forks_count}
                </span>
                <span>
                    <FaClock className="inline-block mr-1 text-gray-400" />
                    {new Date(repo.created_at).toLocaleDateString()}
                </span>
                </div>
            </li>
            ))}
        </ul>
      </section>


    </div>
    {/* Footer Section */}
<footer className={`w-full p-6 text-center ${darkMode ? 'bg-gray-800 text-gray-300 shadow-lg' : 'bg-gray-200 text-gray-800 shadow-lg'}`}>
  <p className="mb-4 text-lg">
    This website is live-updated using the GitHub API to fetch data about my projects and profile.
  </p>
  <h2 className="text-2xl font-bold mb-2">Contact Me</h2>
  <ul className="list-none mb-4 space-y-2">
    <li>
      Email: <a href="mailto:your-email@example.com" className="text-blue-600 hover:underline">your-email@example.com</a>
    </li>
    <li>
      LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center justify-center">
        <FaLinkedin className="mr-1" /> LinkedIn Profile
      </a>
    </li>
    <li>
      Twitter: <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center justify-center">
        <FaTwitter className="mr-1" /> Twitter Profile
      </a>
    </li>
  </ul>
  <p className="text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
</footer>
    </>
  );
};

export default Portfolio;

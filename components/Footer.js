const Footer = ({ profile }) => (
    <footer className="text-center p-6 bg-gray-800 text-gray-300">
      <p>© {new Date().getFullYear()} {profile.name || profile.login}. All rights reserved.</p>
    </footer>
  );

  export default Footer;

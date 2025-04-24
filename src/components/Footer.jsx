import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-neutral-600 bg-opacity-35  text-gray-300 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Branding */}
        <div className="text-center md:text-left">
          <Link to='/'>
                    <img  src={logo} alt="Logo" width={120} />
          </Link>
          <p className="text-sm">Your daily dose of Movieo</p>
        </div>

        {/* Navigation */}
        <ul className="flex space-x-6 text-sm font-bold">
          <li><a href="/movie" className="hover:text-white">Movies</a></li>
          <li><a href="/tv" className="hover:text-white">TV Shows</a></li>
          <li><a href="/" className="hover:text-white">About</a></li>
          <li><a href="/" className="hover:text-white">Contact</a></li>

        </ul>

        {/* Socials */}
        <div className="flex space-x-5 text-2xl">
          <a href="https://facebook.com" className="hover:text-blue-700"><FaFacebook /></a>
          <a href="https://twitter.com" className="hover:text-cyan-500"><FaTwitter /></a>
          <a href="https://instagram.com" className="hover:text-purple-700"><FaInstagram /></a>
          <a href="https://youtube.com" className="hover:text-red-700"><FaYoutube /></a>
        </div>
      </div>

      <div className="mt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Movieo. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

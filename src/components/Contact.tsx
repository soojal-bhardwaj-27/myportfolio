import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import type { IconBaseProps } from "react-icons/lib";
import { useEffect, useState } from "react";

const Contact = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const darkModeObserver = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });

    darkModeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    setIsDark(document.documentElement.classList.contains('dark'));

    return () => darkModeObserver.disconnect();
  }, []);

  const iconProps: IconBaseProps = {
    size: "1.25em",
    color: isDark ? "#2dd4bf" : "#14b8a6" // teal-400 for dark mode, teal-500 for light mode
  };

  return (
    <div className="min-h-screen py-20 px-4 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10 border border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
          Contact Me
        </h1>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <FaEnvelope {...iconProps} />
            <p className="text-lg text-gray-700 dark:text-gray-300">soojal.bhardwaj.27@gmail.com</p>
          </div>

          <div className="flex items-center space-x-4">
            <FaPhone {...iconProps} />
            <p className="text-lg text-gray-700 dark:text-gray-300">9413457023</p>
          </div>

          <div className="flex items-center space-x-4">
            <FaLinkedin {...iconProps} />
            <a
              href="https://www.linkedin.com/in/soojal-bhardwaj-086678322/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
            >
              LinkedIn Profile
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <FaTelegram {...iconProps} />
            <a
              href="https://t.me/Next_anime_plz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
            >
              Telegram: @Next_anime_plz
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

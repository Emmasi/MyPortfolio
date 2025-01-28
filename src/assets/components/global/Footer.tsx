export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-6">
          <a
            href="https://www.linkedin.com/in/emma-olsson22/"
            className="hover:text-gray-400 transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Emmasi"
            className="hover:text-gray-400 transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="mt-4 md:mt-0 text-center md:text-right">
          <p className="text-gray-400">© 2025 Emma Olsson</p>
        </div>
      </div>
    </footer>
  );
}

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* ✅ Brand Name */}
        <h1 className="text-2xl font-extrabold text-blue-600 tracking-wide">
          My Portfolio
        </h1>

        {/* ✅ Navigation Links */}
        <div className="space-x-6 text-lg font-medium">
          <a href="#home" className="text-gray-700 hover:text-blue-600 transition duration-300">Home</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition duration-300">About</a>
          <a href="#projects" className="text-gray-700 hover:text-blue-600 transition duration-300">Projects</a>
          <a href="#certificates" className="text-gray-700 hover:text-blue-600 transition duration-300">Certificates</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
}

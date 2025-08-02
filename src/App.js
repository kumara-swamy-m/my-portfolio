import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope, FaInstagram } from "react-icons/fa";




function App() {
  return (
    <div>
      <Navbar />

      {/* Home Section */}
      <section
  id="home"
  className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-blue-50 via-white to-blue-100"
>
  {/* ✅ Profile Image with Glow */}
  <motion.div
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative flex justify-center mb-8"
  >
    {/* Glow Effect */}
    <div className="absolute w-72 h-72 rounded-full bg-blue-300 blur-3xl opacity-30"></div>
    {/* Profile Picture */}
    <img
      src="/profile.jpeg"
      alt="Kumara Swamy"
      className="relative w-56 h-56 rounded-full shadow-2xl border-4 border-white object-cover"
    />
  </motion.div>

  {/* ✅ Centered Text Content */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-center max-w-2xl"
  >
    <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
      Hi, I'm Kumara Swamy M
    </h1>
    <p className="text-xl text-gray-700 leading-relaxed mb-2">
    An enthusiastic B.Tech student driven by curiosity and passion for technology, always eager to learn, innovate, and take on new challenges
    </p>
    <p className="text-lg text-gray-600">
      This portfolio showcases my projects, academic achievements, and skills that define my journey as a developer.
    </p>
  </motion.div>
</section>




      {/* About Section */}
      <section id="about" className="py-20 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          I'm Kumara Swamy M, a 2nd-year B.Tech CSE student at UVCE (University of Visvesvaraya College of Engineerig). I have a strong passion for programming and problem-solving, which has helped me score an 9.08  CGPA integrated.
          </p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Projects</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 mb-8">
            Here are some of my technical projects that showcase my skills.
          </p>

          {/* ✅ Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20">
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-blue-600">Portfolio Website</h3>
              <p className="text-gray-600 mt-2">A responsive React-based portfolio with Tailwind CSS.</p>
              <a href="my-portfolio-hew9wov8a-kumara-swamy-ms-projects.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-3 block hover:underline">
                View Project →
              </a>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-blue-600">Todo App(Ideation and palnning stage)</h3>
              <p className="text-gray-600 mt-2">To Developed and planned a secure Multi-User Role-Based To-Do List backend using Java Spring Boot and MongoDB. Designed RESTful APIs with Basic Authentication and Role-Based Access Control, enabling features such as user task management, admin-level user oversight, and dynamic role promotion/demotion. Focused on modular architecture, scalable database integration, and secure authentication to align with enterprise-level standards."**
</p>
          
            </div>

            
          </div>
        </motion.div>
      </section>

   {/* Certificates Section */}
<section id="certificates" className="py-20 bg-white text-center">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-3xl font-bold text-gray-800">Certificates</h2>
    <p className="mt-4 max-w-2xl mx-auto text-gray-600">
      My academic and technical certifications that validate my skills and learning journey.
    </p>
  </motion.div>

  {/* ✅ Certificate Grid */}
  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-20">
    
    {/* ✅ Campus Champ Softskill Certificate */}
    <motion.div
      className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src="/CC_Certificate.jpg"
        alt="Campus Champ Softskill Certificate"
        className="w-full h-auto object-cover"
      />
      <h3 className="text-lg font-semibold mt-4 mb-2">Campus Champ Softskill Certificate</h3>
    </motion.div>

  </div>
</section>


<section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-blue-100 text-center">
  <h2 className="text-3xl font-bold text-blue-700 mb-10">Contact Me</h2>

  <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 space-y-6">
    {/* ✅ Phone */}
    <div className="flex items-center space-x-4">
      <FaPhoneAlt className="text-blue-600 text-2xl" />
      <a href="tel:+918310039837" className="text-lg text-gray-700 hover:text-blue-600 transition">
        +91 8310039837
      </a>
    </div>

    {/* ✅ Email */}
    <div className="flex items-center space-x-4">
      <FaEnvelope className="text-blue-600 text-2xl" />
      <a href="kumaramswamy7147" className="text-lg text-gray-700 hover:text-blue-600 transition">
        kumaramswamy7147@gmail.com
      </a>
    </div>

    {/* ✅ LinkedIn */}
    <div className="flex items-center space-x-4">
      <FaLinkedin className="text-blue-700 text-2xl" />
      <a href="https://www.linkedin.com/in/kumara-swamy-m-abb4b1336" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:text-blue-600 transition">
        LinkedIn
      </a>
    </div>

    {/* ✅ GitHub */}
    <div className="flex items-center space-x-4">
      <FaGithub className="text-gray-800 text-2xl" />
      <a href="https://github.com/kumara-swamy-m" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:text-blue-600 transition">
        GitHub
      </a>
    </div>

    
  </div>
</section>



     
    </div>
  );
}

export default App;

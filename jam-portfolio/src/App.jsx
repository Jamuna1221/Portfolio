import React from 'react';
import Header from './components/layout/Header';
import Home from './pages/Home';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      
      {/* About Section */}
      <section id="about" className="min-h-screen bg-white flex items-center justify-center py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto">
            Section coming soon...
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 flex items-center justify-center py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto">
            Section coming soon...
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen bg-white flex items-center justify-center py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto">
            Section coming soon...
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 flex items-center justify-center py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto">
            Section coming soon...
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;

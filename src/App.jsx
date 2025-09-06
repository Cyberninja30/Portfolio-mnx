import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar.jsx';
import Loader from './components/loader.jsx';
import './App.css';

// Lazy load components for better performance
const Home = lazy(() => import('./components/home.jsx'));
const Timeline = lazy(() => import('./components/timeline.jsx'));
const Projects = lazy(() => import('./components/project.jsx'));
const Skills = lazy(() => import('./components/skills.jsx'));
const Certifications = lazy(() => import('./components/certification.jsx'));
const Contact = lazy(() => import('./components/contact.jsx'));

const App = () => {
  return (
    <Router>
      <div className="terminal-container">
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;

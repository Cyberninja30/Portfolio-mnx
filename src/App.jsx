import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home.jsx';
import Timeline from './components/timeline.jsx';
import Projects from './components/project.jsx';
import Skills from './components/skills.jsx';
import Certifications from './components/certification.jsx';
import Contact from './components/contact.jsx';
import Navbar from './components/Navbar.jsx';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="terminal-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

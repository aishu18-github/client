// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ShareProjectForm from './components/ShareProjectForm';
import Forum from './components/Forum';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import Home from './components/Home';
import ProjectsPage from './pages/ProjectsPage'; // Add this line

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/share-project" element={<ShareProjectForm />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/projects" element={<ProjectsPage />} /> {/* Important */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;

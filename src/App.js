import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import GoalSelection from './pages/GoalSelection';
import SkillAssessment from './pages/SkillAssessment';
import Roadmap from './pages/Roadmap';
import ExpertReview from './pages/ExpertReview';
import Gamification from './pages/Gamification';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/goals" element={<GoalSelection />} />
        <Route path="/assessment" element={<SkillAssessment />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/expert-review" element={<ExpertReview />} />
        <Route path="/gamification" element={<Gamification />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
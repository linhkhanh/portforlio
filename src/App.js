import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { HashRouter, Route } from "react-router-dom";
import AboutPage from './components/About-Page';
import SkillsPage from './components/Skill-Page';
import EducationPage from './components/Education-Page';
import ProjectsPage from './components/Projects-page';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <HashRouter basename="/">
        <Header />
        <Route exact path="/"
          render={() =>
            <Home />}
        />

        <Route path="/about"
          render={() =>
            <AboutPage />}
        />

        <Route path="/skills"
          render={() =>
            <SkillsPage />}
        />

        <Route path="/education_experience"
          render={() =>
            <EducationPage />}
        />

        <Route path="/projects"
          render={() =>
            <ProjectsPage />}
        />

        <Route path="/contact"
          render={() =>
            <Contact />}
        />

        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;

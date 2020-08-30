import React, { useRef } from "react";
/* Styles */
import "./App.css";
/* Views */
import {
  // LandingView,
  HomeView,
  ProjectsView,
  SkillsView,
  ContactView,
} from "../../views";
/* Subcomponents */
import { Nav } from "../";

const App = () => {
  const homeViewRef = useRef<HTMLDivElement>(null);
  const projectsViewRef = useRef<HTMLDivElement>(null);
  const skillsViewRef = useRef<HTMLDivElement>(null);
  const contactViewRef = useRef<HTMLDivElement>(null);

  return (
    <div className="App">
      <Nav
        homeViewRef={homeViewRef}
        projectsViewRef={projectsViewRef}
        skillsViewRef={skillsViewRef}
        contactViewRef={contactViewRef}
      />

      {/* <LandingView /> */}
      <div ref={homeViewRef}>
        <HomeView />
      </div>
      <div ref={projectsViewRef}>
        <ProjectsView />
      </div>
      <div ref={skillsViewRef}>
        <SkillsView />
      </div>
      <div ref={contactViewRef}>
        <ContactView />
      </div>
    </div>
  );
};

export default App;

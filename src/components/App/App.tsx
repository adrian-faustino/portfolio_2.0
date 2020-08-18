import React from "react";
/* Styles */
import "./App.css";
/* Views */
import { HomeView, ProjectsView, SkillsView, ContactView } from "../../views";

function App() {
  return (
    <div className="App">
      <HomeView />
      <ProjectsView />
      <SkillsView />
      <ContactView />
    </div>
  );
}

export default App;

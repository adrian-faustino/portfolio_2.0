import React from "react";
/* Styles */
import "./App.css";
/* Views */
import { HomeView, ProjectsView, SkillsView, ContactView } from "../../views";
/* Subcomponents */
// import { Nav } from "../";

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}

      <HomeView />
      <ProjectsView />
      <SkillsView />
      <ContactView />
    </div>
  );
}

export default App;

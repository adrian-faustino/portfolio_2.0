import React from "react";
/* Style */
import "./ProjectTree.css";
/* Material UI */
import { TreeView, TreeItem } from "@material-ui/lab";
import { ExpandMore, ChevronRight } from "@material-ui/icons";
/* Constants */
import { IProject } from "../../constants/types";
import { PERSONAL_PROJECTS, CLIENT_PROJECTS } from "../../db/myProjects";
/* Util */
import { scrollToRef } from "../../util";

interface RenderTree {
  id: string;
  name: string;
  children?: RenderTree[];
  projectObj?: IProject;
}

interface ProjectTreeProps {
  handleChangeProject: (project: IProject) => void;
  projectViewRef: React.RefObject<HTMLElement>;
}

const RecursiveTreeView: React.FC<ProjectTreeProps> = (props) => {
  const { handleChangeProject, projectViewRef } = props;

  // spread list found in myProjects.tsx
  const spreadChildren = (projects: Array<IProject>) => {
    return projects.map((project, i) => {
      return {
        id: `${project}-${i}`,
        name: project.title.toString(),
        projectObj: project,
      };
    });
  };

  const data: RenderTree = {
    id: "root",
    name: "Projects",
    children: [
      {
        id: "1",
        name: "Personal",
        children: spreadChildren(PERSONAL_PROJECTS),
      },
      {
        id: "2",
        name: "Client",
        children: spreadChildren(CLIENT_PROJECTS),
      },
    ],
  };

  // set clicked project to current project in ProjectView.tsx
  const handleNodeClick = (e: React.MouseEvent, projectObj: IProject) => {
    e.preventDefault();
    console.log("Setting current project to", projectObj.title);
    handleChangeProject(projectObj);
  };

  const renderTree = (nodes: RenderTree) => (
    <TreeItem
      // only add onClick listener to outermost branch
      onClick={
        nodes.children
          ? undefined
          : (e) => handleNodeClick(e, nodes.projectObj!)
      }
      key={nodes.id}
      nodeId={nodes.id}
      label={nodes.name}
      className="ProjectTree__tree-item"
    >
      {nodes.children ? nodes.children.map((node) => renderTree(node)) : null}
    </TreeItem>
  );

  return (
    <TreeView
      // scroll to ProjectView.tsx
      onClick={() => scrollToRef(projectViewRef)}
      disableSelection={true}
      className="ProjectTree__tree-container"
      defaultCollapseIcon={<ExpandMore />}
      defaultExpandIcon={<ChevronRight />}
    >
      {renderTree(data)}
    </TreeView>
  );
};

export default RecursiveTreeView;

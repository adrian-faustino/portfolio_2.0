import React from "react";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
/* Constants */
import { IProject } from "../../constants/types";
import { PERSONAL_PROJECTS, CLIENT_PROJECTS } from "../../db/myProjects";

interface RenderTree {
  id: string;
  name: string;
  children?: RenderTree[];
  projectObj?: IProject;
}

interface ProjectTreeProps {
  handleChangeProject: (project: IProject) => void;
}

const RecursiveTreeView: React.FC<ProjectTreeProps> = (props) => {
  const { handleChangeProject } = props;

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
    >
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {renderTree(data)}
    </TreeView>
  );
};

export default RecursiveTreeView;

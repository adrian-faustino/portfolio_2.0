import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
/* Constants */
import { IProject } from "../../constants/types";

interface RenderTree {
  id: string;
  name: string;
  children?: RenderTree[];
}

const useStyles = makeStyles({
  root: {
    height: 110,
    flexGrow: 1,
    maxWidth: 400,
  },
});

interface ProjectTreeProps {
  categories: Array<Array<IProject>>;
  setCurrentProject: any;
}

const RecursiveTreeView: React.FC<ProjectTreeProps> = (props) => {
  const { categories, setCurrentProject } = props;
  const classes = useStyles();

  // spread list found in myProjects.tsx
  const spreadChildren = (projects: Array<IProject>) => {
    return projects.map((project, i) => {
      return {
        id: `${project}-${i}`,
        name: project.title.toString(),
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
        // spreading PERSONAL_PROJECTS arr from myProjects.tsx
        children: spreadChildren(categories[0]),
      },
      {
        id: "2",
        name: "Client",
        // spreading CLIENT_PROJECTS arr myProjects.tsx
        children: spreadChildren(categories[1]),
      },
    ],
  };

  // set clicked project to current project in ProjectView.tsx
  const handleNodeClick = (e: React.MouseEvent) => {
    const clickedProjectTitle = e.currentTarget.lastElementChild?.innerHTML;
    console.log("Setting current project:", clickedProjectTitle);
    setCurrentProject(clickedProjectTitle);
  };

  const renderTree = (nodes: RenderTree) => (
    <TreeItem
      // only add on click to outermost branch
      onClick={nodes.children ? undefined : handleNodeClick}
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
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {renderTree(data)}
    </TreeView>
  );
};

export default RecursiveTreeView;

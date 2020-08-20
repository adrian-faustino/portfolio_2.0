export interface IProject {
  title: String;
  description: String;
  vid_url: String;
  tech_stack: Array<String>;
  site_url: String;
}

// todo: add img paths
export interface ISkill {
  title: String;
  img_path?: String;
}

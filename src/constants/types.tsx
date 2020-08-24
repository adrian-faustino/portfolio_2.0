export interface IProject {
  title: String;
  description: String;
  vid_url: String;
  tech_stack: Array<ISkill>;
  site_url: String;
  github_url?: String;
}

// todo: add img paths
export interface ISkill {
  title: String;
  img_path: String;
  logo_color: String;
}

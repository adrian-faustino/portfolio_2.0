/* Constants */
import {
  REACT,
  JAVASCRIPT,
  HTML,
  CSS,
  BOOTSTRAP,
  NODE_JS,
  MONGO_DB,
  EXPRESS,
  SOCKET_IO,
  HTML5_CANVAS,
  MERN_STACK,
  WORDPRESS,
  SQUARESPACE,
  REDUX,
} from "../db/mySkills";

// return a technology's main logo color
const getTechColor = (tech: String) => {
  switch (tech) {
    case REACT:
      return "#7CE0FE";
    case JAVASCRIPT:
      return "#F7DF1C";
    case HTML:
      return "#E44D26";
    case CSS:
      return "#274DE4";
    case BOOTSTRAP:
      return "#F7DF1C";
    case JAVASCRIPT:
      return "#F7DF1C";
    case JAVASCRIPT:
      return "#F7DF1C";
    case JAVASCRIPT:
      return "#F7DF1C";
    case JAVASCRIPT:
      return "#F7DF1C";
    case JAVASCRIPT:
      return "#F7DF1C";
    case JAVASCRIPT:
      return "#F7DF1C";
    case JAVASCRIPT:
      return "#F7DF1C";
    case JAVASCRIPT:
      return "#F7DF1C";
    case JAVASCRIPT:
      return "#F7DF1C";
    case JAVASCRIPT:
      return "#F7DF1C";
  }
};

export default getTechColor;

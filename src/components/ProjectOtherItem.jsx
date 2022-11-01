import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import { Button } from "@mui/material";
import "./Components.css";

function ProjectOtherItem() {
  return (
    <div className="projectOtherItem--container">
      <div className="projectOtherItem">
        <div className="projectOther__top">
          <FolderOpenIcon className="projectOther__top--icon" />
          <div className="projectOther__button--container">
            <a className="projectOther__button--link" href="" target={"_blank"}>
              <GitHubIcon className="projectOther__button--icon" />
            </a>
            <a className="projectOther__button--link" href="" target={"_blank"}>
              <LinkIcon className="projectOther__button--icon" />
            </a>
          </div>
        </div>
        <h3 className="projectOther__title">Marian Title</h3>
        <p className="projectOther__para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          debitis harum odio ex ducimus voluptatum sequi veniam possimus.
        </p>
        <ul className="projectOther__techs">
          <li className="projectOther__tech--item">tech1</li>
          <li className="projectOther__tech--item">tech2</li>
          <li className="projectOther__tech--item">tech3</li>
          <li className="projectOther__tech--item">tech4</li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectOtherItem;

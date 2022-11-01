import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function ProjectItem({ title, para, techs, gLink, sLink, key }) {
  const [techsArr, setTechsArr] = useState([]);
  const tempId = uuidv4();
  console.log(tempId);

  useEffect(() => {
    setTechsArr(techs);
  });
  return (
    <div className="projectItem projectItemReverse">
      <img
        src="https://media.discordapp.net/attachments/857281682242273361/1036688085318115448/treact.png?width=1234&height=701"
        className="pi__image"
      />
      <div className="project__text--container">
        <h3 className="project__version">Featured Project</h3>
        <h1 className="project__title">{title}</h1>
        <p className="project__para">{para}</p>

        <ul className="project__techs">
          {techsArr.map((el) => (
            <li className="project__tech--item" key={tempId}>
              {el}
            </li>
          ))}
        </ul>
        <div className="project__button--container">
          <a href={gLink}>
            <Button className="project__button" variant="outlined">
              <GitHubIcon className="project__button--icon" />
            </Button>
          </a>
          <a href={sLink}>
            <Button className="project__button" variant="outlined">
              <LinkIcon className="project__button--icon" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;

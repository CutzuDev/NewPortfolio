import "./Components.css";
import GitHubIcon from "@mui/icons-material/GitHub";

function Sides() {
  return (
    <div className="sides">
      <div className="side__left side__half">
        <ul className="side__list">
          <li className="side__item">
            <a href="/">
              <GitHubIcon className="side__icon" fontSize="medium" />
            </a>
          </li>
        </ul>
      </div>
      <div className="side__right side__half"></div>
    </div>
  );
}

export default Sides;

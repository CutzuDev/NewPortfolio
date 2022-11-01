import "./Components.css";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <section id="projects">
      <ProjectItem
        title={"Marian"}
        para={"Lorem lorem lorem lorem"}
        techs={["Marian", "Alex"]}
      />
    </section>
  );
}

export default Projects;

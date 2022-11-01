import "./Components.css";
import ProjectFeaturedItem from "./ProjectFeaturedItem";
import ProjectOtherItem from "./ProjectOtherItem";

function Projects() {
  return (
    <section id="projects">
      <div className="projects__features">
        <ProjectFeaturedItem
          orientation={"projectItemReverse"}
          title={"Marian"}
          para={"Lorem lorem lorem lorem"}
          techs={["Marian", "Alex"]}
          gLink={"https://youtube.com"}
          sLink={"https://youtube.com"}
        />
        <ProjectFeaturedItem
          title={"Proiect 2"}
          para={"Lorem lorem lorem lorem"}
          techs={["Marian", "Alex"]}
        />
      </div>
      <div className="projects__others">
        <ProjectOtherItem />
        <ProjectOtherItem />
        <ProjectOtherItem />
        <ProjectOtherItem />
        <ProjectOtherItem />
        <ProjectOtherItem />
        <ProjectOtherItem />
        <ProjectOtherItem />
        <ProjectOtherItem />
      </div>
    </section>
  );
}

export default Projects;

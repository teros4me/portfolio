import Project from "./Project";
import Image from "next/image";
import lingan from "../public/lingan.png";
import projekt_trad from "../public/projekt_trad.png";
import projekt_barr from "../public/projekt_barr.png";
import gotland from "../public/gotland.jpg";

const PortfolioList = () => {
  const projects = [
    {
      id: 5,
      name: "Infart Hudiksvall 1956",
      desc: "Karta över infartsvägar från Bergsjövägen till Hudiksvall 1956.",
      pic: <Image src={infart} height={300} alt={"Miniatyrbild av karta"} />,
      codelink: "",
      weblink: "",
      zoomlink: <a href="https://teros4me.github.io/kartor/infart.png" target="_blank">Förstoring</a>
    },
    {
      id: 4,
      name: "Gotlands socknar och orter",
      desc: "Webbkarta gjord med QGIS, qgis2web och Leaflet.",
      pic: <Image src={gotland} height={300} alt={"Miniatyrbild av webbkarta"} />,
      codelink: "",
      weblink: <a href="https://teros4me.github.io/gotland" target="_blank">Webb</a>,
      zoomlink: ""
    },
    {
      id: 3,
      name: "Lingån i Frisbo, Bjuråker, Hälsingland",
      desc: "Karta över Lingåns sträckning, en jämförelse mellan år 1856 och 2020.",
      pic: <Image src={lingan} height={300} alt={"Miniatyrbild av karta"} />,
      codelink: "",
      weblink: "",
      zoomlink: <a href="https://teros4me.github.io/kartor/lingan.png" target="_blank">Förstoring</a>
    },
    {
      id: 2,
      name: "Trädslagsfördelning i Sverige",
      desc: "Sverigekarta med pajdiagram över vilka trädslag som dominerar i Götaland, Svealand, Södra Norrland och Norra Norrland.",
      pic: <Image src={projekt_trad} height={300} alt={"Miniatyrbild av karta"} />,
      codelink: "",
      weblink: "",
      zoomlink: <a href="https://teros4me.github.io/kartor/projekt_trad.png" target="_blank">Förstoring</a>
    },
    {
      id: 1,
      name: "Barrträd i Sverige",
      desc: "Sverigekarta som visar procentandel barrträd i Sveriges län.",
      pic: <Image src={projekt_barr} height={300} alt={"Miniatyrbild av karta"} />,
      codelink: "",
      weblink: "",
      zoomlink: <a href="https://teros4me.github.io/kartor/projekt_barr.png" target="_blank">Förstoring</a>
    }
  ]
  const projectList = projects.map(project => 
  <Project key={project.id} project={project}/>
  )
  return(
    <div className="flex flex-col py-10 lg:flex-row lg:flex-wrap">
      <div className="grid lg:grid-cols-3 gap-8">
        {projectList}
      </div>
    </div>
  )
}

export default PortfolioList;

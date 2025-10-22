import Progress from "./Progress";

const About = () => {
  const progressbars = [
    {
      skill: "Origo",
      value: "100"
    },
    {
      skill: "FME",
      value: "67"
    },
    {
      skill: "QGIS",
      value: "67"
    },
    {
      skill: "Geoserver",
      value: "67"
    },
    {
      skill: "Webbkartor",
      value: "67"
    },
    {
      skill: "Mapbox",
      value: "67"
    },
    {
      skill: "ArcMap",
      value: "33"
    },
    {
      skill: "ArcGIS Pro",
      value: "33"
    },
    {
      skill: "ArcGIS Online",
      value: "33"
    },
    {
      skill: "OpenLayers",
      value: "33"
    },
    {
      skill: "MapInfo",
      value: "33"
    },
    {
      skill: "Fotogrammetri",
      value: "33"
    },
    {
      skill: "Ortofoton",
      value: "33"
    },
    {
      skill: "Drönare",
      value: "33"
    },
    {
      skill: "HTML",
      value: "67"
    },
    {
      skill: "CSS",
      value: "67"
    },
    {
      skill: "JavaScript",
      value: "67"
    },
    {
      skill: "React/Next.js",
      value: "33"
    },
    {
      skill: "API",
      value: "33"
    },
    {
      skill: "JSON",
      value: "67"
    },
    {
      skill: "Databaser",
      value: "67"
    },
    {
      skill: "SQL",
      value: "33"
    },
    {
      skill: "Agila metoder",
      value: "33"
    }
  ]
  const progressList = progressbars.map(progress =>
    <Progress key={progress.skill} progress={progress}/>
  )

  return(
    <div className="flex flex-col py-10 lg:flex-row lg:flex-wrap">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="shadow-lg p-5 rounded-xl bg-white dark:bg-black w-full lg:max-w-xl justify-center mx-auto">
          <h4 className='text-xl pt-8'>Datorkunskaper</h4>
          <div className="grid grid-cols-[auto,1fr] items-center gap-x-4 gap-y-2 w-full mt-4">
          {progressbars.map(p => (
          <>
            <span className="whitespace-nowrap">{p.skill}</span>
            <Progress value={p.value} />
          </>
        ))}
          </div>
        </div>
        <div className="shadow-lg p-5 rounded-xl bg-white dark:bg-black max-w-lg justify-center mx-auto">
          <h4 className="text-xl font-medium pt-8 pb-2">Elijas Andersson</h4>
            <ul>
              <li>Bor i norra Hälsingland</li>
              <li>E-post: <a href="mailto:elijas.andersson@protonmail.com">elijas.andersson@protonmail.com</a></li>
              <li>Github: <a href='https://github.com/teros4me' target="_blank">https://github.com/teros4me</a></li>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/elijas-andersson/" target="_blank">https://www.linkedin.com/in/elijas-andersson</a></li>
            </ul>
            <p>&nbsp;</p>
            <h4 className='text-xl pt-8'>Utbildningar</h4>
            <p className="py-2 leading-8">
            Arbetsflöden i FME med fokus på GIS, YH-kurs, Folkuniversitetet, sep 2025 - jan 2026
            </p>
            <p className="py-2 leading-8">
            Markmodellering och kartering med drönare, YH-kurs, Kartotek, Kista, mar 2024 - jun 2024
            </p>
            <p className="py-2 leading-8">
            Systemutvecklare .NET med AI-kompetens, YH-utbildning, Edugrade, Hudiksvall, sep 2021 - apr 2023
            </p>
            <p className="py-2 leading-8">
            Mobila System och GIT, YH-utbildning, distans, Ocellus Information Systems, Uppsala, sep 2019 – jun 2021
            </p>
        </div>
      </div>
    </div>
  )
}

export default About;

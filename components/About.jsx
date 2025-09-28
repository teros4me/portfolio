const About = () => {

  return(
    <div className="flex flex-col py-10 lg:flex-row lg:flex-wrap">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="shadow-lg p-5 rounded-xl bg-white dark:bg-black max-w-sm justify-center mx-auto">
          <h4 className='text-xl pt-8'>Datorkunskaper</h4>
            <p className="py-2 leading-8">
              <span className='dark:text-green-200 text-mygreen-55 font-semibold'>Arbetat med: </span>
                Origo, CSS, HTML, JSON, Javascript, Geoserver, QGIS, FME
            </p>
            <p className="py-2 leading-8">
              <span className='dark:text-green-200 text-mygreen-55 font-semibold'>Arbetat med på praktik: </span>
                Azure, ASP.NET, React, Typescript, Agila metoder, Solen Pro / Admin, ArcGIS Online, MapInfo
            </p>
            <p className="py-2 leading-8">
              <span className='dark:text-green-200 text-mygreen-55 font-semibold'>Skapat projekt med: </span>
                API, Next.js, Designmönster, Databaser, Objektorienterad programmering, C#, Mapbox,
                SQL, Java, XML, Android Studio, Multispec, ArcMap, QField
            </p>
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

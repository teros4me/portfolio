const About = () => {

  return(
    <div className="flex flex-col py-10 lg:flex-row lg:flex-wrap">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="shadow-lg p-5 rounded-xl bg-white dark:bg-black max-w-sm justify-center mx-auto">
          <h4 className='text-xl pt-8'>Datorkunskaper</h4>
            <p className="py-2 leading-8">
              <span className='dark:text-green-200 text-mygreen-55 font-semibold'>Arbetat med på praktik: </span>
                Azure, ASP.NET, React, Typescript, 
                CSS, HTML, Agila metoder, 
                QGIS, Solen Pro / Admin, ArcGIS Online, MapInfo
            </p>
            <p className="py-2 leading-8">
              <span className='dark:text-green-200 text-mygreen-55 font-semibold'>Skapat projekt med: </span>
                API, Next.js, JSON, Javascript, Designmönster, 
                Databaser, Objektorienterad programmering, C#
            </p>
            <p className="py-2 leading-8">
              <span className='dark:text-green-200 text-mygreen-55 font-semibold'>Gjort övningar med: </span>
                SQL, Java, XML, Android Studio, Multispec, 
                Geoserver, Mapbox, ArcMap
            </p>
            <p className="py-2 leading-8">
              <span className='dark:text-green-200 text-mygreen-55 font-semibold'>Använt på fritiden: </span>
                QField
            </p>
        </div>
        <div className="shadow-lg p-5 rounded-xl bg-white dark:bg-black max-w-lg justify-center mx-auto">
          <h4 className="text-xl font-medium pt-8 pb-2">Elijas Andersson</h4>
            <ul>
              <li>Bor i Hudiksvalls kommun, Gävleborgs län, norra Hälsingland</li>
              <li>E-post: <a href="mailto:elijas.andersson@protonmail.com">elijas.andersson@protonmail.com</a></li>
              <li>Github: <a href='https://github.com/teros4me' target="_blank">https://github.com/teros4me</a></li>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/elijas-andersson/" target="_blank">https://www.linkedin.com/in/elijas-andersson</a></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About;

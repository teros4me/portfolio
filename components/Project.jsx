import { TfiNewWindow } from "react-icons/tfi";

const Project = ({project}) => {
  
  return(
      <div className="shadow-lg p-5 rounded-xl bg-white dark:bg-black max-w-sm justify-center mx-auto">
        <h4 className="text-center text-lg font-medium pt-2 pb-8">{project.name}</h4>
          <div className="pb-5">{project.pic}</div>
          <p>{project.desc}</p>
        <div className="flex justify-center pt-5">
          {project.codelink !== "" ? <button className="bg-green-100 dark:bg-mygreen-22 px-5 py-2 m-5 gap-3 rounded flex">{project.codelink}<TfiNewWindow /></button> : ""}
          {project.weblink !== "" ? <button className="bg-green-100 dark:bg-mygreen-22 px-5 py-2 m-5 gap-3 rounded flex">{project.weblink}<TfiNewWindow /></button> : ""}
          {project.zoomlink !== "" ? <button className="bg-green-100 dark:bg-mygreen-22 px-5 py-2 m-5 gap-3 rounded flex">{project.zoomlink}<TfiNewWindow /></button> : ""}
        </div>
      </div>
  )
}

export default Project;

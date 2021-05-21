import React from "react"
import ProjectTableTitles from "../components/ProjectTableTitles"
import projectsData from "../data/projectData"
import Project from "../components/Project"

import Layout from "../components/Layout"

const Projects = () => {
  return (
    <Layout>
      <div className="flex col">
        <h2>Vendors</h2>
        <ProjectTableTitles />
        {projectsData.map(s => (
          <Project
            key={s.id}
            vendor={s.vendor}
            project={s.project}
            numOfContracts={s.numOfContracts}
            totalValue={s.totalValue}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Projects

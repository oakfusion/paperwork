import React from "react"
import ProjectTableTitles from "../components/ProjectTableTitles"
import projectsData from "../data/projectData"
import Project from "../components/Project"

import Layout from "../components/Layout"
import { useQuery } from "react-query"
import { getProjectsIndex } from "../api/projects"

const Projects = () => {
  const { data: projects, isFetching } = useQuery("projects", getProjectsIndex)

  if (isFetching) {
    return <span>Loading...</span>
  }

  return (
    <Layout>
      <div className="flex col">
        <h2>Projects</h2>
        <ProjectTableTitles />
        {projects.map(project => (
          <Project
            key={project.uuid}
            vendor={project.vendor.name}
            project={project.name}
            numOfContracts="0"
            totalValue="0"
          />
        ))}
      </div>
    </Layout>
  )
}

export default Projects

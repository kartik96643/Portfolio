// import { projects } from "@/data/projects";
"use client";

import { useEffect, useState } from "react";

export default function Projects() {

  const [data, setData] = useState([])

  const getProject = async() => {
    try {
      const res = await fetch('/api/project',{
        method:"GET"
      })
      const ress = await res.json()
      if(ress.success){
        setData(ress.projects)
      }
    } catch (error) {
      console.log(error, "Error")
    }
  }

  useEffect(() => {
    getProject()
  },[])
  return (
    <section
      id="projects"
      className="py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center">

          <p className="text-gray-500 font-medium">
            Browse My Recent
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Projects
          </h2>

        </div>

        {/* Projects Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {(data && data.length > 0) ? data.map((project, index) => (
            <div
              key={project._id}
              className=" border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition"
            >

              {/* Project Image */}
              <div className="h-56 bg-gray-200 flex items-center justify-center text-gray-500">
                Project Image
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mt-6">

                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-black text-white text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-8">

                  <button className="border border-black px-5 py-2 rounded-lg hover:bg-black hover:text-white transition">
                    <a href={project.repo} target="_blank">Github</a>
                  </button>

                  <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
                    <a href={project.link} target="_blank">Live Demo</a>
                  </button>

                </div>

              </div>

            </div>
          )) : <>
          <h2>No Projects Added </h2>
          </>}

        </div>

      </div>
    </section>
  );
}
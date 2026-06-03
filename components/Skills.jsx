"use client";

import { useEffect, useState } from "react";

export default function Skills() {
  
  const [data, setData] = useState([]);

  const getSkills = async() => {
    const res = await fetch('/api/skill', {
      method:"GET",
    })
    const ress = await res.json()
    console.log(ress)
    setData(ress.skills)
  }
  useEffect(() => {
    getSkills()
  },[])
  return (
    <section
      id="skills"
      className="py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center">

          <p className="text-gray-500 font-medium">
            Explore My
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Skills
          </h2>

        </div>

        {/* Skills Container */}
        <div className="mt-16 grid md:grid-cols-2 gap-10">

          {/* Frontend Skills */}
          {data.map((d) => {
            return  <div key={d._id} className="border border-gray-200 rounded-2xl p-8">

            <h3 className="text-2xl font-semibold text-center mb-8">
              {d.end.charAt(0).toUpperCase() + d.end.slice(1)} Development
            </h3>

            <div className="grid grid-cols-2 gap-6">

              {d.skill.map((skill) => (
                <div
                  key={skill}
                  className="border border-gray-100 rounded-xl p-4 text-center hover:shadow-md transition"
                >
                  <p className="font-medium">
                    {skill}
                  </p>
                </div>
              ))}

            </div>

          </div>
          })}
         

          {/* Backend Skills */}
          {/* <div className="border border-gray-200 rounded-2xl p-8"> */}

            {/* <h3 className="text-2xl font-semibold text-center mb-8">
              Backend Development
            </h3> */}

            {/* <div className="grid grid-cols-2 gap-6"> */}

              {/* {backendSkills.map((skill, index) => (
                <div
                  key={index}
                  className="border border-gray-100 rounded-xl p-4 text-center hover:shadow-md transition"
                >
                  <p className="font-medium">
                    {skill}
                  </p>
                </div>
              ))} */}

            {/* </div> */}

          {/* </div> */}

        </div>

      </div>
    </section>
  );
}
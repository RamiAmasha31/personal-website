import React from "react";
import { FaGraduationCap, FaChalkboardTeacher } from "react-icons/fa"; // Importing icons from react-icons

const Experience = () => {
  return (
    <div id="experience" className="py-20 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Experience</h2>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Tutor */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-start w-[350px]">
            <FaChalkboardTeacher className="text-9xl text-blue-500 mr-4" />
            <div>
              <h3 className="font-semibold text-lg">
                Tutor at Golan Heights (2020 - 2024)
              </h3>
              <p className="mt-2">
                {" "}
                I specialize in tutoring high school students in mathematics
                (algebra, calculus, geometry) and software engineering (Python,
                Java), combining theory with practical skills to prepare them
                for academic excellence and STEM careers.
              </p>
            </div>
          </div>

          {/* B.Sc. Applied Mathematics */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-start w-[350px]">
            <FaGraduationCap className="text-7xl text-green-500 mr-4" />
            <div>
              <h3 className="font-semibold text-lg">
                Academic Mentor at Braude College (2020 - 2022)
              </h3>
              <p className="mt-2">
                {" "}
                I provide academic mentoring to freshmen, assisting them in
                navigating their courses and achieving academic success.
              </p>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Experience;

import React from "react";
import { FaBook, FaUniversity } from "react-icons/fa"; // Importing icons from react-icons

const Education = () => {
  return (
    <div id="education" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Education</h2>

        <div className="flex flex-wrap justify-center gap-8">
          {/* B.Sc. Software Engineering */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-start w-[350px]">
            <FaUniversity className="text-3xl text-blue-500 mr-4" />
            <div>
              <h3 className="font-semibold text-lg">
                B.Sc. Software Engineering - Braude Academic College (2020 -
                2024)
              </h3>
              <p className="mt-2">Grade: 80.</p>
            </div>
          </div>

          {/* B.Sc. Applied Mathematics */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-start w-[350px]">
            <FaBook className="text-3xl text-green-500 mr-4" />
            <div>
              <h3 className="font-semibold text-lg">
                B.Sc. Applied Mathematics - Braude Academic College (2020 -
                2024)
              </h3>
              <p className="mt-2">Grade: 80.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

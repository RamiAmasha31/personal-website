import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen">
      {/* Right side for the text */}
      <div className="flex-none w-full md:w-1/3 max-w-md bg-white bg-opacity-75 p-8 rounded  mx-4 mb-4 md:mb-0">
        <h1 className="text-3xl font-bold">Welcome!</h1>
        <p className="mt-4 text-lg">
          I'm Rami Amasha, a Software Engineer and Applied Mathematician.
        </p>
      </div>

      {/* Left side for the image */}
      <div
        className="flex-none w-full md:w-2/5 h-64 md:h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/image.jpg')`, // Adjust this path as necessary
          backgroundSize: "cover", // Scale image to cover the left side
          backgroundRepeat: "no-repeat", // Prevent image from repeating
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default Home;

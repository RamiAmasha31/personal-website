import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      {/* Left side for the image */}
      <div
        className="flex-none w-2/5 h-full bg-cover bg-center" // Adjusted width from w-1/2 to w-2/5
        style={{
          backgroundImage: `url('/image.jpg')`, // Adjust this path as necessary
          backgroundSize: "cover", // Scale image to cover the left side
          backgroundRepeat: "no-repeat", // Prevent image from repeating
          backgroundPosition: "center", // Center the image
        }}
      ></div>

      {/* Right side for the text */}
      <div className="flex-1 bg-white bg-opacity-75 p-8 rounded shadow-lg">
        <h1 className="text-3xl font-bold">Welcome to My Personal Website!</h1>
        <p className="mt-4 text-lg">
          I'm Rami Amasha, a Software Engineer and Applied Mathematician.
        </p>
      </div>
    </div>
  );
};

export default Home;

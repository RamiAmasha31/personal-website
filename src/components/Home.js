import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      {/* Left side for the image */}
      <div
        className="flex-none w-2/5 h-full bg-cover bg-center" // Image width remains unchanged
        style={{
          backgroundImage: `url('/image.jpg')`, // Adjust this path as necessary
          backgroundSize: "cover", // Scale image to cover the left side
          backgroundRepeat: "no-repeat", // Prevent image from repeating
          backgroundPosition: "center",
        }}
      ></div>

      {/* Right side for the text */}
      <div className="flex-none w-1/3 max-w-md bg-white bg-opacity-75 p-8 rounded shadow-lg mx-4">
        {" "}
        {/* Changed width here */}
        <h1 className="text-3xl font-bold">Welcome!</h1>
        <p className="mt-4 text-lg">
          I'm Rami Amasha, a Software Engineer and Applied Mathematician.
        </p>
      </div>
    </div>
  );
};

export default Home;

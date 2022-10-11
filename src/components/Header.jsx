import React from "react";

const Header = () => {
  return (
    <div className="grid md:grid-cols-2 py-12 gap-5 items-center ">
      <div className="text-center md:text-left mb-6 md:mb-0 ">
        <h1 className="text-5xl text-white font-bold">Text your Skill</h1>
        <p className="text-2xl text-white mt-5">
          Quiz will help you to develop skill faster
        </p>
      </div>
      <div className="mx-auto">
        <img src="/hero-svg.svg" alt="" />
      </div>
    </div>
  );
};

export default Header;

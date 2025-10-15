import React from "react";

const Header = () => {
  return (
    <div className="absolute py-2 px-40 bg-gradient-to-b from-black flex justify-between w-full z-10">
      <img
        className=" w-44 "
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />

      <div className="my-4">
        <select className="bg-[rgb(0,0,0,.7)]  text-white mx-2 rounded px-4 py-1.5 border border-gray-500">
          <option className="text-black bg-white">English</option>
          <option className="text-black bg-white">Hindi</option>
        </select>
        <button className="mx-2 px-4 py-1.5 text-white font-bold rounded-md bg-[rgb(219,0,0)]  hover:bg-red-700 ">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Header;

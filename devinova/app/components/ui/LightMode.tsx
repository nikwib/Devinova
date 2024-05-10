import React, { useState } from "react";
import { IoSunnySharp } from "react-icons/io5";
import { MdNightlight } from "react-icons/md";

const LightMode = () => {
  const [lightMode, setLightMode] = useState(false);

  return (
    <div>
      {" "}
      {lightMode ? (
        <MdNightlight
          onClick={() => setLightMode(!lightMode)}
          className="text-violet-400 text-2xl cursor-pointer hover:text-neutralGrey"
        />
      ) : (
        <IoSunnySharp
          onClick={() => setLightMode(!lightMode)}
          className="text-violet-400 text-2xl cursor-pointer hover:text-neutralGrey"
        />
      )}
    </div>
  );
};

export default LightMode;

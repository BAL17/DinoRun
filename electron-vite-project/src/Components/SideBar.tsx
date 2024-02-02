import { useState } from "react";
import Person4Icon from "@mui/icons-material/Person4";
function SideBar() {
  const userName: string = "brandon stegall"; //testing for now
  // const arr = useState([]);

  return (
    <>
      <div className="flex flex-col w-2/6 justify-between">
        <div className=" h-[2rem] w-full border-2  border-green-400">
          {/* <img src={Person4Icon}></img> */}
          {userName}
        </div>
        <div className=" flex h-[14rem] w-full border-b-2  border-blue-400"></div>
        <div className=" flex h-[14rem] w-full border-b-2  border-yellow-400"></div>
        <div className=" flex h-[14rem] w-full border-b-2  border-orange-400"></div>
        <div className=" flex h-[14rem] w-full border-b-2  border-purple-400"></div>
      </div>
    </>
  );
}

export default SideBar;

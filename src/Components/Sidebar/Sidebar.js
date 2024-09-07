import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();
    let pathName = location.pathname.slice(1);
  return (
    <div className=" border min-h-[80vh] p-2 flex-1 " >
        <div className="h-full flex flex-col p-2 border-e ">
            <div className=" border-b  ">
                <div className="my-2 text-[#717171] " >

                   {pathName === "rocking_chairs" || pathName.length===0 ?
                    <Link to="/rocking_chairs" className=" bg-[black] text-[white] p-2 border rounded">Rocking chair</Link>:
                    <Link to="/rocking_chairs">Rocking chair</Link>
                    } 
                </div>
            </div>
            <div className=" border-b  ">
                <div className="my-2 text-[#717171] " >

                {pathName === "lounge_chairs" ?
                    <Link to="/lounge_chairs" className=" bg-[black] text-[white] p-2 border rounded">Lounge chair</Link>:
                    <Link to="/lounge_chairs">Lounge chair</Link>
                    } 
                </div>
            </div>
            <div className=" border-b  ">
                <div className="my-2 text-[#717171] " >

                {pathName === "side_chairs" ?
                    <Link to="/side_chairs" className=" bg-[black] text-[white] p-2 border rounded">Side chair</Link>:
                    <Link to="/side_chairs">Side chair</Link>
                    } 
                </div>
            </div>

        </div>
      
     


    </div>
  );
};

export default Sidebar;

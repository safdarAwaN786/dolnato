/* eslint-disable react/no-unknown-property */

import {
  FaCaretDown,
} from "react-icons/fa";
import { Dropdown } from "antd";
import { useNavigate } from "react-router-dom";

const items = [
  {
    key: "1",
    type: "group",
    label: "Group title",
    children: [
      {
        key: "1-1",
        label: "1st menu item",
      },
      {
        key: "1-2",
        label: "2nd menu item",
      },
    ],
  },
];

export default function AddTeam() {



  const navigate = useNavigate()
  return (
    <>
      <div className="lg:ms-[18%] lg:w-[82%] flex justify-center items-center  w-full min-h-[100vh]  p-10 bg-[#F4F6F8] ">
        <div className=" md:w-[70%] w-[400px] bg-white py-6 md:px-10 px-3 rounded-xl">
          <h1 className=" selectBOQHeading inline  text-3xl font-semibold">
            Add Team Member
          </h1>
          <div className=" w-full block my-5">
            <label className="text-lg font-medium w-full my-1 block">
              Name
            </label>
            <input
              placeholder="Enter Company Name"
              type="text"
              className="p-4 focus:outline-none w-full bg-[#F4F6F8] rounded-lg"
            />
          </div>

          <div className=" w-full block my-5">
            <label className="text-lg font-medium w-full my-1 block">
              Employee ID
            </label>
            <input
              placeholder="Enter Employee ID"
              type="text"
              className="p-4 focus:outline-none w-full bg-[#F4F6F8] rounded-lg"
            />
          </div>
          <div className=" w-full block my-5">
            <label className="text-lg font-medium w-full my-1 block">
              Role in Company
            </label>
            <Dropdown menu={{
                  items,
                }}
                trigger={["click"]}>
              <div className="p-4 cursor-pointer focus:outline-none w-full flex flex-row justify-between items-center text-[#A1A1A1] bg-[#F4F6F8] rounded-lg">
                Select Role
                <FaCaretDown className="text-[#306BFF] text-xl" />
              </div>
            </Dropdown>
          </div>
          <button onClick={()=> navigate('/dashboard')} className=" w-full text-lg font-semibold p-4 text-center text-white rounded-lg bg-gradient-to-r from-[#053BD3] to-[#03EAEA] mt-5">
            Add Team
          </button>
        </div>
      </div>

    

     

   
    </>
  );
}

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

export default function AddProject() {
  const navigate = useNavigate();

  return (
    <>
      <div className="lg:ms-[18%] lg:w-[82%] flex justify-center items-center  w-full min-h-[100vh]  sm:p-10 p-4 bg-[#F4F6F8] ">
        <div className=" sm:w-[700px] w-[450px] bg-white py-6 sm:px-10 p-4 rounded-xl">
          <h1 className=" selectBOQHeading inline  text-3xl font-semibold">
            Add Project
          </h1>
          <div className=" w-full block my-5">
            <label className="text-lg font-medium w-full my-1 block">
              Company Name
            </label>
            <input
              placeholder="Enter Company Name"
              type="text"
              className="p-4 focus:outline-none w-full bg-[#F4F6F8] rounded-lg"
            />
          </div>

          <div className=" w-full block my-5">
            <label className="text-lg font-medium w-full my-1 block">
              Client Name
            </label>
            <input
              placeholder="Enter Client Name"
              type="text"
              className="p-4 focus:outline-none w-full bg-[#F4F6F8] rounded-lg"
            />
          </div>
          <div className=" w-full block my-5">
            <label className="text-lg font-medium w-full my-1 block">
              Company Info
            </label>
            <input
              placeholder="Enter Company Info"
              type="text"
              className="p-4 focus:outline-none w-full bg-[#F4F6F8] rounded-lg"
            />
          </div>
          <div className=" w-full flex flex-row md:flex-nowrap flex-wrap gap-4 my-5">
            <div className=" md:w-[33%] w-full">
              <label className="text-lg font-medium w-full my-1 block">
                Email
              </label>
              <input
                placeholder="Enter Email"
                type="text"
                className="p-4 focus:outline-none w-full bg-[#F4F6F8] rounded-lg"
              />
            </div>
            <div className=" md:w-[33%] w-full">
              <label className="text-lg font-medium w-full my-1 block">
                Phone Number
              </label>
              <input
                placeholder="Enter Phone Number"
                type="text"
                className="p-4 focus:outline-none w-full bg-[#F4F6F8] rounded-lg"
              />
            </div>
            <div className=" md:w-[33%] w-full">
              <label className="text-lg font-medium w-full my-1 block">
                Date Added
              </label>
              <input
                placeholder="Enter Date"
                type="text"
                className="p-4 focus:outline-none w-full bg-[#F4F6F8] rounded-lg"
              />
            </div>
          </div>
          <div className=" w-full block my-5">
            <label className="text-lg font-medium w-full my-1 block">
              Select service
            </label>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <div className="p-4 cursor-pointer focus:outline-none w-full flex flex-row justify-between items-center text-[#A1A1A1] bg-[#F4F6F8] rounded-lg">
                Select
                <FaCaretDown className="text-[#306BFF] text-xl" />
              </div>
            </Dropdown>
          </div>
          <button
            onClick={() => navigate("/dashboard")}
            className=" w-full text-lg font-semibold p-4 text-center text-white rounded-lg bg-gradient-to-r from-[#053BD3] to-[#03EAEA] mt-5"
          >
            Add Project
          </button>
        </div>
      </div>

     
    </>
  );
}

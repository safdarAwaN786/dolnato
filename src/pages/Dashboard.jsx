/* eslint-disable react/no-unknown-property */

import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

import { FaSortDown } from "react-icons/fa";
import { Progress, Upload } from "antd";
import { GoArrowRight } from "react-icons/go";
import { Dropdown } from "antd";
import { PlusOutlined } from "@ant-design/icons";
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

export default function Dashboard() {
  const allowedExtensions = [".jpg", ".jpeg", ".png"];
  const [isFileAllowed, setFileAllowed] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [fileList2, setFileList2] = useState([]);
  const [fileList3, setFileList3] = useState([]);
  const handleChange = ({ fileList: newFileList }) => {
    if (isFileAllowed) {
      setFileList(newFileList);
    }
  };
  const handleChange2 = ({ fileList: newFileList }) => {
    if (isFileAllowed) {
      setFileList2(newFileList);
    }
  };
  const handleChange3 = ({ fileList: newFileList }) => {
    if (isFileAllowed) {
      setFileList3(newFileList);
    }
  };

  const beforeUpload = async (file) => {
    const isAllowed = allowedExtensions.some((ext) =>
      file.name.toLowerCase().endsWith(ext)
    );
    if (!isAllowed) {
      setFileAllowed(false);
      // toast.error('Image formats allowed are ".jpg, .jpeg, .png"')
      return false; // Prevents the file from being added to the fileList
    }

    setFileAllowed(true);
    return true; // Proceed with the upload
  };
  const navigate = useNavigate();
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <>
      <div className="lg:ms-[18%] lg:w-[82%] mt-14 w-full p-10 bg-[#F4F6F8] ">
        <div className="w-full flex flex-row gap-2 lg:flex-nowrap flex-wrap items-center justify-between">
          <h1 className=" text-3xl font-[600] mb-0 ">Project Information</h1>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <div className="lg:w-[30%] w-[300px] bg-[#fff] rounded-lg text-[#306BFF] p-3 cursor-pointer flex justify-between flex-row items-center">
              <p>Project Name</p>
              <FaSortDown />
            </div>
          </Dropdown>
        </div>
        <hr className="w-full my-3 border-[#d3d2d2]" />
        <div className="w-full flex flex-row lg:h-[100px] lg:flex-nowrap flex-wrap gap-3  items-center justify-between">
          <div className="lg:w-1/2 w-full flex flex-row lg:flex-nowrap gap-3 flex-wrap justify-between">
            <div className=" lg:w-[30%] w-[300px] ">
              <h3 className="font-medium">Initial PO</h3>
              <div className=" mt-2 bg-white rounded-lg p-1">
                <Upload
                  listType="picture-card"
                  beforeUpload={beforeUpload}
                  fileList={fileList}
                  onChange={handleChange}
                >
                  {fileList.length >= 1 ? null : uploadButton}
                </Upload>
              </div>
            </div>
            <div className=" lg:w-[30%] w-[300px] ">
              <h3 className="font-medium">Service PO</h3>
              <div className=" mt-2 bg-white rounded-lg p-1">
                <Upload
                  listType="picture-card"
                  beforeUpload={beforeUpload}
                  fileList={fileList2}
                  onChange={handleChange2}
                >
                  {fileList2.length >= 1 ? null : uploadButton}
                </Upload>
              </div>
            </div>
            <div className=" lg:w-[30%] w-[300px] ">
              <h3 className="font-medium">Conceptual Layout</h3>
              <div className=" mt-2 bg-white rounded-lg p-1">
                <Upload
                  listType="picture-card"
                  beforeUpload={beforeUpload}
                  fileList={fileList3}
                  onChange={handleChange3}
                >
                  {fileList3.length >= 1 ? null : uploadButton}
                </Upload>
              </div>
            </div>
          </div>
          <div className=" lg:w-1/2 w-full flex flex-row lg:justify-end justify-start lg:flex-nowrap flex-wrap items-end h-full gap-3">
            <button className=" items-center p-3 h-[50px] bg-gradient-to-r rounded-lg text-white flex flex-row gap-3 from-[#053BD3] to-[#03EAEA]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 4.5H3C2.80109 4.5 2.61032 4.57902 2.46967 4.71967C2.32902 4.86032 2.25 5.05109 2.25 5.25V18C2.25 18.3978 2.40804 18.7794 2.68934 19.0607C2.97064 19.342 3.35218 19.5 3.75 19.5H20.25C20.6478 19.5 21.0294 19.342 21.3107 19.0607C21.592 18.7794 21.75 18.3978 21.75 18V5.25C21.75 5.05109 21.671 4.86032 21.5303 4.71967C21.3897 4.57902 21.1989 4.5 21 4.5ZM3.75 10.5H7.5V13.5H3.75V10.5ZM9 10.5H20.25V13.5H9V10.5ZM20.25 6V9H3.75V6H20.25ZM3.75 15H7.5V18H3.75V15ZM20.25 18H9V15H20.25V18Z"
                  fill="white"
                />
              </svg>
              <span className=" text-sm">View BOQ Summary</span>
            </button>
            <button className="  p-3 h-[50px] items-center bg-gradient-to-r rounded-lg text-white flex flex-row gap-3 from-[#053BD3] to-[#03EAEA]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 4.5H3C2.80109 4.5 2.61032 4.57902 2.46967 4.71967C2.32902 4.86032 2.25 5.05109 2.25 5.25V18C2.25 18.3978 2.40804 18.7794 2.68934 19.0607C2.97064 19.342 3.35218 19.5 3.75 19.5H20.25C20.6478 19.5 21.0294 19.342 21.3107 19.0607C21.592 18.7794 21.75 18.3978 21.75 18V5.25C21.75 5.05109 21.671 4.86032 21.5303 4.71967C21.3897 4.57902 21.1989 4.5 21 4.5ZM3.75 10.5H7.5V13.5H3.75V10.5ZM9 10.5H20.25V13.5H9V10.5ZM20.25 6V9H3.75V6H20.25ZM3.75 15H7.5V18H3.75V15ZM20.25 18H9V15H20.25V18Z"
                  fill="white"
                />
              </svg>
              <span className=" text-sm">View Job Card</span>
            </button>
          </div>
        </div>
        <div className="w-full my-8 flex gap-2 flex-col py-3 px-5 bg-white rounded-lg">
          <h1 className=" text-lg font-[600]">Client Info</h1>
          <hr />
          <p className="w-full text-[#4e4e4e]">
            Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>
        </div>
        <div className="w-full flex flex-row gap-5  lg:flex-nowrap flex-wrap items-start justify-between">
          <div className=" bg-white rounded-lg p-3 lg:w-[60%] w-full h-full flex flex-col gap-2">
            <h1 className=" text-[#05004E] my-2 text-lg font-[600]">
              Products Update
            </h1>
            <div className="w-full p-2 overflow-x-scroll">
              <table className="w-[600px]  text-left  ">
                <thead className="text-sm  text-[#96A5B8] ">
                  <tr className=" border-b border-[#EDF2F6] ">
                    <th scope="col" className=" font-normal px-3 ">
                      #
                    </th>
                    <th scope="col" className="px-3 font-normal py-3">
                      Name
                    </th>
                    <th scope="col" className="px-3 font-normal py-3">
                      Status
                    </th>
                    <th scope="col" className=" font-normal px-3 py-3">
                      Percentage
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#EDF2F6]">
                    <th scope="row" className="px-3 font-normal py-3">
                      01
                    </th>
                    <td className="px-3 py-4">Cleanroom panel & Accessories</td>
                    <td className="px-3 py-4 w-[200px]">
                      <Progress
                        percent={45}
                        showInfo={false}
                        strokeColor={"#0095FF"}
                        trailColor="#CDE7FF"
                        size={{
                          height: 5,
                        }}
                      />
                    </td>
                    <td className="px-3 py-4">
                      <div className=" mx-auto w-[50px] text-[#0095FF] flex justify-center items-center rounded-lg bg-[#F0F9FF] border border-[#0095FF]">
                        45%
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-[#EDF2F6]">
                    <th scope="row" className="px-3 font-normal py-3">
                      02
                    </th>
                    <td className="px-3 py-4">Cleanroom Doors</td>
                    <td className="px-3 py-4 w-[200px]">
                      <Progress
                        percent={45}
                        showInfo={false}
                        strokeColor="#00E096"
                        trailColor="#8CFAC7"
                        size={{
                          height: 5,
                        }}
                      />
                    </td>
                    <td className="px-3 py-4">
                      <div className=" mx-auto w-[50px] text-[#00E58F] flex justify-center items-center rounded-lg bg-[#F0FDF4] border border-[#00E58F]">
                        45%
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-[#EDF2F6]">
                    <th scope="row" className="px-3 font-normal py-3">
                      03
                    </th>
                    <td className="px-3 py-4">Lab Furniture</td>
                    <td className="px-3 py-4 w-[200px]">
                      <Progress
                        percent={45}
                        showInfo={false}
                        strokeColor="#884DFF"
                        trailColor="#C5A8FF"
                        size={{
                          height: 5,
                        }}
                      />
                    </td>
                    <td className="px-3 py-4">
                      <div className=" mx-auto w-[50px] text-[#884DFF] flex justify-center items-center rounded-lg bg-[#FBF1FF] border border-[#884DFF]">
                        45%
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-[#EDF2F6]">
                    <th scope="row" className="px-3 font-normal py-3">
                      04
                    </th>
                    <td className="px-3 py-4">SS Furniture</td>
                    <td className="px-3 py-4 w-[200px]">
                      <Progress
                        percent={45}
                        showInfo={false}
                        strokeColor="#FF8F0D"
                        trailColor="#FFD5A4"
                        size={{
                          height: 5,
                        }}
                      />
                    </td>
                    <td className="px-3 py-4">
                      <div className=" mx-auto w-[50px] text-[#FF8900] flex justify-center items-center rounded-lg bg-[#FEF6E6] border border-[#FF8900]">
                        45%
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className=" bg-white rounded-lg p-5 lg:w-[40%] w-full justify-between flex flex-col gap-2">
            <div className=" flex flex-row gap-3 items-center my-5">
              <Progress
                percent={75}
                type="circle"
                strokeColor="#306BFF"
                className="circle-progress"
                strokeWidth={10}
                format={(percent) => (
                  <p className=" text-[#306BFF] mb-0 leading-5 text-3xl mt-1 font-bold">
                    {percent}% <br /> <span className="text-lg">Done</span>
                  </p>
                )}
              />
              <p>
                By clicking on team <br /> you can view the
                <br /> team progress
              </p>
            </div>
            <div className=" w-full flex flex-row gap-3 items-center my-5">
              <button
                onClick={() => navigate("/sales")}
                className=" w-[150px] items-center p-3 h-full font-medium bg-[#306BFF] rounded-lg text-white flex flex-row gap-2 "
              >
                Sales Team <GoArrowRight />
              </button>
              <button
                onClick={() => navigate("/teams")}
                className=" w-[170px] items-center font-medium p-3 h-full border border-[#000] bg-white rounded-lg text-[#000] flex flex-row gap-2 "
              >
                Design Team <GoArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

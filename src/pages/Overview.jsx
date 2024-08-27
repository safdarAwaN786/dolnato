/* eslint-disable react/no-unknown-property */

import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import ModalOneChart from "../components/widgets/overview/modals/ModalOneChart.jsx";
import ModalTwoChart from "../components/widgets/overview/modals/ModalTwoChart.jsx";
import ModalThreeChart from "../components/widgets/overview/modals/ModalThreeChart.jsx";
import ModalFourChart from "../components/widgets/overview/modals/ModalFourChart.jsx";
import ModalFiveChart from "../components/widgets/overview/modals/ModalFiveChart.jsx";
import ModalSixChart from "../components/widgets/overview/modals/ModalSixChart.jsx";

import { FaSortDown } from "react-icons/fa";
import { Progress, Upload } from "antd";
import { GoArrowRight } from "react-icons/go";
import { Dropdown } from "antd";
import { PlusOutlined } from "@ant-design/icons";

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

export default function Overview() {
  const [openModal, setOpenModal] = useState(false);
  const [modal, setModal] = useState(0);

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
      <div className="sm:ms-[18%] sm:w-[82%] mt-14 w-full p-10 bg-[#F4F6F8] ">
        <div className="w-full flex flex-row items-center justify-between">
          <h1 className=" text-3xl font-[600] mb-0 ">Project Information</h1>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <div className="w-[30%] bg-[#fff] rounded-lg text-[#306BFF] p-3 cursor-pointer flex justify-between flex-row items-center">
              <p>Project Name</p>
              <FaSortDown />
            </div>
          </Dropdown>
        </div>
        <hr className="w-full my-3 border-[#d3d2d2]" />
        <div className="w-full flex flex-row h-[100px] items-center justify-between">
          <div className="w-1/2 flex flex-row justify-between">
            <div className=" w-[30%]">
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
            <div className=" w-[30%]">
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
            <div className=" w-[30%]">
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
          <div className="w-1/2 flex flex-row justify-end items-end h-full gap-3">
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
        <div className="w-full h-[270px] my-8 flex gap-2 flex-col py-3 px-5 bg-white rounded-lg">
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
        <div className="w-full flex flex-row gap-5 h-[350px] items-start justify-between">
          <div className=" bg-white rounded-lg p-3 w-[60%] h-full flex flex-col gap-2">
            <h1 className=" text-[#05004E] my-2 text-lg font-[600]">
              Products Update
            </h1>
            <table className="w-full text-left  ">
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
          <div className=" bg-white rounded-lg p-5 w-[40%] h-full justify-between flex flex-col gap-2">
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
              <button className=" w-[150px] items-center p-3 h-full font-medium bg-[#306BFF] rounded-lg text-white flex flex-row gap-2 ">
                Sales Team <GoArrowRight />
              </button>
              <button className=" w-[170px] items-center font-medium p-3 h-full border border-[#000] bg-white rounded-lg text-[#000] flex flex-row gap-2 ">
                Design Team <GoArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {openModal && (
        <div className="w-full h-[100vh] z-10 overflow-y-scroll fixed top-0 start-0 bg-[#4fcd8a76] flex justify-center items-center">
          <div className=" w-[700px] h-[550px] rounded bg-white text-center p-3">
            <div className=" flex justify-end">
              <RxCross2
                className="text-black text-xl cursor-pointer"
                onClick={() => setOpenModal(false)}
              />
            </div>
            {modal === 1 && (
              <>
                <h1> Energy Usage Vs Target (kWh/Month)</h1>
                <ModalOneChart />
              </>
            )}
            {modal === 2 && (
              <>
                <h1>Energy Generated (kWh/Month)</h1>
                <ModalTwoChart />
              </>
            )}
            {modal === 3 && (
              <>
                <h1>Energy Balance (kWh/Month)</h1>
                <ModalThreeChart />
              </>
            )}
            {modal === 4 && (
              <>
                <h1>Year to Date Consumption (kWh)</h1>
                <ModalFourChart />
              </>
            )}
            {modal === 5 && (
              <>
                <h1>Demand Budget (kWh/Month)</h1>
                <ModalFiveChart />
              </>
            )}
            {modal === 6 && (
              <>
                <h1>Actual Demand (kWh/Month)</h1>
                <ModalSixChart />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

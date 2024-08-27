/* eslint-disable react/no-unknown-property */

import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import ModalOneChart from "../components/widgets/overview/modals/ModalOneChart.jsx";
import ModalTwoChart from "../components/widgets/overview/modals/ModalTwoChart.jsx";
import ModalThreeChart from "../components/widgets/overview/modals/ModalThreeChart.jsx";
import ModalFourChart from "../components/widgets/overview/modals/ModalFourChart.jsx";
import ModalFiveChart from "../components/widgets/overview/modals/ModalFiveChart.jsx";
import ModalSixChart from "../components/widgets/overview/modals/ModalSixChart.jsx";
import { FiCheckCircle } from "react-icons/fi";
import { FaAngleDown, FaSortDown } from "react-icons/fa";
import { Progress, Upload } from "antd";
import { GoArrowRight } from "react-icons/go";
import { Dropdown } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";
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

export default function Project() {
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
      <div className="sm:ms-[18%] sm:w-[82%] bg-[#F4F6F8] w-full  ">
        <div className="w-full flex px-10 pb-1 pt-4  bg-white flex-col">
          <h1 className=" text-4xl font-medium mb-0 f">Glenmark</h1>
          <div className=" flex flex-row gap-2 w-full mt-8 items-end p-3 justify-start">
            <div className=" w-[20%]">
              <h3 className="font-medium mt-1">Initial PO</h3>
              <div className="  w-full rounded-lg p-1">
                <Upload
                  listType="picture-card"
                  beforeUpload={beforeUpload}
                  fileList={fileList}
                  onChange={handleChange}
                  style={{
                    backgroundColor: "#F4F6F8",
                  }}
                >
                  {fileList.length >= 1 ? null : uploadButton}
                </Upload>
              </div>
            </div>
            <div className=" w-[20%]">
              <h3 className="font-medium mt-1">Service PO</h3>
              <div className="  w-full rounded-lg p-1">
                <Upload
                  listType="picture-card"
                  beforeUpload={beforeUpload}
                  fileList={fileList}
                  onChange={handleChange}
                  style={{
                    backgroundColor: "#F4F6F8",
                  }}
                >
                  {fileList.length >= 1 ? null : uploadButton}
                </Upload>
              </div>
            </div>
            <div className=" w-[20%]">
              <h3 className="font-medium mt-1">Conceptual Layout</h3>
              <div className="  w-full rounded-lg p-1">
                <Upload
                  listType="picture-card"
                  beforeUpload={beforeUpload}
                  fileList={fileList}
                  onChange={handleChange}
                  style={{
                    backgroundColor: "#F4F6F8",
                  }}
                >
                  {fileList.length >= 1 ? null : uploadButton}
                </Upload>
              </div>
            </div>
          </div>
        </div>

        <div className=" p-10 w-full  min-h-[73vh] overflow-x-scroll">
          <div className=" min-h-[70vh] px-6 py-4 min-w-[1500px]  bg-[#FFFFFF]  border border-[rgba(0, 0, 0, 0.10)] rounded-2xl">
            <div className=" bg-white border border-[rgba(0, 0, 0, 0.10)] rounded-lg mt-5  p-4  flex flex-col gap-12 w-full ">
              <div className="w-full  flex flex-row gap-3 items-start justify-start">
                <div className=" w-[270px] flex flex-col gap-2">
                  <p className=" text-[#505050] text-sm font-[700] mb-4">Approved Design</p>
                  <Upload
                    listType="picture-card"
                    beforeUpload={beforeUpload}
                    fileList={fileList2}
                    onChange={handleChange2}
                  >
                    {fileList2.length >= 1 ? null : uploadButton}
                  </Upload>
                  <div className="flex flex-row text-[#00900D] justify-between items-center gap-1 mt-2">
                    <div className=" flex flex-row">
                      <FiCheckCircle className=" text-xs" />
                      <p className=" text-xs mx-1 mb-0 ">Approved</p>
                    </div>
                    <p className=" text-[#828282] text-xs">on Nov 16, 2023</p>
                  </div>
                  <div className="w-full text-xs py-3 mt-2 bg-[#F4F6F8] text-[#3A536C] flex flex-row justify-between items-center p-2 rounded-lg">
                    Signed and approved by Designer, Senior & Client
                  </div>
                </div>
                <div className=" w-[270px] flex flex-col gap-2">
                  <p className=" text-[#505050] text-sm font-[700] mb-4">Description</p>
                  <div className=" bg-[#F4F6F8] p-2 w-full min-h-[100px] rounded-lg">

                    <p className=" text-[#212121] text-xs">Lorem ipsum is a dummy text used by designer’s world wide</p>
                  </div>
                 
                </div>
                <div className=" w-[270px] h-[50px] mt-12 rounded-lg border-dashed p-4 border bg-[#D3E9FF] border-[#B5BBC2]">
                  <p className="bg-[#D3E9FF] rounded-md p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                    Total Quantity
                  </p>
                  580
                </div>
                <div className=" w-[270px] h-[50px] mt-12 rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[140px] text-xs">
                    Recieved Quanity
                  </p>
                  580
                </div>
                <p className=" mt-14">-</p>
                <div className=" w-[270px] h-[50px] mt-12 rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[140px] text-xs">
                    Installed Panles
                  </p>
                  580
                </div>
                <p className=" mt-14">=</p>
                <div className=" w-[270px] h-[50px] mt-12 bg-[#fafafa] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-[700] w-[90px] text-xs">
                    Pending
                  </p>
                  580
                </div>
              </div>
              <div className="w-full  flex flex-row gap-3 items-start justify-start">
                <div className=" w-[270px] flex flex-col gap-2">
                  <p className=" text-[#505050] text-sm font-[700] mb-4">Approved Design</p>
                  <Upload
                    listType="picture-card"
                    beforeUpload={beforeUpload}
                    fileList={fileList2}
                    onChange={handleChange2}
                  >
                    {fileList2.length >= 1 ? null : uploadButton}
                  </Upload>
                  <div className="flex flex-row text-[#00900D] justify-between items-center gap-1 mt-2">
                    <div className=" flex flex-row">
                      <FiCheckCircle className=" text-xs" />
                      <p className=" text-xs mx-1 mb-0 ">Approved</p>
                    </div>
                    <p className=" text-[#828282] text-xs">on Nov 16, 2023</p>
                  </div>
                  <div className="w-full text-xs py-3 mt-2 bg-[#F4F6F8] text-[#3A536C] flex flex-row justify-between items-center p-2 rounded-lg">
                    Signed and approved by Designer, Senior & Client
                  </div>
                </div>
                <div className=" w-[270px] flex flex-col gap-2">
                  <p className=" text-[#505050] text-sm font-[700] mb-4">Description</p>
                  <div className=" bg-[#F4F6F8] p-2 w-full min-h-[100px] rounded-lg">

                    <p className=" text-[#212121] text-xs">Lorem ipsum is a dummy text used by designer’s world wide</p>
                  </div>
                 
                </div>
                <div className=" w-[270px] h-[50px] mt-12 rounded-lg border-dashed p-4 border bg-[#D3E9FF] border-[#B5BBC2]">
                  <p className="bg-[#D3E9FF] rounded-md p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                    Total Quantity
                  </p>
                  580
                </div>
                <div className=" w-[270px] h-[50px] mt-12 rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[140px] text-xs">
                    Recieved Quanity
                  </p>
                  580
                </div>
                <p className=" mt-14">-</p>
                <div className=" w-[270px] h-[50px] mt-12 rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[140px] text-xs">
                    Installed Panles
                  </p>
                  580
                </div>
                <p className=" mt-14">=</p>
                <div className=" w-[270px] h-[50px] mt-12 bg-[#fafafa] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-[700] w-[90px] text-xs">
                    Pending
                  </p>
                  580
                </div>
              </div>
              <div className="w-full  flex flex-row gap-3 items-start justify-start">
                <div className=" w-[270px] flex flex-col gap-2">
                  <p className=" text-[#505050] text-sm font-[700] mb-4">Approved Design</p>
                  <Upload
                    listType="picture-card"
                    beforeUpload={beforeUpload}
                    fileList={fileList2}
                    onChange={handleChange2}
                  >
                    {fileList2.length >= 1 ? null : uploadButton}
                  </Upload>
                  <div className="flex flex-row text-[#00900D] justify-between items-center gap-1 mt-2">
                    <div className=" flex flex-row">
                      <FiCheckCircle className=" text-xs" />
                      <p className=" text-xs mx-1 mb-0 ">Approved</p>
                    </div>
                    <p className=" text-[#828282] text-xs">on Nov 16, 2023</p>
                  </div>
                  <div className="w-full text-xs py-3 mt-2 bg-[#F4F6F8] text-[#3A536C] flex flex-row justify-between items-center p-2 rounded-lg">
                    Signed and approved by Designer, Senior & Client
                  </div>
                </div>
                <div className=" w-[270px] flex flex-col gap-2">
                  <p className=" text-[#505050] text-sm font-[700] mb-4">Description</p>
                  <div className=" bg-[#F4F6F8] p-2 w-full min-h-[100px] rounded-lg">

                    <p className=" text-[#212121] text-xs">Lorem ipsum is a dummy text used by designer’s world wide</p>
                  </div>
                 
                </div>
                <div className=" w-[270px] h-[50px] mt-12 rounded-lg border-dashed p-4 border bg-[#D3E9FF] border-[#B5BBC2]">
                  <p className="bg-[#D3E9FF] rounded-md p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                    Total Quantity
                  </p>
                  580
                </div>
                <div className=" w-[270px] h-[50px] mt-12 rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[140px] text-xs">
                    Recieved Quanity
                  </p>
                  580
                </div>
                <p className=" mt-14">-</p>
                <div className=" w-[270px] h-[50px] mt-12 rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[140px] text-xs">
                    Installed Panles
                  </p>
                  580
                </div>
                <p className=" mt-14">=</p>
                <div className=" w-[270px] h-[50px] mt-12 bg-[#fafafa] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-[700] w-[90px] text-xs">
                    Pending
                  </p>
                  580
                </div>
              </div>
              
          
             
              
              
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

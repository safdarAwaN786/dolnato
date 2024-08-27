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
import {
  FaAngleDown,
  FaCaretDown,
  FaCaretLeft,
  FaSortDown,
} from "react-icons/fa";
import { Progress, Upload } from "antd";
import { GoArrowRight } from "react-icons/go";
import { Dropdown } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";
import { useNavigate } from "react-router-dom";


export default function Directors() {
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
  const navigate = useNavigate()
  const items = [
    {
      key: "1",
      label: (
        <a  onClick={()=> navigate('/senior')} >
          Senior
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a onClick={()=> navigate('/designers')}>
          Designers
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a onClick={()=> navigate('/planning')}>
          Planning
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a onClick={()=> navigate('/purchase')}>
          Purchase
        </a>
      ),
    },
    {
      key: "5",
      label: (
        <a onClick={()=> navigate('/factory')}>
          Factory
        </a>
      ),
    },
    {
      key: "6",
      label: (
        <a onClick={()=> navigate('/project')}>
          Project
        </a>
      ),
    },
    {
      key: "7",
      label: (
        <a onClick={()=> navigate('/directors')}>
          Directors
        </a>
      ),
    },
    {
      key: "8",
      label: (
        <a onClick={()=> navigate('/dashboard')}>
          Dashboard
        </a>
      ),
    },
  ];

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
            <div className=" w-[16%]">
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
            <div className=" w-[16%]">
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
            <div className=" w-[16%]">
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
            <button className=" items-center mb-2 p-3 h-[50px] bg-gradient-to-r rounded-xl text-white flex flex-row gap-3 from-[#053BD3] to-[#03EAEA]">
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
            <button className=" mb-2  p-3 h-[50px] items-center bg-gradient-to-r rounded-xl text-white flex flex-row gap-3 from-[#053BD3] to-[#03EAEA]">
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
            <div className=" pb-2 w-[16%]">
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <div
                  className={`w-full items-center rounded-xl p-2 py-5 bg-[#F4F6F8] text-[#0E111E]  cursor-pointer text-lg    flex flex-row justify-center gap-3 h-[50px] font-medium text-center`}
                >
                  Planning team{" "}
                  <FaCaretDown  className="text-[#0E111E] text-xl" />
                </div>
              </Dropdown>
            </div>
          </div>
        </div>

        <div className=" p-10 w-full min-h-[73vh] overflow-x-scroll">
          <div className="min-w-[2000px] flex flex-row  items-center justify-start">
            <div className="w-[100px] text-lg font-medium text-end me-2">
              Wall Panel Layout
            </div>

            <div className="w-[270px] flex flex-col gap-3">
              <div className="w-full    p-3 ">
                <div className="flex flex-row bg-white  p-2 items-center justify-between rounded-lg">
                  <Checkbox onChange={() => {}}></Checkbox>
                  <p className=" text-[#505050] text-sm ">TDS</p>
                  <FaCaretLeft />
                </div>
              </div>
              <div className="w-full rounded-l-lg bg-white  p-2 ">
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
                <div className="w-full py-3 mt-5 bg-[#F4F6F8] text-[#828282] flex flex-row justify-between items-center p-2 rounded-lg">
                  +8 Releases
                  <FaCaretDown />
                </div>
              </div>
            </div>
            <div className="w-[270px] flex flex-col gap-3">
              <div className="w-full    p-3 ">
                <div className="flex flex-row bg-white  p-2 items-center justify-between rounded-lg">
                  <Checkbox onChange={() => {}}></Checkbox>
                  <p className=" text-[#505050] text-sm ">Approved Design</p>
                  <FaCaretLeft />
                </div>
              </div>
              <div className="w-full bg-white  p-2 ">
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
                    <p className=" text-xs mx-1 mb-0 "> Senior Approved</p>
                  </div>
                  <p className=" text-[#828282] text-xs">on Nov 16, 2023</p>
                </div>
                <div className="w-full py-3 mt-5 bg-[#F4F6F8] text-[#828282] flex flex-row justify-between items-center p-2 rounded-lg">
                  +8 Releases
                  <FaCaretDown />
                </div>
              </div>
            </div>
            <div className="w-[270px] flex flex-col gap-3">
              <div className="w-full    p-3 ">
                <div className="flex flex-row bg-white  p-2 items-center justify-between rounded-lg">
                  <Checkbox onChange={() => {}}></Checkbox>
                  <p className=" text-[#505050] text-sm ">Indent</p>
                  <FaCaretLeft />
                </div>
              </div>
              <div className="w-full bg-white  p-2 ">
                <Upload
                  listType="picture-card"
                  beforeUpload={beforeUpload}
                  fileList={fileList2}
                  onChange={handleChange2}
                >
                  {fileList2.length >= 1 ? null : uploadButton}
                </Upload>
                <div className="flex flex-row text-[#00900D] justify-end items-center gap-1 mt-2">
                  
                  <p className=" text-[#828282] text-xs">on Nov 16, 2023</p>
                </div>
                <div className="w-full py-3 mt-5 bg-[#F4F6F8] text-[#828282] flex flex-row justify-between items-center p-2 rounded-lg">
                  +8 Releases
                  <FaCaretDown />
                </div>
              </div>
            </div>
            <div className="w-[270px] flex flex-col gap-3">
              <div className="w-full    p-3 ">
                <div className="flex flex-row bg-white  p-2 items-center justify-between rounded-lg">
                  <Checkbox onChange={() => {}}></Checkbox>
                  <p className=" text-[#505050] text-sm ">Amendment BOQ</p>
                  <FaCaretLeft />
                </div>
              </div>
              <div className="w-full bg-white  p-2 ">
                <Upload
                  listType="picture-card"
                  beforeUpload={beforeUpload}
                  fileList={fileList2}
                  onChange={handleChange2}
                >
                  {fileList2.length >= 1 ? null : uploadButton}
                </Upload>
                <div className="flex flex-row text-[#00900D] justify-end items-center gap-1 mt-2">
                  
                  <p className=" text-[#828282] text-xs">on Nov 16, 2023</p>
                </div>
                <div className="w-full py-3 mt-5 bg-[#F4F6F8] text-[#828282] flex flex-row justify-between items-center p-2 rounded-lg">
                  +8 Releases
                  <FaCaretDown />
                </div>
              </div>
            </div>
            <div className="w-[270px] flex flex-col gap-3">
              <div className="w-full    p-3 ">
                <div className="flex flex-row bg-white  p-2 items-center justify-between rounded-lg">
                  <Checkbox onChange={() => {}}></Checkbox>
                  <p className=" text-[#505050] text-sm ">Dispatch date</p>
                  <FaCaretLeft />
                </div>
              </div>
              <div className="w-full bg-white  p-2 ">
                <Upload
                  listType="picture-card"
                  beforeUpload={beforeUpload}
                  fileList={fileList2}
                  onChange={handleChange2}
                >
                  {fileList2.length >= 1 ? null : uploadButton}
                </Upload>
                <div className="flex flex-row text-[#00900D] justify-end items-center gap-1 mt-2">
                  
                  <p className=" text-[#828282] text-xs">on Nov 16, 2023</p>
                </div>
                <div className="w-full py-3 mt-5 bg-[#F4F6F8] text-[#828282] flex flex-row justify-between items-center p-2 rounded-lg">
                  +8 Releases
                  <FaCaretDown />
                </div>
              </div>
            </div>
            <div className="w-[270px] flex flex-col gap-3">
              <div className="w-full    p-3 ">
                <div className="flex flex-row bg-white  p-2 items-center justify-between rounded-lg">
                  <Checkbox onChange={() => {}}></Checkbox>
                  <p className=" text-[#505050] text-sm ">New Dispatch date</p>
                  <FaCaretLeft />
                </div>
              </div>
              <div className="w-full bg-white  p-2 ">
                <Upload
                  listType="picture-card"
                  beforeUpload={beforeUpload}
                  fileList={fileList2}
                  onChange={handleChange2}
                >
                  {fileList2.length >= 1 ? null : uploadButton}
                </Upload>
                <div className="flex flex-row text-[#00900D] justify-end items-center gap-1 mt-2">
                  
                  <p className=" text-[#828282] text-xs">on Nov 16, 2023</p>
                </div>
                <div className="w-full py-3 mt-5 bg-[#F4F6F8] text-[#828282] flex flex-row justify-between items-center p-2 rounded-lg">
                  +8 Releases
                  <FaCaretDown />
                </div>
              </div>
            </div>
            <div className="w-[270px] flex flex-col gap-3">
              <div className="w-full    p-3 ">
                <div className="flex flex-row bg-white  p-2 items-center justify-between rounded-lg">
                  <Checkbox onChange={() => {}}></Checkbox>
                  <p className=" text-[#505050] text-sm ">Raw Material</p>
                  <FaCaretLeft />
                </div>
              </div>
              <div className="w-full bg-white rounded-r-lg p-2 ">
                <Upload
                  listType="picture-card"
                  beforeUpload={beforeUpload}
                  fileList={fileList2}
                  onChange={handleChange2}
                >
                  {fileList2.length >= 1 ? null : uploadButton}
                </Upload>
                <div className="flex flex-row text-[#00900D] justify-end items-center gap-1 mt-2">
                  
                  <p className=" text-[#828282] text-xs">on Nov 16, 2023</p>
                </div>
                <div className="w-full py-3 mt-5 bg-[#F4F6F8] text-[#828282] flex flex-row justify-between items-center p-2 rounded-lg">
                  +8 Releases
                  <FaCaretDown />
                </div>
              </div>
            </div>

            {/* <div className="flex flex-col gap-3 w-full">
              <div className="flex w-full flex-row gap-3 p-3">
                <div className="w-[470px] bg-white flex flex-row items-center justify-between  p-2 rounded-lg">
                  <Checkbox onChange={() => {}}></Checkbox>
                  <p className=" text-[#505050] text-sm ">Purchase Order</p>
                  <FaCaretLeft />
                </div>
                <vr className="border border-[#E0E0E0]" />
                <div className="w-[270px] bg-white flex flex-row items-center justify-between  p-2 rounded-lg">
                  <Checkbox onChange={() => {}}></Checkbox>
                  <p className=" text-[#505050] text-sm ">Purchase Order</p>
                  <FaCaretLeft />
                </div>
                <div className="w-[270px] bg-white flex flex-row items-center justify-between  p-2 rounded-lg">
                  <Checkbox onChange={() => {}}></Checkbox>
                  <p className=" text-[#505050] text-sm ">Purchase Order</p>
                  <FaCaretLeft />
                </div>
                <div className="w-[270px] bg-white flex flex-row items-center justify-between  p-2 rounded-lg">
                  <Checkbox onChange={() => {}}></Checkbox>
                  <p className=" text-[#505050] text-sm ">Purchase Order</p>
                  <FaCaretLeft />
                </div>
                <div className="w-[270px] bg-white flex flex-row items-center justify-between  p-2 rounded-lg">
                  <Checkbox onChange={() => {}}></Checkbox>
                  <p className=" text-[#505050] text-sm ">Purchase Order</p>
                  <FaCaretLeft />
                </div>
                <div className="w-[270px] bg-white flex flex-row items-center justify-between  p-2 rounded-lg">
                  <Checkbox onChange={() => {}}></Checkbox>
                  <p className=" text-[#505050] text-sm ">Purchase Order</p>
                  <FaCaretLeft />
                </div>
                <div className="w-[270px] bg-white flex flex-row items-center justify-between  p-2 rounded-lg">
                  <Checkbox onChange={() => {}}></Checkbox>
                  <p className=" text-[#505050] text-sm ">Purchase Order</p>
                  <FaCaretLeft />
                </div>
              </div>
              <div className="flex w-full bg-white rounded-lg p-3 flex-row gap-3">
                <div className="w-[470px] flex flex-col gap-3">
                  <div className="w-full bg-white flex flex-row items-center justify-between  p-2 rounded-lg">
                    <Checkbox onChange={() => {}}></Checkbox>
                    <p className=" text-[#505050] text-sm ">Purchase Order</p>
                    <FaCaretLeft />
                  </div>
                  <div className="w-full  p-2 ">
                    <Upload
                      listType="picture-card"
                      beforeUpload={beforeUpload}
                      fileList={fileList2}
                      onChange={handleChange2}
                    >
                      {fileList2.length >= 1 ? null : uploadButton}
                    </Upload>
                    <div className="flex flex-row text-[#00900D] items-center gap-1 mt-2">
                      <FiCheckCircle className=" text-xs" />
                      <p className=" text-xs mx-1 mb-0 "> Director Approved</p>
                      <p className=" text-[#828282] text-xs">on Nov 16, 2023</p>
                    </div>
                  </div>

                  <div className="w-full py-3 bg-[#F4F6F8] text-[#828282] flex flex-row justify-between items-center p-2 rounded-lg">
                    +8 Releases
                    <FaCaretDown />
                  </div>
                </div>
                <vr className="border border-[#E0E0E0]" />
                <div className="w-[270px] flex flex-col gap-3">
                  <div className="w-full  p-2 ">
                    <Upload
                      listType="picture-card"
                      beforeUpload={beforeUpload}
                      fileList={fileList2}
                      onChange={handleChange2}
                    >
                      {fileList2.length >= 1 ? null : uploadButton}
                    </Upload>
                    <div className="flex flex-row text-[#00900D] items-center gap-1 mt-2">
                      <FiCheckCircle className=" text-xs" />
                      <p className=" text-xs mx-1 mb-0 "> Director Approved</p>
                      <p className=" text-[#828282] text-xs">on Nov 16, 2023</p>
                    </div>
                  </div>

                  <div className="w-full py-3 bg-[#F4F6F8] text-[#828282] flex flex-row justify-between items-center p-2 rounded-lg">
                    +8 Releases
                    <FaCaretDown />
                  </div>
                </div>
                <vr className="border border-[#E0E0E0]" />
                <div className="w-[270px] flex flex-col gap-3">
                  <div className="w-full  p-2 ">
                    <Upload
                      listType="picture-card"
                      beforeUpload={beforeUpload}
                      fileList={fileList2}
                      onChange={handleChange2}
                    >
                      {fileList2.length >= 1 ? null : uploadButton}
                    </Upload>
                    <div className="flex flex-row text-[#00900D] justify-end items-center gap-1 mt-2">
                      <p className=" text-[#828282] text-xs">on Nov 16, 2023</p>
                    </div>
                  </div>

                  <div className="w-full py-3 bg-[#F4F6F8] text-[#828282] flex flex-row justify-between items-center p-2 rounded-lg">
                    +8 Releases
                    <FaCaretDown />
                  </div>
                </div>
                <vr className="border border-[#E0E0E0]" />
                <div className="w-[270px] flex flex-col gap-3">
                  <div className="w-full  p-2 ">
                    <Upload
                      listType="picture-card"
                      beforeUpload={beforeUpload}
                      fileList={fileList2}
                      onChange={handleChange2}
                    >
                      {fileList2.length >= 1 ? null : uploadButton}
                    </Upload>
                    <div className="flex flex-row text-[#00900D] justify-end items-center gap-1 mt-2">
                      <p className=" text-[#828282] text-xs">on Nov 16, 2023</p>
                    </div>
                  </div>

                  <div className="w-full py-3 bg-[#F4F6F8] text-[#828282] flex flex-row justify-between items-center p-2 rounded-lg">
                    +8 Releases
                    <FaCaretDown />
                  </div>
                </div>
                <vr className="border border-[#E0E0E0]" />
                <div className="w-[270px] flex flex-col gap-3">
                  <div className="w-full  p-2 ">
                    <Upload
                      listType="picture-card"
                      beforeUpload={beforeUpload}
                      fileList={fileList2}
                      onChange={handleChange2}
                    >
                      {fileList2.length >= 1 ? null : uploadButton}
                    </Upload>
                    <div className="flex flex-row text-[#00900D] justify-end items-center gap-1 mt-2">
                      <p className=" text-[#828282] text-xs">on Nov 16, 2023</p>
                    </div>
                  </div>

                  <div className="w-full py-3 bg-[#F4F6F8] text-[#828282] flex flex-row justify-between items-center p-2 rounded-lg">
                    +8 Releases
                    <FaCaretDown />
                  </div>
                </div>
                <vr className="border border-[#E0E0E0]" />
                <div className="w-[270px] flex flex-col gap-3">
                  <div className="w-full  p-2 ">
                    <Upload
                      listType="picture-card"
                      beforeUpload={beforeUpload}
                      fileList={fileList2}
                      onChange={handleChange2}
                    >
                      {fileList2.length >= 1 ? null : uploadButton}
                    </Upload>
                    <div className="flex flex-row text-[#00900D] justify-end items-center gap-1 mt-2">
                      <p className=" text-[#828282] text-xs">on Nov 16, 2023</p>
                    </div>
                  </div>

                  <div className="w-full py-3 bg-[#F4F6F8] text-[#828282] flex flex-row justify-between items-center p-2 rounded-lg">
                    +8 Releases
                    <FaCaretDown />
                  </div>
                </div>
                <vr className="border border-[#E0E0E0]" />
              </div>
            </div> */}
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

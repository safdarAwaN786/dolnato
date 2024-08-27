/* eslint-disable react/no-unknown-property */

import { useState } from "react";
import { RxCross2, RxDotsHorizontal } from "react-icons/rx";
import ModalOneChart from "../components/widgets/overview/modals/ModalOneChart.jsx";
import ModalTwoChart from "../components/widgets/overview/modals/ModalTwoChart.jsx";
import ModalThreeChart from "../components/widgets/overview/modals/ModalThreeChart.jsx";
import ModalFourChart from "../components/widgets/overview/modals/ModalFourChart.jsx";
import ModalFiveChart from "../components/widgets/overview/modals/ModalFiveChart.jsx";
import ModalSixChart from "../components/widgets/overview/modals/ModalSixChart.jsx";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineDotsHorizontal, HiOutlineDotsVertical } from "react-icons/hi";
import {
  FaCaretDown,
  FaCaretLeft,
  FaCaretRight,
  FaSortDown,
} from "react-icons/fa";
import { Checkbox, Progress, Upload } from "antd";
import { GoArrowRight } from "react-icons/go";
import { Dropdown } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { IoIosWarning } from "react-icons/io";

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

export default function EmployeeID() {
  const [openModal, setOpenModal] = useState(false);
  const [modal, setModal] = useState(0);
  const [singleComment, setSingleComment] = useState(false);
  const [selectBOQ, setSelectBOQ] = useState(false);
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
  const [showSummary, setShowSummary] = useState(false);
  const [viewItem, setViewItem] = useState(false);
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
  const [showAdd, setShowAdd] = useState(false);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 6,
        }}
      >
        <span className=" text-[#306BFF]">Click to Upload</span> or drag & drop
      </div>
    </div>
  );

  return (
    <>
      <div className="w-full flex justify-center items-center  min-h-[100vh]  p-10 bg-[#F4F6F8] ">
        <div className=" w-[40%] bg-white py-6 px-10 rounded-xl">
          <div className=" w-full flex justify-center items-center">
            <div className=" w-[110px] h-[110px] rounded bg-white flex justify-center items-center iconBox">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="54"
                viewBox="0 0 55 54"
                fill="none"
              >
                <path
                  d="M25.1445 25.0352C23.0678 25.0352 21.0378 24.4193 19.3111 23.2656C17.5843 22.1118 16.2385 20.472 15.4438 18.5533C14.6491 16.6347 14.4412 14.5235 14.8463 12.4867C15.2514 10.4499 16.2515 8.57899 17.7199 7.11054C19.1884 5.64209 21.0593 4.64206 23.0961 4.23692C25.1329 3.83177 27.2441 4.03971 29.1627 4.83443C31.0813 5.62915 32.7212 6.97496 33.875 8.70167C35.0287 10.4284 35.6445 12.4585 35.6445 14.5352C35.6445 17.3199 34.5383 19.9907 32.5692 21.9598C30.6 23.9289 27.9293 25.0352 25.1445 25.0352ZM25.1445 7.15516C23.6612 7.15516 22.2111 7.59503 20.9778 8.41914C19.7444 9.24325 18.7831 10.4146 18.2154 11.785C17.6478 13.1555 17.4993 14.6635 17.7887 16.1183C18.078 17.5732 18.7923 18.9096 19.8412 19.9585C20.8901 21.0074 22.2265 21.7217 23.6814 22.0111C25.1362 22.3004 26.6442 22.1519 28.0147 21.5843C29.3851 21.0166 30.5565 20.0553 31.3806 18.8219C32.2047 17.5886 32.6445 16.1385 32.6445 14.6552C32.6445 13.6702 32.4505 12.695 32.0736 11.785C31.6967 10.8751 31.1443 10.0483 30.4478 9.35186C29.7514 8.65542 28.9246 8.10297 28.0147 7.72606C27.1047 7.34915 26.1295 7.15516 25.1445 7.15516ZM33.4995 26.8502C25.3822 25.0225 16.8898 25.9023 9.31954 29.3552C8.27838 29.8525 7.39994 30.6354 6.78649 31.6126C6.17305 32.5899 5.84985 33.7213 5.85454 34.8752V43.8002C5.85454 43.9971 5.89334 44.1922 5.96872 44.3742C6.04411 44.5562 6.15459 44.7215 6.29388 44.8608C6.43317 45.0001 6.59853 45.1106 6.78052 45.186C6.96251 45.2614 7.15756 45.3002 7.35454 45.3002C7.55153 45.3002 7.74658 45.2614 7.92857 45.186C8.11056 45.1106 8.27591 45.0001 8.4152 44.8608C8.55449 44.7215 8.66498 44.5562 8.74036 44.3742C8.81574 44.1922 8.85454 43.9971 8.85454 43.8002V34.8752C8.84148 34.2912 8.99917 33.7162 9.30826 33.2205C9.61735 32.7249 10.0644 32.3303 10.5945 32.0852C15.1548 29.979 20.1215 28.8986 25.1445 28.9202C27.959 28.9169 30.7638 29.2492 33.4995 29.9102V26.8502ZM33.7095 41.1152H42.9195V43.2152H33.7095V41.1152Z"
                  fill="#306BFF"
                />
                <path
                  d="M50.255 32.205H42.5V35.205H48.755V47.76H27.5V35.205H36.95V35.835C36.95 36.2328 37.108 36.6144 37.3893 36.8957C37.6706 37.177 38.0522 37.335 38.45 37.335C38.8478 37.335 39.2294 37.177 39.5107 36.8957C39.792 36.6144 39.95 36.2328 39.95 35.835V30C39.95 29.6022 39.792 29.2206 39.5107 28.9393C39.2294 28.658 38.8478 28.5 38.45 28.5C38.0522 28.5 37.6706 28.658 37.3893 28.9393C37.108 29.2206 36.95 29.6022 36.95 30V32.205H26C25.6022 32.205 25.2206 32.363 24.9393 32.6443C24.658 32.9256 24.5 33.3072 24.5 33.705V49.26C24.5 49.6578 24.658 50.0394 24.9393 50.3207C25.2206 50.602 25.6022 50.76 26 50.76H50.255C50.6528 50.76 51.0344 50.602 51.3157 50.3207C51.597 50.0394 51.755 49.6578 51.755 49.26V33.705C51.755 33.3072 51.597 32.9256 51.3157 32.6443C51.0344 32.363 50.6528 32.205 50.255 32.205Z"
                  fill="#306BFF"
                />
              </svg>
            </div>
          </div>
          <h1 className=" selectBOQHeading text-center text-[40px] mt-10 h-14  text-3xl font-bold">
            Enter your employee ID
          </h1>
          <p className=" text-center text-[#52525B]  text-lg">
            Write your employee ID here to <br /> login into your team
          </p>

          <div className=" w-full flex flex-row justify-between gap-2 px-4">
            <div className=" bg-[#F4F6F8] w-[60px] h-[60px] p-2 flex justify-center items-center">
              <input
                maxLength={1}
                placeholder="_"
                type="text"
                className=" w-[15px] bg-[#F4F6F8] placeholder:text-center focus:outline-none  h-full"
              />
            </div>
            <div className=" bg-[#F4F6F8] w-[60px] h-[60px] p-2 flex justify-center items-center">
              <input
                maxLength={1}
                placeholder="_"
                type="text"
                className=" w-[15px] bg-[#F4F6F8] placeholder:text-center focus:outline-none  h-full"
              />
            </div>
            <div className=" bg-[#F4F6F8] w-[60px] h-[60px] p-2 flex justify-center items-center">
              <input
                maxLength={1}
                placeholder="_"
                type="text"
                className=" w-[15px] bg-[#F4F6F8] placeholder:text-center focus:outline-none  h-full"
              />
            </div>
            <div className=" bg-[#F4F6F8] w-[60px] h-[60px] p-2 flex justify-center items-center">
              <input
                maxLength={1}
                placeholder="_"
                type="text"
                className=" w-[15px] bg-[#F4F6F8] placeholder:text-center focus:outline-none  h-full"
              />
            </div>
            <div className=" bg-[#F4F6F8] w-[60px] h-[60px] p-2 flex justify-center items-center">
              <input
                maxLength={1}
                placeholder="_"
                type="text"
                className=" w-[15px] bg-[#F4F6F8] placeholder:text-center focus:outline-none  h-full"
              />
            </div>
            <div className=" bg-[#F4F6F8] w-[60px] h-[60px] p-2 flex justify-center items-center">
              <input
                maxLength={1}
                placeholder="_"
                type="text"
                className=" w-[15px] bg-[#F4F6F8] placeholder:text-center focus:outline-none  h-full"
              />
            </div>
          </div>

          <button className=" w-full text-lg font-semibold p-4 text-center text-white rounded-lg bg-gradient-to-r from-[#053BD3] to-[#03EAEA] mt-5">
            Verify
          </button>
        </div>
      </div>

      {openModal && (
        <div className="w-full h-[100vh] overflow-y-scroll z-10  fixed top-0 start-0 bg-[#79797998]  flex justify-center ">
          <div className=" w-[680px] h-[771px] flex flex-col gap-3 my-32 rounded-lg p-6 bg-white opacity-[100] text-center ">
            <div className=" flex justify-between  bg-white">
              <h1 className=" text-2xl font-medium text-[#000000] opacity-[0.6]">
                Comments
              </h1>
              <div className=" mt-[-35px] mr-[-35px] h-[40px] flex justify-center  items-center w-[40px] bg-gradient-to-r from-[#053BD3] to-[#03EAEA] p-2 rounded-full">
                <RxCross2
                  className="text-white  text-2xl cursor-pointer"
                  onClick={() => {
                    setOpenModal(false);
                    setSingleComment(false);
                  }}
                />
              </div>
            </div>
            <hr className=" border border-[#000000] opacity-[0.2]" />
            {singleComment ? (
              <>
                <div className=" w-full bg-[#F2F2F2] rounded-lg p-4 px-6">
                  <div className=" w-full flex flex-row justify-between">
                    <div className=" w-[95%] text-lg font-medium text-[#000000] text-start  opacity-[0.8]">
                      Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis.
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="32"
                      viewBox="0 0 33 32"
                      fill="none"
                    >
                      <path
                        d="M28.1841 26.2231V6.02915C28.1841 5.42746 27.9825 4.92548 27.5793 4.52319C27.1762 4.12091 26.6746 3.91933 26.0747 3.91846H6.78327C6.18245 3.91846 5.6809 4.12004 5.27861 4.52319C4.87633 4.92635 4.67475 5.42833 4.67388 6.02915V20.0948C4.67388 20.6956 4.87546 21.1976 5.27861 21.6007C5.68177 22.0039 6.18332 22.205 6.78327 22.2042H24.1651L28.1841 26.2231ZM23.6127 17.6327H14.4698V16.3266H23.6127V17.6327ZM23.6127 13.7144H9.24531V12.4083H23.6127V13.7144ZM23.6127 9.79601H9.24531V8.48989H23.6127V9.79601Z"
                        fill="url(#paint0_linear_1_7624)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_7624"
                          x1="28.1841"
                          y1="15.0708"
                          x2="4.67388"
                          y2="15.0708"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#053BD3" />
                          <stop offset="1" stop-color="#03EAEA" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className=" w-full flex flex-row justify-between mt-5">
                    <div className=" w-[50%] text-lg font-medium text-[#000000] text-start  op">
                      <span className=" text-[#053BD3]">3:04 PM</span> -12 Jan
                      2024
                    </div>
                    <div className=" w-[50%] text-[15px] font-medium text-[#000000] text-start flex justify-end  ">
                      <div className=" p-2 bg-[#D6E1FF] rounded-lg text-center">
                        Janvi Sidana - Senior
                      </div>
                    </div>
                  </div>
                  <div className=" w-full flex flex-col  mt-5 bg-white rounded-lg p-4">
                    <textarea
                      placeholder="Write Your Reply here"
                      rows={6}
                      className="w-full focus:outline-none border-0 placeholder:font-medium placeholder:text-lg"
                    />
                    <hr className=" border border-black my-2 opacity-[0.1]" />
                    <div className=" w-full flex flex-row gap-2 justify-end">
                      <button className=" items-center w-[150px] justify-center p-1 h-[40px] bg-gradient-to-r rounded-xl text-white flex flex-row gap-3 from-[#053BD3] to-[#03EAEA]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="27"
                          height="27"
                          viewBox="0 0 27 27"
                          fill="none"
                        >
                          <path
                            d="M19.7036 6.8653C19.0034 6.25724 18.0985 5.93743 17.1717 5.97042C16.2448 6.0034 15.365 6.38673 14.7097 7.04303L7.35546 14.3952C7.20664 14.5549 7.02717 14.683 6.82776 14.7718C6.62835 14.8607 6.41309 14.9084 6.19482 14.9123C5.97655 14.9161 5.75974 14.876 5.55732 14.7942C5.3549 14.7125 5.17102 14.5908 5.01666 14.4364C4.86229 14.2821 4.7406 14.0982 4.65884 13.8958C4.57708 13.6933 4.53693 13.4765 4.54078 13.2583C4.54463 13.04 4.59241 12.8247 4.68126 12.6253C4.77011 12.4259 4.89821 12.2464 5.05792 12.0976L12.41 4.7455C13.0576 4.09823 13.8272 3.58593 14.6742 3.2383C15.5213 2.89067 16.4289 2.71462 17.3444 2.72035C18.26 2.72609 19.1653 2.91349 20.008 3.27171C20.8506 3.62992 21.6137 4.15182 22.2531 4.80715C22.8925 5.46249 23.3955 6.23821 23.7329 7.08937C24.0703 7.94053 24.2353 8.8502 24.2186 9.76563C24.2018 10.6811 24.0035 11.5841 23.6351 12.4223C23.2668 13.2605 22.7357 14.0173 22.0727 14.6487L11.8335 24.3938C11.4417 24.776 10.9784 25.0774 10.4702 25.2806C9.96189 25.4839 9.41856 25.585 8.87121 25.5783C7.76578 25.5646 6.71104 25.1124 5.93901 24.3212C5.16698 23.5299 4.74091 22.4643 4.75453 21.3589C4.76814 20.2535 5.22033 19.1987 6.01162 18.4267L15.2083 9.22786C15.3583 9.07267 15.5377 8.94891 15.7361 8.86381C15.9345 8.77871 16.1478 8.73397 16.3637 8.73219C16.5795 8.73042 16.7935 8.77165 16.9933 8.85348C17.193 8.93532 17.3745 9.05611 17.527 9.20881C17.6796 9.36152 17.8002 9.54308 17.8819 9.7429C17.9635 9.94272 18.0045 10.1568 18.0026 10.3726C18.0006 10.5885 17.9556 10.8018 17.8704 11.0001C17.7851 11.1984 17.6611 11.3777 17.5058 11.5276L8.31566 20.7264C8.15488 20.8987 8.06662 21.1263 8.06922 21.362C8.07182 21.5976 8.16507 21.8233 8.32962 21.992C8.49417 22.1607 8.71737 22.2596 8.95289 22.2681C9.18842 22.2766 9.41818 22.1941 9.59448 22.0377L19.8294 12.2927C20.2003 11.9406 20.4933 11.5148 20.6897 11.0426C20.8861 10.5704 20.9814 10.0624 20.9696 9.55113C20.9577 9.03988 20.839 8.53677 20.6209 8.07419C20.4029 7.61162 20.0904 7.19982 19.7036 6.8653Z"
                            fill="white"
                          />
                        </svg>
                        <span className=" text-sm font-medium">
                          Attach file
                        </span>
                      </button>
                      <button className=" items-center w-[80px] justify-center p-1 h-[40px] bg-gradient-to-r rounded-full text-white flex flex-row gap-3 from-[#053BD3] to-[#03EAEA]">
                        <span className=" text-sm font-medium">Send</span>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  onClick={() => setSingleComment(true)}
                  className=" w-full cursor-pointer bg-[#F2F2F2] rounded-lg p-4 px-6"
                >
                  <div className=" w-full flex flex-row justify-between">
                    <div className=" w-[95%] text-lg font-medium text-[#000000] text-start  opacity-[0.8]">
                      Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis.
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="32"
                      viewBox="0 0 33 32"
                      fill="none"
                    >
                      <path
                        d="M28.1841 26.2231V6.02915C28.1841 5.42746 27.9825 4.92548 27.5793 4.52319C27.1762 4.12091 26.6746 3.91933 26.0747 3.91846H6.78327C6.18245 3.91846 5.6809 4.12004 5.27861 4.52319C4.87633 4.92635 4.67475 5.42833 4.67388 6.02915V20.0948C4.67388 20.6956 4.87546 21.1976 5.27861 21.6007C5.68177 22.0039 6.18332 22.205 6.78327 22.2042H24.1651L28.1841 26.2231ZM23.6127 17.6327H14.4698V16.3266H23.6127V17.6327ZM23.6127 13.7144H9.24531V12.4083H23.6127V13.7144ZM23.6127 9.79601H9.24531V8.48989H23.6127V9.79601Z"
                        fill="url(#paint0_linear_1_7624)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_7624"
                          x1="28.1841"
                          y1="15.0708"
                          x2="4.67388"
                          y2="15.0708"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#053BD3" />
                          <stop offset="1" stop-color="#03EAEA" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className=" w-full flex flex-row justify-between mt-5">
                    <div className=" w-[50%] text-lg font-medium text-[#000000] text-start  op">
                      <span className=" text-[#053BD3]">3:04 PM</span> -12 Jan
                      2024
                    </div>
                    <div className=" w-[50%] text-[15px] font-medium text-[#000000] text-start flex justify-end  ">
                      <div className=" p-2 bg-[#D6E1FF] rounded-lg text-center">
                        Janvi Sidana - Senior
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => setSingleComment(true)}
                  className=" w-full cursor-pointer bg-[#F2F2F2] rounded-lg p-4 px-6"
                >
                  <div className=" w-full flex flex-row justify-between">
                    <div className=" w-[95%] text-lg font-medium text-[#000000] text-start  opacity-[0.8]">
                      Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis.
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="32"
                      viewBox="0 0 33 32"
                      fill="none"
                    >
                      <path
                        d="M28.1841 26.2231V6.02915C28.1841 5.42746 27.9825 4.92548 27.5793 4.52319C27.1762 4.12091 26.6746 3.91933 26.0747 3.91846H6.78327C6.18245 3.91846 5.6809 4.12004 5.27861 4.52319C4.87633 4.92635 4.67475 5.42833 4.67388 6.02915V20.0948C4.67388 20.6956 4.87546 21.1976 5.27861 21.6007C5.68177 22.0039 6.18332 22.205 6.78327 22.2042H24.1651L28.1841 26.2231ZM23.6127 17.6327H14.4698V16.3266H23.6127V17.6327ZM23.6127 13.7144H9.24531V12.4083H23.6127V13.7144ZM23.6127 9.79601H9.24531V8.48989H23.6127V9.79601Z"
                        fill="url(#paint0_linear_1_7624)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_7624"
                          x1="28.1841"
                          y1="15.0708"
                          x2="4.67388"
                          y2="15.0708"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#053BD3" />
                          <stop offset="1" stop-color="#03EAEA" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className=" w-full flex flex-row justify-between mt-5">
                    <div className=" w-[50%] text-lg font-medium text-[#000000] text-start  op">
                      <div className=" w-[70%] bg-white my-1 rounded-lg">
                        <Upload
                          listType="picture-card"
                          beforeUpload={beforeUpload}
                          fileList={fileList2}
                          onChange={handleChange2}
                        >
                          {fileList2.length >= 1 ? null : uploadButton}
                        </Upload>
                      </div>
                      <span className=" text-[#053BD3]">3:04 PM</span> -12 Jan
                      2024
                    </div>
                    <div className=" w-[50%] text-[15px] font-medium text-[#000000] text-start flex justify-end  ">
                      <div className=" p-2 bg-[#D6E1FF] h-[40px] rounded-lg text-center">
                        Janvi Sidana - Senior
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => setSingleComment(true)}
                  className=" w-full cursor-pointer bg-[#F2F2F2] rounded-lg p-4 px-6"
                >
                  <div className=" w-full flex flex-row justify-between">
                    <div className=" w-[95%] text-lg font-medium text-[#000000] text-start  opacity-[0.8]">
                      Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis.
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="32"
                      viewBox="0 0 33 32"
                      fill="none"
                    >
                      <path
                        d="M28.1841 26.2231V6.02915C28.1841 5.42746 27.9825 4.92548 27.5793 4.52319C27.1762 4.12091 26.6746 3.91933 26.0747 3.91846H6.78327C6.18245 3.91846 5.6809 4.12004 5.27861 4.52319C4.87633 4.92635 4.67475 5.42833 4.67388 6.02915V20.0948C4.67388 20.6956 4.87546 21.1976 5.27861 21.6007C5.68177 22.0039 6.18332 22.205 6.78327 22.2042H24.1651L28.1841 26.2231ZM23.6127 17.6327H14.4698V16.3266H23.6127V17.6327ZM23.6127 13.7144H9.24531V12.4083H23.6127V13.7144ZM23.6127 9.79601H9.24531V8.48989H23.6127V9.79601Z"
                        fill="url(#paint0_linear_1_7624)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_7624"
                          x1="28.1841"
                          y1="15.0708"
                          x2="4.67388"
                          y2="15.0708"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#053BD3" />
                          <stop offset="1" stop-color="#03EAEA" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className=" w-full flex flex-row justify-between mt-5">
                    <div className=" w-[50%] text-lg font-medium text-[#000000] text-start  op">
                      <div className=" w-[70%] bg-white my-1 rounded-lg">
                        <Upload
                          listType="picture-card"
                          beforeUpload={beforeUpload}
                          fileList={fileList2}
                          onChange={handleChange2}
                        >
                          {fileList2.length >= 1 ? null : uploadButton}
                        </Upload>
                      </div>
                      <span className=" text-[#053BD3]">3:04 PM</span> -12 Jan
                      2024
                    </div>
                    <div className=" w-[50%] text-[15px] font-medium text-[#000000] text-start flex justify-end  ">
                      <div className=" p-2 bg-[#A4FFAC] h-[40px] rounded-lg text-center">
                        Janvi Sidana - Senior
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {viewItem && (
        <div className="w-full h-[100vh] overflow-y-scroll z-10  fixed top-0 start-0 bg-[#79797998]  flex justify-center ">
          <div className=" w-[800px] h-[400px] flex flex-col gap-3 my-32 rounded-lg p-6 bg-white opacity-[100] text-center ">
            <div className=" flex flex-row justify-between  bg-white">
              <h1 className=" text-3xl font-[600] text-[#000000] opacity-[0.8]">
                Select the Item you want to view
              </h1>
              <div className=" mt-[-40px] mr-[-40px] h-[40px] border border-[#00000040] flex justify-center  items-center w-[40px] bg-white p-2 rounded-full">
                <RxCross2
                  className="text-[#053BD3]  text-2xl cursor-pointer"
                  onClick={() => {
                    setViewItem(false);
                  }}
                />
              </div>
            </div>
            <div className=" flex flex-col w-full p-2 mt-2 text-start gap-2 ">
              <span className=" text-[#053BD3] font-medium text-lg">
                Category
              </span>
              <div className=" w-full flex flex-row justify-between items-center text-[#626262] rounded-lg border border-[#E7E7E7] bg-[#FCFCFC] py-2 px-4">
                <p className="  text-lg font-normal">Wall Panel</p>
                <FaCaretDown className=" text-lg" />
              </div>
            </div>

            <div className=" flex flex-col w-full p-2 mt-2 text-start gap-2 ">
              <span className=" text-[#053BD3] font-medium text-lg">
                Sub-Category
              </span>
              <div className=" w-full flex flex-row justify-between items-center text-[#626262] rounded-lg border border-[#E7E7E7] bg-[#FCFCFC] py-2 px-4">
                <p className="  text-lg font-normal">Elevation</p>
                <FaCaretDown className=" text-lg" />
              </div>
            </div>
            <div className=" flex flex-row w-full justify-between items-start">
              <p className=" text-lg text-[#FF0000] flex flex-row items-center ml-2 gap-2">
                <IoIosWarning className=" text-xl" /> Invalid Password!
              </p>
              <button className=" p-3 bg-[#306BFF] text-lg font-semibold rounded-lg text-white flex justify-center items-center w-[150px]">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {showSummary && (
        <div className="w-full h-[100vh] overflow-y-scroll z-10  fixed top-0 start-0 bg-[#79797998]  flex justify-center ">
          <div className=" w-[680px] h-[1600px] flex flex-col gap-3 my-32 rounded-lg p-6 bg-white opacity-[100] text-center ">
            <div className=" flex justify-between  bg-white">
              <h1 className="mt-5 font-bold text-2xl selectBOQHeading  opacity-[0.6]">
                BOQ Summary
              </h1>
              <div className=" mt-[-35px] mr-[-35px] h-[40px] flex justify-center  items-center w-[40px] bg-gradient-to-r from-[#053BD3] to-[#03EAEA] p-2 rounded-full">
                <RxCross2
                  className="text-white  text-2xl cursor-pointer"
                  onClick={() => {
                    setShowSummary(false);
                  }}
                />
              </div>
            </div>
            <hr className=" border border-[#000000] opacity-[0.2]" />

            <div className=" text-start   p-4  flex flex-col w-full">
              <h1 className="text-lg  mb-3 font-medium text-[#000]">
                Wall Panel 50
              </h1>
              <div className="w-full flex flex-row gap-3 items-center justify-start">
                <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[120px] text-xs">
                    Amentment QTY
                  </p>
                  580
                </div>
                <p>-</p>
                <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                    Actual QTY
                  </p>
                  580
                </div>
                <p>=</p>
                <div className=" w-[30%] h-[50px] bg-[#fafafa] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-[700] w-[90px] text-xs">
                    Difference
                  </p>
                  580
                </div>
              </div>
              <h1 className="text-lg mt-5 mb-3 font-medium text-[#000]">
                Wall Panel 80
              </h1>
              <div className="w-full flex flex-row gap-3 items-center justify-start">
                <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[120px] text-xs">
                    Amentment QTY
                  </p>
                  580
                </div>
                <p>-</p>
                <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                    Actual QTY
                  </p>
                  580
                </div>
                <p>=</p>
                <div className=" w-[30%] h-[50px] bg-[#fafafa] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-[700] w-[90px] text-xs">
                    Difference
                  </p>
                  580
                </div>
              </div>
              <h1 className="text-lg mt-5 mb-3 font-medium text-[#000]">
                SS Wall Panel
              </h1>
              <div className="w-full flex flex-row gap-3 items-center justify-start">
                <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[120px] text-xs">
                    Amentment QTY
                  </p>
                  580
                </div>
                <p>-</p>
                <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                    Actual QTY
                  </p>
                  580
                </div>
                <p>=</p>
                <div className=" w-[30%] h-[50px] bg-[#fafafa] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-[700] w-[90px] text-xs">
                    Difference
                  </p>
                  580
                </div>
              </div>
              <h1 className="text-lg mt-5 mb-3 font-medium text-[#000]">
                Cladding Panel
              </h1>
              <div className="w-full flex flex-row gap-3 items-center justify-start">
                <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[120px] text-xs">
                    Amentment QTY
                  </p>
                  580
                </div>
                <p>-</p>
                <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                    Actual QTY
                  </p>
                  580
                </div>
                <p>=</p>
                <div className=" w-[30%] h-[50px] bg-[#fafafa] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-[700] w-[90px] text-xs">
                    Difference
                  </p>
                  580
                </div>
              </div>
              <h1 className="text-lg mt-5 mb-3 font-medium text-[#000]">
                Ceiling Panel
              </h1>
              <div className="w-full flex flex-row gap-3 items-center justify-start">
                <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[120px] text-xs">
                    Amentment QTY
                  </p>
                  580
                </div>
                <p>-</p>
                <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                    Actual QTY
                  </p>
                  580
                </div>
                <p>=</p>
                <div className=" w-[30%] h-[50px] bg-[#fafafa] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-[700] w-[90px] text-xs">
                    Difference
                  </p>
                  580
                </div>
              </div>
              <h1 className="text-lg  mb-3 font-medium text-[#000]">Doors</h1>
              <div className="w-full flex flex-row gap-3 items-center justify-start">
                <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[120px] text-xs">
                    Amentment QTY
                  </p>
                  580
                </div>
                <p>-</p>
                <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                    Actual QTY
                  </p>
                  580
                </div>
                <p>=</p>
                <div className=" w-[30%] h-[50px] bg-[#fafafa] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-[700] w-[90px] text-xs">
                    Difference
                  </p>
                  580
                </div>
              </div>
              <h1 className="text-lg mt-5 mb-3 font-medium text-[#000]">
                MS Conduit
              </h1>
              <div className="w-full flex flex-row gap-3 items-center justify-start">
                <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[120px] text-xs">
                    Amentment QTY
                  </p>
                  580
                </div>
                <p>-</p>
                <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                    Actual QTY
                  </p>
                  580
                </div>
                <p>=</p>
                <div className=" w-[30%] h-[50px] bg-[#fafafa] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-[700] w-[90px] text-xs">
                    Difference
                  </p>
                  580
                </div>
              </div>
              <h1 className="text-lg mt-5 mb-3 font-medium text-[#000]">
                Coving
              </h1>
              <div className="w-full flex flex-row gap-3 items-center justify-start">
                <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[120px] text-xs">
                    Amentment QTY
                  </p>
                  580
                </div>
                <p>-</p>
                <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                    Actual QTY
                  </p>
                  580
                </div>
                <p>=</p>
                <div className=" w-[30%] h-[50px] bg-[#fafafa] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-[700] w-[90px] text-xs">
                    Difference
                  </p>
                  580
                </div>
              </div>
              <h1 className="text-lg mt-5 mb-3 font-medium text-[#000]">2D</h1>
              <div className="w-full flex flex-row gap-3 items-center justify-start">
                <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[120px] text-xs">
                    Amentment QTY
                  </p>
                  580
                </div>
                <p>-</p>
                <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                    Actual QTY
                  </p>
                  580
                </div>
                <p>=</p>
                <div className=" w-[30%] h-[50px] bg-[#fafafa] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-[700] w-[90px] text-xs">
                    Difference
                  </p>
                  580
                </div>
              </div>
              <h1 className="text-lg mt-5 mb-3 font-medium text-[#000]">3D</h1>
              <div className="w-full flex flex-row gap-3 items-center justify-start">
                <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[120px] text-xs">
                    Amentment QTY
                  </p>
                  580
                </div>
                <p>-</p>
                <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                    Actual QTY
                  </p>
                  580
                </div>
                <p>=</p>
                <div className=" w-[30%] h-[50px] bg-[#fafafa] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-[700] w-[90px] text-xs">
                    Difference
                  </p>
                  580
                </div>
              </div>
              <h1 className="text-lg mt-5 mb-3 font-medium text-[#000]">
                Solid
              </h1>
              <div className="w-full flex flex-row gap-3 items-center justify-start">
                <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[120px] text-xs">
                    Amentment QTY
                  </p>
                  580
                </div>
                <p>-</p>
                <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                    Actual QTY
                  </p>
                  580
                </div>
                <p>=</p>
                <div className=" w-[30%] h-[50px] bg-[#fafafa] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-[700] w-[90px] text-xs">
                    Difference
                  </p>
                  580
                </div>
              </div>
              <h1 className="text-lg mt-5 mb-3 font-medium text-[#000]">
                L Angle
              </h1>
              <div className="w-full flex flex-row gap-3 items-center justify-start">
                <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[120px] text-xs">
                    Amentment QTY
                  </p>
                  580
                </div>
                <p>-</p>
                <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                    Actual QTY
                  </p>
                  580
                </div>
                <p>=</p>
                <div className=" w-[30%] h-[50px] bg-[#fafafa] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-[700] w-[90px] text-xs">
                    Difference
                  </p>
                  580
                </div>
              </div>
              <h1 className="text-lg mt-5 mb-3 font-medium text-[#000]">VP</h1>
              <div className="w-full flex flex-row gap-3 items-center justify-start">
                <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[120px] text-xs">
                    Amentment QTY
                  </p>
                  580
                </div>
                <p>-</p>
                <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                    Actual QTY
                  </p>
                  580
                </div>
                <p>=</p>
                <div className=" w-[30%] h-[50px] bg-[#fafafa] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-[700] w-[90px] text-xs">
                    Difference
                  </p>
                  580
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectBOQ && (
        <div className="w-full h-[100vh] overflow-y-scroll z-10  fixed top-0 start-0 bg-[#f0f0f030]  flex justify-center ">
          <div className=" w-[550px] h-[500px] flex flex-col selectBOQBox gap-3 my-32 rounded-lg p-6 bg-white opacity-[100] text-center ">
            <div className=" flex justify-between  bg-white">
              <h1 className=" text-2xl font-medium text-[#000000] selectBOQHeading opacity-[0.6]">
                Select fields to view BOQ Summary
              </h1>
              <div
                onClick={() => setShowAdd(true)}
                className="cursor-pointer text-lg font-medium opacity-[0.6] p-2 rounded-full"
              >
                +Add
              </div>
            </div>
            <hr className=" border border-[#000000] opacity-[0.2]" />

            <>
              <div className=" w-full flex flex-col gap-4 relative">
                {showAdd && (
                  <div className="absolute top-0 w-[300px] opacity-[1] items-center right-0 h-[70px] p-4 flex flex-row justify-between border border-[#0000001A] z-10 bg-[#c1e0ff] rounded-lg">
                    Name of Field
                    <button className=" items-center w-[70px] justify-center p-1 h-[35px] bg-gradient-to-r rounded-lg text-white flex flex-row gap-3 from-[#053BD3] to-[#03EAEA]">
                      <span className=" text-xs font-normal">Done</span>
                    </button>
                  </div>
                )}
                <div className="w-full flex flex-row justify-between">
                  <div className=" w-[50%] flex flex-row gap-2">
                    <div className="w-[25px] h-[25px] bg-gradient-to-r rounded from-[#053BD3] to-[#03EAEA] p-[3px] flex flex-row justify-center items-center">
                      <div className=" w-full h-full bg-white ">
                        <label class="container">
                          <input type="checkbox" />
                          <svg viewBox="0 0 64 64" height="100%" width="100%">
                            <path
                              d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                              pathLength="575.0541381835938"
                              class="path"
                            ></path>
                          </svg>
                        </label>
                      </div>
                    </div>
                    <h3 className=" opacity-[0.6] font-medium">
                      Wall Panel 50
                    </h3>
                  </div>
                  <div className=" w-[50%] flex flex-row gap-2">
                    <div className="w-[25px] h-[25px] bg-gradient-to-r rounded from-[#053BD3] to-[#03EAEA] p-[3px] flex flex-row justify-center items-center">
                      <div className=" w-full h-full bg-white ">
                        <label class="container">
                          <input type="checkbox" />
                          <svg viewBox="0 0 64 64" height="100%" width="100%">
                            <path
                              d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                              pathLength="575.0541381835938"
                              class="path"
                            ></path>
                          </svg>
                        </label>
                      </div>
                    </div>
                    <h3 className=" opacity-[0.6] font-medium">
                      Wall Panel 80
                    </h3>
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between">
                  <div className=" w-[50%] flex flex-row gap-2">
                    <div className="w-[25px] h-[25px] bg-gradient-to-r rounded from-[#053BD3] to-[#03EAEA] p-[3px] flex flex-row justify-center items-center">
                      <div className=" w-full h-full bg-white ">
                        <label class="container">
                          <input type="checkbox" />
                          <svg viewBox="0 0 64 64" height="100%" width="100%">
                            <path
                              d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                              pathLength="575.0541381835938"
                              class="path"
                            ></path>
                          </svg>
                        </label>
                      </div>
                    </div>
                    <h3 className=" opacity-[0.6] font-medium">
                      SS Wall Panel
                    </h3>
                  </div>
                  <div className=" w-[50%] flex flex-row gap-2">
                    <div className="w-[25px] h-[25px] bg-gradient-to-r rounded from-[#053BD3] to-[#03EAEA] p-[3px] flex flex-row justify-center items-center">
                      <div className=" w-full h-full bg-white ">
                        <label class="container">
                          <input type="checkbox" />
                          <svg viewBox="0 0 64 64" height="100%" width="100%">
                            <path
                              d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                              pathLength="575.0541381835938"
                              class="path"
                            ></path>
                          </svg>
                        </label>
                      </div>
                    </div>
                    <h3 className=" opacity-[0.6] font-medium">
                      Cladding Panel
                    </h3>
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between">
                  <div className=" w-[50%] flex flex-row gap-2">
                    <div className="w-[25px] h-[25px] bg-gradient-to-r rounded from-[#053BD3] to-[#03EAEA] p-[3px] flex flex-row justify-center items-center">
                      <div className=" w-full h-full bg-white ">
                        <label class="container">
                          <input type="checkbox" />
                          <svg viewBox="0 0 64 64" height="100%" width="100%">
                            <path
                              d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                              pathLength="575.0541381835938"
                              class="path"
                            ></path>
                          </svg>
                        </label>
                      </div>
                    </div>
                    <h3 className=" opacity-[0.6] font-medium">
                      Ceiling Panel
                    </h3>
                  </div>
                  <div className=" w-[50%] flex flex-row gap-2">
                    <div className="w-[25px] h-[25px] bg-gradient-to-r rounded from-[#053BD3] to-[#03EAEA] p-[3px] flex flex-row justify-center items-center">
                      <div className=" w-full h-full bg-white ">
                        <label class="container">
                          <input type="checkbox" />
                          <svg viewBox="0 0 64 64" height="100%" width="100%">
                            <path
                              d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                              pathLength="575.0541381835938"
                              class="path"
                            ></path>
                          </svg>
                        </label>
                      </div>
                    </div>
                    <h3 className=" opacity-[0.6] font-medium">Doors</h3>
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between">
                  <div className=" w-[50%] flex flex-row gap-2">
                    <div className="w-[25px] h-[25px] bg-gradient-to-r rounded from-[#053BD3] to-[#03EAEA] p-[3px] flex flex-row justify-center items-center">
                      <div className=" w-full h-full bg-white ">
                        <label class="container">
                          <input type="checkbox" />
                          <svg viewBox="0 0 64 64" height="100%" width="100%">
                            <path
                              d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                              pathLength="575.0541381835938"
                              class="path"
                            ></path>
                          </svg>
                        </label>
                      </div>
                    </div>
                    <h3 className=" opacity-[0.6] font-medium">MS CONDUIT</h3>
                  </div>
                  <div className=" w-[50%] flex flex-row gap-2">
                    <div className="w-[25px] h-[25px] bg-gradient-to-r rounded from-[#053BD3] to-[#03EAEA] p-[3px] flex flex-row justify-center items-center">
                      <div className=" w-full h-full bg-white ">
                        <label class="container">
                          <input type="checkbox" />
                          <svg viewBox="0 0 64 64" height="100%" width="100%">
                            <path
                              d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                              pathLength="575.0541381835938"
                              class="path"
                            ></path>
                          </svg>
                        </label>
                      </div>
                    </div>
                    <h3 className=" opacity-[0.6] font-medium">Coving</h3>
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between">
                  <div className=" w-[50%] flex flex-row gap-2">
                    <div className="w-[25px] h-[25px] bg-gradient-to-r rounded from-[#053BD3] to-[#03EAEA] p-[3px] flex flex-row justify-center items-center">
                      <div className=" w-full h-full bg-white ">
                        <label class="container">
                          <input type="checkbox" />
                          <svg viewBox="0 0 64 64" height="100%" width="100%">
                            <path
                              d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                              pathLength="575.0541381835938"
                              class="path"
                            ></path>
                          </svg>
                        </label>
                      </div>
                    </div>
                    <h3 className=" opacity-[0.6] font-medium">2D</h3>
                  </div>
                  <div className=" w-[50%] flex flex-row gap-2">
                    <div className="w-[25px] h-[25px] bg-gradient-to-r rounded from-[#053BD3] to-[#03EAEA] p-[3px] flex flex-row justify-center items-center">
                      <div className=" w-full h-full bg-white ">
                        <label class="container">
                          <input type="checkbox" />
                          <svg viewBox="0 0 64 64" height="100%" width="100%">
                            <path
                              d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                              pathLength="575.0541381835938"
                              class="path"
                            ></path>
                          </svg>
                        </label>
                      </div>
                    </div>
                    <h3 className=" opacity-[0.6] font-medium">3D</h3>
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between">
                  <div className=" w-[50%] flex flex-row gap-2">
                    <div className="w-[25px] h-[25px] bg-gradient-to-r rounded from-[#053BD3] to-[#03EAEA] p-[3px] flex flex-row justify-center items-center">
                      <div className=" w-full h-full bg-white ">
                        <label class="container">
                          <input type="checkbox" />
                          <svg viewBox="0 0 64 64" height="100%" width="100%">
                            <path
                              d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                              pathLength="575.0541381835938"
                              class="path"
                            ></path>
                          </svg>
                        </label>
                      </div>
                    </div>
                    <h3 className=" opacity-[0.6] font-medium">Solid</h3>
                  </div>
                  <div className=" w-[50%] flex flex-row gap-2">
                    <div className="w-[25px] h-[25px] bg-gradient-to-r rounded from-[#053BD3] to-[#03EAEA] p-[3px] flex flex-row justify-center items-center">
                      <div className=" w-full h-full bg-white ">
                        <label class="container">
                          <input type="checkbox" />
                          <svg viewBox="0 0 64 64" height="100%" width="100%">
                            <path
                              d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                              pathLength="575.0541381835938"
                              class="path"
                            ></path>
                          </svg>
                        </label>
                      </div>
                    </div>
                    <h3 className=" opacity-[0.6] font-medium">L Angle</h3>
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between">
                  <div className=" w-[50%] flex flex-row gap-2">
                    <div className="w-[25px] h-[25px] bg-gradient-to-r rounded from-[#053BD3] to-[#03EAEA] p-[3px] flex flex-row justify-center items-center">
                      <div className=" w-full h-full bg-white ">
                        <label class="container">
                          <input type="checkbox" />
                          <svg viewBox="0 0 64 64" height="100%" width="100%">
                            <path
                              d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                              pathLength="575.0541381835938"
                              class="path"
                            ></path>
                          </svg>
                        </label>
                      </div>
                    </div>
                    <h3 className=" opacity-[0.6] font-medium">VP</h3>
                  </div>
                </div>
                <div className=" w-full flex flex-row justify-end">
                  <button
                    onClick={() => {
                      setSelectBOQ(false);
                      setShowSummary(true);
                    }}
                    className=" items-center w-[200px] justify-center p-1 h-[50px] bg-gradient-to-r rounded-full text-white flex flex-row gap-3 from-[#053BD3] to-[#03EAEA]"
                  >
                    <span className=" text-sm font-medium">
                      View BOQ Summary
                    </span>
                  </button>
                </div>
              </div>
            </>
          </div>
        </div>
      )}
    </>
  );
}

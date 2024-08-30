/* eslint-disable react/no-unknown-property */

import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function Sales() {

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
          marginTop: 6,
        }}
      >
        <span className=" text-[#306BFF]">Click to Upload</span> or drag & drop
      </div>
    </div>
  );
  const navigate = useNavigate();
  return (
    <>
      <div className="lg:ms-[18%] lg:w-[82%] mt-14 w-full  md:p-10 py-10 px-2 bg-[#fff] ">
        
          <div className="w-full flex flex-row items-center md:flex-nowrap gap-5 flex-wrap border p-3 rounded-xl border-[rgba(0, 0, 0, 0.10)] justify-between">
            <div className=" md:w-[50%] flex flex-row gap-4 ">
              <div className="flex flex-col h-full justify-center">
                <h2 className=" opacity-[0.6] text-xl font-medium mt-3">May</h2>
                <p className=" opacity-[0.5] text-sm">
                  Today is Saturday, Jul 9th, 2023
                </p>
              </div>
              <vr className="border border-[#000000] opacity-[0.2]" />
              {/* <div className=" w-[200px]">
                <h3 className="font-medium ">Initial PO</h3>
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
              <div className=" w-[200px]">
                <h3 className="font-medium">Service PO</h3>
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
              </div> */}
            </div>
            <div className=" md:w-[50%] flex flex-row gap-4 justify-end">
              <div className="  justify-center bg-gradient-to-r from-[#053BD3] to-[#03EAEA] p-[1px] rounded-lg">
                <button className=" w-[200px] items-center justify-center p-2  px-5 h-[38px] flex  font-medium rounded-lg text-white  flex-row gap-1 ">
                  <AiOutlinePlus className="text-white text-lg" />
                  <span className=" text-sm">Add File</span>
                </button>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-row lg:flex-nowrap flex-wrap  gap-5 mt-10">
            <div className=" w-[300px]">
              <h3 className="font-medium ">Job Card</h3>
              <div className=" w-[250px] mt-5 justify-center bg-gradient-to-r from-[#053BD3] to-[#03EAEA] p-[1px] rounded-full">
                <button className="  w-full items-center justify-center p-2  px-5 h-[50px] flex  font-medium rounded-2xl text-white  flex-row gap-1 ">
                  <span className=" text-[16px] font-semibold">
                    View/Edit Job card
                  </span>
                </button>
              </div>
            </div>
            <div className=" w-[300px]">
              <h3 className="font-medium ">Estimate</h3>
              <div className="  w-full h-[130px] rounded-lg p-1">
                <Upload
                  listType="picture-card"
                  beforeUpload={beforeUpload}
                  fileList={fileList}
                  onChange={handleChange}
                  style={{
                    backgroundColor: "white",
                  }}
                >
                  {fileList.length >= 1 ? null : uploadButton}
                </Upload>
              </div>
            </div>
            <div className=" w-[300px]">
              <h3 className="font-medium ">Offer</h3>
              <div className="  w-full h-[130px] rounded-lg p-1">
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
          <div className="w-full flex flex-row lg:flex-nowrap flex-wrap  gap-5 mt-10">
            <div className=" w-[300px]">
              <h3 className="font-medium ">PO</h3>
              <div className="  w-full h-[130px] rounded-lg p-1">
                <Upload
                  listType="picture-card"
                  beforeUpload={beforeUpload}
                  fileList={fileList}
                  onChange={handleChange}
                  style={{
                    backgroundColor: "white",
                  }}
                >
                  {fileList.length >= 1 ? null : uploadButton}
                </Upload>
              </div>
            </div>
            <div className=" w-[300px]">
              <h3 className="font-medium ">Tendor (Mails & Drawungs)</h3>
              <div className="  w-full h-[130px] rounded-lg p-1">
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
              <p className=" text-[#306BFF] mt-4 text-xs">Uploaded File</p>
              <div className=" w-[150px] mt-2 h-[50px] p-2 flex bg-[#F4F6F8] rounded-lg items-center flex-row gap-2">
                <img
                  src="/assets/images/excel.png"
                  className=" w-[30px] h-[30px]"
                />
                <span className="text-sm font-medium">V.2.3.0.exl</span>
              </div>
            </div>
          </div>
          <p className=" opacity-[0.5]  text-sm font-semibold my-4">
            Note : Job card and PO will be visible to all teams.
          </p>
          <div className=" w-full flex gap-4 items-center sm:flex-nowrap flex-wrap justify-end flex-row ">
            <p className=" opacity-[0.5]  text-sm font-semibold my-4">
              Note: The files will be directly sent to Planning and designing
              teams.
            </p>

            <button
              onClick={() => navigate("/sales-team-table")}
              className=" bg-gradient-to-r from-[#053BD3] to-[#03EAEA] w-[150px]  items-center justify-center p-2  px-5 h-[40px] flex  font-medium rounded-lg text-white  flex-row gap-1 "
            >
              <span className=" text-sm">Submit</span>
            </button>
          </div>
        
      </div>

     
    </>
  );
}

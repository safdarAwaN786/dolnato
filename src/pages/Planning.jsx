/* eslint-disable react/no-unknown-property */

import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import {
  FaCaretLeft,
  FaCaretRight,
} from "react-icons/fa";
import { Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";


export default function Planning() {

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
      <div className="lg:ms-[18%] lg:w-[82%] bg-[#F4F6F8] w-full  ">
        <div className="w-full flex md:px-10 px-3 pb-1 pt-4  bg-white flex-col">
          <h1 className=" md:text-4xl text-2xl font-medium lg:ms-0 ms-10 mb-0 ">Glenmark</h1>
          <div className=" flex flex-row md:flex-nowrap flex-wrap gap-2 w-full mt-8 items-end p-3 justify-start">
            <div className=" w-[200px]">
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
            <div className=" w-[200px]">
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
            <div className=" w-[200px]">
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

        <div className=" md:p-10 p-4 w-full  overflow-x-scroll">
          <div className="min-w-[2000px] flex flex-row  items-start justify-start">
            <div className="w-[270px] flex flex-col gap-6">
              <div className="w-full    p-3 ">
                <div className="flex flex-row bg-white  p-2 items-center justify-between rounded-lg">
                  <Checkbox onChange={() => {}}></Checkbox>
                  <p className=" text-[#505050] text-sm ">TDS</p>
                  <FaCaretLeft />
                </div>
              </div>
              <div className="w-full rounded-l-lg h-[200px] flex flex-col justify-between bg-white  p-2 ">
                <div>
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
              </div>
            </div>

            <div className="w-[270px] flex flex-col gap-6">
              <div className="w-full    p-3 ">
                <div className="flex flex-row bg-white  p-2 items-center justify-between rounded-lg">
                  <Checkbox onChange={() => {}}></Checkbox>
                  <p className=" text-[#505050] text-sm ">Approved design</p>
                  <FaCaretLeft />
                </div>
              </div>

              <div className="w-full h-[200px] flex flex-col justify-between bg-white  p-2 ">
                <div>
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
                      <p className=" text-xs mx-1 mb-0 "> Director Approved</p>
                    </div>
                    <p className=" text-[#828282] text-xs">on Nov 16, 2023</p>
                  </div>
                </div>

                <div className="w-full text-xs py-3 mt-5 h-[50px] bg-[#F4F6F8] text-[#828282] flex flex-row justify-between items-center p-2 rounded-lg">
                  Signed and approved by Designer, Senior & Client
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
              </div>
            </div>
            <div className="w-[270px] flex flex-col gap-6">
              <div className="w-full    p-3 ">
                <div className="flex flex-row bg-white  p-2 items-center justify-between rounded-lg">
                  <Checkbox onChange={() => {}}></Checkbox>
                  <p className=" text-[#505050] text-sm ">Amendment BOQ</p>
                  <FaCaretLeft />
                </div>
              </div>
              <div className="w-full h-[200px] flex flex-col justify-between bg-white  p-2 ">
                <div>
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
                      <p className=" text-xs mx-1 mb-0 "> Director Approved</p>
                    </div>
                    <p className=" text-[#828282] text-xs">on Nov 16, 2023</p>
                  </div>
                </div>

                <div className="w-full text-xs py-3 mt-5 bg-[#F4F6F8] h-[50px] text-[#828282] flex flex-row justify-between items-center p-2 rounded-lg">
                  +8 Release
                  <FaCaretRight className=" text-lg" />
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
              </div>
            </div>

            <div className="w-[270px] flex flex-col gap-6">
              <div className="w-full    p-3 ">
                <div className="flex flex-row bg-white  p-2 items-center justify-between rounded-lg">
                  <Checkbox onChange={() => {}}></Checkbox>
                  <p className=" text-[#505050] text-sm ">PO Comparison</p>
                  <FaCaretLeft />
                </div>
              </div>
              <div className="w-full h-[200px] flex flex-col justify-between bg-white  p-2 ">
                <div>
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
              </div>
            </div>

            <div className="w-[270px] flex flex-col gap-6">
              <div className="w-full    p-3 ">
                <div className="flex flex-row bg-white  p-2 items-center justify-between rounded-lg">
                  <Checkbox onChange={() => {}}></Checkbox>
                  <p className=" text-[#505050] text-sm ">BOQ Comment</p>
                  <FaCaretLeft />
                </div>
              </div>
              <div className="w-full h-[200px] flex flex-col justify-between bg-white  p-2 ">
                <div className="w-full text-xs py-3 border-2 border-dashed  bg-[#F4F6F8] h-[55px] text-[#828282] flex flex-row justify-between items-center p-2 rounded-lg">
                  Senior will comment here
                </div>
              </div>
              <div className="w-full bg-white  p-2 ">
                <div className="w-full text-xs py-3 border-2 border-dashed  bg-[#F4F6F8] h-[55px] text-[#828282] flex flex-row justify-between items-center p-2 rounded-lg">
                  Senior will comment here
                </div>
              </div>
            </div>
            
            <div className="w-[270px] flex flex-col gap-6">
              <div className="w-full    p-3 ">
                <div className="flex flex-row bg-white  p-2 items-center justify-between rounded-lg">
                  <Checkbox onChange={() => {}}></Checkbox>
                  <p className=" text-[#505050] text-sm ">Lot wise distribution</p>
                  <FaCaretLeft />
                </div>
              </div>
              <div className="w-full h-[200px] flex flex-col justify-between bg-white  p-2 ">
                <div>
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
                      <p className=" text-xs mx-1 mb-0 "> Director Approved</p>
                    </div>
                    <p className=" text-[#828282] text-xs">on Nov 16, 2023</p>
                  </div>
                </div>

                <div className="w-full text-xs py-3 mt-5 bg-[#F4F6F8] h-[50px] text-[#828282] flex flex-row justify-between items-center p-2 rounded-lg">
                  +8 Release
                  <FaCaretRight className=" text-lg" />
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
              </div>
            </div>


            <div className="w-[270px] flex flex-col gap-6">
              <div className="w-full    p-3 ">
                <div className="flex flex-row bg-white  p-2 items-center justify-between rounded-lg">
                  <Checkbox onChange={() => {}}></Checkbox>
                  <p className=" text-[#505050] text-sm ">Indent</p>
                  <FaCaretLeft />
                </div>
              </div>
              <div className="w-full h-[200px] flex flex-col justify-between bg-white  p-2 ">
                <div className=" h-[60px]">
                  <Upload
                    listType="picture-card"
                    beforeUpload={beforeUpload}
                    fileList={fileList2}
                    onChange={handleChange2}
                  >
                    {fileList2.length >= 1 ? null : uploadButton}
                  </Upload>
                  <div className="flex flex-row text-[#00900D] mb-2 justify-between items-center gap-1 mt-2">
                    <div className=" flex flex-row">
                      <FiCheckCircle className=" text-xs" />
                      <p className=" text-xs mx-1 mb-0 ">Approved</p>
                    </div>
                    <p className=" text-[#828282] text-xs">on Nov 16, 2023</p>
                  </div>
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
              </div>
            </div>

            
            
            <div className="w-[270px] flex flex-col gap-6">
              <div className="w-full    p-3 ">
                <div className="flex flex-row bg-white  p-2 items-center justify-between rounded-lg">
                  <Checkbox onChange={() => {}}></Checkbox>
                  <p className=" text-[#505050] text-sm ">Indent Senior Comment</p>
                  <FaCaretLeft />
                </div>
              </div>
              <div className="w-full h-[200px] flex flex-col justify-between bg-white rounded-r-lg  p-2 ">
                <div className="w-full text-xs py-3 border-2 border-dashed  bg-[#F4F6F8] h-[55px] text-[#828282] flex flex-row justify-between items-center p-2 rounded-lg">
                  Senior will comment here
                </div>
              </div>
              <div className="w-full bg-white rounded-r-lg  p-2 ">
                <div className="w-full text-xs py-3 border-2 border-dashed  bg-[#F4F6F8] h-[55px] text-[#828282] flex flex-row justify-between items-center p-2 rounded-lg">
                  Senior will comment here
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>

     
    </>
  );
}

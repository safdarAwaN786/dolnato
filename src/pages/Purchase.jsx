/* eslint-disable react/no-unknown-property */

import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";


export default function Purchase() {

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
          <h1 className=" md:text-4xl text-2xl font-medium mb-0 lg:ms-0 ms-10 ">Glenmark</h1>

          <h3 className="font-medium mt-3">Indent</h3>
          <div className="  sm:w-[300px] min-w-[200px] rounded-lg p-1">
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
            <div className="flex flex-row text-[#00900D] items-center gap-1 mt-2">
              <FiCheckCircle className="text-lg" />
              <p className=" text-sm mx-1 mb-0 "> Senior Approved</p>
              <p className=" text-[#828282] text-sm">on Nov 16, 2023</p>
            </div>
          </div>
        </div>

        <div className=" p-10 w-full min-h-[80vh]  overflow-x-scroll">
          <div className="min-w-[1200px] flex flex-row  items-start justify-start gap-8">
            <div className="w-[100px] text-lg font-medium">Indents</div>
            <div className="w-[300px] flex flex-col gap-3">
              <div className="w-full bg-white p-2 rounded-lg">
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
              <div className="w-full bg-white p-2 rounded-lg">
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
              <div className="w-full bg-white p-2 rounded-lg">
                <Upload
                  listType="picture-card"
                  beforeUpload={beforeUpload}
                  fileList={fileList2}
                  onChange={handleChange2}
                >
                  {fileList2.length >= 1 ? null : uploadButton}
                </Upload>
                {/* <div className="flex flex-row text-[#00900D] items-center gap-1 mt-2">
                  <FiCheckCircle className=" text-xs" />
                  <p className=" text-xs mx-1 mb-0 "> Director Approved</p>
                  <p className=" text-[#828282] text-xs">on Nov 16, 2023</p>
                </div> */}
              </div>
            </div>
            <div className="w-[300px] flex flex-col gap-3">
              <div className="w-full bg-white p-2 rounded-lg">
                <Checkbox onChange={() => {}}>Purchase Order</Checkbox>
              </div>
              <div className="w-full bg-white p-2 rounded-lg">
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
              <div className="w-full bg-white p-2 rounded-lg">
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
              <div className="w-full bg-white p-2 rounded-lg">
                <Upload
                  listType="picture-card"
                  beforeUpload={beforeUpload}
                  fileList={fileList2}
                  onChange={handleChange2}
                >
                  {fileList2.length >= 1 ? null : uploadButton}
                </Upload>
                {/* <div className="flex flex-row text-[#00900D] items-center gap-1 mt-2">
                  <FiCheckCircle className=" text-xs" />
                  <p className=" text-xs mx-1 mb-0 "> Director Approved</p>
                  <p className=" text-[#828282] text-xs">on Nov 16, 2023</p>
                </div> */}
              </div>
            </div>
            <div className="w-[300px] flex flex-col gap-3">
              <div className="w-full bg-white p-2 rounded-lg">
                <Checkbox onChange={() => {}}>Delivery Dates</Checkbox>
              </div>
              <div className="w-full bg-white p-2 rounded-lg">
                <div className=" bg-[#F4F6F8] flex justify-start text-[#000000] text-lg items-center p-3">
                  12 June 2024
                </div>
              </div>
              <div className="w-full bg-white p-2 rounded-lg">
                <div className=" bg-[#F4F6F8] flex justify-start text-[#000000] text-lg items-center p-3">
                  12 June 2024
                </div>
              </div>
              <div className="w-full bg-white p-2 rounded-lg">
                <Upload
                  listType="picture-card"
                  beforeUpload={beforeUpload}
                  fileList={fileList2}
                  onChange={handleChange2}
                >
                  {fileList2.length >= 1 ? null : uploadButton}
                </Upload>
                {/* <div className="flex flex-row text-[#00900D] items-center gap-1 mt-2">
                  <FiCheckCircle className=" text-xs" />
                  <p className=" text-xs mx-1 mb-0 "> Director Approved</p>
                  <p className=" text-[#828282] text-xs">on Nov 16, 2023</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

   
    </>
  );
}

/* eslint-disable react/no-unknown-property */

import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Upload } from "antd";
import { Dropdown } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function Factory() {
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
  const navigate = useNavigate();
  const items = [
    {
      key: "1",
      label: <a onClick={() => navigate("/senior")}>Senior</a>,
    },
    {
      key: "2",
      label: <a onClick={() => navigate("/designers")}>Designers</a>,
    },
    {
      key: "3",
      label: <a onClick={() => navigate("/planning")}>Planning</a>,
    },
    {
      key: "4",
      label: <a onClick={() => navigate("/purchase")}>Purchase</a>,
    },
    {
      key: "5",
      label: <a onClick={() => navigate("/factory")}>Factory</a>,
    },
    {
      key: "6",
      label: <a onClick={() => navigate("/project")}>Project</a>,
    },
    {
      key: "7",
      label: <a onClick={() => navigate("/directors")}>Directors</a>,
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
      <div className="lg:ms-[18%] lg:w-[82%] bg-[#F4F6F8] w-full  ">
        <div className="w-full flex md:px-10 px-3 pb-1 pt-4  bg-white flex-col">
          <h1 className="  md:text-4xl text-2xl font-medium mb-0 lg:ms-0 ms-10">
            Glenmark
          </h1>
          <div className=" w-full flex flex-row gap-2 md:flex-nowrap flex-wrap  mt-8 items-end p-3 justify-start">
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
            <div className=" pb-2 w-[180px]">
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <div
                  className={`w-full items-center rounded-3xl p-2 py-53 bg-gradient-to-r from-[#053BD3] to-[#03EAEA] text-white  cursor-pointer text-lg    flex flex-row justify-center gap-3 h-[50px] font-medium text-center`}
                >
                  Wall Panel <FaAngleDown className="text-white text-xl" />
                </div>
              </Dropdown>
            </div>
          </div>
        </div>

        <div className=" md:p-10 py-10 px-4 w-full  min-h-[73vh]">
          <div className="flex min-h-[50vh] md:px-6 px-2 py-4 flex-col gap-4 bg-[#FFFFFF] lg:w-[70%] w-full  border border-[#B5BBC2] rounded-2xl">
            <h1 className="md:text-2xl text-xl font-[600]">
              Raw Material - Wall Panel
            </h1>
            <div className=" w-full overflow-x-scroll">
              <div className=" min-w-[600px]">

              
              <div className="w-full flex flex-row gap-3 items-center mt-1 justify-start">
                <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                    Total Quantity
                  </p>
                  580
                </div>
                <p>-</p>
                <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                    Done
                  </p>
                  580
                </div>
                <p>=</p>
                <div className=" w-[30%] h-[50px] bg-[#fafafa] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                  <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-[700] w-[90px] text-xs">
                    Pending
                  </p>
                  580
                </div>
              </div>
              <div className=" bg-white border border-[#0000001a] rounded-lg mt-5  p-4  flex flex-col w-full">
                <h1 className="text-lg mt-4 mb-3 font-medium text-[#000]">
                  Shearing
                </h1>
                <div className="w-full flex flex-row gap-3 items-center justify-start">
                  <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                    <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                      Total Quantity
                    </p>
                    580
                  </div>
                  <p>-</p>
                  <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                    <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                      Done
                    </p>
                    580
                  </div>
                  <p>=</p>
                  <div className=" w-[30%] h-[50px] bg-[#fafafa] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                    <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-[700] w-[90px] text-xs">
                      Pending
                    </p>
                    580
                  </div>
                </div>
                <h1 className="text-lg mt-4 mb-3 font-medium text-[#000]">
                  Cut to Length
                </h1>
                <div className="w-full flex flex-row gap-3 items-center justify-start">
                  <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                    <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                      Total Quantity
                    </p>
                    580
                  </div>
                  <p>-</p>
                  <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                    <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                      Done
                    </p>
                    580
                  </div>
                  <p>=</p>
                  <div className=" w-[30%] h-[50px] bg-[#fafafa] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                    <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-[700] w-[90px] text-xs">
                      Pending
                    </p>
                    580
                  </div>
                </div>
                <h1 className="text-lg mt-4 mb-3 font-medium text-[#000]">
                  Bending
                </h1>
                <div className="w-full flex flex-row gap-3 items-center justify-start">
                  <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                    <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                      Total Quantity
                    </p>
                    580
                  </div>
                  <p>-</p>
                  <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                    <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                      Done
                    </p>
                    580
                  </div>
                  <p>=</p>
                  <div className=" w-[30%] h-[50px] bg-[#fafafa] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                    <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-[700] w-[90px] text-xs">
                      Pending
                    </p>
                    580
                  </div>
                </div>
                <h1 className="text-lg mt-4 mb-3 font-medium text-[#000]">
                  Power Coating
                </h1>
                <div className="w-full flex flex-row gap-3 items-center justify-start">
                  <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                    <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                      Total Quantity
                    </p>
                    580
                  </div>
                  <p>-</p>
                  <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                    <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                      Done
                    </p>
                    580
                  </div>
                  <p>=</p>
                  <div className=" w-[30%] h-[50px] bg-[#fafafa] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                    <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-[700] w-[90px] text-xs">
                      Pending
                    </p>
                    580
                  </div>
                </div>
                <h1 className="text-lg mt-4 mb-3 font-medium text-[#000]">
                  Assembly
                </h1>
                <div className="w-full flex flex-row gap-3 items-center justify-start">
                  <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                    <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                      Total Quantity
                    </p>
                    580
                  </div>
                  <p>-</p>
                  <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                    <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                      Done
                    </p>
                    580
                  </div>
                  <p>=</p>
                  <div className=" w-[30%] h-[50px] bg-[#fafafa] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                    <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-[700] w-[90px] text-xs">
                      Pending
                    </p>
                    580
                  </div>
                </div>
                <h1 className="text-lg mt-4 mb-3 font-medium text-[#000]">
                  Puffing/Pressing
                </h1>
                <div className="w-full flex flex-row gap-3 items-center justify-start">
                  <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                    <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                      Total Quantity
                    </p>
                    580
                  </div>
                  <p>-</p>
                  <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                    <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                      Done
                    </p>
                    580
                  </div>
                  <p>=</p>
                  <div className=" w-[30%] h-[50px] bg-[#fafafa] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                    <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-[700] w-[90px] text-xs">
                      Pending
                    </p>
                    580
                  </div>
                </div>
                <h1 className="text-lg mt-4 mb-3 font-medium text-[#000]">
                  Quality Check
                </h1>
                <div className="w-full flex flex-row gap-3 items-center justify-start">
                  <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                    <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                      Total Quantity
                    </p>
                    580
                  </div>
                  <p>-</p>
                  <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                    <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                      Done
                    </p>
                    580
                  </div>
                  <p>=</p>
                  <div className=" w-[30%] h-[50px] bg-[#fafafa] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                    <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-[700] w-[90px] text-xs">
                      Pending
                    </p>
                    580
                  </div>
                </div>
                <h1 className="text-lg mt-4 mb-3 font-medium text-[#000]">
                  Packaging
                </h1>
                <div className="w-full flex flex-row gap-3 items-center justify-start">
                  <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                    <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                      Total Quantity
                    </p>
                    580
                  </div>
                  <p>-</p>
                  <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                    <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                      Done
                    </p>
                    580
                  </div>
                  <p>=</p>
                  <div className=" w-[30%] h-[50px] bg-[#fafafa] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                    <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-[700] w-[90px] text-xs">
                      Pending
                    </p>
                    580
                  </div>
                </div>
                <h1 className="text-lg mt-4 mb-3 font-medium text-[#000]">
                  Dispatch
                </h1>
                <div className="w-full flex flex-row gap-3 items-center justify-start">
                  <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                    <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                      Total Quantity
                    </p>
                    580
                  </div>
                  <p>-</p>
                  <div className=" w-[30%] h-[50px] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
                    <p className="bg-white p-1 mt-[-28px] text-[#707C8B] font-normal w-[100px] text-xs">
                      Done
                    </p>
                    580
                  </div>
                  <p>=</p>
                  <div className=" w-[30%] h-[50px] bg-[#fafafa] rounded-lg border-dashed p-4 border border-[#B5BBC2]">
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
        </div>
      </div>
    </>
  );
}

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

export default function Factory() {
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
            <div className=" pb-2 w-[16%]">
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

        <div className=" p-10 w-full min-h-[73vh]">
          <div className="flex min-h-[50vh] px-6 py-4 flex-col gap-4 bg-[#FFFFFF] w-[70%] border border-[]#B5BBC2] rounded-2xl">
            <h1 className="text-2xl font-[600]">Raw Material - Wall Panel</h1>
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

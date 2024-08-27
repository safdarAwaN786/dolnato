/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Select from "react-select";
import { RxCross2 } from "react-icons/rx";
import Datepicker from "react-tailwindcss-datepicker";
import { useNavigate } from "react-router-dom";

export default function LoadManagement() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState(false);
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  const cores = [
    { value: "Core 1", label: "Core 1" },
    { value: "Core 2", label: "Core 2" },
    { value: "Core 3", label: "Core 3" },
    { value: "Core 4", label: "Core 4" },
    { value: "Core 5", label: "Core 5" },
    { value: "Core 6", label: "Core 6" },
  ];
  const machines = [
    { value: "Internal Lighting - POE (POE)", label: "Internal Lighting - POE (POE)" },
    { value: "Office Work Station - Small Power (OSP)", label: "Office Work Station - Small Power (OSP)" },
    { value: "General Purpose Socket (GPS)", label: "General Purpose Socket (GPS)" },
    { value: "Odour Control units (OCU)", label: "Odour Control units (OCU)" },
    { value: "Insect Control Units (ICU)", label: "Insect Control Units (ICU)" },
    { value: "Kettles (KET)", label: "Kettles (KET)" },
    { value: "Sterilizer (STR)", label: "Sterilizer (STR)" },
    { value: "Compactor (COP)", label: "Compactor (COP)" },
    { value: "Coffee Machines (COF)", label: "Coffee Machines (COF)" },
    { value: "Micro Wave Ovens (MWO)", label: "Micro Wave Ovens (MWO)" },
    { value: "Dishwasher (DWS)", label: "Dishwasher (DWS)" },
    { value: "Buffet Units (Cold holding, hot holding) (BFU)", label: "Buffet Units (Cold holding, hot holding) (BFU)" },
    { value: "Water Cooler (WAC)", label: "Water Cooler (WAC)" },
    { value: "Water Dispensers (WDS)", label: "Water Dispensers (WDS)" },
    { value: "GYM Equipment (GYE)", label: "GYM Equipment (GYE)" },
    { value: "Copy Machine (COM)", label: "Copy Machine (COM)" },
    { value: "Scaning Machine (SCM)", label: "Scaning Machine (SCM)" },
    { value: "Printer (PTR)", label: "Printer (PTR)" },
    { value: "Shredder Machine (SHM)", label: "Shredder Machine (SHM)" },
    { value: "MEETING ROOM FLOOR BOX (MRF)", label: "MEETING ROOM FLOOR BOX (MRF)" },
    { value: "WAP (WAP)", label: "WAP (WAP)" },
    { value: "Passenger Lifts (PAL)", label: "Passenger Lifts (PAL)" },
    { value: "Fireman Lifts (FAL)", label: "Fireman Lifts (FAL)" },
    { value: "Goods Lift (GOL)", label: "Goods Lift (GOL)" },
    { value: "Monorail (MOR)", label: "Monorail (MOR)" },
    { value: "Davit (DVT)", label: "Davit (DVT)" },
    { value: "Solar Robotic Cleaning (SRC)", label: "Solar Robotic Cleaning (SRC)" }
  ];
  
  const levels = [
    { value: "Level 1", label: "Level 1" },
    { value: "Level 2", label: "Level 2" },
    { value: "Level 3", label: "Level 3" },
    { value: "Level 4", label: "Level 4" },
    { value: "Level 5", label: "Level 5" },
    { value: "Level 6", label: "Level 6" },
    { value: "Level 7", label: "Level 7" },
  ];
  const [coreSelected, setCoreSelected] = useState(null);
  const [levelSelected, setLevelSelected] = useState(null);
  const navigate = useNavigate();
  return (
    <>
      <Sidebar currentTab={4} />
      <div className="w-full">
        <div className="sm:ms-[20%] sm:w-[80%] min-h-[92vh] w-full p-1 bg-neutral-700 px-5 mt-14">
          <div className="w-full px-2 border-2 py-2 border-slate-300 bg-slate-700 flex flex-row justify-between mt-10 rounded">
            <div className="w-[25%] flex justify-center flex-col text-center px-10">
              <Select
                onChange={(selected) => {
                  setCoreSelected(selected.value);
                }}
                placeholder="Select Core"
                options={cores}
              />
            </div>
            <div className="w-[25%] flex justify-center flex-col text-center px-10">
              {coreSelected && (
                <Select
                  styles={{
                    control: (defaultStyles) => ({
                      ...defaultStyles,

                      padding: "0px",
                      height: "10px",
                      border: "none",
                    }),
                  }}
                  onChange={(selected) => {
                    setLevelSelected(selected.value);
                  }}
                  placeholder="Select Level"
                  options={levels}
                />
              )}
            </div>
            <div className="w-[35%] flex justify-center flex-col text-center px-10">
              {levelSelected && (
                <Select
                  styles={{
                    control: (defaultStyles) => ({
                      ...defaultStyles,

                      padding: "0px",
                      height: "10px",
                      border: "none",
                    }),
                  }}
                  onChange={(selected) => {
                    setSelectedMachine(selected.value);
                  }}
                  placeholder="Select Load"
                  options={machines}
                />
              )}
            </div>
            <div className="w-[22%] flex justify-center flex-col text-center px-10">
              <button
                onClick={() => navigate("/scheduler")}
                className="w-[200px] bg-blue-600 text-white p-2 font-bold rounded"
              >
                Master Schedule
              </button>
            </div>
          </div>
          {selectedMachine === "Coffee Machines (COF)" && (
            <div className="relative mt-5 overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-400">
                <thead className="text-xs  uppercase  bg-gray-700 text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      location
                    </th>
                    <th scope="col" className="px-6 py-3">
                      On/Off
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Scheduling
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium  whitespace-nowrap text-white"
                    >
                      Coffee Machine 01
                    </th>
                    <td className="px-6 py-4">2456</td>
                    <td className="px-6 py-4">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                        />
                        <div className="relative w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => setOpenModal(true)}
                        className="bg-blue-600 text-white rounded p-2 "
                      >
                        Schedule
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium  whitespace-nowrap text-white"
                    >
                      Coffee Machine 02
                    </th>
                    <td className="px-6 py-4">6675</td>
                    <td className="px-6 py-4">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                        />
                        <div className="relative w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => setOpenModal(true)}
                        className="bg-blue-600 text-white rounded p-2 "
                      >
                        Schedule
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium  whitespace-nowrap text-white"
                    >
                      Coffee Machine 03
                    </th>
                    <td className="px-6 py-4">9810</td>
                    <td className="px-6 py-4">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                        />
                        <div className="relative w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => setOpenModal(true)}
                        className="bg-blue-600 text-white rounded p-2 "
                      >
                        Schedule
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium  whitespace-nowrap text-white"
                    >
                      Coffee Machine 04
                    </th>
                    <td className="px-6 py-4">7719</td>
                    <td className="px-6 py-4">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                        />
                        <div className="relative w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => setOpenModal(true)}
                        className="bg-blue-600 text-white rounded p-2 "
                      >
                        Schedule
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      {openModal && (
        <div className="w-full h-[100vh] overflow-y-scroll fixed top-0 start-0 bg-[#61676676] flex justify-center items-center">
          <div className=" w-[500px] h-[500px] rounded bg-zinc-800 text-center ">
            <div className=" h-[40px] bg-slate-700 rounded flex justify-between text-white font-bold p-2 items-center">
              Schedule Event
              <RxCross2
                className="text-white text-xl cursor-pointer"
                onClick={() => setOpenModal(false)}
              />
            </div>
            <div className="flex w-full flex-col gap-2 p-3">
              <div className=" p-2">
                <form className="w-full  grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-start mb-2 text-sm font-medium text-white">
                      Start time:
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <input
                        type="time"
                        id="start-time"
                        className=" border leading-none  text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white  focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      for="end-time"
                      className="block mb-2 text-start text-sm font-medium text-white"
                    >
                      End time:
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <input
                        type="time"
                        id="end-time"
                        className=" border leading-none  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </form>
                <div className="my-5 ">
                  <Datepicker
                    placeholder="Select Date Range"
                    dark={true}
                    separator="to"
                    containerClassName="bg-gray-700 rounded p-1"
                    inputClassName="bg-gray-700 text-white w-[90%] p-1 border-0 border-black rounded"
                    toggleClassName="text-white"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    showShortcuts={true}
                  />
                </div>

                <label
                  for="message"
                  className="block mt-5 mb-2 text-start text-sm font-medium text-white"
                >
                  Description
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm  rounded-lg border    bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Writeevent details here..."
                ></textarea>

                <div className="mt-24 flex justify-end ">
                  <button className="bg-blue-600 rounded text-white px-3 py-2">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

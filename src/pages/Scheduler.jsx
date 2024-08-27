/* eslint-disable react/no-unknown-property */
import { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Sidebar from "../components/Sidebar";
import Calendar from "react-calendar";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import listPlugin from "@fullcalendar/list";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./calendar.css";
import Select from "react-select";
export default function Scheduler() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(new Date()); // For tracking selected month
  const [coreSelected, setCoreSelected] = useState(false);
  const [levelSelected, setLevelSelected] = useState(false);
  const [loadSelected, setLoadSelected] = useState(false);
  const [dateSelected, setDateSelected] = useState(false);
  const cores = [
    { value: "Core 1", label: "Core 1" },
    { value: "Core 2", label: "Core 2" },
    { value: "Core 3", label: "Core 3" },
    { value: "Core 4", label: "Core 4" },
    { value: "Core 5", label: "Core 5" },
    { value: "Core 6", label: "Core 6" },
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

  const machines = [
    {
      value: "Internal Lighting - POE (POE)",
      label: "Internal Lighting - POE (POE)",
    },
    {
      value: "Office Work Station - Small Power (OSP)",
      label: "Office Work Station - Small Power (OSP)",
    },
    {
      value: "General Purpose Socket (GPS)",
      label: "General Purpose Socket (GPS)",
    },
    { value: "Odour Control units (OCU)", label: "Odour Control units (OCU)" },
    {
      value: "Insect Control Units (ICU)",
      label: "Insect Control Units (ICU)",
    },
    { value: "Kettles (KET)", label: "Kettles (KET)" },
    { value: "Sterilizer (STR)", label: "Sterilizer (STR)" },
    { value: "Compactor (COP)", label: "Compactor (COP)" },
    { value: "Coffee Machines (COF)", label: "Coffee Machines (COF)" },
    { value: "Micro Wave Ovens (MWO)", label: "Micro Wave Ovens (MWO)" },
    { value: "Dishwasher (DWS)", label: "Dishwasher (DWS)" },
    {
      value: "Buffet Units (Cold holding, hot holding) (BFU)",
      label: "Buffet Units (Cold holding, hot holding) (BFU)",
    },
    { value: "Water Cooler (WAC)", label: "Water Cooler (WAC)" },
    { value: "Water Dispensers (WDS)", label: "Water Dispensers (WDS)" },
    { value: "GYM Equipment (GYE)", label: "GYM Equipment (GYE)" },
    { value: "Copy Machine (COM)", label: "Copy Machine (COM)" },
    { value: "Scaning Machine (SCM)", label: "Scaning Machine (SCM)" },
    { value: "Printer (PTR)", label: "Printer (PTR)" },
    { value: "Shredder Machine (SHM)", label: "Shredder Machine (SHM)" },
    {
      value: "MEETING ROOM FLOOR BOX (MRF)",
      label: "MEETING ROOM FLOOR BOX (MRF)",
    },
    { value: "WAP (WAP)", label: "WAP (WAP)" },
    { value: "Passenger Lifts (PAL)", label: "Passenger Lifts (PAL)" },
    { value: "Fireman Lifts (FAL)", label: "Fireman Lifts (FAL)" },
    { value: "Goods Lift (GOL)", label: "Goods Lift (GOL)" },
    { value: "Monorail (MOR)", label: "Monorail (MOR)" },
    { value: "Davit (DVT)", label: "Davit (DVT)" },
    {
      value: "Solar Robotic Cleaning (SRC)",
      label: "Solar Robotic Cleaning (SRC)",
    },
  ];
  const largeCalendarRef = useRef(null);

  const handleSmallCalendarChange = (date) => {
    console.log(date);
    setDateSelected(true)
    setSelectedMonth(new Date(date));
    const calendarApi = largeCalendarRef.current.getApi();
    calendarApi.gotoDate(new Date(date)); // Navigate to the specified month
  };
  return (
    <>
      <Sidebar currentTab={4} />
      <div className="w-full">
        <div className="sm:ms-[20%] sm:w-[80%] min-h-[92vh] w-full p-1 bg-neutral-700  px-5 mt-14">
          <div className="flex flex-row gap-3 p-1">
            <div className="w-[30%] flex flex-col gap-5 mt-3">
              <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
                <Select
                  onChange={(selected) => {
                    setCoreSelected(true);
                  }}
                  placeholder="Select Core"
                  options={cores}
                />
              </div>
              {coreSelected && (
                <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
                  <Select
                    onChange={(selected) => {
                      setLevelSelected(true);
                    }}
                    placeholder="Select Level"
                    options={levels}
                  />
                </div>
              )}
              {levelSelected && (
                <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
                  <Select
                    onChange={(selected) => {
                      setLoadSelected(true);
                    }}
                    placeholder="Select Loads"
                    options={machines}
                    isMulti
                    closeMenuOnSelect={false}
                  />
                </div>
              )}
              {loadSelected && (
                <div className="p-4 bg-gray-800 text-white rounded-lg shadow-lg">
                  <Calendar
                    onChange={handleSmallCalendarChange}
                    value={selectedMonth}
                    view="month"
                    className="border-none text-gray-200"
                  />
                </div>
              )}
              {/* <div className="p-4 bg-gray-800 text-white rounded-lg shadow-lg">
                <Calendar className="border-none text-gray-200" />
              </div> */}
            </div>
            {dateSelected && (
              <div className="w-[65%] p-2">
                <FullCalendar
                  ref={largeCalendarRef}
                  plugins={[
                    dayGridPlugin,
                    listPlugin,
                    timeGridPlugin,
                    interactionPlugin,
                  ]}
                  initialView="timeGridWeek"
                  initialDate={selectedMonth}
                  headerToolbar={{
                    start: "prev,next",
                    center: "title",
                    end: "dayGridMonth,timeGridWeek,timeGridDay",
                  }}
                  datesSet={(info) => {
                    // Set the view to show the first week of the selected month
                    if (info.view.type === "dayGridMonth") {
                      const start = info.view.currentStart;
                      const end = new Date(start);
                      end.setDate(end.getDate() + 6); // Show only the first week
                      info.view.calendar.gotoDate(start);
                      info.view.calendar.setOption("visibleRange", {
                        start,
                        end,
                      });
                    }
                  }}
                  dateClick={() => setOpenModal(true)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {openModal && (
        <div className="w-full h-[100vh] overflow-y-scroll fixed z-10 top-0 start-0 bg-[#61676676] flex justify-center items-center">
          <div className=" w-[500px] h-[320px] rounded bg-zinc-800 text-center ">
            <div className=" h-[40px] bg-slate-700 rounded flex justify-between text-white font-bold p-2 items-center">
              Add Weekly Events
              <RxCross2
                className="text-white text-xl cursor-pointer"
                onClick={() => setOpenModal(false)}
              />
            </div>
            <div className="flex w-full flex-col gap-2 p-3">
              <div className=" p-2">
                <div className="flex flex-row justify-center gap-4">
                  <div className="flex flex-col text-white justify-center gap-2">
                    Sun{" "}
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-5 h-5 text-blue-600 rounded  focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                    />
                  </div>
                  <div className="flex flex-col text-white justify-center gap-2">
                    Mon{" "}
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-5 h-5 text-blue-600 bg-gray-300 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <div className="flex flex-col text-white justify-center gap-2">
                    Tue{" "}
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-5 h-5 text-blue-600 bg-gray-300 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <div className="flex flex-col text-white justify-center gap-2">
                    Wed{" "}
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-5 h-5 text-blue-600 bg-gray-300 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <div className="flex flex-col text-white justify-center gap-2">
                    Thu{" "}
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-5 h-5 text-blue-600 bg-gray-300 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <div className="flex flex-col text-white justify-center gap-2">
                    Fri{" "}
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-5 h-5 text-blue-600 bg-gray-300 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <div className="flex flex-col text-white justify-center gap-2">
                    Sat{" "}
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-5 h-5 text-blue-600 bg-gray-300 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                </div>
                <form className="w-full  grid grid-cols-2 gap-4 mt-10">
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

                <div className="mt-10 flex justify-end ">
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

import { FaChevronRight } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

export default function Classification() {

  const [showM1, setShowM1] = useState(false);
  const [showM2, setSHowM2] = useState(false);
  const [showM3, setShowM3] = useState(false);
  const [showM4, setShowM4] = useState(false);
  const [showELCB, setShowELCB] = useState(false);
  const [showSubLevels, setShowSubLevels] = useState(false);
  const [m4Options, setM4Options] = useState(null);
  const [circuitRef, setCircuitRef] = useState(null);
  const [showCircuitRef, setShowCircuitRef] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const ELCBs = [
    {
      number: 1,
      circuitRef: "B9",
    },
    {
      number: 2,
      circuitRef: "R16",
    },
    {
      number: 3,
      circuitRef: "B2",
    },
    {
      number: 4,
      circuitRef: "B16",
    },
    {
      number: 5,
      circuitRef: "R12",
    },
    {
      number: 6,
      circuitRef: "R12",
    },
    {
      number: 7,
      circuitRef: "B14",
    },
    {
      number: 8,
      circuitRef: "B11",
    },
  ];
  const m2Options = [
    {
      name: "Car park",
      code: "CPR",
    },
    {
      name: "General Circulation",
      code: "GCR",
    },
    {
      name: "Open Plan Office",
      code: "OPO",
    },
    {
      name: "MEP ROOM",
      code: "MEP",
    },
    {
      name: "TOILET",
      code: "TOI",
    },
    {
      name: "Individual Office - Elaborate",
      code: "INO",
    },
    {
      name: "LIFT SHAFT",
      code: "LIS",
    },
    {
      name: "LANDSCAPE Internal",
      code: "LSI",
    },
    {
      name: "LANDSCAPE External",
      code: "LSE",
    },
    {
      name: "External",
      code: "EXT",
    },
    {
      name: "GYM",
      code: "GYM",
    },
    {
      name: "AUDITORIUM",
      code: "AUD",
    },
    {
      name: "NURSERY",
      code: "NUR",
    },
    {
      name: "PRAYER ROOM",
      code: "PRY",
    },
    {
      name: "STAIRCASE",
      code: "STC",
    },
    {
      name: "LIBRARY",
      code: "LIB",
    },
    {
      name: "MEETING ROOM with Number",
      code: "MER",
    },
  ];

  const subLevels = ["ELCB Ref Names", "BIM Model"];

  const m3Options = [
    {
      name: "Electrical",
      code: "ELE",
      m4Options: [
        {
          name: "Internal Lighting - DALI/Switched (Include.Flush Sensors)",
          code: "ILD",
        },
        {
          name: "Internal Lighting - DALI/Switched (Include.Flush Sensors)",
          code: "POE",
        },
        {
          name: "External Lighting",
          code: "EXL",
        },
        {
          name: "Aircraft Warning Light",
          code: "AWL",
        },
        {
          name: "Office Work Station - Small Power",
          code: "OSP",
        },
        {
          name: "Blind Curtain System",
          code: "BCS",
        },
        {
          name: "Cleaners Socket",
          code: "CLS",
        },
        {
          name: "General Purpose Socket",
          code: "GPS",
        },
        {
          name: "EV CHARGERS",
          code: "EVC",
        },
        {
          name: "Lighting Control Panels",
          code: "LCS",
        },
      ],
    },
    {
      name: "Equipment",
      code: "EQP",
      m4Options: [
        {
          name: "Odour Control units",
          code: "OCU",
        },
        {
          name: "Insect Control Units",
          code: "ICU",
        },
        {
          name: "Kettles",
          code: "KET",
        },
        {
          name: "Sterilizer",
          code: "STR",
        },
        {
          name: "Compactor",
          code: "COP",
        },
        {
          name: "Refrigerators",
          code: "REF",
        },
        {
          name: "Coffee Machines",
          code: "COF",
        },
        {
          name: "Micro Wave Ovens",
          code: "MWO",
        },
        {
          name: "Dishwasher",
          code: "DWS",
        },
        {
          name: "Buffet Units (Cold holding, hot holding)",
          code: "BFU",
        },
        {
          name: "Water Cooler",
          code: "WAC",
        },
        {
          name: "Water Dispensers",
          code: "WDS",
        },
        {
          name: "Upright Chiller",
          code: "UPC",
        },
        {
          name: "Automatic Beverage Machine",
          code: "ABM",
        },
        {
          name: "GYM Equipment",
          code: "GYE",
        },
        {
          name: "Copy Machine",
          code: "COM",
        },
        {
          name: "Scaning Machine",
          code: "SCM",
        },
        {
          name: "Printer",
          code: "PTR",
        },
        {
          name: "Shredder Machine",
          code: "SHM",
        },
      ],
    },
    {
      name: "ELV",
      code: "ELV",
      m4Options: [
        {
          name: "Fire Alarm System",
          code: "FAS",
        },
        {
          name: "Central Battery System",
          code: "CBS",
        },
        {
          name: "Public Announcement and Voice Evacuation",
          code: "PAV",
        },
        {
          name: "Disable Toilet System",
          code: "DTS",
        },
        {
          name: "Bollard System",
          code: "BOL",
        },
        {
          name: "Gate Barrier",
          code: "GAB",
        },
        {
          name: "TETRA System",
          code: "TET",
        },
        {
          name: "LED PANELS",
          code: "LEP",
        },
        {
          name: "MEETING ROOM FLOOR BOX",
          code: "MRF",
        },
        {
          name: "CCTV Rack",
          code: "CRP",
        },
        {
          name: "CCTV Field Power",
          code: "CFP",
        },
        {
          name: "AV Rack",
          code: "AVR",
        },
        {
          name: "AV Field Power",
          code: "AVP",
        },
        {
          name: "AV-Floor Box",
          code: "AVF",
        },
        {
          name: "Server Equipment Power",
          code: "SEP",
        },
        {
          name: "MDF1",
          code: "MF1",
        },
        {
          name: "MDF2",
          code: "MF2",
        },
        {
          name: "Access Control Rack/AV Intercom",
          code: "ACR",
        },
        {
          name: "Access Control Field Power",
          code: "ACF",
        },
        {
          name: "WAP",
          code: "WAP",
        },
        {
          name: "Telecom/Provider/mobile",
          code: "TEL",
        },
        {
          name: "IBMS PANELS ELABORATE",
          code: "BMS",
        },
        {
          name: "BMS Control Room",
          code: "BMC",
        },
        {
          name: "Security System",
          code: "SUS",
        },
        {
          name: "Car park Management system power circuits",
          code: "CPM",
        },
        {
          name: "Signage and Drive way finding power circuits",
          code: "SIG",
        },
        {
          name: "Micro Switches (GP)",
          code: "MSG",
        },
        {
          name: "ZCDU",
          code: "ZCD",
        },
      ],
    },
    {
      name: "Vertical Transportation System",
      code: "VTS",
      m4Options: [
        {
          name: "Passenger Lifts",
          code: "PAL",
        },
        {
          name: "Fireman Lifts",
          code: "FAL",
        },
        {
          name: "Goods Lift",
          code: "GOL",
        },
        {
          name: "Loading Bay Lift (Scissor Lift)",
          code: "LBL",
        },
        {
          name: "Wheel Chair Lift",
          code: "WCL",
        },
      ],
    },
    {
      name: "Building Maintenance Unit (Façade Cleaning)",
      code: "BMU",
      m4Options: [
        {
          name: "Monorail",
          code: "MOR",
        },
        {
          name: "Davit",
          code: "DVT",
        },
        {
          name: "Solar Robotic Cleaning",
          code: "SRC",
        },
      ],
    },
    {
      name: "Irrigation",
      code: "IRG",
      m4Options: [
        {
          name: "rrigation pumps",
          code: "IRP",
        },
        {
          name: "Irrigation controller(field)",
          code: "IRF",
        },
      ],
    },
    {
      name: "HVAC- Waterside",
      code: "ACW",
      m4Options: [
        {
          name: "CHILLER",
          code: "CHI",
        },
        {
          name: "Chilled Water Pump",
          code: "CHP",
        },
        {
          name: "Condenser Water Pump",
          code: "CWP",
        },
        {
          name: "Cooling Towers",
          code: "CTR",
        },
        {
          name: "Tower Basin Filtration System",
          code: "TBF",
        },
        {
          name: "Side Stream Filtration System",
          code: "SSF",
        },
        {
          name: "Chilled water Pressurization unit",
          code: "PRU",
        },
        {
          name: "Chemical Dosing System-CHW",
          code: "CDC",
        },
        {
          name: "Chemical Dosing System-CDW",
          code: "CDS",
        },
        {
          name: "Cooling tower make-up water pump",
          code: "CTP",
        },
        {
          name: "BTU meter and Flow meter at Chiller plant room and Cooling Tower",
          code: "BTU",
        },
        {
          name: "Motorized Valves at  Chiller plant room and Cooling Tower",
          code: "MOV",
        },
      ],
    },
    {
      name: "HVAC -Air Side",
      code: "ACA",
      m4Options: [
        {
          name: "FCU",
          code: "FCU",
        },
        {
          name: "FAHU",
          code: "FHU",
        },
        {
          name: "AHU",
          code: "AHU",
        },
        {
          name: "VAV/CAV ",
          code: "VAV",
        },
        {
          name: "DX",
          code: "DXU",
        },
        {
          name: "VRF",
          code: "VRF",
        },
        {
          name: "CCU",
          code: "CCU",
        },
        {
          name: "Car Park Jet Fans ",
          code: "CPJ",
        },
        {
          name: "Make-up Air Fan - FR ",
          code: "MAF",
        },
        {
          name: "COLD SMOKE MAKEUP FAN",
          code: "CSM",
        },
        {
          name: "COLD SMOKE EXTRACT FAN ",
          code: "CSE",
        },
        {
          name: "General Extract Air Fans ",
          code: "GEF",
        },
        {
          name: "Staircase Pressurization Fans ",
          code: "STP",
        },
        {
          name: "Motorized Smoke & Fire Dampers ",
          code: "MSF",
        },
        {
          name: "Motorized Smoke Dampers ",
          code: "MSD",
        },
        {
          name: "IEQ System ",
          code: "IEQ",
        },
      ],
    },
    {
      name: "Plumbing",
      code: "PDP",
      m4Options: [
        {
          name: "Booster Pumps",
          code: "BOP",
        },
        {
          name: "Filtration Pumps",
          code: "FIP",
        },
        {
          name: "Hot water re-circulation pumps (Cp-01)@L12",
          code: "HWP",
        },
        {
          name: "Solar hot water circulation pumps-Master(Cp-02,03)",
          code: "SHW",
        },
        {
          name: "Raw Water Circulation Pumps",
          code: "RWP",
        },
        {
          name: "Fire Water Circulation Pumps",
          code: "FWP",
        },
        {
          name: "Filtered Water Circulation Pumps",
          code: "FLW",
        },
        {
          name: "Transfer Pumps",
          code: "TRP",
        },
        {
          name: "Chemical Dozing Unit-Water Supply",
          code: "CDW",
        },
        {
          name: "Copper/Silver Ionization Unit@B1",
          code: "CSI",
        },
        {
          name: "Water Supply Valves(Field)",
          code: "WSV",
        },
      ],
    },
    {
      name: "Drainage",
      code: "PSP",
      m4Options: [
        {
          name: "Sump Pump",
          code: "SUP",
        },
        {
          name: "Rain Water Valves(Field)",
          code: "RWV",
        },
        {
          name: "Grey Water system",
          code: "GWS",
        },
      ],
    },
    {
      name: "Fire fighting",
      code: "FFP",
      m4Options: [
        {
          name: "Fire Pump Set ",
          code: "FPS",
        },
        {
          name: "Diesel Pump ",
          code: "DIP",
        },
        {
          name: "Jockey Pumps ",
          code: "JOP",
        },
        {
          name: "FECP",
          code: "FEP",
        },
      ],
    },
  ];
  const [selectedM2, setSelectedM2] = useState("")
  const [selectedM3, setSelectedM3] = useState("")
  const [selectedM4, setSelectedM4] = useState("")
  const [selectedM5, setSelectedM5] = useState("")
  const [selectedM6, setSelectedM6] = useState("")


  return (
    <>
      <Sidebar currentTab={3} />
      <div className="w-screen h-[100vh]">
        <div className="sm:ms-[20%] sm:w-[80%] min-h-[92vh] w-full p-1 bg-neutral-700 mt-14">
          <div className="w-full ref={containerRef} min-h-[100vh] overflow-x-scroll">
            <div className="flex w-[100%] flex-row gap-2">
              <div className=" w-[11%] min-h-[100vh]  flex flex-col border border-emerald-700  gap-1">
                <h1 className=" text-white font-bold text-2xl text-center">
                  M-0
                </h1>
                <div
                  onClick={() => setShowM1(true)}
                  className={`w-full flex justify-between items-center ${showM1 ? "bg-[#28af8b]" : "bg-emerald-600"} hover:bg-[#28af8b]  text-white text-sm cursor-pointer p-2 rounded`}
                >
                  DEWA HQ
                  <FaChevronRight className=" text-white" />
                </div>
                <div className="w-full border-emerald-400 border-2 text-slate-400 text-sm text-center cursor-pointer p-2 rounded">
                  +Space Item
                </div>
              </div>

              {showM1 && (
                <div className=" w-[11%] flex flex-col border border-emerald-700  gap-1">
                  <h1 className=" text-white font-bold text-2xl text-center">
                    M-1
                  </h1>
                  <div className={`w-full flex justify-between items-center bg-emerald-600 hover:bg-[#28af8b]  text-white text-sm cursor-pointer p-2 rounded`}>
                    Core 1
                    <FaChevronRight className="text-lg text-white" />
                  </div>
                  <div className={`w-full flex justify-between items-center bg-emerald-600 hover:bg-[#28af8b]  text-white text-sm cursor-pointer p-2 rounded`}>
                    Core 2
                    <FaChevronRight className="text-lg text-white" />
                  </div>
                  <div className={`w-full flex justify-between items-center bg-emerald-600 hover:bg-[#28af8b]  text-white text-sm cursor-pointer p-2 rounded`}>
                    Core 3
                    <FaChevronRight className=" text-white" />
                  </div>
                  <div
                    onClick={() => setSHowM2(true)}
                    className={`w-full flex justify-between items-center ${showM2 ? "bg-[#28af8b]" : "bg-emerald-600"} hover:bg-[#28af8b]  text-white text-sm cursor-pointer p-2 rounded`}
                  >
                    Core 4
                    <FaChevronRight className=" text-white" />
                  </div>
                  <div className={`w-full flex justify-between items-center bg-emerald-600 hover:bg-[#28af8b]  text-white text-sm cursor-pointer p-2 rounded`}>
                    Core 5
                    <FaChevronRight className=" text-white" />
                  </div>
                  <div className={`w-full flex justify-between items-center bg-emerald-600 hover:bg-[#28af8b]  text-white text-sm cursor-pointer p-2 rounded`}>
                    Core 6
                    <FaChevronRight className=" text-white" />
                  </div>
                  <div className="w-full border-emerald-400 border-2 text-sm text-slate-400 text-center cursor-pointer p-2 rounded">
                    +Space Item
                  </div>
                </div>
              )}

              {showM1 && (
                <div className=" w-[11%] flex flex-col border border-emerald-700  gap-1">
                  <h1 className=" text-white font-bold text-2xl text-center">
                    M-1
                  </h1>
                  <div className={`w-full flex justify-between items-center bg-emerald-600 hover:bg-[#28af8b]  text-white text-sm cursor-pointer p-2 rounded`}>
                    Core 1
                    <FaChevronRight className="text-lg text-white" />
                  </div>
                  <div className={`w-full flex justify-between items-center bg-emerald-600 hover:bg-[#28af8b]  text-white text-sm cursor-pointer p-2 rounded`}>
                    Core 2
                    <FaChevronRight className="text-lg text-white" />
                  </div>
                  <div className={`w-full flex justify-between items-center bg-emerald-600 hover:bg-[#28af8b]  text-white text-sm cursor-pointer p-2 rounded`}>
                    Core 3
                    <FaChevronRight className=" text-white" />
                  </div>
                  <div
                    onClick={() => setSHowM2(true)}
                    className={`w-full flex justify-between items-center ${showM2 ? "bg-[#28af8b]" : "bg-emerald-600"} hover:bg-[#28af8b]  text-white text-sm cursor-pointer p-2 rounded`}
                  >
                    Core 4
                    <FaChevronRight className=" text-white" />
                  </div>
                  <div className={`w-full flex justify-between items-center bg-emerald-600 hover:bg-[#28af8b]  text-white text-sm cursor-pointer p-2 rounded`}>
                    Core 5
                    <FaChevronRight className=" text-white" />
                  </div>
                  <div className={`w-full flex justify-between items-center bg-emerald-600 hover:bg-[#28af8b]  text-white text-sm cursor-pointer p-2 rounded`}>
                    Core 6
                    <FaChevronRight className=" text-white" />
                  </div>
                  <div className="w-full border-emerald-400 border-2 text-sm text-slate-400 text-center cursor-pointer p-2 rounded">
                    +Space Item
                  </div>
                </div>
              )}

              {showM2 && (
                <div className=" w-[11%] optionsCol flex flex-col border border-emerald-700  gap-1">
                  <h1 className=" text-white font-bold text-2xl text-center">
                    M-2
                  </h1>
                  {m2Options?.map((option, index) => (
                    <div
                      onClick={() => {
                        setShowM3(true)
                        setSelectedM2(option.name)
                      } }
                      key={index}
                      className={`w-full ${(option.name + " ()" + option.code).length > 50 ? "text-xs" : "text-sm"} flex justify-between items-center ${selectedM4 === option.name ? "bg-[#28af8b]" : "bg-emerald-600"} hover:bg-[#28af8b]  text-white  cursor-pointer p-2 rounded`}
                    >
                      {option.name} ({option.code})
                      <FaChevronRight className=" text-white" />
                    </div>
                  ))}
                  <div className="w-full border-emerald-400 border-2 text-slate-400 text-sm text-center cursor-pointer p-2 rounded">
                    +Space Item
                  </div>
                </div>
              )}

              {showM3 && (
                <div className=" w-[11%] optionsCol flex flex-col border border-emerald-700  gap-1">
                  <h1 className=" text-white font-bold text-2xl text-center">
                    M-3
                  </h1>
                  {m3Options?.map((option, index) => (
                    <div
                      onClick={() => {
                        setM4Options(option.m4Options);
                        setShowM4(true);
                        setSelectedM3(option.name)
                      }}
                      key={index}
                      className={`w-full ${(option.name + " ()" + option.code).length > 50 ? "text-xs" : "text-sm"} flex justify-between items-center ${selectedM4 === option.name ? "bg-[#28af8b]" : "bg-emerald-600"} hover:bg-[#28af8b]  text-white  cursor-pointer p-2 rounded`}
                    >
                      {option.name} ({option.code})
                      <FaChevronRight className=" text-white" />
                    </div>
                  ))}

                  <div className="w-full border-emerald-400 text-sm border-2 text-slate-400  text-center cursor-pointer p-2 rounded">
                    +Space Item
                  </div>
                </div>
              )}

              {showM4 && (
                <div className=" w-[11%] flex optionsCol flex-col border border-emerald-700 gap-1">
                  <h1 className=" text-white font-bold text-2xl text-center">
                    M-4
                  </h1>
                  {m4Options?.map((option, index) => (
                    <div
                      onClick={() => {
                        if (option.name === "Coffee Machines") {
                          setShowSubLevels(true);
                        }
                        setSelectedM4(option.name)
                      }}
                      key={index}
                      className={`w-full ${(option.name + " ()" + option.code).length > 50 ? "text-xs" : "text-sm"} flex justify-between items-center ${selectedM4 === option.name ? "bg-[#28af8b]" : "bg-emerald-600"} hover:bg-[#28af8b]  text-white  cursor-pointer p-2 rounded`}
                    >
                      {option.name} ({option.code})
                      <FaChevronRight className=" text-white" />
                    </div>
                  ))}

                  <div className="w-full border-emerald-400 text-sm border-2 text-slate-400 text-center cursor-pointer p-2 rounded">
                    +Space Item
                  </div>
                </div>
              )}
              
              {showSubLevels && (
                <div className=" w-[11%] optionsCol flex flex-col border border-emerald-700  gap-1">
                  <h1 className=" text-white font-bold text-2xl text-center">
                    M - 5
                  </h1>
                  {subLevels?.map((option, index) => (
                    <div
                      onClick={() => {
                        if (option === "ELCB Ref Names") {
                          setShowELCB(true);
                        } else {
                          navigate("/3d-coffee-machine");
                        }
                        setSelectedM5(option)
                      }}
                      key={index}
                      className={`w-full ${(option.name + " ()" + option.code).length > 50 ? "text-xs" : "text-sm"} flex justify-between items-center ${selectedM4 === option.name ? "bg-[#28af8b]" : "bg-emerald-600"} hover:bg-[#28af8b]  text-white  cursor-pointer p-2 rounded`}
                    >
                      {option}
                      <FaChevronRight className=" text-white" />
                    </div>
                  ))}

                  <div className="w-full border-emerald-400 border-2 text-slate-400 text-sm text-center cursor-pointer p-2 rounded">
                    +Space Item
                  </div>
                </div>
              )}

              {showELCB && (
                <div className=" w-[11%] optionsCol flex flex-col border border-emerald-700  gap-1">
                  <h1 className=" text-white font-bold text-2xl text-center">
                    M - 6
                  </h1>
                  {ELCBs?.map((option, index) => (
                    <div
                      onClick={() => {
                        setCircuitRef(option.circuitRef);
                        setShowCircuitRef(true);
                        setSelectedM6(option.number)
                      }}
                      key={index}
                      className={`w-full ${(option.name + " ()" + option.code).length > 50 ? "text-xs" : "text-sm"} flex justify-between items-center ${selectedM4 === option.name ? "bg-[#28af8b]" : "bg-emerald-600"} hover:bg-[#28af8b]  text-white  cursor-pointer p-2 rounded`}
                    >
                      ELCB {option.number}
                      <FaChevronRight className="text-white" />
                    </div>
                  ))}

                  <div className="w-full border-emerald-400 border-2 text-slate-400 text-sm text-center cursor-pointer p-2 rounded">
                    +Space Item
                  </div>
                </div>
              )}

              {showCircuitRef && (
                <div 
                  onClick={() => setOpenModal(true)}
                  className=" w-[11%] optionsCol flex flex-col border border-emerald-700  gap-1"
                >
                  <h1 className=" text-white font-bold text-md text-center">
                    M - 7
                  </h1>

                  <div
                    className={`w-full bg-emerald-600 cursor-pointer text-white text-sm p-2 rounded  flex justify-between items-center`}
                  >
                    Circuit Ref {circuitRef}
                    <FaChevronRight className=" text-white" />
                  </div>

                  <div className="w-full border-emerald-400 border-2 text-slate-400 text-sm text-center cursor-pointer p-2 rounded">
                    +Space Item
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
      {openModal && (
        <div className="w-full z-10 h-[100vh] overflow-y-scroll fixed top-0 start-0 bg-[#4fcd8a76] flex justify-center items-center">
          <div className=" w-[450px] h-[500px] rounded bg-white text-center p-3">
            <div className=" flex justify-end">
              <RxCross2
                className="text-black text-xl cursor-pointer"
                onClick={() => setOpenModal(false)}
              />
            </div>
            <div className="flex w-full flex-col gap-2 ">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((number, index) => (
                <div
                  key={index}
                  className="rounded bg-zinc-200 p-2 flex flex-row justify-between"
                >
                  <p className="text-xl">Channel {number}</p>
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

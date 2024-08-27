/* eslint-disable react/no-unknown-property */
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import FooterText from "../components/FooterText";
import EnergySpendBudgetChart from "../components/widgets/dashboard/EnergySpendBudgetChart";
import EnergyGeneratedConsumption from "../components/widgets/dashboard/EnergyGeneratedConsumption";
import EnergyConsumption from "../components/widgets/dashboard/EnergyConsumption";
import BuildingWiseConsumption from "../components/widgets/dashboard/BuildingWiseConsumption";
import EnergySourceDashboard from "../components/widgets/dashboard/EnergySourceDashboard";

export const data = [
  ["Source", "Percentage"], // Header row
  ["Solar", 30],
  ["DEWA", 24],
  ["Generator", 6],
];
export const barData = [
  ["Floor", "Energy"],
  ["Core 1", 87717], // Custom color
  ["Core 2", 109646], // Custom color
  ["Core 3", 131575], // Custom color
  ["Core 4", 164468], // Custom color
  ["Core 5", 131575], // Custom color
  ["Core 6", 131575], // Custom color
];

export const barOptions = {
  chart: {},
  bars: "vertical",
  bar: { groupWidth: "50%" }, // Increase the width of the bars
  legend: { position: "none" }, // Hide legend
  hAxis: {
    title: "", // No title on X-axis
    textStyle: {
      fontSize: 12,
    },
  },
  vAxis: {
    title: "", // No title on Y-axis
    viewWindow: { min: 0, max: 2000 }, // Set Y axis range
    ticks: [0, 400, 800, 1200, 1600, 2000], // Custom Y-axis ticks
    textStyle: {
      fontSize: 12,
    },
  },
  chartArea: {
    width: "80%",
    height: "70%",
  }, // Remove space for title and subtitle
  colors: ["green"],
};

export const options = {
  pieHole: 0.4,
  is3D: false,
  slices: {
    0: { color: "#FF9800" }, // Orange for "Solar"
    1: { color: "#2196F3" }, // Blue for "DEWA"
    2: { color: "#F44336" }, // Red for "Generator"
  },
  fontName: "Arial",
  fontSize: 18,
  chartArea: {
    left: 10, // Adjust these values as needed
    top: 10, // Reduced to fit the chart without a title
    width: "90%",
    height: "80%",
  },

  legend: {
    position: "bottom",
    alignment: "center",
    textStyle: {
      fontSize: 18,
    },
  },
  backgroundColor: "transparent", // Make background transparent
  pieSliceTextStyle: {
    fontSize: 14,
    alignment: "center",
  },
};

export const areaData = [
  ["Range", "Generated", "Consumed"],
  ["1000", 1000, 400],
  ["2000", 1170, 460],
  ["3000", 660, 1120],
  ["4000", 1030, 540],
];

export const areaOptions = {
  chartArea: { width: "80%", height: "70%" },
  legend: { position: "bottom", alignment: "center" }, // Position legend below the chart
  hAxis: {
    title: "Value",
    titleTextStyle: { color: "#333" },
  },
  vAxis: { minValue: 0 },
  colors: ["green", "blue"], // Set the colors for the areas
};
export default function Dashboard() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Sidebar currentTab={2} />
      <div className="w-full">
        <div className="sm:ms-[20%] sm:w-[80%] mt-14 w-full dashboard-bg ">
          <div className="w-full min-h-[100vh] p-2 bg-[#ffffffa5]">
            
            <div className="w-full my-2 flex flex-row gap-1">
              <div className="bg-white w-[50%] rounded-lg border-[3px] border-emerald-500 p-2">
                <h1 className="text-2xl font-bold  text-[#646464]">
                  Energy Source Distribution
                </h1>
                <div className=" mt-5">
                  <EnergySourceDashboard />
                </div>
              </div>
              <div className="bg-white w-[50%] rounded-lg border-[3px] border-emerald-500 p-2">
                <h1 className="text-2xl font-bold  text-[#646464]">
                  Building Wise Consumption
                </h1>
                <div className=" mt-5">
                  <BuildingWiseConsumption />
                </div>
              </div>
            </div>

            <div className="w-full my-2 flex flex-row gap-1">
              <div className="bg-white w-full rounded-lg border-[3px] border-emerald-500 p-2">
                <h1 className="text-2xl font-bold  text-[#646464]">
                  Energy Consumption
                </h1>
                <div className=" mt-5">
                  <EnergyConsumption />
                </div>
              </div>
            </div>

            <div className="w-full my-2 flex flex-row gap-1">
              <div className="bg-white w-full rounded-lg border-[3px] border-emerald-500 p-2">
                <h1 className="text-2xl font-bold  text-[#646464]">
                  Energy Spend Vs Budget
                </h1>
                <div className=" mt-5">
                  <EnergySpendBudgetChart />
                </div>
              </div>
            </div>

            <div className="w-full my-2 flex flex-row gap-1">
              <div className="bg-white w-full rounded-lg border-[3px] border-emerald-500 p-2">
                <h1 className="text-2xl font-bold  text-[#646464]">
                  Energy Generated VS Consumption
                </h1>
                <div className=" mt-5">
                  <EnergyGeneratedConsumption />
                </div>
              </div>
            </div>
            

            <FooterText />
          </div>
        </div>
      </div>
      {openModal && (
        <div className="w-full h-[100vh] overflow-y-scroll fixed top-0 start-0 bg-[#4fcd8a76] flex justify-center items-center">
          <div className=" w-[450px] h-[300px] rounded bg-white text-center p-3">
            <div className=" flex justify-end">
              <RxCross2
                className="text-black text-xl cursor-pointer"
                onClick={() => setOpenModal(false)}
              />
            </div>
            Content here
          </div>
        </div>
      )}
    </>
  );
}

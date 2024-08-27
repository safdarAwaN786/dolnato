import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Overview from "./pages/Overview";
import Classification from "./pages/Classification";
import Graphic from "./pages/3DGraphic";
import LoadManagement from "./pages/LoadManagement";
import Scheduler from "./pages/Scheduler";
import Sidebar from "./components/Sidebar";
import Purchase from "./pages/Purchase";
import Factory from "./pages/Factory";
import Directors from "./pages/Directors";
import Project from "./pages/Project";
import Planning from "./pages/Planning";
import Designers from "./pages/Designers";
import Senior from "./pages/Senior";
import Sales from "./pages/Sales";
import SalesTeamTable from "./pages/sales-team-table";
import Teams from "./pages/Teams";
import AddTeam from "./pages/AddTeam";
import AddProject from "./pages/AddProject";
import Clients from "./pages/Clients";
import Registration from "./pages/Registration";
import EmployeeID from "./pages/EmployeeID";
import MailCode from "./pages/MailCode";

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<Registration/>} />
          <Route path="/dashboard" element={<Overview />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/factory" element={<Factory />} />
          <Route path="/directors" element={<Directors />} />
          <Route path="/project" element={<Project />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/designers" element={<Designers />} />
          <Route path="/senior" element={<Senior />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/sales-team-table" element={<SalesTeamTable />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/add-team" element={<AddTeam />} />
          <Route path="/add-project" element={<AddProject />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/employee-id" element={<EmployeeID />} />
          <Route path="/mail-code" element={<MailCode />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

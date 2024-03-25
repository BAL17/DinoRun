import LeftDashboard from "./LeftDashboard";
import RightDashboard from "./RightDashboard";
import SideBar from "./SideBar";

function Dashboard() {
  return (
    <>
      <div id="background" className="bg-background w-screen h-screen">
        <div
          id="dashboard"
          className="flex flex-1 h-screen w-screen border-2 border-red-400 text-text"
        >
          <div id="dashboardSidebar" className="flex justify-start items-start">
            <SideBar />
          </div>

          <div
            id="dashboardPanels"
            className="flex justify-between w-screen min-h-fit  border-2 border-orange-500"
          >
            <div className="flex w-1/2 border-2 border-green-500">
              <LeftDashboard />
            </div>
            <div className="flex w-1/2 border-2 border-yellow-200">
              <RightDashboard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

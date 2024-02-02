import SideBar from "./SideBar";
function Dashboard() {
  return (
    <>
      <div id="background" className="bg-background w-screen h-screen">
        <div
          id="dashboard"
          className="flex flex-1 h-screen w-screen justify-center border-2 border-red-400 text-text"
        >
          <div className="flex w-9/12 min-h-fit border-2 border-orange-500">
            <SideBar />
            <div className="flex  border-2 border-green-500">hello rust
              <div className="flexborder-2 border-yellow-200">hello rust</div>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

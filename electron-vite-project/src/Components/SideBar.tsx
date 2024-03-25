import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FolderCopyTwoToneIcon from "@mui/icons-material/FolderCopyTwoTone";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import StyleTwoToneIcon from "@mui/icons-material/StyleTwoTone";
import Inventory2TwoToneIcon from "@mui/icons-material/Inventory2TwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";

function SideBar() {
  const userName: string = "Brandon Stegall"; //testing for now

  return (
    <>
      <div className="flex flex-col min-w-max h-min gap-4 p-2">
        <div className=" flex justify-center items-center h-[5rem] w-full text-lg gap-1 ">
          <AccountBoxIcon />
          {userName}
        </div>

        <div className="flex flex-col justify-between items-start h-fit w-full ">
          <div className="flex h-1/2 rounded-lg p-2 gap-2 hover:border-2 hover:border-emerald-50 ">
            <FolderCopyTwoToneIcon />
            All Vault Items
          </div>
          <div className="flex h-1/2 rounded-lg p-2 gap-2 hover:border-2 hover:border-emerald-50 ">
            <FavoriteTwoToneIcon />
            Favorites
          </div>
          <div className="flex h-1/2 rounded-lg p-2 gap-2 hover:border-2 hover:border-emerald-50 ">
            <StyleTwoToneIcon />
            Tags
          </div>
        </div>

        <div className="flex flex-col justify-evenly items-start h-fit w-full ">
          <div className="flex h-1/2 rounded-lg p-2 gap-2 hover:border-2 hover:border-emerald-50 ">
            <Inventory2TwoToneIcon />
            Archive
          </div>
          <div className="flex h-1/2 rounded-lg p-2 gap-2 hover:border-2 hover:border-emerald-50 ">
           <DeleteTwoToneIcon/>
            Recently Deleted
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;

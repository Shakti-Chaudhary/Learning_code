import "./App.css";
import Sidebar from "./Sidebar";
import SidebarCustom, { SidebarItem } from "./SidebarCustom";
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
} from "lucide-react";

function App() {
  return (
    <>
      {/* <Sidebar></Sidebar> */}
      <SidebarCustom>
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          alert
        />
        <SidebarItem icon={<BarChart3 size={20} />} text="Statistics" active />
      </SidebarCustom>
    </>
  );
}

export default App;

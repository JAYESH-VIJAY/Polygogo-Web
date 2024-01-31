import Sidebar from "@/components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ScrollToTopController } from "@/utils/ScrollToTopControlller";
export default function MainLayout() {
  const [collapse, setCollapse] = useState<boolean>(false);

  return (
    <div>
      <ScrollToTopController />
      <Sidebar collapse={collapse} setCollapse={setCollapse} />
      <div
        className={`w-full h-full min-h-screen px-2  pt-6 sm:pt-6 pb-8  ${
          collapse
            ? "lg:pl-24 sm:pr-6 "
            : "sm:px-6 md:px-8 lg:pl-[272px] md:pr-4  "
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
}

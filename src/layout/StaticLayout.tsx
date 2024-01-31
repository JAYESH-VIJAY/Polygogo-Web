import PgButton from "@/components/Input/PgButton";
import LocationHeading from "@/components/LocationHeading";
import { Link, Outlet } from "react-router-dom";

function StaticLayout() {
  return (
    <div>
      <header
        className={`sticky top-0 inset-x-0  py-4 flex  sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm  px-3`}
      >
        <div className="flex items-center justify-between w-full ">
          <div>
            <LocationHeading />
          </div>
          <div className="flex gap-2 ">
            <Link to="/auth/login">
              <PgButton title="Login" buttonType="primaryDark" />
            </Link>
            <Link to="/auth/register">
              <PgButton title="Register" />
            </Link>
          </div>
        </div>
      </header>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default StaticLayout;

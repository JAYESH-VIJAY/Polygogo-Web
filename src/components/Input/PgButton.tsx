import { LoadingOutlined } from "@ant-design/icons";
import { ReactNode } from "react";
interface PgButtonType {
  type?: "button" | "submit" | "reset";
  title: string | ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  buttonType?: "primary" | "secondary" | "primaryDark";
}
function PgButton({
  type = "button",
  title,
  isLoading = false,
  disabled = false,
  buttonType = "primary",
  onClick,
}: PgButtonType) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-3.5 px-6 rounded-full hover:bg-opacity-90 transition-all ${
        disabled && "bg-gray-300"
      } 
      ${buttonType == "primary" && "bg-primary text-white"}
      ${buttonType == "secondary" && "bg-gray-100 text-gray-500"}
      ${buttonType == "primaryDark" && "bg-primaryDark text-white"}`}
    >

      {!isLoading ? (
        <span className={`text-sm font-medium `}>{title}</span>
      ) : (
        <LoadingOutlined style={{ fontSize: 24, color: "white" }} spin />
      )}
    </button>
  );
}

export default PgButton;

import { LoadingOutlined } from "@ant-design/icons";

interface PgButtonType {
  type?: "button" | "submit" | "reset";
  title: string;
  isLoading?: boolean;
  disabled?: boolean;
  icon: any;
  onClick: () => void;
}
function PgSocialButton({
  type = "button",
  title,
  isLoading = false,
  disabled = false,
  icon,
  onClick,
}: PgButtonType) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="rounded-full w-full flex-1 px-4 py-3 border-[1.5px] text-white bg-gray-50"
    >
      {!isLoading ? (
        <div className="flex items-center justify-center gap-2">
          <span>{icon}</span>
          <span className="font-medium text-gray-400">{title}</span>
        </div>
      ) : (
        <LoadingOutlined style={{ fontSize: 24, color: "black" }} spin />
      )}
    </button>
  );
}

export default PgSocialButton;

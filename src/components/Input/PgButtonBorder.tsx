interface PgButtonType {
  type?: "button" | "submit" | "reset";
  title: string;
}
function PgButtonBorder({ type = "button", title }: PgButtonType) {
  return (
    <button type={type} className="w-full p-3 border-2 rounded-full ">
      <span className="text-sm font-medium text-primaryDark">{title}</span>
    </button>
  );
}

export default PgButtonBorder;

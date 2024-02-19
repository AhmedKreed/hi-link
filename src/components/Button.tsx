import Image from "next/image";

interface Probs {
  title: string;
  style:
    | "btn_dark_green"
    | "btn_green"
    | "btn_white_text"
    | "btn_white"
    | "btn_dark_green_outline";
  type: "button" | "submit";
  icon?: string;
}
const Button = ({ title, style, icon, type }: Probs) => {
  return (
    <button
      type={type}
      className={`${style} flexCenter gap-3 rounded-full border cursor-pointer`}
    >
      {icon ? (
        <Image
          src={icon}
          alt={"icon"}
          width={24}
          height={24}
          className="cursor-pointer"
        />
      ) : null}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;

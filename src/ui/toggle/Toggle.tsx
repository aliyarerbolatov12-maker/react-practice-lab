import clsx from "clsx";
import "./toggle.css";

type ToggleType = "checkbox" | "radio";

type ToggleProps = {
  type: ToggleType;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
};

export default function Toggle({
  type,
  checked,
  onChange,
  label,
}: ToggleProps) {
  const handleClick = () => {
    if (type === "checkbox") onChange(!checked);
    else if (type === "radio" && !checked) onChange(true);
  };

  return (
    <div className="toggle" onClick={handleClick}>
      <div
        className={clsx(type, {
          [`${type}Checked`]: checked,
        })}
      ></div>
      {label && <span className="label">{label}</span>}
    </div>
  );
}

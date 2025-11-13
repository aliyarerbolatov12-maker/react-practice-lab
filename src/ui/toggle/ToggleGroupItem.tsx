import { useContext } from "react";
import Toggle from "./Toggle";
import { ToggleGroupContext } from "./ToggleGroupContext";

type ToggleGroupItemProps = {
  value: string;
  label: string;
};

export function ToggleGroupItem({ value, label }: ToggleGroupItemProps) {
  const context = useContext(ToggleGroupContext);
  if (!context) throw new Error("ToggleGroupItem must be inside ToggleGroup");

  return (
    <Toggle
      type="radio"
      checked={context.value === value}
      onChange={() => context.onChange(value)}
      label={label}
    />
  );
}

import { type ReactNode } from "react";
import { ToggleGroupContext } from "./ToggleGroupContext";

type ToggleGroupProps = {
  value: string | null;
  onChange: (value: string) => void;
  children: ReactNode;
};

export function ToggleGroup({ value, onChange, children }: ToggleGroupProps) {
  return (
    <ToggleGroupContext.Provider value={{ value, onChange }}>
      <div>{children}</div>
    </ToggleGroupContext.Provider>
  );
}

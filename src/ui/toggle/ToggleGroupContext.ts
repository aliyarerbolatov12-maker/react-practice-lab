import { createContext } from "react";

export type ToggleGroupContextType = {
  value: string | null;
  onChange: (value: string) => void;
};

export const ToggleGroupContext = createContext<ToggleGroupContextType | null>(
  null
);

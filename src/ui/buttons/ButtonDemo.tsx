import { useState } from "react";
import Button from "./Button";
import DropDown from "../dropdown/Dropdown";

const BUTTON_VARIANTS = [
  { label: "Default", value: "default" },
  { label: "Icon", value: "icon" },
  { label: "Disabled", value: "disabled" },
  { label: "Loading", value: "loading" },
] as const;

type ButtonVariant = (typeof BUTTON_VARIANTS)[number]["value"];

export default function ButtonDemo() {
  const [selectedVariant, setSelectedVariant] =
    useState<ButtonVariant>("default");

  const renderButtonContent = () => {
    switch (selectedVariant) {
      case "icon":
        return (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="16"
              height="16"
              style={{ marginRight: 6 }}
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Add Item
          </>
        );
      case "loading":
        return "Loading";
      default:
        return (
          selectedVariant.charAt(0).toUpperCase() + selectedVariant.slice(1)
        );
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <DropDown
        optionsHeader={
          BUTTON_VARIANTS.find((v) => v.value === selectedVariant)?.label ||
          "Select"
        }
        options={BUTTON_VARIANTS.map((v) => ({ label: v.label }))}
        onSelect={(label: string) => {
          const found = BUTTON_VARIANTS.find((v) => v.label === label);
          if (found) setSelectedVariant(found.value);
        }}
      />

      <Button variant={selectedVariant}>{renderButtonContent()}</Button>
    </div>
  );
}

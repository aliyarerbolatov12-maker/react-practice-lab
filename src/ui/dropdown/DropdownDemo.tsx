import Dropdown from "./Dropdown";

export default function DropdownDemo() {
  const options = [
    { label: "Banana" },
    { label: "Apple" },
    { label: "potato" },
    { label: "Banana" },
    { label: "Apple" },
    { label: "potato" },
    { label: "Banana" },
    { label: "Apple" },
    { label: "potato" },
    { label: "Banana" },
    { label: "Apple" },
    { label: "potato" },
  ];

  return <Dropdown optionsHeader="Select something" options={options} />;
}

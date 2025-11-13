import { useState } from "react";
import Toggle from "./Toggle";
import { ToggleGroup } from "./ToggleGroup";
import { ToggleGroupItem } from "./ToggleGroupItem";

export default function ToggleDemo() {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState<string | null>(null);

  return (
    <div>
      <Toggle
        type="checkbox"
        checked={checkboxChecked}
        onChange={setCheckboxChecked}
        label="Checkbox"
      />

      <ToggleGroup value={radioValue} onChange={setRadioValue}>
        <ToggleGroupItem value="option1" label="Radio 1" />
        <ToggleGroupItem value="option2" label="Radio 2" />
        <ToggleGroupItem value="option3" label="Radio 3" />
      </ToggleGroup>
    </div>
  );
}

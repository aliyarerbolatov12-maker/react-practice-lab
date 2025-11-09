import { Tabs } from "./Tabs";

export default function TabsDemo() {
  const tabs = [
    { label: "Overview", content: <p>Content for overview tab.</p> },
    { label: "Settings", content: <p>Content for settings tab.</p> },
    { label: "Profile", content: <p>Content for profile tab.</p> },
  ];

  return (
    <div className="max-w-md mx-auto mt-10">
      <Tabs tabs={tabs} />
    </div>
  );
}

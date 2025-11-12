import { BrowserRouter, Routes, Route } from "react-router-dom";
import UiLayout from "./layouts/UiLayout";
import ModalDemo from "./ui/modal/ModalDemo";
import "./App.css";
import TabsDemo from "./ui/tabs/TabsDemo";
import DropdownDemo from "./ui/dropdown/DropdownDemo";
import AccordionDemo from "./ui/accordion/AccordionDemo";
import ButtonDemo from "./ui/buttons/ButtonDemo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UiLayout />}>
          <Route path="modal" element={<ModalDemo />} />
          <Route path="tabs" element={<TabsDemo />} />
          <Route path="dropdown" element={<DropdownDemo />} />
          <Route path="accordion" element={<AccordionDemo />} />
          <Route path="buttons" element={<ButtonDemo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

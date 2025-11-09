import { BrowserRouter, Routes, Route } from "react-router-dom";
import UiLayout from "./layouts/UiLayout";
import ModalDemo from "./ui/modal/ModalDemo";
import "./App.css";
import TabsDemo from "./ui/tabs/TabsDemo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UiLayout />}>
          <Route path="modal" element={<ModalDemo />} />
          <Route path="tabs" element={<TabsDemo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

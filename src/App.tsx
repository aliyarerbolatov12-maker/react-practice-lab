import { BrowserRouter, Routes, Route } from "react-router-dom";
import UiLayout from "./layouts/UiLayout";
import ModalDemo from "./ui/modal/ModalDemo";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UiLayout />}>
          <Route path="modal" element={<ModalDemo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

import { useState } from "react";
import Modal from "./Modal";

export default function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Modal Demo</h2>
      <p>Пример работы модального окна с анимацией.</p>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal
        title="Привет!"
        content={<p>Это контент модального окна</p>}
        onClose={() => setIsOpen(false)}
        isOpen={isOpen}
      />
    </div>
  );
}

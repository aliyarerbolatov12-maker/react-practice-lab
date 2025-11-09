import { useState } from "react";
import SimpleModal from "./SimpleModal";
export default function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h2>Modal Demo</h2>
      <p>Пример работы модального окна с анимацией.</p>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <SimpleModal
        opened={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <h2>Simple animation</h2>
      </SimpleModal>
    </div>
  );
}

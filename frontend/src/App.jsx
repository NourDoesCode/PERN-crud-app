import { useState } from "react";
import ModalForm from "./components/ModalForm";
import Navbar from "./components/Navbar";
import TableClients from "./components/TableClients";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const handleOpen = (mode) => {
    setModalMode(mode);
    setIsOpen(true);
  };
  const handleSubmit = () => {
    if (modalMode === "add") {
      // Handle add item
    } else {
      // Handle edit item
    }
    setIsOpen(false);
  };

  return (
    <>
      <Navbar onOpen={() => handleOpen("add")} />
      <TableClients />
      <ModalForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        mode={modalMode}
        onSubmit={handleSubmit}
      />
    </>
  );
}

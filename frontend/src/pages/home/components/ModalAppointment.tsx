import React, { useEffect } from "react";
import Select from "../../../components/global/Select/Select";

interface ModalProps {
  onClose: () => void;
}

export function ModalAppointment({ onClose }: ModalProps) {
  const options = [
    { value: "opcao1", label: "Opção 1" },
    { value: "opcao2", label: "Opção 2" },
    { value: "opcao3", label: "Opção 3" },
  ];
  const handleSelectChange = (value: string) => {
    console.log("Selecionado:", value);
  };
  const modalStyles: {
    overlay: React.CSSProperties;
    modal: React.CSSProperties;
  } = {
    overlay: {
      position: "fixed" as React.CSSProperties["position"],
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 5, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 3,
      transition: "opacity 0.3s ease",
    },
    modal: {
      backgroundColor: "#fff",
      padding: "20px",
      height: "600px",
      width: "950px",
      borderRadius: "4px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      textAlign: "center" as React.CSSProperties["textAlign"],
    },
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.modal}>
        <Select options={options} onChange={handleSelectChange} />
        <h1>ol</h1>
      </div>
    </div>
  );
}

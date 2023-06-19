import { Button } from "@mui/material";
import "./Modal.css";
export const Modal = ({ children, isOpen, closeModal }) => {
  return (
    <article className={`modal ${isOpen && "is-open"}`}>
      <div className="modal-container">
        {children}
        <Button
          sx={{
            mb: "20px",
            width: "40%",
          }}
          className="modal-close"
          variant="contained"
          onClick={closeModal}
        >
          Generar costos
        </Button>
      </div>
    </article>
  );
};

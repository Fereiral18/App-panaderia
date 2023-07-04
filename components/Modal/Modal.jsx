import { Button } from "@mui/material";
import "./Modal.css";

export const Modal = ({ children, isOpen, closeModal }) => {
  return (
    <article className={`modal ${isOpen && "is-open"}`}>
      <div className="modal-container">
        {children}
        <Button
          sx={{
            mt: "20px",
            width: "40%",
            "@media(max-width: 500px)": {
              width: "150px",
              height: "30px",
              fontSize: "10px",
            },
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

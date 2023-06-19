import { Button, TextField } from "@mui/material";
import "./Modal.css";
export const Modal = ({ children }) => {
  return (
    <article className="modal is-open">
      <div className="modal-container">
        {children}
        <Button
          sx={{
            mb: "20px",
            width: "40%",
          }}
          className="modal-close"
          variant="contained"
        >
          Generar costos
        </Button>
      </div>
    </article>
  );
};

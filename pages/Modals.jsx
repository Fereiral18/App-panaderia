import { Box, Button, TextField } from "@mui/material";
import { Modal } from "./Modal";

export const Modals = () => {
  return (
    <>
      <h2>Modales</h2>
      <Button>Introducir costos</Button>
      <Modal>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "60%",
            height: "90%",
            mb: "30px",
          }}
        >
          <h3>Costos de materia prima</h3>
          <TextField placeholder="Harina" label="Harina" />
          <TextField placeholder="Azucar" label="Azucar" />
          <TextField placeholder="Sal" label="Sal" />
          <TextField placeholder="Levadura" label="Levadura" />
          <TextField placeholder="Aceite" label="Aceite" />
          <TextField placeholder="Mantequilla" label="Mantequilla" />
        </Box>
      </Modal>
    </>
  );
};

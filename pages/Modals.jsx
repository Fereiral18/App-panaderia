import { Box, Button, Container, Grid, TextField } from "@mui/material";
import { Modal } from "./Modal";
import { useModal } from "../hooks/useModal";

export const Modals = () => {
  const [isOpen, openModal, closeModal] = useModal(false);
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Button
        sx={{
          display: "grid",
          mt: "20px",
        }}
        variant="contained"
        onClick={openModal}
      >
        Introducir costos
      </Button>
      <Modal isOpen={isOpen} closeModal={closeModal}>
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
    </Container>
  );
};

import { Box, Button, Container, TextField } from "@mui/material";
import { Modal } from "./Modal";

export const Modals = (props) => {
  const { dataCosts, handleInputChange, table, isOpen, closeModal, openModal } =
    props;

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "end",
      }}
    >
      <Button
        sx={{
          display: "grid",
          mt: "20px",
          backgroundColor: "#007cea",
        }}
        variant="contained"
        onClick={openModal}
      >
        Introducir costos
      </Button>
      <Modal isOpen={isOpen} closeModal={closeModal} table={table}>
        <h3>Introduce pesos y costos de los productos: </h3>
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            height: "75%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "50%",
              height: "100%",
              mb: "30px",
            }}
          >
            <h3>Peso x producto en Gr :</h3>
            {dataCosts.map((item, index) => (
              <div key={item.id}>
                <TextField
                  size="small"
                  sx={{ width: "180px" }}
                  label={item.names}
                  type="text"
                  value={item.weight}
                  onChange={(event) =>
                    handleInputChange(event, index, "weight")
                  }
                />
              </div>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
              width: "50%",
              height: "100%",
              mb: "30px",
            }}
          >
            <h3>Costos por producto:</h3>
            {dataCosts.map((item, index) => (
              <div key={item.id}>
                <TextField
                  size="small"
                  sx={{ width: "180px" }}
                  label={item.names}
                  type="text"
                  value={item.costo}
                  onChange={(event) => handleInputChange(event, index, "costo")}
                />
              </div>
            ))}
          </Box>
        </Container>
      </Modal>
    </Container>
  );
};

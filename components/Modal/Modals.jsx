import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Modal } from "./Modal";

export const Modals = (props) => {
  const { dataCosts, handleInputChange, table, isOpen, closeModal, openModal } =
    props;

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "end",
        "@media(max-width: 500px)": {
          justifyContent: "center",
        },
      }}
    >
      <Button
        sx={{
          mt: "20px",
          "@media(max-width: 500px)": {
            height: "35px",
            fontSize: "10px",
          },
          backgroundColor: "#007cea",
        }}
        variant="contained"
        onClick={openModal}
      >
        Introducir costos
      </Button>
      <Modal isOpen={isOpen} closeModal={closeModal} table={table}>
        <Typography
          sx={{
            "@media(max-width: 500px)": {
              fontSize: "11px",
              fontWeight: "bold",
            },
          }}
        >
          Introduce pesos y costos de los productos:{" "}
        </Typography>
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
            <Typography
              sx={{
                "@media(max-width: 500px)": {
                  fontSize: "11px",
                  fontWeight: "bold",
                },
              }}
            >
              Peso x producto en Gr :
            </Typography>
            {dataCosts.map((item, index) => (
              <div key={item.id}>
                <TextField
                  size="small"
                  sx={{
                    width: "180px",

                    width: "180px",
                    "@media(max-width: 500px)": {
                      width: "80px",
                    },
                  }}
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
            <Typography
              sx={{
                "@media(max-width: 500px)": {
                  fontSize: "11px",
                  fontWeight: "bold",
                },
              }}
            >
              Costos por producto:
            </Typography>
            {dataCosts.map((item, index) => (
              <div key={item.id}>
                <TextField
                  size="small"
                  sx={{
                    width: "180px",
                    "@media(max-width: 500px)": {
                      width: "80px",
                    },
                  }}
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

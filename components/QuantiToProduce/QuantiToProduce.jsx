import {
  AppBar,
  Button,
  Card,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useCalculatorProducing } from "../../hooks/useCalculatorProducing";
import { CostOfProduction } from "../CostOfProduction/CostOfProduction";
import { Modals } from "../Modal/Modals";
import { useModal } from "../../hooks/useModal";
import { useEffect, useState } from "react";
import "./quantiStyles.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const QuantiToProduce = (props) => {
  const {
    handleSubmit,
    handleSelect,
    handleValues,
    products,
    information,
    values,
    handleInputChange,
    unitys,
    totalExpenses,
    totalProfit,
    profitPerUnit,
    porcentajeInTable,
    dataCosts,
    costOfUnity,
    pricesUnityTotal,
  } = useCalculatorProducing();

  const { isOpen, openModal, closeModal } = useModal();
  const [showCalculator, setShowCalculator] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      setIsLoading(true);
    };
  }, [showCalculator]);
  console.log("estado:", isLoading);

  const handleChangeCalculatorView = () => {
    setShowCalculator(false);
  };
  const costoView = dataCosts.map((item) => item.costo)[0];
  console.log("esto:", costoView);
  return (
    <div className="general-container">
      {showCalculator ? (
        <div className="background-image image">
          <button
            className="button-init slide"
            onClick={handleChangeCalculatorView}
          >
            Iniciar calculos
          </button>
        </div>
      ) : isLoading ? (
        <div className="loading-container">
          <h1 className="loading">Cargando...</h1>
        </div>
      ) : (
        <AppBar color="inherit">
          <Toolbar
            sx={{
              display: "flex",
              height: "80px",
              backgroundColor: "#112438",
              justifyContent: "end",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontFamily: "fantasy",
                fontSize: "4vh",
                width: "600px",
              }}
            >
              Calculadora de producción
            </Typography>
            <Modals
              dataCosts={dataCosts}
              handleInputChange={handleInputChange}
              isOpen={isOpen}
              closeModal={closeModal}
              openModal={openModal}
            />
          </Toolbar>

          <Card
            sx={{
              display: "flex",
              width: "100vw",
              mt: "-100px",
              height: "111vh",
              backgroundColor: "#041b2d",
            }}
          >
            <Container
              sx={{
                display: "flex",
                mt: "280px",
                justifyContent: "center",
                flexDirection: "column",
                backgroundColor: "#f4f5f9",
                border: "1px solid grey",
                borderRadius: "2%",
                width: "280px",
                height: "400px",
              }}
            >
              <form onSubmit={handleSubmit}>
                <Container
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "200px",
                    width: "210px",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <FormControl size="small" sx={{ width: "180px" }}>
                    <InputLabel>Productos</InputLabel>
                    <Select
                      label="products"
                      id="demo-simple-select"
                      value={products}
                      onChange={handleSelect}
                      required
                    >
                      <MenuItem disabled>Seleccione el producto...</MenuItem>
                      <MenuItem value="Pan Frances">Pan Frances</MenuItem>
                      <MenuItem value="Pan Holandes">Pan Holandes</MenuItem>
                      <MenuItem value="Pan Campesino">Pan Campesinos</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    size="small"
                    sx={{ width: "180px" }}
                    label="Cantidad de harina x kg"
                    value={values}
                    onChange={handleValues}
                    required
                  />
                  <Button
                    size="small"
                    sx={{
                      width: "110px",
                      backgroundColor: "#007cea",
                    }}
                    variant="contained"
                    type="submit"
                  >
                    Resultado
                  </Button>
                </Container>
              </form>
            </Container>
            <Stack justifyContent={"center"}>
              <Toolbar
                sx={{
                  ml: "-50px",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "#1976d2",
                  }}
                >
                  Cantidad de producción por kg
                </Typography>
              </Toolbar>
              <TableContainer
                sx={{
                  maxHeight: 450,
                  ml: "-50px",
                }}
              >
                <Table
                  stickyHeader
                  aria-label="sticky table"
                  sx={{
                    border: "1px solid grey",
                    borderRadius: "2%",
                  }}
                >
                  <TableHead>
                    <TableRow
                      sx={{
                        alignItems: "center",
                      }}
                    >
                      <TableCell>Producto</TableCell>
                      <TableCell>Unidades</TableCell>
                      <TableCell>Peso x unidad</TableCell>
                      <TableCell>Harina</TableCell>
                      <TableCell>Azucar</TableCell>
                      <TableCell>Sal</TableCell>
                      <TableCell>Levadura</TableCell>
                      <TableCell>Mantequilla</TableCell>
                      <TableCell>Agua</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody
                    sx={{
                      backgroundColor: "#f4f5f9",
                    }}
                  >
                    {information.map((item) => {
                      return (
                        <TableRow key={item.id}>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.unidades}</TableCell>
                          <TableCell>{item.peso}</TableCell>
                          <TableCell>{item.ingredients?.harina}</TableCell>
                          <TableCell>{item.ingredients?.azucar}</TableCell>
                          <TableCell>{item.ingredients?.sal}</TableCell>
                          <TableCell>{item.ingredients?.levadura}</TableCell>
                          <TableCell>{item.ingredients?.mantequilla}</TableCell>
                          <TableCell>{item.ingredients?.agua}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
                {costoView !== "" && (
                  <CostOfProduction
                    information={information}
                    dataCosts={dataCosts}
                    totalExpenses={totalExpenses()}
                    unitys={unitys()}
                    costOfUnity={costOfUnity()}
                    pricesUnityTotal={pricesUnityTotal()}
                    profitPerUnit={profitPerUnit()}
                    porcentajeInTable={porcentajeInTable()}
                    totalProfit={totalProfit()}
                  />
                )}
              </TableContainer>
            </Stack>
          </Card>
        </AppBar>
      )}
    </div>
  );
};

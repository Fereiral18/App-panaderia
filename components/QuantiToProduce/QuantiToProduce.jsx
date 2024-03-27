import {
  AppBar,
  Button,
  Card,
  CircularProgress,
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
import { peticionGet } from "../../hooks/useGetDolar";
import { useGetElements } from "../../hooks/useGetElements";
import { useNavigate } from "react-router";

export const QuantiToProduce = () => {
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
  const { dolarPrice } = peticionGet();
  const { materials } = useGetElements();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      setIsLoading(true);
    };
  }, [showCalculator]);

  const handleChangeCalculatorView = () => {
    setShowCalculator(false);
  };
  const costoView = dataCosts.map((item) => item.costo)[0];
  const navigate = useNavigate();
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
          <CircularProgress size={"6rem"} />
        </div>
      ) : (
        <AppBar color="inherit">
          <Toolbar
            sx={{
              display: "flex",
              height: "80px",
              backgroundColor: "#112438",
              justifyContent: "end",
              "@media(max-width: 500px)": {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                height: "120px",
              },
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontFamily: "fantasy",
                fontSize: "4vh",
                width: "600px",
                "@media(max-width: 500px)": {
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "20px",
                  width: "100vw",
                },
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
              "@media(max-width: 500px)": {
                display: "flex",
                flexDirection: "column",
              },
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
                height: "370px",
                "@media(max-width: 500px)": {
                  display: "flex",
                  alignItems: "center",
                  width: "180px",
                  height: "150px",
                  mt: "120px",
                },
              }}
            >
              <form onSubmit={handleSubmit}>
                <Container
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "220px",
                    width: "210px",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    "@media(max-width: 500px)": {
                      width: "190px",
                      height: "150px",
                    },
                  }}
                >
                  <FormControl
                    size="small"
                    sx={{
                      width: "210px",

                      "@media(max-width: 500px)": {
                        width: "120px",
                        height: "40px",
                      },
                    }}
                  >
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
                    sx={{
                      width: "210px",
                      "@media(max-width: 500px)": {
                        width: "120px",
                        height: "40px",
                      },
                    }}
                    label="Cantidad de harina x kg"
                    value={values}
                    onChange={handleValues}
                    required
                  />
                  <Button
                    size="small"
                    sx={{
                      width: "125px",
                      fontSize: "15px",
                      mt: "30px",
                      "@media(max-width: 500px)": {
                        width: "70px",
                        m: "0",
                        fontSize: "10px",
                      },
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
                  "@media(max-width: 500px)": {
                    display: "flex",
                    m: "0px",
                    justifyContent: "center",
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "#1976d2",
                    "@media(max-width: 500px)": {
                      fontSize: "20px",
                      mt: "40px",
                      mb: "10px",
                    },
                  }}
                >
                  Cantidad de producción por kg
                </Typography>
              </Toolbar>
              <TableContainer
                sx={{
                  maxHeight: 450,
                  ml: "-50px",
                  "@media(max-width: 500px)": {
                    m: "0px",
                    width: "100vw",
                    height: "100vh",
                  },
                }}
              >
                <Table
                  stickyHeader
                  aria-label="sticky table"
                  sx={{
                    border: "2px solid grey",
                    borderRadius: "2%",
                    backgroundColor: "#f4f5f9",
                  }}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Producto</TableCell>
                      <TableCell>Unidades</TableCell>
                      <TableCell>Peso</TableCell>
                      <TableCell>Harina</TableCell>
                      <TableCell>Azucar</TableCell>
                      <TableCell>Sal</TableCell>
                      <TableCell>Levadura</TableCell>
                      <TableCell>Mantequilla</TableCell>
                      <TableCell>Agua</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {information.length == 0
                      ? materials?.map((item) => {
                          return (
                            <TableRow key={item.id}>
                              <TableCell>{item.name}</TableCell>
                              <TableCell>{item.unidades}</TableCell>
                              <TableCell>{item.peso}</TableCell>
                              <TableCell>{item.ingredients?.harina}</TableCell>
                              <TableCell>{item.ingredients?.azucar}</TableCell>
                              <TableCell>{item.ingredients?.sal}</TableCell>
                              <TableCell>
                                {item.ingredients?.levadura}
                              </TableCell>
                              <TableCell>
                                {item.ingredients?.mantequilla}
                              </TableCell>
                              <TableCell>{item.ingredients?.agua}</TableCell>
                            </TableRow>
                          );
                        })
                      : information?.map((item) => {
                          return (
                            <TableRow key={item.id}>
                              <TableCell>{item.name}</TableCell>
                              <TableCell>{item.unidades}</TableCell>
                              <TableCell>{item.peso}</TableCell>
                              <TableCell>{item.ingredients?.harina}</TableCell>
                              <TableCell>{item.ingredients?.azucar}</TableCell>
                              <TableCell>{item.ingredients?.sal}</TableCell>
                              <TableCell>
                                {item.ingredients?.levadura}
                              </TableCell>
                              <TableCell>
                                {item.ingredients?.mantequilla}
                              </TableCell>
                              <TableCell>{item.ingredients?.agua}</TableCell>
                              <TableCell>
                                <Button
                                  variant="contained"
                                  onClick={() => navigate("/recetas")}
                                >
                                  Editar receta
                                </Button>
                              </TableCell>
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

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
import { useCalculator } from "../hooks/useCalculator";
import { CostOfProduction } from "./CostOfProduction";
import { Modals } from "./Modals";

export const QuantiToProduce = (props) => {
  const {
    handleSubmit,
    handleSelect,
    handleValues,
    products,
    information,
    values,
  } = useCalculator();

  return (
    <Container>
      <AppBar position="fixed" color="primary">
        <Toolbar
          sx={{
            justifyContent: "center",
          }}
        >
          <Typography variant="h5">Calculadora de productos</Typography>
        </Toolbar>
        <Card
          sx={{
            ml: "5%",
            width: "90vw",
            height: "100vh",
          }}
        >
          <form
            style={{
              width: "200px",
            }}
            onSubmit={handleSubmit}
          >
            <Container
              sx={{
                display: "flex",
                backgroundColor: "red",
                flexDirection: "column",
                ml: "0px",
                height: "200px",
                width: "230px",
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
                }}
                variant="contained"
                type="submit"
              >
                Resultado
              </Button>
            </Container>
          </form>

          <Stack justifyContent={"center"}>
            <TableContainer
              sx={{
                maxHeight: 440,
              }}
            >
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
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
                <TableBody>
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
              <Modals />
              <CostOfProduction information={information} />
            </TableContainer>
          </Stack>
        </Card>
      </AppBar>
    </Container>
  );
};

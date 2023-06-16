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
        <Toolbar>
          <Typography variant="h5">Calculadora de productos</Typography>
        </Toolbar>
        <Card
          sx={{
            ml: "5%",
            width: "90vw",
            height: "70vh",
          }}
        >
          <form onSubmit={handleSubmit}>
            <Container
              sx={{
                display: "flex",
                height: "200px",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <FormControl
                sx={{
                  mt: "20px",
                  width: "250px",
                }}
                fullWidth
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
                sx={{ width: "250px" }}
                label="Cantidad de harina x kg"
                value={values}
                onChange={handleValues}
                required
              />
              <Button variant="contained" type="submit">
                Resultado
              </Button>
            </Container>
          </form>
          <Stack justifyContent={"center"}>
            <TableContainer sx={{ maxHeight: 440 }}>
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
            </TableContainer>
          </Stack>
        </Card>
        <CostOfProduction information={information} />
      </AppBar>
    </Container>
  );
};

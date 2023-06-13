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
import axios from "axios";
import { useEffect, useState } from "react";

export const CostsOfProduction = (props) => {
  const data = [
    {
      id: 1,
      name: "Pan Frances",
      ingredients: {
        id: 4,
        harina: 1000,
        azucar: 100,
        sal: 20,
        levadura: 5,
        mantequilla: 40,
        aceite: 20,
        agua: 430,
      },
      peso: 50,
      unidades: 32,
    },
    {
      id: 2,
      name: "Pan Holandes",
      ingredients: {
        id: 5,
        harina: 1000,
        azucar: 100,
        sal: 20,
        levadura: 5,
        mantequilla: 40,
        aceite: 20,
        agua: 430,
      },
      peso: 45,
      unidades: 35,
    },
    {
      id: 3,
      name: "Pan Campesino",
      ingredients: {
        id: 6,
        harina: 1000,
        azucar: 100,
        sal: 20,
        levadura: 5,
        mantequilla: 40,
        aceite: 20,
        agua: 430,
      },
      peso: 400,
      unidades: 4,
    },
  ];
  const [information, setInformation] = useState(data);
  const [products, setProducts] = useState("");
  const [values, setValues] = useState(1);

  const handleSelect = (e) => {
    const { value } = e.target;
    setProducts(value);
    setInformation(data.filter((items) => items.name === value));
  };
  console.log("Soy el products:", products);

  const handleValues = (e) => {
    const { value } = e.target;
    setValues(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let dates = information
      .map((item) => item.ingredients)
      .reduce((acc, item) => {
        acc = item;
        return acc;
      }, {});

    let object1 = Object.fromEntries(
      Object.entries(dates).map(([key, val]) => [key, val * values])
    );

    let test = information.map((item) => ({
      ...item,
      ingredients: object1,
    }));
    setInformation(test);
  };
  const handleReset = () => {};
  console.log(information);
  console.log("value:", values);
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography variant="h5">Calculadora de productos</Typography>
      </Toolbar>
      <Card
        sx={{
          width: "100vw",
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
                {(handleSubmit && handleValues == 0) || values == ""
                  ? data.map((item) => {
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
                    })
                  : information.map((item) => {
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
    </AppBar>
  );
};

import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export const CostOfProduction = (props) => {
  const costData = [
    {
      harina: "",
      azucar: "",
      sal: "",
      mantequilla: "",
      aceite: "",
      huevos: "",
    },
  ];
  const [dataOfCost, setDataOfCost] = useState(costData);
  console.log(dataOfCost);
  const { information } = props;

  return (
    <>
      <Toolbar
        sx={{
          justifyContent: "center",
        }}
      >
        <Typography variant="h5">Costos de produccion</Typography>
      </Toolbar>
      <Stack justifyContent={"center"}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Gasto Total</TableCell>
                <TableCell>Total de unidades</TableCell>
                <TableCell>Costo por unidad</TableCell>
                <TableCell>Precio a vender</TableCell>
                <TableCell>Ganancia por unidad</TableCell>
                <TableCell>% de ganancia</TableCell>
                <TableCell>Ganancia total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {information.map((item) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell>{item.ingredients?.harina}</TableCell>
                    <TableCell>{item.ingredients?.azucar}</TableCell>
                    <TableCell>{item.ingredients?.sal}</TableCell>
                    <TableCell>{item.ingredients?.levadura}</TableCell>
                    <TableCell>{item.ingredients?.mantequilla}</TableCell>
                    <TableCell>{item.ingredients?.aceite}</TableCell>
                    <TableCell>{item.ingredients?.huevos}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </>
  );
};

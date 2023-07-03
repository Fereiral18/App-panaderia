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

export const CostOfProduction = (props) => {
  const {
    totalExpenses,
    unitys,
    costOfUnity,
    pricesUnityTotal,
    profitPerUnit,
    porcentajeInTable,
    totalProfit,
  } = props;

  return (
    <>
      <Toolbar
        sx={{
          justifyContent: "start",
        }}
      >
        <Typography variant="h5" sx={{ color: "#1976d2" }}>
          Costos de producción
        </Typography>
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
            <TableBody
              sx={{
                backgroundColor: "#f4f5f9",
              }}
            >
              <TableRow>
                <TableCell>{totalExpenses}</TableCell>
                <TableCell>{unitys}</TableCell>
                <TableCell>{costOfUnity}</TableCell>
                <TableCell>{pricesUnityTotal}</TableCell>
                <TableCell>{profitPerUnit}</TableCell>
                <TableCell>{porcentajeInTable}</TableCell>
                <TableCell>{totalProfit}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </>
  );
};

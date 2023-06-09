// import {
//   Button,
//   Container,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
// } from "@mui/material";
// import React, { useEffect, useState } from "react";

// export const ProductsSelect = (props) => {
//   const [products, setProducts] = useState("vacio");
//   const [values, setValues] = useState(0);
//   const [result, setResult] = useState();

//   const handleSelect = (e) => {
//     setProducts(e.target.value);
//   };
//   const handleValues = (e) => {
//     setValues(e.target.value);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };
//   const { productos } = props;
//   const desestructuringIngredientsOfProducts = () => {
//     let filterProducts = productos
//       .filter((item) => item.name == products)
//       .map((items) => Object.values(items.ingredients));
//     return filterProducts.flat(1).map((item) => item * values);
//   };

//   console.log(desestructuringIngredientsOfProducts());

//   return (
//     <form onSubmit={handleSubmit}>
//       <Container
//         sx={{
//           display: "flex",
//           height: "200px",
//           flexDirection: "column",
//           justifyContent: "space-evenly",
//           alignItems: "center",
//         }}
//       >
//         <FormControl
//           sx={{
//             mt: "20px",
//             width: "250px",
//           }}
//           fullWidth
//         >
//           <InputLabel>Productos</InputLabel>
//           <Select
//             label="products"
//             id="demo-simple-select"
//             value={products}
//             onChange={handleSelect}
//             required
//           >
//             <MenuItem value="vacio">Seleccione su producto...</MenuItem>
//             <MenuItem value="frances">Pan frances</MenuItem>
//             <MenuItem value="campesino">Pan campesinos</MenuItem>
//             <MenuItem value="holandes">Pan Holandes</MenuItem>
//           </Select>
//         </FormControl>
//         <TextField
//           sx={{ width: "250px" }}
//           label="Cantidad de harina x kg"
//           onChange={handleValues}
//           required
//         />
//         <Button type="submit" variant="contained" color="primary">
//           Resultado
//         </Button>
//       </Container>
//     </form>
//   );
// };

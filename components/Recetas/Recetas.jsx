import { Button } from "@mui/material";
import { useNavigate } from "react-router";

export const Recetas = (props) => {
  const navigate = useNavigate();
  const { information } = props;
  console.log("recetas data:", information);
  return (
    <>
      <Button variant={"contained"} onClick={() => navigate("/")}>
        {" "}
        Tabla de produccion
      </Button>
      <h3>recetas</h3>
      <hr />
      <ul>
        {information.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
};

import { Route, Router, Routes } from "react-router-dom";
import { QuantiToProduce } from "../components/QuantiToProduce/QuantiToProduce";
import { Recetas } from "../components/Recetas/Recetas";
import { useCalculatorProducing } from "../hooks/useCalculatorProducing";

const App = () => {
  const { information } = useCalculatorProducing();
  return (
    <>
      <Routes>
        <Route path="/" element={<QuantiToProduce />} />
        <Route
          path="/recetas"
          element={<Recetas information={information} />}
        />
      </Routes>
    </>
  );
};

export default App;

import axios from "axios";
import { useEffect, useState } from "react";

export const useGetElements = () => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/materiales")
      .then((res) => setMaterials(res.data));
  }, []);
  return {
    materials,
  };
};

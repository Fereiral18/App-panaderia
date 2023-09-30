import axios from "axios";
import { useEffect, useState } from "react";
export const peticionGet = () => {
  const [dolarPrice, setdolarPrice] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://pydolarvenezuela-api.vercel.app/api/v1/dollar/dolar_promedio"
      )
      .then((response) => setdolarPrice(response.data));
  }, [setdolarPrice]);
  return { dolarPrice };
};

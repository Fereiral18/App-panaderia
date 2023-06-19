import React, { useState } from "react";

export const useCalculator = () => {
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
  const [values, setValues] = useState("");

  const handleSelect = (e) => {
    const { value } = e.target;
    setProducts(value);
    setInformation(data.filter((items) => items.name === value));
  };

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
      Object.entries(dates).map(([key, val]) => [key, val * parseInt(values)])
    );

    let test = information.map((item) => ({
      ...item,
      ingredients: object1,
    }));
    setInformation(test);
    setProducts("");
    setValues("");
  };
  return {
    information,
    products,
    values,
    handleSelect,
    handleSubmit,
    handleValues,
  };
};

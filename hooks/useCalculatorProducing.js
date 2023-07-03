import React, { useState } from "react";

export const useCalculatorProducing = () => {
  const data = [
    {
      id: 1,
      name: "Pan Frances",
      unidades: 32,
      ingredients: {
        harina: 1000,
        azucar: 100,
        sal: 20,
        levadura: 5,
        mantequilla: 40,
        aceite: 20,
        agua: 430,
      },
      peso: 50,
    },
    {
      id: 2,
      name: "Pan Holandes",
      unidades: 35,
      ingredients: {
        harina: 1000,
        azucar: 100,
        sal: 20,
        levadura: 5,
        mantequilla: 40,
        aceite: 20,
        agua: 430,
      },
      peso: 45,
    },
    {
      id: 3,
      name: "Pan Campesino",
      unidades: 4,
      ingredients: {
        harina: 1000,
        azucar: 100,
        sal: 20,
        levadura: 5,
        mantequilla: 40,
        aceite: 20,
        agua: 430,
      },
      peso: 400,
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
    let unid = [...information].map((item) => item.unidades);
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
      unidades: unid * values,
    }));
    setInformation(test);
    setProducts("");
    setValues("");
  };

  // Costos de produccion
  let informationCosts = [
    { id: 1, names: "harina", weight: "", costo: "" },
    { id: 2, names: "azucar", weight: "", costo: "" },
    { id: 3, names: "sal", weight: "", costo: "" },
    { id: 4, names: "levadura", weight: "", costo: "" },
    { id: 5, names: "mantequilla", weight: "", costo: "" },
    { id: 6, names: "aceite", weight: "", costo: "" },
    { id: 7, names: "huevos", weight: "", costo: "" },
  ];
  const [dataCosts, setDataCost] = useState(informationCosts);

  const handleInputChange = (e, index, property) => {
    const updatedData = [...dataCosts];
    updatedData[index][property] = e.target.value;
    setDataCost(updatedData);
  };
  // Gasto total
  const totalExpenses = () => {
    let ingredients = information.map(({ ingredients }) =>
      Object.values(ingredients)
    )[0];

    let costos = dataCosts.map(
      ({ weight, costo }, indx) => (costo / weight) * ingredients[indx]
    );
    let totalCosto = [...costos].reduce((acc, prev) => acc + prev);
    return totalCosto.toFixed(2);
  };
  // Cantidad de unidades
  const unitys = () => {
    return information.map((item) =>
      item.unidades < 40 ? null : item.unidades
    );
  };
  // Costo por unidad
  const costOfUnity = () => {
    let totalCostUnity = totalExpenses() / unitys();
    return totalCostUnity == false ? null : totalCostUnity.toFixed(0);
  };
  let porcentaje = 0.65;
  let porcentajeInTable = () => {
    let porcentajeTotal = 1 - porcentaje;
    return porcentajeTotal.toFixed(2).toString().slice(2);
  };
  // Costo de unidad con el porcentaje de ganancia
  const pricesUnityTotal = () => {
    let saleTotalPrices = costOfUnity() / porcentaje;
    return saleTotalPrices.toFixed(0);
  };
  // Ganancia por unidad
  const profitPerUnit = () => {
    return pricesUnityTotal() - costOfUnity();
  };
  // Ganancia total
  const totalProfit = () => {
    let total = unitys() * pricesUnityTotal() - totalExpenses();
    return total.toFixed(2);
  };
  return {
    information,
    products,
    values,
    handleSelect,
    handleSubmit,
    handleValues,
    handleInputChange,
    unitys,
    totalExpenses,
    totalProfit,
    profitPerUnit,
    porcentajeInTable,
    dataCosts,
    costOfUnity,
    pricesUnityTotal,
  };
};

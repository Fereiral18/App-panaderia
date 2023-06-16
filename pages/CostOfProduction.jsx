import React from "react";

export const CostOfProduction = (props) => {
  const { information } = props;
  return <>{information.map((item) => item.name)}</>;
};

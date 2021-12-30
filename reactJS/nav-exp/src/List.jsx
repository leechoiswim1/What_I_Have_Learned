import React from "react";
import { useLocation } from "react-router-dom";
const List = (props) => {
  const location = useLocation();
  const pathName = location.pathname.split("/")[1];

  return <div>{pathName}어쩌고저쩌고</div>;
};

export default List;

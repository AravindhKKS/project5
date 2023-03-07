import { useContext } from "react";
import NavigationProvider from "../context/Navigation";

const UseNav = () => {
  return useContext(NavigationProvider);
};

export default UseNav;

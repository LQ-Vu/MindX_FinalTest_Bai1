import { useContext } from "react";
import { LangContext } from "./context";

const Header = ({ taskLeft }) => {
  const { getLabel } = useContext(LangContext);
  return <div className="header">{getLabel('title')}: {taskLeft}</div>;
};

export default Header;

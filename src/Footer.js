import { useContext } from "react";
import { LangContext } from "./context";

const Footer = () => {
  const { langCur, setLangCur, getLabel } = useContext(LangContext);
  return (
    <div>
      <div>
        <span>Available on:</span>
        <span
          className={`languague-picker ${langCur === "vn" && "selected"}`}
          onClick={() => setLangCur("vn")}
        >
          🇻🇳
        </span>
        <span
          className={`languague-picker ${langCur === "en" && "selected"}`}
          onClick={() => setLangCur("en")}
        >
          🇺🇸
        </span>
      </div>
    </div>
  );
};

export default Footer;

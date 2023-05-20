import { useContext, useState } from "react";
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import { LangContext } from "./context";

const Form = ({ getValueTodo, fillterTastWithDone, sortDeadline }) => {
  const [value, setValue] = useState("");
  const [showNoDone, setShowNoDone] = useState(false);
  const [isSort, setIsSort] = useState(false);
  const { langCur, setLangCur, getLabel } = useContext(LangContext);

  const changeLang = () => {
    setLangCur(() => (langCur === "en" ? "vn" : "en"));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getValueTodo(value);
  };

  const handleViewTask = () => {
    fillterTastWithDone(!showNoDone);
    setShowNoDone(!showNoDone);
  };

  const handleSort = () => {
    sortDeadline(!isSort);
    setIsSort(!isSort);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          placeholder={getLabel('inputTask')}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">{getLabel('submit')}</button>
      </form>
      <div className={`todo-item-container`} onClick={() => handleViewTask()}>
        {showNoDone ? (
          <FaRegCheckCircle color="#9a9a9a" className="item-done-button" />
        ) : (
          <FaRegCircle className="item-done-button" color="#9a9a9a" />
        )}
        <div className="item-title">
          {showNoDone ? getLabel('allTask') : getLabel('taskWatting')}
        </div>
      </div>
      <div className={`todo-item-container`} onClick={() => handleSort()}>
        {isSort ? (
          <FaRegCheckCircle color="#9a9a9a" className="item-done-button" />
        ) : (
          <FaRegCircle className="item-done-button" color="#9a9a9a" />
        )}
        <div className="item-title">{isSort ? getLabel('sortNomal') : getLabel('sort')}</div>
      </div>
      <div className={`todo-item-container`} onClick={changeLang}>
        {langCur === "vn" ? (
          <FaRegCheckCircle color="#9a9a9a" className="item-done-button" />
        ) : (
          <FaRegCircle className="item-done-button" color="#9a9a9a" />
        )}
        <div className="item-title">{langCur === "en" ? "vn" : "en"}</div>
      </div>
    </>
  );
};

export default Form;

import { useContext } from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import { LangContext } from "./context";

const TodoList = ({ list, changeData, countDay }) => {
  const { getLabel } = useContext(LangContext);

 

  return (
    <div className="todo-list-container" style={{ overflow: "scroll" }}>
      {list.map((x) => (
        <div
          key={x.id}
          className={`todo-item-container ${x.done && "done"}`}
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: 500
          }}
        >
          {x.done ? (
            <FaRegCheckCircle
              color="#9a9a9a"
              className="item-done-button"
              onClick={() => changeData({ ...x, done: !x.done })}
            />
          ) : (
            <FaRegCircle
              className="item-done-button"
              color="#9a9a9a"
              onClick={() => changeData({ ...x, done: !x.done })}
            />
          )}
          <div className="item-title">{x.name}</div>
          {x.deadLine ? (
            <span style={{ fontSize: "12px" }}>
              {getLabel("deadline")}: {x.deadLine} - ({countDay(x.deadLine)}{" "}
              {getLabel('days')})|
              {x.done ? getLabel('taskDone') : getLabel('taskNotFinished')}
            </span>
          ) : (
            <input
              onChange={(e) => {
                changeData({ ...x, deadLine: e.target.value });
              }}
              type="date"
              placeholder="dealine"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;

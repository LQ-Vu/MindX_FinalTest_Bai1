import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Form from "./Form";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
import "./styles.css";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// lấy dữ liệu lữu trự tại local nếu không có thì nó sẽ là mảng rỗng
const getDataLocal = () => {
  const listLocal = localStorage.getItem("todolist");
  const data = listLocal ? [...JSON.parse(listLocal)] : [];
  return data;
};

// lưu dữ liệu về local
const saveLocalStore = (list) => {
  localStorage.setItem("todolist", JSON.stringify(list));
};

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

const Home = () => {
  const [list, setList] = useState(() => getDataLocal());

  const countDay = (dateParam) => {
    var currentDate = new Date();
    var paramDate = new Date(dateParam);
    if ((currentDate - paramDate) > 0) {
      return 0;
    } else {
      var timeDiff = Math.abs(currentDate.getTime() - paramDate.getTime());
      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return diffDays;
    }
  };

  const taskLeft = list.filter(
    (x) => x.deadLine && !x.done && countDay(x.deadLine) > 0
  ).length;

  const handleAddTodo = (value) => {
    const newList = [
      { id: uuidv4(), name: value, done: false, createdAt: Date.now() },
      ...list,
    ];
    setList(newList);
    saveLocalStore(newList);
  };

  const handleChangeData = (data) => {
    const index = list.findIndex((x) => data.id === x.id);
    if (index > -1) {
      list[index] = data;
      setList([...list]);
      saveLocalStore([...list]);
    }
  };

  const fillterChangeTaskDone = (showTaskDone) => {
    if (showTaskDone) setList([...list.filter((x) => !x.done)]);
    else setList(getDataLocal());
  };

  const handleSort = (isSort) => {
    const listHasDealine = list.filter((x) => x.deadLine);
    const listNotDealine = list.filter((x) => !x.deadLine);
    if (isSort) {
      listHasDealine.sort(
        (a, b) => countDay(a.deadLine) - countDay(b.deadLine)
      );
    } else {
      listHasDealine.sort(
        (a, b) => countDay(b.deadLine) - countDay(a.deadLine)
      );
    }
    setList([...listHasDealine, ...listNotDealine]);
  };
  return (
    <div className="App">
      <div className="container">
        <TodoListHeader taskLeft={taskLeft} />
        <TodoList
          changeData={handleChangeData}
          list={list}
          countDay={countDay}
        />
        <Form
          getValueTodo={handleAddTodo}
          fillterTastWithDone={fillterChangeTaskDone}
          sortDeadline={handleSort}
        />
      </div>
      <Footer />
    </div>
  );
};

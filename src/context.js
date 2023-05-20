import { createContext, useContext, useState } from "react";

export const LangContext = createContext({});
const resources = {
  en: {
    translation: {
      title: "You have  tasks left!",
      inputTask: "enter task...",
      deadline: "deadline",
      days: "days",
      submit: "submit",
      taskWatting: "Not finished only",
      sort: "sort by deadline",
      sortNomal: "nomal",
      allTask: "All task",
      taskDone: "done",
      taskNotFinished: "not finished",
    },
  },
  vn: {
    translation: {
      title: "Những nhiệm vụ chưa hoàn thành",
      inputTask: "nhập nhiệm vụ...",
      deadline: "Thời hạn",
      days: "ngày",
      submit: "thêm",
      taskWatting: "nhiệm vụ chưa hoàn thành",
      sort: "sắp xếp theo thời hạn",
      sortNomal: "ban đầu",
      allTask: "tất cả nhiệm vụ",
      taskDone: "xong",
      taskNotFinished: "chưa xong",
    },
  },
};
const LangProvider = ({ children }) => {
  const [langCur, setLangCur] = useState("en");

  const getLabel = (key) => resources[langCur].translation[key];

  return (
    <LangContext.Provider value={{ langCur, setLangCur, getLabel }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangProvider;

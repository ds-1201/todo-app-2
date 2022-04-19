import moment from "moment";

export const transformTodos = (list) => {
  const time = moment().format("MM/DD/YYYY");
  const new_data = list?.map((item) => {
    return {
      ...item,
      createdAt: time,
      completedAt: item.completed ? time : "",
    };
  });
  return new_data;
};

let helper = {};

helper.createTodo = (data) => {
  const id = Math.random().toString();

  const createdAt = moment().format("MM/DD/YYYY");
  const new_todo = {
    id,
    createdAt,
    completedAt: "",
    title: data,
    completed: false,
  };
  return new_todo;
};

helper.getTime = () => {
  return moment().format("MM/DD/YYYY");
};

export default helper;

import { action } from "easy-peasy";

const inboxModel = {
  inboxTodos: [
    {
      uid: 324432324,
      text: "Some text",
      creationDate: 1580281881157,
      cheduleTime: 1590281881157,
      labels: [],
      projects: [],
      priority: ""
    },
    {
      uid: 324432325,
      text: "Some text",
      creationDate: 1580281881157,
      cheduleTime: 1590281881157,
      labels: [],
      projects: [],
      priority: ""
    }
  ],
  addInboxTodo: action((state, payload) => {
    state.inboxTodos.push(payload);
    // state.inboxTodos[payload.index].text = payload.text;
  }),
};

export default inboxModel;

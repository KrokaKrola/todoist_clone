import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useStoreState, useStoreActions } from "easy-peasy";
import Todo from '../../components/Todo';

const MainContainer = styled.main`
  background-color: #fff;
  margin-left: 266px;
  border-right: 1px solid #f1f1f1;
  min-height: calc(100vh - 44px);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
  width: 100%;
`;

const Main = props => {
  const inboxTodos = useStoreState(state => state.inbox.inboxTodos);
  const addTodoToInbox = useStoreActions(actions => actions.inbox.addInboxTodo);

  const test = () => {
    addTodoToInbox({
      uid: 3432324 + Math.random() * 1000,
      text: "New todo",
      creationDate: new Date().getTime(),
      cheduleTime: new Date().getTime() + 100000,
      labels: [],
      projects: [],
      priority: ""
    });
    // addTodoToInbox({index, text: 'newText'})
  };

  return (
    <MainContainer>
      {inboxTodos &&
        inboxTodos.map((todo) => <Todo key={todo.uid} todo={todo} />)}
      <button onClick={() => test()}>add todo</button>
    </MainContainer>
  );
};

Main.propTypes = {
  props: PropTypes.object
};

export default Main;

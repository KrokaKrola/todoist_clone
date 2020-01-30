import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useStoreState, useStoreActions } from 'easy-peasy';
import Todo from '../../components/Todo';

const MainContainer = styled.main`
  background-color: #fff;
  margin-left: 266px;
  border-right: 1px solid #f1f1f1;
  min-height: calc(100vh - 44px);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
  width: 100%;
  padding-left: 30px;
  padding-top: 44px;
`;

const Main = props => {
  const inboxTodos = useStoreState(state => state.inbox.inboxTodos);
  const addTodoToInbox = useStoreActions(actions => actions.inbox.addInboxTodo);
  const [focusedUid, setFocusedUid] = useState(null);
  const test = () => {
    addTodoToInbox({
      uid: 3432324 + Math.random() * 1000,
      text: '',
      creationDate: new Date().getTime(),
      cheduleTime: new Date().getTime() + 100000,
      labels: [],
      projects: [],
      priority: ''
    });
    // addTodoToInbox({index, text: 'newText'})
  };

  return (
    <MainContainer>
      {inboxTodos &&
        inboxTodos.map(todo => (
          <Todo
            setFocusedUid={setFocusedUid}
            key={todo.uid}
            todo={todo}
            focus={todo.uid === focusedUid ? true : false}
            newOne={todo.text === '' ? true : false}
          />
        ))}
      <button onClick={() => test()}>add todo</button>
    </MainContainer>
  );
};

Main.propTypes = {
  props: PropTypes.object
};

export default Main;

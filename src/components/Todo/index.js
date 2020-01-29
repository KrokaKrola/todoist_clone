import React from "react";
import PropTypes from "prop-types";
import {Editor, EditorState, ContentState} from 'draft-js';

const Todo = ({ todo }) => {
  const {
    uid,
    text,
    cheduleTime,
    labels,
    projects,
    priority,
    creationDate
  } = todo;
  const [editorState, setEditorState] = React.useState(
    EditorState.createWithContent(ContentState.createFromText(text)),
  );
  return <Editor editorState={editorState} onChange={setEditorState} />;
};

Todo.propTypes = {
  todo: PropTypes.shape({
    uid: PropTypes.number.isRequired,
    text: PropTypes.any.isRequired,
    cheduleTime: PropTypes.any,
    creationDate: PropTypes.any,
    labels: PropTypes.array,
    projects: PropTypes.array,
    priority: PropTypes.any
  })
};

export default Todo;

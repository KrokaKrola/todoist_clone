import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Editor, EditorState, ContentState } from 'draft-js';
import styled from 'styled-components';
import { Button, Icon } from 'antd';

const EditorItem = styled.form`
  margin-right: 30px;
  margin-bottom: 20px;
  .DraftEditor-root {
    position: relative;
    .public-DraftEditorPlaceholder-root {
      position: absolute;
      left: 6px;
      opacity: 0.4;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
    }
  }
`;

const EditorItemActions = styled.div`
  display: flex;
  align-items: center;
`;

const EditorItemControls = styled.div`
  display: flex;
  font-size: 1.25rem;
  & > * {
    margin: 0 7px;
  }
`;

const Todo = ({ todo, setFocusedUid, focus, newOne }) => {
  const {
    uid,
    text,
    cheduleTime,
    labels,
    projects,
    priority,
    creationDate
  } = todo;
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromText(text))
  );
  const ref = useRef(editorState);
  useEffect(() => {
    if (newOne) {
      ref.current.focus();
    }
  }, [newOne]);
  return (
    <EditorItem>
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        onFocus={() => setFocusedUid(uid)}
        ref={ref}
        placeholder={'placeholder'}
        spellCheck={true}
      />
      {focus && (
        <EditorItemActions>
          {newOne ? (
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginRight: 10 }}
            >
              Add task
            </Button>
          ) : (
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginRight: 10 }}
            >
              Save
            </Button>
          )}

          <Button
            type="link"
            style={{ marginRight: 'auto' }}
            onClick={() => setFocusedUid(null)}
          >
            Cancel
          </Button>
          <EditorItemControls>
            <Icon type="unordered-list" />
            <Icon type="tag" />
            <Icon type="flag" />
          </EditorItemControls>
        </EditorItemActions>
      )}
    </EditorItem>
  );
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

import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

const NewTask = props => {
  return (
    <div>
      <Icon type="plus" />
    </div>
  );
};

NewTask.propTypes = {
  props: PropTypes.object
};

export default NewTask;

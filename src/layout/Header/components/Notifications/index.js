import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Badge } from 'antd';

const NewTask = props => {
  return (
    <div>
      <Badge dot={true}>
        <Icon type="notification" />
      </Badge>
    </div>
  );
};

NewTask.propTypes = {
  props: PropTypes.object
};

export default NewTask;

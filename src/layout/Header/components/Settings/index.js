import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

const Settings = props => {
  return (
    <div>
      <Icon type="setting" />
    </div>
  );
};

Settings.propTypes = {
  props: PropTypes.object
};

export default Settings;

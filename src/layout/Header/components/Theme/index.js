import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

const Theme = props => {
  return (
    <div>
      <Icon type="fire" />
    </div>
  );
};

Theme.propTypes = {
  props: PropTypes.object
};

export default Theme;

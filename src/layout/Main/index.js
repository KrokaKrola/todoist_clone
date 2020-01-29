import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainContainer = styled.main`
  background-color: #fff;
  margin-left: 266px;
  border-right: 1px solid #f1f1f1;
  min-height: calc(100vh - 44px);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
  width: 100%;
`;

const Main = props => {
  return <MainContainer></MainContainer>;
};

Main.propTypes = {
  props: PropTypes.object
};

export default Main;

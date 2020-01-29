import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../components/Container';
import Logo from './components/Logo';
import styled from 'styled-components';
import Search from './components/Search';
import NewTask from './components/NewTask';
import Theme from './components/Theme';
import Settings from './components/Settings';
import Notifications from './components/Notifications';

const HeaderContainer = styled.header`
  height: 44px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  border-bottom: solid 1px #ca2100;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 10;
  background: linear-gradient(
    168deg,
    rgba(255, 106, 89, 1) 0%,
    rgba(191, 98, 98, 1) 100%
  );
`;

const OptionsBar = styled.div`
  display: flex;
  align-items: center;
  & > div {
    margin: 0 5px;
    padding: 5px;
    transition: background 0.2s ease-in-out;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    font-size: 1.25rem;
    cursor: pointer;
    display: flex;
    width: 30px;
    height: 30px;
    &:hover {
      background: #fff;
      color: rgba(255, 106, 89, 1);
    }
  }
`;

const Header = props => {
  return (
    <HeaderContainer>
      <Container flex justify="space-between" align="center">
        <Logo />
        <Search />
        <OptionsBar>
          <NewTask />
          <Notifications />
          <Theme />
          <Settings />
        </OptionsBar>
      </Container>
    </HeaderContainer>
  );
};

Header.propTypes = {
  props: PropTypes.object
};

export default Header;

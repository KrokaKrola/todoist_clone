import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from 'antd';

const SearchContainer = styled.div`
  position: relative;
  margin-left: 70px;
`;

const SearchInput = styled.input`
  border: 1px solid transparent !important;
  border-radius: 3px;
  padding: 5px;
  width: 300px;
  outline: 0;
  color: #fff;
  padding-left: 30px;
  margin-top: 2px;
  background: 0;
  transition: 0.2s ease-in;
  &::placeholder {
    color: #fff;
  }
  &:focus {
    border: 1px solid #fff !important;
    background: #fff;
    color: #000;
  }
  &:hover:not(:focus) {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const Search = props => {
  return (
    <SearchContainer>
      <Icon
        style={{ position: 'absolute', top: 10, left: 5, color: '#fff' }}
        type="search"
      />
      <SearchInput type="text" placeholder="Search anything" />
    </SearchContainer>
  );
};

Search.propTypes = {
  props: PropTypes.object
};

export default Search;

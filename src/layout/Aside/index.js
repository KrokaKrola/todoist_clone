import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Collapse, Icon } from 'antd';

const { Panel } = Collapse;

const AsideContainer = styled.aside`
  user-select: none !important;
  width: 266px;
  height: calc(100vh - 44px);
  padding-top: 44px;
  padding-left: 5px;
  position: fixed;
  overflow-x: hidden;
  overflow-y: hidden;
  border-right: 1px solid #f1f1f1;
  background-color: #fafafa;
`;

const AsideLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  color: #000;
  font-weight: 300;
  padding: 5px;
  border-radius: 5px;
  transition: background 0.2s ease-in-out;
  span {
    margin-right: 5px;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 1);
    color: #000;
  }
`;

const Aside = props => {
  return (
    <AsideContainer>
      <AsideLink to="/inbox">
        <span role="img" aria-label="Inbox">
          📩
        </span>
        Inbox
      </AsideLink>
      <AsideLink to="/today">
        <span role="img" aria-label="Inbox">
          📆
        </span>
        Today
      </AsideLink>
      <AsideLink to="/week">
        <span role="img" aria-label="Inbox">
          📅
        </span>
        This week
      </AsideLink>
      <Collapse
        bordered={false}
        expandIcon={({ isActive }) => (
          <Icon type="caret-right" rotate={isActive ? 90 : 0} />
        )}
      >
        <Panel header="Projects" key="1">
          <AsideLink to="/greetings">
            <span role="img" aria-label="Inbox">
              👋
            </span>
            Greetings traveler
          </AsideLink>
        </Panel>
        <Panel header="Filters" key="2">
          <AsideLink to="/greetings">
            <span role="img" aria-label="Inbox">
              👁
            </span>
            Filter 1
          </AsideLink>
        </Panel>
      </Collapse>
    </AsideContainer>
  );
};

Aside.propTypes = {
  props: PropTypes.object
};

export default Aside;

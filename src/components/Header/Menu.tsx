import React from 'react';
import styled from 'styled-components';

import Typography from "@mui/material/Typography";
import { Flex } from "../common/Flex";

const MenuItem = styled.a`
  margin-right: 20px;
  &:last-child { margin-right: 0; }
  padding: 5px;
  color: #000;
  text-decoration: none;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 0;
    height: 3px;
    background: #78107b;
    transition: width .3s;
    position: absolute;
    right: 0;
  }
  
  &:hover:after {
    width: 100%;
    left: 0;
  }
`;

const Menu = () => {
  return (
    <Flex w="auto">
      <MenuItem href="">
        <Typography variant="body1">
        Jobs
        </Typography>
      </MenuItem>
      <MenuItem href="">
        <Typography variant="body1">
          About
        </Typography>
      </MenuItem>
      <MenuItem href="">
        <Typography variant="body1">
          Contacts
        </Typography>
      </MenuItem>
    </Flex>
  );
};

export default Menu;

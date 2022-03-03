import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import { styled as styledMUI } from '@mui/material/styles';
import ButtonMUI from '@mui/material/Button';
import { Flex } from "../common/Flex";
import Logo from './Logo';
import Menu from "./Menu";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const Button = styledMUI(ButtonMUI)({
  backgroundColor: "#000",
  fontSize: 24,
  border: '5px solid #762a89',
  '&:hover': {
    backgroundColor: '#762a89'
  },
});

const ItemWrapper = styled(Box)`
  position: absolute;
  top: 0;
  width: 500px;
  opacity: 0;
`;

const HeaderWrapper = styled.header`
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
      transform: none;
    }
    100% {
      opacity: 0;
      transform: translateY(20px);
    }
  }
  background: rgb(2,0,36);
  background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(121,9,121,1) 0%, rgba(0,217,255,1) 100%);
  padding: 20px;
  height: ${window.document.documentElement.clientHeight};
  .active {
    animation: fadeIn 1s, fadeOut 1s ${props => props.slidesDuration - 1 + 's'};
    animation-fill-mode: forwards;
  }
`;

interface Slider {
  items: Array<any>,
  startPosition?: number,
  duration?: number
}

const slider: Slider = {
  items: [1, 2, 3],
  startPosition: 0,
  duration: 5
};

const slides = [1, 2, 3];
const startPosition = 0;
const slidesDuration = 5; // seconds

const Header = () => {
  const [active, setActive] = useState(startPosition);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActive((slides[active]) % slides.length)
    }, slidesDuration * 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [active, slides.length]);

  return (
    <HeaderWrapper slidesDuration={slidesDuration}>
      <Flex justify="space-around">
        <Logo />
        <Button variant="contained">Make an order</Button>
        <Menu />
      </Flex>
      <Flex>
        <Flex w="500px" mt="100px" style={{ position: 'relative' }}>
          <ItemWrapper className={`${slides[active] === slides[0] && 'active'}`}>
            <Typography variant="h1" color="#fff" style={{ textAlign: 'center', fontWeight: 500 }}>
              Javascript development
            </Typography>
          </ItemWrapper>
          <ItemWrapper className={`${slides[active] === slides[1] && 'active'}`}>
            <Typography variant="h1" color="#fff" style={{ textAlign: 'center', fontWeight: 500 }}>
              Use the power of javascript in your project
            </Typography>
          </ItemWrapper>
          <ItemWrapper className={`${slides[active] === slides[2] && 'active'}`}>
            <Typography variant="h1" color="#fff" style={{ textAlign: 'center', fontWeight: 500 }}>
              Open your product to the world
            </Typography>
          </ItemWrapper>
        </Flex>
      </Flex>
    </HeaderWrapper>
  );
};

export default Header;

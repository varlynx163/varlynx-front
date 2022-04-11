import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { styled as styledMUI } from '@mui/material/styles';
import ButtonMUI from '@mui/material/Button';
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

import { Flex } from "../common/Flex";
import Logo from './Logo';
import Menu from "./Menu";

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
  top: -14em;
  opacity: 0;
  overflow: hidden;
  width: 100%;
`;

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
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
  
  @media(max-width: 750px) {
    h1 {
      
    }
  }
`;

interface Slider {
  items: Array<any>,
  startPosition?: number,
  duration?: number
}

const slider: Slider = {
  items: [
    { text: "JavaScript Development" , id: 1 },
    { text: "React / Redux / Redux-Saga " , id: 2 },
    { text: "React Hooks / Styled Components" , id: 3 },
    { text: "Fast and quality integration" , id: 4 },
  ],
  startPosition: 0,
  duration: 4
};

const Header = () => {
  const { items, duration, startPosition } = slider;
  const [active, setActive] = useState(startPosition);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActive(active === items.length - 1 ? startPosition : active + 1)
    }, duration * 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [active, items.length]);

  return (
    <HeaderWrapper slidesDuration={duration}>
      <Flex justify="space-around">
        <Logo />
        <Button variant="contained">Make an order</Button>
        <Menu />
      </Flex>
      <Flex grow={2}>
        <Flex w="100%" mt="100px" style={{ position: 'relative' }}>
          {items.map(slide => (
            <ItemWrapper className={`${items[active]?.id === slide?.id && 'active'}`}>
              <Typography variant="h1" color="#fff" style={{ textAlign: 'center', fontWeight: 500 }}>
                {slide?.text}
              </Typography>
            </ItemWrapper>
          ))}
        </Flex>
      </Flex>
    </HeaderWrapper>
  );
};

export default Header;

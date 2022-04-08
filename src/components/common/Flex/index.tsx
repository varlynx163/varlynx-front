import styled from "styled-components";
import PropTypes from 'prop-types';
import { Box } from "@mui/material";

export const Flex = styled(Box)`
  display: flex;
  flex-direction: ${props => props.direction};
  width: ${props => props.w};
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
  flex-grow: ${props => props.grow};
  flex-wrap: ${props => props.wrap};
`;

Flex.propTypes = {
  direction: PropTypes.string,
  w: PropTypes.string,
  align: PropTypes.string,
  justify: PropTypes.string,
  wrap: PropTypes.string,
  grow: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

Flex.defaultProps = {
  direction: 'row',
  w: '100%',
  align: 'center',
  justify: 'center',
  wrap: 'wrap',
  grow: 0,
};

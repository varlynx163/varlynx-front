import styled from "styled-components";
import { Box } from "@mui/material";

export const Flex = styled(Box)`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  width: ${props => props.w || '100%'};
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'center'};
`;

import React from 'react';
import styled from 'styled-components';

import Typography from '@mui/material/Typography';

const LogoWrapper = styled.span`
  font-size: 30px;
  color: #000;
`;

export const Logo = () => <Typography variant="body1">
  <LogoWrapper>VarLynx Studio</LogoWrapper>
</Typography>



import React from 'react';
import styled from 'styled-components';

import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';

const LogoWrapper = styled(Box)`
  font-size: 30px;
  color: #000;
`;

const Logo = () => <Typography variant="body1">
  <LogoWrapper>VarLynx Studio</LogoWrapper>
</Typography>


export default Logo

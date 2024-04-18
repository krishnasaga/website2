import { Box } from '@chakra-ui/react';
import { css, keyframes } from '@emotion/react'
import React, { ReactElement } from 'react';

const floating = keyframes`
  0% { transform: translate(0,  0px); }
  50%  { transform: translate(0, 15px); }
  100%   { transform: translate(0, -0px); }    
`

export const FloatingAnimation = ({ children }: { children: ReactElement }) => {
  return <Box css={css`      
  animation: ${floating};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  margin-left: 30px;
  margin-top: 5px;
`}>{children}</Box>;

}


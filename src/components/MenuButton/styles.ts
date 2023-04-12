import { styled } from '@mui/material/styles';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const MuiMenu = styled(Menu)`
   & .MuiPaper-root {
    border-radius: 5px;
    box-shadow: 0 0 10px 1px #D3D3D3;
  }

  span {
    font-size: 0.8em;
    font-family: Ubuntu, sans-serif;
    color: #808080;
    margin: 3px;
    text-align: center;
    font-weight: bolder;
    margin-left: 10px;
    margin-top: 5px;
    display: inline-block;
  }

  header {
    margin: 2px 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    span {
      flex: 1;
    }
  }
`;

export const MuiMenuItem = styled(MenuItem)`
  color: blue;
  min-width: 250px;

  font-size: 0.9em;
  font-family: Ubuntu, sans-serif;
  color: #172b4d;

  &:hover {
    background-color: #f2f0eb;
  }

  &.Mui-selected {
    background-color: #EBECF0;
  }
`;
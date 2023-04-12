import { useState } from 'react';

import Divider from '@mui/material/Divider';

import { BsThreeDots } from 'react-icons/bs'
import { GrFormClose } from 'react-icons/gr'

import Button from '../Buttom';

import { MuiMenu, MuiMenuItem } from './styles'

const MenuButton = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        onClick={handleClick}
      >
        <BsThreeDots />
      </Button>

      <MuiMenu
        id="column-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >

        <header>

          <span>Ações da Lista</span>

          <Button
            onClick={handleClose}
          >
            <GrFormClose />
          </Button>

        </header>        

        <Divider sx={{ my: 0.5 }} />       

        <span>Ações</span>

        <MuiMenuItem  onClick={handleClose}>
          Adicionar Cartão...
        </MuiMenuItem>
        
        <MuiMenuItem  onClick={handleClose}>
          Copiar Lista...
        </MuiMenuItem>

        <MuiMenuItem  onClick={handleClose}>
          Mover Lista...
        </MuiMenuItem>

        <MuiMenuItem  onClick={handleClose}>
          Seguir
        </MuiMenuItem>

        <Divider sx={{ my: 0.5 }} />     

        <span>Ordenação</span>

        <MuiMenuItem  onClick={handleClose}>
          Ordernar por...
        </MuiMenuItem>

        <Divider sx={{ my: 0.5 }} />     

        <span>Automação</span>

        <MuiMenuItem  onClick={handleClose}>
          Quando um cartão for adicionado à lista...
        </MuiMenuItem>

        <MuiMenuItem  onClick={handleClose}>
          Todo dia, ordenar a lista por...
        </MuiMenuItem>

        <MuiMenuItem  onClick={handleClose}>
          Toda segunda-feira, ordenar a lista por...
        </MuiMenuItem>

        <MuiMenuItem  onClick={handleClose}>
          Criar uma regra...
        </MuiMenuItem>

        <Divider sx={{ my: 0.5 }} />     

        <span>Agrupar Cards</span>

        <MuiMenuItem  onClick={handleClose}>
          Mover todos os cartões desta lista
        </MuiMenuItem>

        <MuiMenuItem  onClick={handleClose}>
          Arquivar todos os cartões desta lista
        </MuiMenuItem>

        <Divider sx={{ my: 0.5 }} />     

        <span>Arquivar</span>

        <MuiMenuItem  onClick={handleClose}>
          Arquivar essa lista
        </MuiMenuItem>

      </MuiMenu>
    </div>
  )
}

export default MenuButton
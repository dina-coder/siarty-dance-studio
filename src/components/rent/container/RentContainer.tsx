import React from "react";
import styled from "styled-components";

import { COLORS } from "../../../common/constants";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type TRentContainerProps = {
  className?: string;
};

export const RentContainer = ({ className }: TRentContainerProps) => (
    <ContainerStyle className={className}>
<Typography sx={{ typography: { xs: 'h5', sm: 'h4' } }}>Зал 50 кв. м.</Typography>
<Typography variant='body2'  sx={{marginTop: '24px'}}>Музыкальная колонка и аудиосистема с Bluetooth, AUX</Typography>
<Typography variant='body2'>Одна раздевалка</Typography>
<Typography variant='body2'>Покрытие: Ламинат</Typography>
<Button
          component="a"
          href="https://widget.musbooking.com/?room=1a2e032d-ec93-4b53-a86c-e3bafad064a7&rg=1&themeActive=181817"
          target="_blank"
          sx={{
            mt: 3,
            "&.MuiButtonBase-root:hover": {
              bgcolor: COLORS.WHITE,
              borderColor: COLORS.WHITE,
              color: COLORS.BLACK_1,
            }
          }}
          variant="outlined"
          size='small'
          color="inherit"
        >
          Забронировать
        </Button>
    </ContainerStyle>
);


const ContainerStyle = styled.div`
display: flex;
flex-direction: column;
  color: ${COLORS.WHITE};
  /* border: 1px solid ${COLORS.WHITE}; */
  /* border-radius: 4px; */
`;
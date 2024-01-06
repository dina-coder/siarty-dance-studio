import React from "react";
import styled from "styled-components";

import { COLORS, INTL } from "../../../common/constants";
import Carousel from "react-material-ui-carousel";
import { Box, Button, Paper, Typography } from "@mui/material";

type TRentContainerProps = {
  className?: string;
};

export const RentContainer = ({ className }: TRentContainerProps) => (
  <WrapperStyle>
    <ImgStyled src={require("../../../assets/rent1.jpg")} />
    <ContainerStyle>
<Typography variant={'h4'}>Зал 50 кв. м.</Typography>
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
    {/* <Carousel       
      animation="slide"
      autoPlay={false}
      sx={{
        width: '80vw',
        maxWidth: '813px',
        height: '100%'
      }}>
            <ImgStyled src={require("../../../assets/rent1.jpg")} />
        <ImgStyled src={require("../../../assets/rent2.jpg")} />
        <ImgStyled src={require("../../../assets/rent3.webp")} />
    </Carousel> */}
  </WrapperStyle>
);

const WrapperStyle = styled.div`
position: relative;
`;
export const ImgStyled = styled.img`
object-fit: contain;
width: 80vw;
max-width: 813px;
opacity: 0.4;
`;

const ContainerStyle = styled.div`
padding: 24px;
display: flex;
flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  color: ${COLORS.WHITE};
`;

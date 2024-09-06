import React, { useState } from "react";
import styled from "styled-components";
import { COLORS, INTL } from "../../../common/constants";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Logo } from "../ui/molecules/Logo";
import { Menu } from "../ui/organisms/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, scroller } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  {
    id: "directions",
    title: INTL.HEADER.MENU.STYLES,
  },
  {
    id: "schedule",
    title: INTL.HEADER.MENU.SCHEDULE,
  },
  {
    id: "price",
    title: INTL.HEADER.MENU.PRICE,
  },
  {
    id: "rent",
    title: INTL.HEADER.MENU.RENT,
  },
  {
    id: "contact",
    title: INTL.HEADER.MENU.CONTACT,
  },
];

export const HeaderContainer = ({ isColor }: { isColor?: boolean }) => {
  const [open, setState] = useState(false);
  const toggleDrawer = (open: boolean) => {
    setState(open);
  };

  const navigate = useNavigate();
  const {pathname} = useLocation()

  const handleClickLink = (id: string)=>{
    if (pathname !=='/') {
      navigate('/');
      setTimeout(()=> {scroller.scrollTo(id, {spy:true})}, 0)
    }
    toggleDrawer(false);
   };

  return (
    <AppBarStyled
      sx={
        isColor
          ? {
              backgroundColor: COLORS.BLACK_1_ALPHA_80,
              backdropFilter: "blur(4px)",
            }
          : { backgroundColor: "transparent", backdropFilter: "blur(4px)" }
      }
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <BoxStyled sx={{ display: { xs: "flex", md: "none" } }}>
            <Logo onClick={() => navigate('/')} />
            <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
              sx={{ ml: 2 }}
              onClick={() => toggleDrawer(!open)}
            >
              <MenuIcon />
            </IconButton>
          </BoxStyled>
          <BoxStyled
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <Logo onClick={() => navigate('/')} />
            <Menu />
          </BoxStyled>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => toggleDrawer(false)}
        onClick={() => toggleDrawer(!open)}
      >
        <Box
          sx={{
            p: 4,
            height: 1,
          }}
        >
          <IconButton sx={{ mb: 2, color: "white" }}>
            <CloseIcon onClick={() => toggleDrawer(false)} />
          </IconButton>
          <ListStyled>
            {navItems.map(({ id, title }) => (
              <Link key={id} to={id} smooth= {true} spy={true} onClick={() => handleClickLink(id)}>
                <ListItem key={id} disablePadding>
                  <ListItemButton
                    sx={{
                      "&.MuiButtonBase-root:hover": {
                        textDecorationColor: COLORS.ACCENT,
                        textDecorationLine: "underline",
                        textDecorationThickness: "4px",
                        textUnderlineOffset: "6px",
                      },
                    }}
                  >
                    <Typography noWrap variant="button">
                      {title}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </ListStyled>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              bottom: "24px",
              left: "50%",
              transform: "translate(-50%, 0)",
            }}
          >
            <Button
              component="a"
              href="https://wa.me/79691909666"
              target="_blank"
              sx={{
                "&.MuiButtonBase-root:hover": {
                  bgcolor: COLORS.WHITE,
                  borderColor: COLORS.WHITE,
                  color: COLORS.BLACK_1,
                },
              }}
              variant="outlined"
              size="large"
              color="inherit"
            >
              {INTL.MAIN_PAGE.SIGN_UP}
            </Button>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconButton
                key="wa"
                sx={{
                  "&:hover": {
                    backgroundColor: COLORS.ACCENT,
                  },
                }}
                size="small"
                href="https://wa.me/79691909666"
                target="_blank"
              >
                <ImgStyled src={require("../../../assets/wa.png")} loading="lazy" />
              </IconButton>

              <IconButton
                key="telegram"
                sx={{
                  "&:hover": {
                    backgroundColor: COLORS.ACCENT,
                  },
                }}
                size="small"
                href="https://t.me/siarty_dance_studio"
                target="_blank"
              >
                <ImgStyled src={require("../../../assets/telegram.png")} loading="lazy" />
              </IconButton>
              <IconButton
                key="vk"
                sx={{
                  "&:hover": {
                    backgroundColor: COLORS.ACCENT,
                  },
                }}
                size="small"
                href="https://vk.com/siarty_dancestudio"
                target="_blank"
              >
                <SmallImgStyled src={require("../../../assets/vk.png")} loading="lazy" />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </AppBarStyled>
  );
};

const AppBarStyled = styled(AppBar)`
  position: fixed;
`;

const BoxStyled = styled(Box)`
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  color: ${COLORS.WHITE};
`;

const ListStyled = styled(List)`
  display: flex;
  flex-direction: column;
  color: white;
`;

const ImgStyled = styled.img`
  color: ${COLORS.WHITE};
  height: 24px;
`;

const SmallImgStyled = styled.img`
  color: ${COLORS.WHITE};
  height: 16px;
`;

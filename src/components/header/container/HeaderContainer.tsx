import React, { useState } from "react";
import styled from "styled-components";
import { COLORS, INTL } from "../../../common/constants";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Logo } from "../ui/molecules/Logo";
import { Menu } from "../ui/organisms/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

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

export const HeaderContainer = ({ isColor }: { isColor: boolean }) => {
  const [open, setState] = useState(false);

  //function that is being called every time the drawer should open or close, the keys tab and shift are excluded so the user can focus between the elements with the keys
  const toggleDrawer = (open: boolean) => {
    //changes the function state according to the value of open
    setState(open);
  };

  return (
    <AppBarStyled
      sx={
        isColor
          ? {
              backgroundColor: COLORS.BLACK_1_ALPHA_80,
              backdropFilter: "blur(4px)",
            }
          : { backgroundColor: "transparent" }
      }
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <BoxStyled sx={{ display: { xs: "flex", md: "none" } }}>
            <Logo />
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
            <Logo />
            <Menu />
          </BoxStyled>
        </Toolbar>
      </Container>

      <Drawer
        //from which side the drawer slides in
        anchor="right"
        //if open is true --> drawer is shown
        open={open}
        //function that is called when the drawer should close
        onClose={() => toggleDrawer(false)}
        //function that is called when the drawer should open
        onClick={() => toggleDrawer(!open)}
      >
        {/* The inside of the drawer */}
        <Box
          sx={{
            p: 4,
            height: 1,
          }}
        >
          {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
          <IconButton sx={{ mb: 2, color: "white" }}>
            <CloseIcon onClick={() => toggleDrawer(false)} />
          </IconButton>
          <ListStyled>
            {navItems.map(({ id, title }) => (
              <ListItem key={id} disablePadding>
                <ListItemButton
                  component={"a"}
                  href={"#" + id}
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
            ))}
          </ListStyled>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: '16px',
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
                sx={{
                  "&:hover": {
                    backgroundColor: COLORS.ACCENT,
                  },
                }}
                size="small"
                href="https://wa.me/79691909666"
                target="_blank"
              >
                <ImgStyled src={require("../../../assets/wa.png")} />
              </IconButton>

              <IconButton
                sx={{
                  "&:hover": {
                    backgroundColor: COLORS.ACCENT,
                  },
                }}
                size="small"
                href="https://t.me/siarty_dance_studio"
                target="_blank"
              >
                <ImgStyled src={require("../../../assets/telegram.png")} />
              </IconButton>
              <IconButton
                sx={{
                  "&:hover": {
                    backgroundColor: COLORS.ACCENT,
                  },
                }}
                size="small"
                href="https://vk.com/siarty_dancestudio"
                target="_blank"
              >
                <SmallImgStyled src={require("../../../assets/vk.png")} />
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

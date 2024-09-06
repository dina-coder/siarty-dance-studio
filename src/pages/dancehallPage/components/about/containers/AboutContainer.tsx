import React from "react";
import {
  Accordion,
  Box,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import { COLORS, INTL } from "../../../../../common/constants";
import { PageTemplate } from "../../../../../common/ui/organisms/PageTemplate";

export const AboutContainer = () => (
  <PageTemplate
  title={INTL.DIRECTIONS_PAGE.DANCEHALL.TITLE}
  description={"Dancehall - танцевальный стиль, который пришел из улиц экзотической Ямайки.  Энергичный и узнаваемый ритм диктует и основной рисунок танца: это различные шейки и яркие акценты всеми частями тела. Основные движения — это волны и вайны (wine), то есть вращения бедрами, степы. Dancehall позволяет каждому найти что-то близкое именно ему и при этом насладиться регги-ритмом"}
  groupLevel={"Группа открыта для любого уровня"}
  wear={"Шорты и топ. Обувь - кроссовки."}
  schedule={
    <>
      <Typography>ср - 20:00</Typography>
    </>
  }
/>
);

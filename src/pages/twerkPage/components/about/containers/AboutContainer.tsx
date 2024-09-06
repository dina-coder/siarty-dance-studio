import React from "react";
import { Typography } from "@mui/material";
import { INTL } from "../../../../../common/constants";
import { PageTemplate } from "../../../../../common/ui/organisms/PageTemplate";

export const AboutContainer = () => (
  <PageTemplate
    title={INTL.DIRECTIONS_PAGE.TWERK}
    description={
      "Если вы хотите научиться новому танцевальному стилю, который привлекает внимание своими динамичными движениями и ритмом, то танец тверк – отличный выбор! Тверк – это популярный танцевальный стиль, происходящий из африканской и американской культур, который характеризуется энергичными движениями бедер и ягодиц. Twerk — сексуально-провокационное танцевальное направление. На занятиях по тверку ты научишься не только красиво танцевать, но и подкачаешь свое тело! При тверкинге активно работают мышцы бедер, ягодиц, поясницы, ног и пресса, что позволяет подтянуть свою фигуру. И конечно же, ты почувствуешь еще большую уверенность в себе и раскрепощенность!"
    }
    groupLevel={"Группа открыта для любого уровня"}
    wear={"Короткие шорты. Обувь - кроссовки."}
    schedule={
      <>
        <Typography>вт - 21:00</Typography>
        <Typography>чт - 21:00</Typography>
      </>
    }
  />
);
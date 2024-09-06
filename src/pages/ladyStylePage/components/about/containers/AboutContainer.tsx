import React from "react";
import { Typography } from "@mui/material";
import { INTL } from "../../../../../common/constants";
import { PageTemplate } from "../../../../../common/ui/organisms/PageTemplate";

export const AboutContainer = () => (
  <PageTemplate
    title={INTL.DIRECTIONS_PAGE.LADY_STYLE}
    description={
      "Это про красоту, сексуальность и женственность. Данному стилю не присуща вульгарность, скорее ярко выраженная и максимально акцентированная женственность. Ladies Style – это микс различных танцевальных стилей, а именно синтез популярных современных направлений: strip, vogue, jazz modern, jazz funk и др. Здесь нет правил и четких рамок. Занятия танцем леди стайл – это отличные тренировки для тех, кто хочет обрести уверенность в себе и в своих женских чарах, научиться соблазнять и кокетничать и флиртовать."
    }
    groupLevel={"Группа открыта для любого уровня"}
    wear={
      "Удобную одежду, в которой вы будете чувствовать себя уверенно. Обувь - туфли на каблуке или носочки."
    }
    schedule={<>
    <Typography>ср - 18:00</Typography>
    <Typography>пт - 18:00</Typography>
    <Typography>пт - 20:00</Typography>
    </>}
  />
);

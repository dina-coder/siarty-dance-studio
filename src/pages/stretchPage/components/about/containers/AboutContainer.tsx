import React from "react";
import { Typography } from "@mui/material";

import { INTL } from "../../../../../common/constants";
import { PageTemplate } from "../../../../../common/ui/organisms/PageTemplate";

export const AboutContainer = () => (
  <PageTemplate
    title={INTL.DIRECTIONS_PAGE.STRETCHING}
    description={
      "Растяжка, нужна каждому человеку. Конечно, есть противопоказания, но их очень мало. Растяжка помогает укрепить позвоночный столб. Привести в тонус мышцы, дыхательная гимнастика помогает похудеть и улучшить процесс кровообращения. Именно растяжка  поможет сохранить вашу красоту. Растяжка показана всем независимо от возраста и состояния здоровья."
    }
    schedule={
    <>
    <Typography>пн - 21:00</Typography>
    <Typography>пт - 21:00</Typography>
  </>}
  />
);

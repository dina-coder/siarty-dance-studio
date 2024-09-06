import React from "react";
import { Typography } from "@mui/material";
import { INTL } from "../../../../../common/constants";
import { PageTemplate } from "../../../../../common/ui/organisms/PageTemplate";

export const AboutContainer = () => (
  <PageTemplate
    title={INTL.DIRECTIONS_PAGE.CHOREO}
    description={
      "Направление CHOREOGRAPHY — это хореография, при исполнении которой, используются движения и техники из современных стилей танца. При постановке и исполнении урбан хореографии большое внимание уделяют музыкальности, точности исполнения и синхронности. Направление CHOREO подходит для любителей не ограничивать себя рамками одного стиля, музыки и манеры исполнения."
    }
    groupLevel={"Группа открыта для любого уровня"}
    wear={
      "Удобную одежду, в которой вы будете чувствовать себя уверенно. Обувь - носочки или кроссовки."
    }
    schedule={
      <>
        <Typography>пн - 19:00</Typography>
        <Typography>пт - 19:00</Typography>
      </>
    }
  />
);

import React from "react";
import styled from "styled-components";

import { ContactsPanel } from "../ui/molecules/ContactsPanel";
import Box from "@mui/material/Box";

export const ContactsContainer = () => {
  return (
    <WrapperStyle>
      <ContactsPanel />

    </WrapperStyle>
  );
};

const WrapperStyle = styled.div`
  position: relative;
  width: 80vw;
  min-width: 80vw;
  /* display: flex; */
  /* align-items: center;
  flex-direction: center;
  flex-wrap: wrap; */
  gap: 40px;
`;


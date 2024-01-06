import React from "react";
import styled from "styled-components";
import { COLORS, INTL } from "../../common/constants";
import { Button, Typography } from "@mui/material";
import { ContactsContainer } from "../../components/contacts/container/ContactsContainer";

type TContactsPagePrice = {
  className?: string;
};
export const ContactsPage = ({ className }: TContactsPagePrice) => {
  return (
    <MainSectionWrapper className={className} id='contact'>
<ContactsContainer />
      
      </MainSectionWrapper>
  );
};

const MainSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 45px 0;
  background-color: ${COLORS.BLACK_1};
  width: 100%;

  background-color: ${COLORS.BLACK_1};
  background-image: url(${require("../../assets/pricebg.png")});
  background-size: 100%;
  background-repeat: repeat;
`;


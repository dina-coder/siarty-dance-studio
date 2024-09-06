import React from "react";
import {COLORS, INTL } from "../../../../common/constants";
import { ContactsContainer } from "../../../../components/contacts/container/ContactsContainer";
import { SectionTemplate } from "../../../../common/ui/organisms/SectionTemplate";
import styled from "styled-components";

type TContactsPagePrice = {
  className?: string;
};
export const Contacts = ({ className }: TContactsPagePrice) => {
  return (
    <SectionTemplateStyled className={className} id='contact' title={INTL.CONTACTS_PAGE.TITLE}>
<ContactsContainer />
      </SectionTemplateStyled>
  );
};
const SectionTemplateStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
  padding: 72px;
  width: 100%;
  max-width: 1920px;
  background-color: ${COLORS.BLACK_1};
`;



import React from "react";
import { Main } from "./components/main/Main";
import { Directions } from "./components/directions/Directions";
import { Schedule } from "./components/schedule/Schedule";
import { Price } from "./components/price/Price";
import { Rent } from "./components/rent/Rent";
import { Contacts } from "./components/contacts/Contacts";
import { Banner } from "../../components/banner/Banner";
import { AboutUs } from "./components/aboutUs/AboutUs";


export const HomePage = () => (
    <>
        <Main />
        <AboutUs />
        <Directions />
        <Schedule />
        <Price />
        <Banner />
        <Rent />
        <Contacts />
    </>
  );


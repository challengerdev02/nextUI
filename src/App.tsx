import * as React from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Features from "./components/Features";
import Tokenomics from "./components/Tokenomics";
import Hero from "./components/Hero";
import RevenueShare from "./components/RevenueShare";
import RaffleTicketContest from "./components/RaffleTicketContest";
import MobileHeader from "./components/MobileHeader";
import {
  BrowserView,
  MobileView,
  TabletView,
  isBrowser,
  isMobile,
  isTablet,
} from "react-device-detect";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

function App() {
  return (
    <>
      <BrowserView>
        <Header />
      </BrowserView>
      <MobileView>
        <MobileHeader />
      </MobileView>
      <TabletView>
        <MobileHeader />
      </TabletView>

      <Main>
        <Hero />
        <RaffleTicketContest />
        <Features />
        <Tokenomics />
        <RevenueShare />
        <Footer />
      </Main>
    </>
  );
}

export default App;

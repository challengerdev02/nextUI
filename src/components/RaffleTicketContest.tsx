import styled from "styled-components";

const RaffleTicketContestWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 0 20px;
`;

const RaffleTicketContestTitle = styled.h2`
  align-self: center;
  font: 700 96px/104% Gilroy-Bold, sans-serif;

  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const RaffleTicketContestDescription = styled.p`
  text-align: center;
  margin-top: 60px;
  width: 80%;
  font: 500 24px/36px Gilroy-Light, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const raffleTicketContestData = {
  title: "NEXUS",
  description:
    "We are committed to breaking down the silos that separate blockchain networks, creating bridges that enable interoperability on a global scale. By fostering seamless communication between disparate platforms, MatrixCoin empowers users to transact freely, without constraints or barriers.",
};

const StyledButtons = styled.a`
  border-radius: 38px;
  background: linear-gradient(90deg, #c670d2 0%, #8b36d9 100%);
  color: #fff;
  padding: 14px 30px;
  font: 500 20px/1 Gilroy-Light, sans-serif;
  border: none;
  cursor: pointer;
  underline: none;
  text-decoration: none;

  @media (max-width: 991px) {
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;

const RaffleTicketContest: React.FC = () => {
  return (
    <RaffleTicketContestWrapper>
      {/* <RaffleTicketContestTitle>
        {raffleTicketContestData.title}
      </RaffleTicketContestTitle> */}
      <RaffleTicketContestDescription>
        {raffleTicketContestData.description}
      </RaffleTicketContestDescription>
      <ButtonsContainer>
        <StyledButtons href="https://raydium.io/swap" target="blank_">
          Buy
        </StyledButtons>
        <StyledButtons
          href="https://photon-sol.tinyastro.io/en/lp/58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2?handle=161476050678fb972885b"
          target="blank_"
        >
          Chart
        </StyledButtons>
      </ButtonsContainer>
    </RaffleTicketContestWrapper>
  );
};

export default RaffleTicketContest;

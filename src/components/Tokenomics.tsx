import styled from "styled-components";

const TokenomicsSection = styled.section`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  @media (max-width: 991px) {
    width: 90%;
  }
`;

const TokenomicsTitle = styled.h2`
  color: #fff;
  align-self: center;
  font: 700 96px/104% Gilroy-Bold, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const TokenomicsSubTitle = styled.h3`
  margin-top: 30px;
  color: #fff;
  align-self: center;
  font: 500 24px/36px Gilroy-Light, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const tokenomicsData = [
  {
    title: "100M",
    value: "Tokens",
  },
  {
    title: "0/0",
    value: "Taxes",
  },
  {
    logo: "https://i.postimg.cc/yxjbNRSs/2024-04-04-20-40-Background-Removed-46.png",
    value: "Liquidity Burnt",
  },
  {
    logo: "https://i.postimg.cc/4yvmHfJJ/2024-04-04-20-40-Background-Removed-51-1.png",
    value: "Mint Revoked",
  },
];

const TokenomicsCardLogo = styled.img`
  scale: 0.4;
`;

const TokenomicsCardsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  aling-content: center;
  flex-wrap: wrap;
`;

const TokenomicsCard = styled.div`
  border-radius: 10px;
  background: linear-gradient(
    90deg,
    rgba(31, 207, 241, 0.1) 0%,
    rgba(35, 77, 182, 0.1) 100%
  );
  box-shadow: 6px 10px 17px 0px rgba(0, 0, 0, 0.1),
    0px 4px 82.9px 0px rgba(50, 26, 64, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 350px;
  min-height: 295px;
  min-width: 235px;

  @media (max-width: 991px) {
    min-width: 100%;
  }
`;

const TokenomicsCardValue = styled.div`
  font: 500 20px/1 Gilroy-Light, sans-serif;

  @media (max-width: 991px) {
    margin: 40px 10px 0;
  }
  color: #fff;
  padding: 20px;
`;

const TokenomicsCardTitle = styled.div`
  margin-top: 10px;
  font: 900 32px Gilroy-Bold, sans-serif;
  margin-bottom: 20px;

  @media (max-width: 991px) {
  }
  color: #fff;
`;

const Tokenomics = () => {
  return (
    <TokenomicsSection id="tokenomics">
      <TokenomicsTitle>Tokenomics</TokenomicsTitle>
      <TokenomicsCardsContainer>
        {tokenomicsData.map((data, idx) => (
          <TokenomicsCard key={idx}>
            {data.logo && <TokenomicsCardLogo src={data.logo} />}
            {data.title && (
              <TokenomicsCardTitle>{data.title}</TokenomicsCardTitle>
            )}
            {data.value && (
              <TokenomicsCardValue>{data.value}</TokenomicsCardValue>
            )}
          </TokenomicsCard>
        ))}
      </TokenomicsCardsContainer>
    </TokenomicsSection>
  );
};

export default Tokenomics;

/*
import styled from "styled-components";

const TokenomicsSection = styled.section`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  @media (max-width: 991px) {
    width: 90%;
  }
`;

const TokenomicsTitle = styled.h2`
  color: #fff;
  align-self: center;
  font: 700 96px/104% Gilroy-Bold, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const TokenomicsSubTitle = styled.h3`
  color: #fff;
  align-self: center;
  font: 500 24px/36px Gilroy-Light, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const tokenomicsData = [
  {
    title: "100M",
    value: "Tokens",
  },
  {
    title: "0/0",
    value: "Taxes",
  },
  {
    logo: "https://i.postimg.cc/vHswBHR1/2024-04-04-20-40-Background-Removed-51.png",
    value: "Liquidity Burnt",
  },
  {
    logo: "https://i.postimg.cc/BbW92JXV/2024-04-04-20-40-Background-Removed-46.png",
    value: "Mint Revoked",
  },
];

const TokenomicsCardsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  aling-content: center;
  flex-wrap: wrap;
`;

const TokenomicsCard = styled.div`
  border-radius: 10px;
  background: linear-gradient(
    90deg,
    rgba(31, 207, 241, 0.1) 0%,
    rgba(35, 77, 182, 0.1) 100%
  );
  box-shadow: 6px 10px 17px 0px rgba(0, 0, 0, 0.1),
    0px 4px 82.9px 0px rgba(50, 26, 64, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 250px;
  min-height: 250px;

  @media (max-width: 991px) {
    min-width: 100%;
  }
`;

const TokenomicsCardValue = styled.div`
  font: 500 20px/1 Gilroy-Bold, sans-serif;

  @media (max-width: 991px) {
    margin-top: -40px;
  }
  color: #fff;
  padding: 20px;
  margin-top: -40px;
`;

const TokenomicsCardTitle = styled.div`
  margin-top: 10px;
  font: 900 48px Gilroy-Bold, sans-serif;
  margin-bottom: 20px;

  @media (max-width: 991px) {
  }
  color: #fff;
`;

const TokenomicsCardLogo = styled.img`
  scale: 0.1;
`;

const Tokenomics = () => {
  return (
    <TokenomicsSection>
      <TokenomicsTitle>TOKENOMICS</TokenomicsTitle>
      <TokenomicsCardsContainer>
        {tokenomicsData.map((data) => (
          <TokenomicsCard key={data.title}>
            {data.logo && <TokenomicsCardLogo src={data.logo} />}
            {data.title && (
              <TokenomicsCardTitle>{data.title}</TokenomicsCardTitle>
            )}
            {data.value && (
              <TokenomicsCardValue>{data.value}</TokenomicsCardValue>
            )}
          </TokenomicsCard>
        ))}
      </TokenomicsCardsContainer>
    </TokenomicsSection>
  );
};

export default Tokenomics;

*/

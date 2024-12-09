import styled from "styled-components";

const FeaturesSection = styled.section`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  @media (max-width: 991px) {
    width: 90%;
  }
`;

const FeaturesTitle = styled.h2`
  color: #fff;
  align-self: center;
  font: 700 96px/104% Gilroy-Bold, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const FeaturesSubTitle = styled.h3`
  margin-top: 30px;
  color: #fff;
  align-self: center;
  font: 500 24px/36px Gilroy-Light, sans-serif;
  width: 80%;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const tokenomicsData = [
  {
    title: "Anonymity",
    value:
      "Jump straight into action by connecting your wallet, no registration required.",
    logo: "https://i.postimg.cc/zHz0ZmDF/1.png",
  },
  {
    title: "Security",
    value:
      "Transactions are executed through non-custodied decentralised contracts based on ChainLink CCIP core contracts.",
    logo: "https://i.postimg.cc/6TcMVQzj/2.png",
  },
  {
    title: "Low Gas Fees",
    value:
      "Very low fees, $0.25 for non-eth chains, $0.50 from eth, $5 to eth.",
    logo: "https://i.postimg.cc/DmnCbGQ4/3.png",
  },
  {
    title: "Low Processing Time",
    value:
      "We know that some bridges take hours or even days to process transactions, using nexus you can transfer your tokens within minutes.",
    logo: "https://i.postimg.cc/DmnCbGQ4/3.png",
  },
  {
    title: "Interoperability",
    value:
      "Nexus supports multiple chains and multiple tokens, you can transfer stable coins like USDC or native currencies like ETH, AVAX, BNB etc.",
    logo: "https://i.postimg.cc/DmnCbGQ4/3.png",
  },
  {
    title: "Stimulating",
    value:
      "You can test our protocol on testnet without spending real money to see how it works.",
    logo: "https://i.postimg.cc/DmnCbGQ4/3.png",
  },
];

const FeaturesCardLogo = styled.img`
  scale: 0.3;
`;

const FeaturesCardsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 80%;
`;

const FeaturesCard = styled.div`
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

  @media (max-width: 991px) {
    min-width: 100%;
  }
`;

const FeaturesCardValue = styled.div`
  font: 500 20px/1 Gilroy-Light, sans-serif;

  @media (max-width: 991px) {
    margin: 40px 10px 0;
  }
  color: #fff;
  padding: 20px;
`;

const FeaturesCardTitle = styled.div`
  margin-top: 10px;
  font: 900 32px Gilroy-Bold, sans-serif;
  margin-bottom: 20px;

  @media (max-width: 991px) {
  }
  color: #fff;
`;

const Features = () => {
  return (
    <FeaturesSection id="features">
      <FeaturesTitle>Feature Highlights</FeaturesTitle>
      <FeaturesSubTitle>
        Welcome to our cutting-edge platform, where we blend the power of
        blockchain technology with the thrill of gaming. With features like this
        were setting a new standard in the Solana ecosystem.
      </FeaturesSubTitle>
      <FeaturesCardsContainer>
        {tokenomicsData.map((data) => (
          <FeaturesCard key={data.title}>
            <FeaturesCardLogo src={data.logo} />
            <FeaturesCardTitle>{data.title}</FeaturesCardTitle>
            <FeaturesCardValue>{data.value}</FeaturesCardValue>
            <br />
            <br />
            <br />
          </FeaturesCard>
        ))}
      </FeaturesCardsContainer>
    </FeaturesSection>
  );
};

export default Features;

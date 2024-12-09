import styled from "styled-components";

const RevenueShareData = {
  heading: "REVENUE SHARE",
  subheading: "Coming soon!",
};

const RevenueShareContainer = styled.section`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  color: #fff;
  width: 80%;
`;

const RevenueShareHeading = styled.h1`
  font-family: Gilroy-Bold, sans-serif;
  font-size: 96px;
  font-weight: 700;
  line-height: 100%;
  text-transform: uppercase;
  align-self: center;

  @media (max-width: 991px) {
    font-size: 40px;
    max-width: 100%;
  }
`;

const RevenueShareSubheading = styled.div`
  font-family: Gilroy-Bold, sans-serif;
  font-size: 96px;
  font-weight: 1000;
  margin-top: 97px;
  width: 90%;
  padding: 200px 0px;

  border-radius: 80px;
  background: linear-gradient(
    90deg,
    rgba(31, 207, 241, 0.1) 0%,
    rgba(35, 77, 182, 0.1) 100%
  );
  box-shadow: 0px 4px 82.9px 0px rgba(50, 26, 64, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 991px) {
    font-size: 40px;
    margin-top: 40px;
    max-width: 100%;
    padding: 150px 40px;
  }
`;

const RevenueShare: React.FC = () => {
  return (
    <RevenueShareContainer id="revenue-share">
      <RevenueShareHeading>{RevenueShareData.heading}</RevenueShareHeading>
      <RevenueShareSubheading>
        {RevenueShareData.subheading}
      </RevenueShareSubheading>
    </RevenueShareContainer>
  );
};

export default RevenueShare;

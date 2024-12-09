import styled from "styled-components";
import CryptoExchange from "./CryptoExchange";

const HeroSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const HeroSection2 = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
`;

const HeroImg = styled.img`
  width: 60%;
  aspect-ratio: 3.85;
  object-fit: cover;
  object-position: center;

  @media (max-width: 991px) {
    max-width: 100%;
  }
  scale: 0.2;
`;
const HeroImg2 = styled.img`
  width: 60%;
  aspect-ratio: 3.85;
  object-fit: cover;
  object-position: center;

  @media (max-width: 991px) {
    max-width: 100%;
  }
  scale: 1.3;
`;

const logos = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/270c1c91be9b820118c87ab08649d27d754a6975f3fbe9233cb4e5ea20e0c943?apiKey=62999276618d44279ca60b7a2a85e28a&",
    alt: "Logo 1",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6fe9eed9fe5d0b1601e66ab5f56261eacc804daaed58e9c8f384673ac6cb2734?apiKey=62999276618d44279ca60b7a2a85e28a&",
    alt: "Logo 2",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ae5083c5bf9c2f1d6c880dd463f5813b90ae1359e58272382f87aeb2ffc96d06?apiKey=62999276618d44279ca60b7a2a85e28a&",
    alt: "Logo 3",
  },
];

const Hero = () => {
  return (
    <>
      {/* <HeroSection>
        <HeroImg
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f03738191e9ab462c8a9fec58fa1f5c969d3200a3236f2394038ce17b52bd44?apiKey=62999276618d44279ca60b7a2a85e28a&"
          alt="Hero Image"
        />
      </HeroSection> */}
      <HeroSection2>
        <HeroImg2
          src="https://i.postimg.cc/L85xzL6z/Screenshot-2024-04-12-at-12-05-10-removebg-preview.png"
          alt="Hero Image"
        />
      </HeroSection2>

      <CryptoExchange />
      {/* <LogoSection>
        {logos.map((logo, index) => (
          <LogoBig key={index} src={logo.src} alt={logo.alt} />
        ))}
      </LogoSection> */}
    </>
  );
};

export default Hero;

import React from "react";
import styled from "styled-components";

const FooterLink = styled.a`
  font-family: Gilroy-Light, sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
`;

interface SocialIconProps {
  src: string;
  alt: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ src, alt }) => {
  return <SocialIconImage src={src} alt={alt} />;
};

const SocialIconImage = styled.img`
  width: 24px;
  aspect-ratio: 1;
  object-fit: contain;
  cursor: pointer;
`;

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: "Home",
      href: "#",
    },
    {
      title: "Features",
      href: "#features",
    },
    {
      title: "Tokenomics",
      href: "#tokenomics",
    },
    {
      title: "Revenue Share",
      href: "#revenue-share",
    },
  ];

  const socialIcons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/60f1bbd86ac3a8d8857695b1ea203ca37de1a567fdd7e769201c30d7e8bdec18?apiKey=62999276618d44279ca60b7a2a85e28a&",
      alt: "Social Icon 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e05f8663f275b49d28c11366d233fb60a5cb1f8ea496343e4a4a519e6056b4d6?apiKey=62999276618d44279ca60b7a2a85e28a&",
      alt: "Social Icon 2",
    },
  ];

  return (
    <FooterContainer>
      <FooterContent>
        <TopSection>
          <FooterLinksContainer>
            {footerLinks.map((link, index) => (
              <FooterLink href={link.href} key={link.title}>
                {link.title}
              </FooterLink>
            ))}
          </FooterLinksContainer>
        </TopSection>
        <Divider />
        <BottomSection>
          <Copyright>© 2024 NEXUS. All rights reserved.</Copyright>
          <SocialIconsContainer>
            {socialIcons.map((icon, index) => (
              <SocialIcon key={index} src={icon.src} alt={icon.alt} />
            ))}
          </SocialIconsContainer>
        </BottomSection>
      </FooterContent>
    </FooterContainer>
  );
};

/*
 backdrop-filter: blur(10px);
  background-color: rgba(0, 5, 8, 0.1);
*/
const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 60px;

  @media (max-width: 991px) {
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1560px;
  margin-top: 29px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1405px;
  gap: 20px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const FooterLinksContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 1);
  background-color: #fff;
  align-self: stretch;
  margin-top: 24px;
  height: 1px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1413px;
  gap: 20px;
  margin-top: 78px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 40px;
  }
`;

const Copyright = styled.div`
  color: #fff;
  flex-grow: 1;
  flex-basis: auto;
  font: 500 20px Gilroy, sans-serif;
`;

const SocialIconsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export default Footer;

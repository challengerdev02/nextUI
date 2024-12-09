import styled from "styled-components";
import { Web3Button } from '@web3modal/react'

const HeaderWrapper = styled.header`
  background-color: #000;
  padding: 23px 60px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1548px;
  margin: 0 auto;
  gap: 20px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  font-size: 20px;
  color: #fff;
  font-weight: 500;
`;

const SocialIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.a`
  font-family: Gilroy-Light, sans-serif;
  cursor: pointer;
  color: #fff;
  text-decoration: none;
`;

const SocialIconImage = styled.img`
  width: 24px;
  aspect-ratio: 1;
  object-fit: contain;
  cursor: pointer;
`;

interface NavItemProps {
  children: React.ReactNode;
}

interface SocialIconProps {
  src: string;
  alt: string;
}

const SocialIcon = ({ src, alt }: SocialIconProps) => {
  return <SocialIconImage src={src} alt={alt} />;
};

const EnterCompetitionButton = styled.a`
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

interface LogoProps {
  src: string;
  alt: string;
}

const LogoImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 120px;
  height: 30px;
  cursor: pointer;
  scale: 1.8;
`;

const Logo: React.FC<LogoProps> = ({ src, alt }) => {
  return <LogoImage src={src} alt={alt} />;
};

const Header = () => {
  const navItems = [
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
    <HeaderWrapper>
      <HeaderContent>
        <Logo
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/801cb201cf6261a7a44d51b24c6271783a5b3b3a751a0db7fd21ae66c0d72636?apiKey=62999276618d44279ca60b7a2a85e28a&"
          alt="Logo"
        />
        <Nav>
          {navItems.map((item) => (
            <NavItem href={item.href} key={item.title}>
              {item.title}
            </NavItem>
          ))}
        </Nav>
        <Web3Button />
        {/* <SocialIconsWrapper>
          <SocialIcons>
            {socialIcons.map((icon) => (
              <SocialIcon key={icon.src} src={icon.src} alt={icon.alt} />
            ))}
          </SocialIcons>
          <EnterCompetitionButton
            href="https://beamish-kangaroo-4d4e0e.netlify.app/"
            target="blank_"
          >
            Enter Competition
          </EnterCompetitionButton>
        </SocialIconsWrapper> */}

      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;

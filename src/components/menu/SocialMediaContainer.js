import Link from "next/link";
import styled from "styled-components";

//import Icons
import XLogo from "/public/assets/icons/x.svg";
import DiscordLogo from "/public/assets/icons/discord.svg";
import InstagramLogo from "/public/assets/icons/instagram.svg";

const SocialMediaSection = styled.section`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: row;
  }
`;

const SocialMediaButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: var(--border-radius-small);
  border: solid 2px var(--primary-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    transform: translateY(-5px);
  }

  svg {
    fill: var(--primary-color);
    width: 30px;
    height: 30px;
  }
`;

export default function SocialMediaContainer({ horizontal = true }) {
  return (
    <SocialMediaSection $direction={horizontal ? "row" : "column"}>
      <Link href={"https://www.instagram.com/yumekai.official/"}>
        <SocialMediaButton>
          <InstagramLogo />
        </SocialMediaButton>
      </Link>
      <Link href={"https://twitter.com/Yumekai_Events"}>
        <SocialMediaButton>
          <XLogo />
        </SocialMediaButton>
      </Link>
      <Link href={"https://discord.gg/JZBCtb8V6U"}>
        <SocialMediaButton>
          <DiscordLogo />
        </SocialMediaButton>
      </Link>
    </SocialMediaSection>
  );
}

import { SpacerEmpty } from "@/components/styledComponents";
import Image from "next/image";
import styled from "styled-components";
import { useRef, useEffect, useState } from "react";

//Components
import Columns2 from "@/components/elements/Columns2";
import RectangleContainer from "@/components/elements/RectangleContainer";
import MovingContentWrapper from "@/components/elements/MovingContent";

//Images
import yumeKaiNightHeaderSmall from "/public/assets/logo/YumeKai-Night-Header-Small.jpg";
import yumeKaiNightHeaderLarge from "/public/assets/logo/YumeKai-Night-Header-Large.jpg";

//Icons
import ScheduleIcon from "/public/assets/icons/schedule.svg";
import YumeKaiNightLogo from "/public/assets/logo/yumekai-night-logo.png";

const ScheduleIconWrapper = styled.div`
  margin-bottom: 10px;

  svg {
    fill: #363537;
  }
`;

const YumekaiHeaderWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: auto;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  img {
    width: 100%;
  }
`;

const HeaderContainer = styled.div`
  position: relative;
  height: ${({ height }) => height}px;
`;

export default function Projects() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    function updateDimensions() {
      setHeaderHeight(headerRef.current.clientHeight);
      setIsMobile(window.innerWidth < 800);
    }

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const headerImage = isMobile
    ? yumeKaiNightHeaderSmall
    : yumeKaiNightHeaderLarge;

  return (
    <>
      <HeaderContainer height={headerHeight}>
        <YumekaiHeaderWrapper ref={headerRef}>
          {/* <Image
            src={headerImage}
            alt="YumeKai Projekt"
            style={{
              width: "100%",
              height: "auto",
            }}
          /> */}
        </YumekaiHeaderWrapper>
      </HeaderContainer>
      <SpacerEmpty />
      <Columns2
        reverse={true}
        left={
          <>
            <h1>YumeKai - Night</h1>
            <p>
              Die YumeKai – Night ist eine Abendveranstaltung, die sich auf
              asiatische Musik wie J-Pop und K-Pop konzentriert. Natürlich
              dürfen auch unvergessliche deutsche Anime- und Serien-Openings
              nicht fehlen. <br />
              Mit der YumeKai – Night möchten wir eine Party-Veranstaltung in
              den Süden Bayerns bringen, bei der die Popkultur regelmäßig
              gefeiert werden kann. Hier könnt ihr euch auf Musik, Gaming und
              Cosplay freuen! <br />
              Unser Ziel ist es, eine einzigartige Atmosphäre zu schaffen, in
              der die Besucher die Gelegenheit haben, zu den mitreißenden
              Klängen der asiatischen Musik zu tanzen und zu feiern. Egal, ob
              ihr große Fans von J-Pop, K-Pop oder deutschen Anime- und
              Serien-Openings, Gaming oder Cosplay seid, bei uns werdet ihr voll
              auf eure Kosten kommen. <br />
              Die YumeKai – Night lädt euch dazu ein, gemeinsam mit
              Gleichgesinnten eine unvergessliche Nacht zu verbringen. Taucht
              ein in die Welt der Popkultur, genießt die Musik, nehmt an
              spannenden Gaming-Aktivitäten teil und beeindruckt mit euren
              einzigartigen Cosplays. <br /> Seid Teil der YumeKai-Familie und
              erlebt eine unvergessliche Nacht voller Musik, Gaming und Cosplay!
            </p>
          </>
        }
        right={
          <>
            <RectangleContainer center={1} color={1}>
              <h2>Nächste Veranstaltung</h2>
              <ScheduleIconWrapper>
                <ScheduleIcon />
              </ScheduleIconWrapper>
              <p>YumeKai - Night</p>
              <p>Wo: ???</p>
              <p>Wann: ???</p>
            </RectangleContainer>
            <SpacerEmpty />
            <MovingContentWrapper
              content={
                <Image src={YumeKaiNightLogo} alt="YumeKai Night Logo" />
              }
            ></MovingContentWrapper>
          </>
        }
      />
    </>
  );
}

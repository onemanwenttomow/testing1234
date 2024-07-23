import Columns2 from "@/components/elements/Columns2";
import { Spacer, SpacerEmpty } from "@/components/styledComponents";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useRef, useEffect, useState } from "react";

//Components
import RectangleContainer from "@/components/elements/RectangleContainer";
import MovingContentWrapper from "@/components/elements/MovingContent";

//Images
import yumeKaiHeaderSmall from "/public/assets/logo/YumeKai-Header-Small.png";
import yumeKaiHeaderLarge from "/public/assets/logo/YumeKai-Header-Large.png";

//Icons
import ScheduleIcon from "/public/assets/icons/schedule.svg";
import YumeKaiLogo from "/public/assets/logo/yumekai_color_font.svg";

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
  background-color: #f5f5f5;

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

  const headerImage = isMobile ? yumeKaiHeaderSmall : yumeKaiHeaderLarge;

  return (
    <>
      <HeaderContainer height={headerHeight}>
        <YumekaiHeaderWrapper ref={headerRef}>
          <Image
            src={headerImage}
            alt="YumeKai Projekt"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </YumekaiHeaderWrapper>
      </HeaderContainer>
      <SpacerEmpty />
      <Columns2
        reverse={true}
        left={
          <>
            <h1>YumeKai</h1>
            <p>
              Die YumeKai ist eine regelmäßige Veranstaltung im Süden Bayerns, die ein breit
              gefächertes Kultur-, Bühnen-, Händler- und Workshop-Programm bietet. Hier haben
              Besucher aller Art die Gelegenheit, in die faszinierende Welt der Popkultur,
              insbesondere der japanischen und asiatischen Kultur, einzutauchen. <br />
              Unser Ziel ist es, eine beeindruckende Convention zu erschaffen, die für jeden
              Geschmack etwas Passendes bereithält. Über zwei Tage hinweg entsteht hier ein
              wahrgewordener Traum für Cosplayer, Anime- und Mangafans sowie Otakus und Nerds aller
              Erfahrungsstufen und für alle, die sich für diese Themen interessieren. <br />
              Wir möchten eine Veranstaltung schaffen, die Jung und Alt gleichermaßen anspricht und
              unsere gemeinsamen Hobbys und Leidenschaften vermittelt. Die Mission der YumeKai
              besteht darin, diese Leidenschaften zu fördern und Begegnungen zwischen Menschen aber
              auch zwischen unterschiedlichen Kulturen zu ermöglichen. <br />
              Die YumeKai soll ein Ort sein, an dem kleine und große Träume wahr werden können,
              unvergessliche Erlebnisse geschaffen werden und neue Verbindungen entstehen. <br />
              Wenn auch du teil davon Sein willst freuen wir uns wenn du uns auf dem Weg dahin
              begleitest! Wir sehen uns auf der YumeKai!
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
              <p>YumeKai</p>
              <p>Wo: ???</p>
              <p>Wann: ???</p>
            </RectangleContainer>
            <SpacerEmpty />
            <MovingContentWrapper content={<YumeKaiLogo />}></MovingContentWrapper>
          </>
        }
      />
    </>
  );
}

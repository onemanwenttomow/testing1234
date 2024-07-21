import styled from "styled-components";

import ConvexBackground from "@/components/elements/ConvexBackground";
import ImageCarousel from "@/components/elements/ImageCarousel";
import { StyledLink } from "@/components/styledComponents";

import fylyCosplayImgae from "/public/assets/images/yumekai2024/Fyly_Cosplay.jpg";
import tinyfufuCosplayImage from "/public/assets/images/yumekai2024/Tinyfufu_Cosplay.jpg";
import onyxCosplayImage from "/public/assets/images/yumekai2024/Onyx_Cosplay.jpg";
import scarlettCosplayImage from "/public/assets/images/yumekai2024/Scarlett_Sirene_Cosplay.jpg";

import hiru from "/public/assets/logo/Hiru.webp";
import hiruCosplay from "/public/assets/logo/Hiru-Cosplay.webp";
import hiruEssen from "/public/assets/logo/Hiru-Essen.webp";
import hiruHandy from "/public/assets/logo/Hiru-Handy.webp";
import hiruKunstler from "/public/assets/logo/Hiru-Kunstler.webp";
import hiruHandler from "/public/assets/logo/Hiru-Handler.webp";
import Link from "next/link";
import Columns4 from "@/components/elements/Columns4";
import Image from "next/image";
import Columns2 from "@/components/elements/Columns2";

const images1 = [hiru, hiruCosplay, hiruEssen, hiruHandy, hiruKunstler, hiruHandler];

const StyledImageHome = styled(Image)`
  width: 100%;
  border-radius: var(--border-radius-large);
`;

export default function Home() {
  return (
    <>
      <ImageCarousel visibleCount={4} duration={2.5} images={images1} />
      <h1>Aktuelles</h1>
      <p>
        In der Rubrik „Aktuelles“ kannst du erfahren, was gerade bei YumeKai geschieht. Hier
        erwarten dich fortlaufend neue und fesselnde Nachrichten rund um die YumeKai.
      </p>

      <br />
      <ConvexBackground color={1}>
        <h1>{`Conventions: Überblick und Tipps für Eltern`}</h1>
        <p>
          Entdecken Sie die faszinierende Welt der Anime-Conventions – ein Ort, an dem Fantasie und
          Realität miteinander verschmelzen! Für viele Eltern kann diese bunte und oft
          überwältigende Welt jedoch eine Herausforderung sein. Um Ihnen zu helfen, haben wir einen
          informativen Artikel verlinkt, der speziell für Eltern geschrieben wurde.
        </p>
        <p>
          Erfahren Sie in diesem Artikel von C&A, wie Anime-Conventions funktionieren, welche
          Vorteile sie für Kinder und Jugendliche bieten und wie Sie als Eltern das Beste aus diesen
          einzigartigen Veranstaltungen herausholen können.
        </p>
        <p>
          Klicken Sie hier, um mehr zu erfahren:{" "}
          <StyledLink
            href={"https://www.c-and-a.com/de/de/shop/comic-und-manga-conventions"}
            target="_blank"
          >
            Comic- und Manga-Conventions: Überblick und Tipps für Eltern
          </StyledLink>
        </p>
      </ConvexBackground>
      <br />
      <div>
        <h2>Gewinner unseres Cosplay Performance Wettbewerbs</h2>
        <p>
          Bei unserem Cosplay Performance Wettbewerb am Samstag hatten wir unglaublich talentierte
          Teilnehmer. Da ist es für unsere Jury, die aus{" "}
          <StyledLink href={"https://www.instagram.com/evelyn_cosplay/"} target="_blank">
            Evelyn Cosplay
          </StyledLink>
          ,{" "}
          <StyledLink href={"https://www.instagram.com/imoneecosplay/"} target="_blank">
            Imoneecosplay
          </StyledLink>
          ,{" "}
          <StyledLink href={"https://www.instagram.com/n4ru_cosplay/"} target="_blank">
            Naru Cosplay
          </StyledLink>
          ,{" "}
          <StyledLink href={"https://www.instagram.com/imoneecosplay/"} target="_blank">
            Mero
          </StyledLink>
          {" & "}
          <StyledLink href={"https://www.instagram.com/yunyte/"}>Yunyte</StyledLink> bestand gar
          nicht so leicht gefallen die Gewinner zu küren.
        </p>
        <Columns4
          column1={
            <>
              <p style={{ textAlign: "center", marginBottom: 0 }}>Platz 1</p>
              <StyledImageHome
                src={onyxCosplayImage}
                alt="Onyx als Toybox
                Hatsune Miku von Vocaloid"
                layout="responsive"
              />
              <p style={{ textAlign: "center", marginTop: 0 }}>
                <StyledLink href={"https://www.instagram.com/onyx_costumes/"} target="_blank">
                  Onyx
                </StyledLink>{" "}
                als Toybox Hatsune Miku von Vocaloid
              </p>
            </>
          }
          column2={
            <>
              <p style={{ textAlign: "center", marginBottom: 0 }}>Platz 2</p>
              <StyledImageHome
                src={fylyCosplayImgae}
                alt="Fyly als Shea Haulia
                von Arifureta S2"
                layout="responsive"
              />
              <p style={{ textAlign: "center", marginTop: 0 }}>
                <StyledLink href={"https://www.instagram.com/fyly_cosplays/"} target="_blank">
                  Fyly
                </StyledLink>{" "}
                als Shea Haulia von Arifureta S2
              </p>
            </>
          }
          column3={
            <>
              <p style={{ textAlign: "center", marginBottom: 0 }}> Platz 3</p>
              <StyledImageHome
                src={scarlettCosplayImage}
                alt="Scarlett Sirene als
                Soraka Koi von League of Legends"
                layout="responsive"
              />
              <p style={{ textAlign: "center", marginTop: 0 }}>
                <StyledLink href={"https://www.instagram.com/scarlettsirene2/"} target="_blank">
                  Scarlett Sirene
                </StyledLink>{" "}
                als Soraka Koi von League of Legends
              </p>
            </>
          }
          column4={
            <>
              <p style={{ textAlign: "center", marginBottom: 0 }}>Platz 4</p>
              <StyledImageHome
                src={tinyfufuCosplayImage}
                alt="Tinyfufu als Amity Blight
                von The Owl House"
                layout="responsive"
              />
              <p style={{ textAlign: "center", marginTop: 0 }}>
                <StyledLink href={"https://www.instagram.com/tinyfufu/"} target="_blank">
                  Tinyfufu
                </StyledLink>{" "}
                als Amity Blight von The Owl House
              </p>
            </>
          }
        />
      </div>
      <br />
      <Columns2
        left={
          <>
            <h2>YumeKai Zeichenwettbewerb</h2>
            <p>
              Hey, du hast diese unglaubliche Kreativität in dir? Perfekt! Wie wäre es, wenn du
              unser süßes Maskottchen Yumeko in deinem ganz eigenen Stil zum Leben erweckst? Lass
              deiner Fantasie freien Lauf! Ob du Yumeko als Genderbend darstellst, in alternativen
              Stilen experimentierst oder sie in einem völlig anderen Genre platzierst – alles ist
              erlaubt, solange Yumeko immer noch leicht erkennbar ist. Wir sind super gespannt
              darauf, was du zauberst! Also schnapp dir deine Lieblingsstifte, öffne dein
              Grafiktablett oder lass einfach die Finger über die Tasten tanzen – und lass Yumeko
              neu erstrahlen!
            </p>
          </>
        }
        right={
          <>
            <Columns2
              mobile={2}
              left={
                <>
                  <p style={{ textAlign: "center", marginBottom: 0 }}>Beste Technik</p>
                  <StyledImageHome
                    src={tinyfufuCosplayImage}
                    alt="Tinyfufu als Amity Blight
                von The Owl House"
                    layout="responsive"
                  />
                  <p style={{ textAlign: "center", marginTop: 0 }}>
                    von:{" "}
                    <StyledLink href={"https://www.instagram.com/tinyfufu/"} target="_blank">
                      Miru
                    </StyledLink>
                  </p>
                </>
              }
              right={
                <>
                  <p style={{ textAlign: "center", marginBottom: 0 }}>Kreativste Idee</p>
                  <StyledImageHome
                    src={tinyfufuCosplayImage}
                    alt="Tinyfufu als Amity Blight
            von The Owl House"
                    layout="responsive"
                  />
                  <p style={{ textAlign: "center", marginTop: 0 }}>
                    von:{" "}
                    <StyledLink href={"https://www.instagram.com/tinyfufu/"} target="_blank">
                      LeLo
                    </StyledLink>
                  </p>
                </>
              }
            />
            <Columns2
              mobile={2}
              left={
                <>
                  <p style={{ textAlign: "center", marginBottom: 0 }}>Gesamtbild Qualität</p>
                  <StyledImageHome
                    src={tinyfufuCosplayImage}
                    alt="Tinyfufu als Amity Blight
                        von The Owl House"
                    layout="responsive"
                  />
                  <p style={{ textAlign: "center", marginTop: 0 }}>
                    von:{" "}
                    <StyledLink href={"https://www.instagram.com/tinyfufu/"} target="_blank">
                      Emytsuu
                    </StyledLink>
                  </p>
                </>
              }
              right={
                <>
                  <p style={{ textAlign: "center", marginBottom: 0 }}>Favorit der Jury</p>
                  <StyledImageHome
                    src={tinyfufuCosplayImage}
                    alt="Tinyfufu als Amity Blight
                        von The Owl House"
                    layout="responsive"
                  />
                  <p style={{ textAlign: "center", marginTop: 0 }}>von: Stella</p>
                </>
              }
            />
          </>
        }
      />

      <ConvexBackground color={2}>
        <h2>zzufgvzugv</h2>
        <br />
        <p>tgiuohjuh uih 9u7eh9u7 h97 h97h 99 7uh9 h7uhj98h890h897h 8h8 h8hu09 hj79o8uh o78n</p>
        <br />
        <p>tgiuohjuh uih 9u7eh9u7 h97 h97h 99 7uh9 h7uhj98h890h897h 8h8 h8hu09 hj79o8uh o78n</p>
        <br />
        <p>tgiuohjuh uih 9u7eh9u7 h97 h97h 99 7uh9 h7uhj98h890h897h 8h8 h8hu09 hj79o8uh o78n</p>
      </ConvexBackground>
    </>
  );
}

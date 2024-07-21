import styled from "styled-components";

import ConvexBackground from "@/components/elements/ConvexBackground";
import ImageCarousel from "@/components/elements/ImageCarousel";

import hiru from "/public/assets/logo/Hiru.webp";
import hiruCosplay from "/public/assets/logo/Hiru-Cosplay.webp";
import hiruEssen from "/public/assets/logo/Hiru-Essen.webp";
import hiruHandy from "/public/assets/logo/Hiru-Handy.webp";
import hiruKunstler from "/public/assets/logo/Hiru-Kunstler.webp";
import hiruHandler from "/public/assets/logo/Hiru-Handler.webp";

const images1 = [hiru, hiruCosplay, hiruEssen, hiruHandy, hiruKunstler, hiruHandler];

export default function Home() {
  return (
    <>
      <h1>Startseite</h1>

      <ImageCarousel visibleCount={4} duration={2.5} images={images1} />
      <br />
      <br />
      <br />
      <ConvexBackground color={1}>
        <h1>{`Unser Motto lautet: "LEB DEINEN TRAUM"`}</h1>
        <p>
          Man kann sich sicherlich denken, woher dieses Motto stammt – natürlich aus dem legendären
          Digimon-Opening! Für uns ist klar: Wenn man dem, was man liebt folgt werden diese Träume
          auch wahr. Genau das verkörpert die Idee der YumeKai für uns – ein Traum, den wir
          gemeinsam mit EUCH verwirklichen möchten!
        </p>
        <p>Zudem bedeutet „Yume“ aus dem Japanischen übersetzt „Traum“.</p>
      </ConvexBackground>
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

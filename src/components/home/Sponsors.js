import styled, { keyframes } from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";

//Components
import ImageCarousel from "@/components/elements/ImageCarousel";

//Partners
import stadtMM from "/public/assets/images/sponsors/Stadt_Memmingen.png";
import mrVeranstaltung from "/public/assets/images/sponsors/MR_Veranstaltung.png";

//Sponsors
import arnosRetroVideogamesImage from "/public/assets/images/sponsors/Arnos_Retro_Videogames.png";
import cineplexImage from "/public/assets/images/sponsors/Cineplex.png";
import cohekiImage from "/public/assets/images/sponsors/CoHeKi.png";
import comicTimeImage from "/public/assets/images/sponsors/comic_time.png";
import foamlordImage from "/public/assets/images/sponsors/Foamlord.png";
import fuyukoImage from "/public/assets/images/sponsors/fuyuko.png";
import heldenschmiedeImage from "/public/assets/images/sponsors/Heldenschmiede.png";
import japandigestImage from "/public/assets/images/sponsors/japandigest.png";
import mangaMerchImage from "/public/assets/images/sponsors/manga_merch.png";
import sndrbrImage from "/public/assets/images/sponsors/sndrbr.png";
import squiggzImage from "/public/assets/images/sponsors/Squiggz.png";
import zauberfederImage from "/public/assets/images/sponsors/Zauberfeder.png";

const partnerList = [
  { image: stadtMM, name: "Stadt Memmingen", link: "https://www.memmingen.de/" },
  { image: mrVeranstaltung, name: "M&R Veranstaltung", link: "https://mr-veranstaltung.de/" },
  { image: stadtMM, name: "Stadt Memmingen", link: "https://www.memmingen.de/" },
  { image: mrVeranstaltung, name: "M&R Veranstaltung", link: "https://mr-veranstaltung.de/" },
  { image: stadtMM, name: "Stadt Memmingen", link: "https://www.memmingen.de/" },
  { image: mrVeranstaltung, name: "M&R Veranstaltung", link: "https://mr-veranstaltung.de/" },
];

const sponsorList = [
  {
    image: arnosRetroVideogamesImage,
    name: "Arnos Retro Videogames",
    link: "https://www.arnos-retro-videogames.com/",
  },
  { image: cineplexImage, name: "Cineplex", link: "https://www.cineplex.de" },
  { image: cohekiImage, name: "CoHeKi", link: "https://coheki.de/" },
  { image: comicTimeImage, name: "Comic Time", link: "https://www.comic-time.de/de/" },
  { image: foamlordImage, name: "Foamlord", link: "https://www.foamlord.de/" },
  { image: fuyukoImage, name: "Fuyuko", link: "https://fuyuko.de/" },
  { image: heldenschmiedeImage, name: "Heldenschmiede", link: "https://www.heldenschmiede.eu/" },
  { image: japandigestImage, name: "Japandigest", link: "https://www.japandigest.de/" },
  { image: mangaMerchImage, name: "Manga Merch", link: "https://manga-merch.com/" },
  { image: sndrbrImage, name: "Sndrbr", link: "https://sndrbr.de/" },
  { image: squiggzImage, name: "Squiggz", link: "https://www.squiggz.com/" },
  { image: zauberfederImage, name: "Zauberfeder", link: "https://zauberfeder.de/" },
];

const SponsorsComponentWrapper = styled.section`
  position: relative;
  transition: height 0.3s ease-in-out;
`;

const SponsorsComponentContent = styled.div`
  position: absolute;
  background-color: #f9f9fb;
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);
`;

export default function SponsorsComponent() {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      if (wrapperRef.current && contentRef.current) {
        wrapperRef.current.style.height = `${contentRef.current.offsetHeight - 50}px`;
      }
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <SponsorsComponentWrapper ref={wrapperRef}>
      <SponsorsComponentContent ref={contentRef}>
        <h2>Sponsoren</h2>
        <ImageCarousel
          visibleCount={5}
          duration={2.5}
          images={sponsorList}
          space="50px"
          bgcolor={"#f9f9fb"}
          sliderAlign={"start"}
          controls={false}
        />
        <h2>Partner</h2>
        <ImageCarousel
          visibleCount={3}
          duration={2.5}
          images={partnerList}
          space="50px"
          bgcolor={"#f9f9fb"}
          sliderAlign={"start"}
          controls={false}
        />
      </SponsorsComponentContent>
    </SponsorsComponentWrapper>
  );
}

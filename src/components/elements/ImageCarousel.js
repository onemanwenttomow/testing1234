import Image from "next/image";
import styled from "styled-components";

import React, { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

/*
------------------------------------------------------------------------
Test 1
------------------------------------------------------------------------
const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const Slider = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ offset }) => `translateX(-${offset}%)`};
`;

const Slide = styled.div`
  flex: 0 0 ${({ width }) => width}%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    cursor: pointer;
  }
`;

const Modal = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  z-index: 999;
  img {
    max-width: 90%;
    max-height: 90%;
  }
`;

export default function ImageSlider({ images, visibleCount, interval }) {
  const [offset, setOffset] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [firstImageSize, setFirstImageSize] = useState({ width: 0, height: 0 });
  const [windowWidth, setWindowWidth] = useState(null);
  const [actualImage, setActualImage] = useState(0);
  const [render, setRender] = useState([]);
  const sliderRef = useRef();

  const totalImages = images.length;
  const totalWidth = totalImages * (100 / visibleCount);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const updateRenderImages = () => {
      let newRender = [];
      for (let i = 0; i < visibleCount + 1; i++) {
        const index = (actualImage + i + totalImages) % totalImages;
        newRender.push(images[index]);
      }
      setRender(newRender);
    };

    if (!hovering) {
      const id = setInterval(() => {
        setOffset((prevOffset) => {
          const newOffset = (100 / visibleCount) % totalWidth;
          return newOffset;
        });

        setActualImage((prevImage) => {
          const newImageIndex = (prevImage + 1) % totalImages;
          updateRenderImages();
          return newImageIndex;
        });
      }, interval);
      return () => clearInterval(id);
    }
  }, [hovering, interval, visibleCount, totalWidth, totalImages, actualImage, images]);

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  const handleClickImage = (image) => {
    setModalImage(image);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  const handleImageLoad = (event) => {
    const { naturalWidth, naturalHeight } = event.target;
    setFirstImageSize({ width: naturalWidth, height: naturalHeight });
  };

  function calcImage() {
    const divWidth = windowWidth * 0.9;
    const imageWidth = divWidth > 1200 ? 1200 / visibleCount : divWidth / visibleCount;
    const imageRatio = firstImageSize.width / firstImageSize.height;
    const imageHeight = imageWidth * imageRatio;
    return { width: imageWidth, height: imageHeight };
  }

  console.log(firstImageSize);
  console.log(actualImage);
  console.log(render);

  return (
    <div>
      <SliderContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Slider offset={offset} ref={sliderRef}>
          {render.map((image, index) => (
            <Slide key={index} width={100 / visibleCount}>
              <Image
                src={image}
                alt={`Slide ${index}`}
                onClick={() => handleClickImage(image)}
                onLoad={index === 0 ? handleImageLoad : null}
                width={calcImage().width}
                height={calcImage().height}
              />
            </Slide>
          ))}
        </Slider>
      </SliderContainer>
      <Modal show={!!modalImage} onClick={handleCloseModal}>
        {modalImage && <Image src={modalImage} alt="Modal view" />}
      </Modal>
    </div>
  );
}
*/

/*
------------------------------------------------------------------------
Test 1
------------------------------------------------------------------------
export default function ImageSlider({ images, visibleCount, interval }) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  return (
    <section
      aria-label="Image Slider"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {images.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt={"alt"}
            aria-hidden={imageIndex !== index}
            className="img-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        Links
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        Rechts
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? <p>A</p> : <p>B</p>}
          </button>
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </section>
  );
}

*/
export const usePrevNextButtons = (emblaApi, onButtonClick) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button className="embla__button embla__button--prev" type="button" {...restProps}>
      <svg className="embla__button__svg" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
        />
      </svg>
      {children}
    </button>
  );
};

export const NextButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button className="embla__button embla__button--next" type="button" {...restProps}>
      <svg className="embla__button__svg" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
        />
      </svg>
      {children}
    </button>
  );
};

const ImageTest = styled(Image)`
  width: 100%;
  height: auto;
`;

export default function ImageSlider({ images, visibleCount, interval }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop;

    resetOrStop();
  }, []);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((image, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <ImageTest src={image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
}

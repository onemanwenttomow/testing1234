import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

/*
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

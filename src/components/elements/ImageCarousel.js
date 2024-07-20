import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

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

import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  backgroundColor1: "#f5f5f5",
  backgroundColor2: "#f6f6f9",
  text: "#363537",
  primaryColor: "#e9300b",
  secondaryColor: "#ffb01e",
};

export const darkTheme = {
  backgroundColor1: "#181a1e",
  backgroundColor2: "#25252c",
  text: "#fbfbfb",
  primaryColor: "#e9300b",
  secondaryColor: "#ffb01e",
};

export const GlobalStyles = createGlobalStyle`
    :root{
        --border-radius-small: 5px;
        --border-radius-large: 10px;

        --dark-grey: #AAAAAA;
        --light-grey: lightgrey;
        --danger: #D32F2F;
        --light-danger: #FECDD3;
        --warning: #FBC02D;
        --light-warning: #FFF2C6;
        --success: #388E3C;
        --light-success: #BBF7D0;

    }

    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        padding: 0;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: ${({ theme }) => theme.backgroundColor1};

        color: ${({ theme }) => theme.text};
        font-family: Helvetica, Tahoma, Arial, Roboto, sans-serif;
        font-size: large;
        

        width: 100vw;
        min-height: 100vh;
            
        overflow-y: auto;
        overflow-x: hidden;
    }

    h1{
        text-align: center;
        margin: 0;
        padding: 20px;
        color: ${({ theme }) => theme.primaryColor};
    }

    h2{
        color: ${({ theme }) => theme.primaryColor};
    }


    .embla {
  max-width: 100%;
  margin: auto;
  --slide-spacing: 1rem;
  --slide-size: 25%;
}
.embla__viewport {
  overflow: hidden;
}
.embla__container {
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-y pinch-zoom;
  margin-left: calc(var(--slide-spacing) * -1);
}
.embla__slide {
  flex: 0 0 var(--slide-size);
  min-width: 0;
  padding-left: var(--slide-spacing);
}
.embla__slide__number {
  box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
  border-radius: 1.8rem;
  font-size: 4rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
}
.embla__controls {
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
  gap: 1.2rem;
  margin-top: 1.8rem;
}
.embla__buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.6rem;
  align-items: center;
}
.embla__button {
  -webkit-tap-highlight-color: rgba(var(--text-high-contrast-rgb-value), 0.5);
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  touch-action: manipulation;
  display: inline-flex;
  text-decoration: none;
  cursor: pointer;
  border: 0;
  padding: 0;
  margin: 0;
  box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
  width: 3.6rem;
  height: 3.6rem;
  z-index: 1;
  border-radius: 50%;
  color: var(--text-body);
  display: flex;
  align-items: center;
  justify-content: center;
}
.embla__button:disabled {
  color: var(--detail-high-contrast);
}
.embla__button__svg {
  width: 35%;
  height: 35%;
}


    

 
    .img-slider-img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: block;
  flex-shrink: 0;
  flex-grow: 0;
}

.img-slider-btn {
  all: unset;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  padding: 1rem;
  cursor: pointer;
  transition: background-color 100ms ease-in-out;
}

.img-slider-btn:hover,
.img-slider-btn:focus-visible {
  background-color: rgb(0, 0, 0, 0.2);
}

.img-slider-btn > * {
  stroke: white;
  fill: black;
  width: 2rem;
  height: 2rem;
}

@keyframes squish {
  50% {
    scale: 1.4 0.6;
  }
}

.img-slider-dot-btn {
  all: unset;
  display: block;
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  transition: scale 100ms ease-in-out;
}

.img-slider-dot-btn:hover,
.img-slider-dot-btn:focus-visible {
  scale: 1.2;
}

.img-slider-dot-btn > * {
  stroke: white;
  fill: black;
  height: 100%;
  width: 100%;
}

.img-slider-dot-btn:focus-visible,
.img-slider-btn:focus-visible {
  outline: auto;
}

.skip-link {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  border: 0;
  clip: rect(0, 0, 0, 0);
}

.skip-link:focus-visible {
  top: 0;
  left: 0;
  border: 1px solid black;
  background-color: white;
  padding: 0.5rem;
  width: auto;
  height: auto;
  margin: 0;
  clip: unset;
  text-decoration: none;
  color: black;
  z-index: 100;
}

@media not (prefers-reduced-motion) {
  .img-slider-img {
    transition: translate 300ms ease-in-out;
  }

  .img-slider-btn:hover > *,
  .img-slider-btn:focus-visible > * {
    animation: squish 200ms ease-in-out;
  }
}
  `;

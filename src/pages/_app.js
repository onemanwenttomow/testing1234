import PageFooter from "@/components/menu/PageFooter";
import PageHeader from "@/components/menu/PageHeader";
import GlobalStyle from "@/styles/global-styles";
import styled from "styled-components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <PageHeader />
      <Component {...pageProps} />
      <PageFooter />
    </>
  );
}

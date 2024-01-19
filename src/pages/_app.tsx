import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ThemeWrapper from "../styles/theme/index";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeWrapper>
      <Component {...pageProps} />
    </ThemeWrapper>
  );
}

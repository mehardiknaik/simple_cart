import { ContextWrapper } from "../src/util/context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ContextWrapper>
      <Component {...pageProps} />
    </ContextWrapper>
  );
}

export default MyApp;

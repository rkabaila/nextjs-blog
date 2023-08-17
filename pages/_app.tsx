import { AppProps } from "next/app";
import "../styles/globals.css";

export function reportWebVitals(metric) {
  console.log(metric);
}

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;

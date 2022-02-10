// react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// global css
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

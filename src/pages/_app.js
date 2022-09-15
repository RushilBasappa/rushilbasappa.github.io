import "../styles/globals.css";
import Nav from "../components/Nav";
import Footer from "../containers/Footer";
import Header from "../containers/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col h-screen justify-between bg-violet-300">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;

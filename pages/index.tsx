import Head from "next/head";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Works from "../components/Works";
import Footer from "../components/Footer";
import Links from "../components/Links";

const Home = () => (
  <div className="main-contents">
    <Head>
      <title>cordx.cx</title>
    </Head>
    <Header />
    <main className="cards-container flex flex-wrap relative z-10">
      <div className="w-full lg:w-1/2 p-2">
        <Profile />
      </div>
      <div className="w-full lg:w-1/2 p-2">
        <Works />
      </div>
      <div className="w-full lg:w-1/2 p-2">
        <Links />
      </div>
    </main>
    <Footer />
  </div>
);

export default Home;

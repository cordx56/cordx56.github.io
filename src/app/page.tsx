import { Metadata } from "next";
import Header from "@/components/Home/Header";
import Profile from "@/components/Home/Profile";
import Works from "@/components/Home/Works";
import Links from "@/components/Home/Links";
import Footer from "@/components/Home/Footer";

export const metadata: Metadata = {
  title: "cordx.cx",
  icons: [
    { sizes: "64x64", url: "/favicon.png" },
    { sizes: "192x192", url: "/favicon-large.png" },
    { rel: "apple-touch-icon", url: "/favicon-large.png" },
  ],
  openGraph: { images: [{ url: "https://cordx.cx/icon.png" }] },
};

const Home = () => (
  <>
    <Header />
    <main className="centered relative z-10">
      <div className="row">
        <div className="col-2">
          <Profile />
        </div>
        <div className="col-2">
          <Works />
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <Links />
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Home;

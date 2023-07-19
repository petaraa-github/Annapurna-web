import Navbar from "@/components/navbar/Navbar";
import HomePage from "@/components/home/Home";
import Mission from "@/components/mission/Mission";
import AboutUs from "@/components/aboutus/AboutUs";
import Footer from "@/components/footer/Footer";
import Help from "@/components/help/Help";
export default function Home() {
  return (
    <>
      <div style={{ margin: "0px", padding: "0px" }}>
        <Navbar />
        <HomePage />
        <Help />
        <Mission />
        <AboutUs />
        <Footer/>
      </div>
    </>
  );
}

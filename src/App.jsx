import bg from "./assets/huddle-landing-page-with-single-introductory-section-master/huddle-landing-page-with-single-introductory-section-master/images/bg-desktop.svg";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col w-full min-h-screen justify-center items-center bg-[#684cb4] overflow-hidden text-white">
        <img
          src={bg}
          alt="background"
          className="object-cover w-full h-full absolute z-0"
          draggable="false"
        />
        <div className="w-[1440px] z-10">
          <Header />
          <Body />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

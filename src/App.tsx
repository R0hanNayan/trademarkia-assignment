import React, { useContext } from "react";
import TrademarkMenu from "./components/TrademarkMenu";
import { Context } from "./context/Context";
import Pages from "./components/Pages";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";

function App() {
  const { menuOpen } = useContext(Context);
  return (
    <div
      className={`bg-[#EBF1FF] flex flex-col ${
        menuOpen ? "max-[650px]:h-screen overflow-scroll" : ""
      }`}
    >
      <Navbar />
      <div className=" flex flex-col relative">
        <TrademarkMenu />
        <Pages />
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;

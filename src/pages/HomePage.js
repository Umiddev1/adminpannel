import React from "react";
import LeftAside from "../components/LeftAside/LeftAside";
import MainInfo from "../components/MainInfo/MainInfo";
function HomePage() {
  return (
    <div className="wrapper">
      <LeftAside />
      <MainInfo />
    </div>
  )
}

export default HomePage;
import React from "react";
import StaticSearch from "../StaticSearch/StaticSearch";
import NewEmp from "../NewEmp/NewEmp";
import BigData from "../BigData/BigData";
function MainInfo() {
  return (
    <div className="maininfo">
      <StaticSearch />
      <NewEmp />
      <BigData />
    </div>
  )
}

export default MainInfo
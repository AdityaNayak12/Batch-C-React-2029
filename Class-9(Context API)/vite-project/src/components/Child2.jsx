import React, { useContext } from "react";
import { ParkContext } from "./ParkContext";

function Child2() {
  const { parkInfo } = useContext(ParkContext);
  return (
    <div className="children">
      Child2 {parkInfo.waterSlide} {parkInfo.ticketforWaterSlide()}
    </div>
  );
}

export default Child2;

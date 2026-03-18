import React, { useContext } from "react";
import { ParkContext } from "./ParkContext";

function Child1() {
  const { parkInfo, person } = useContext(ParkContext); // parkInfo

  return (
    <div className="children">
      {" "}
      Child1 {parkInfo.rollerCoaster} {parkInfo.ticketForRollerCoaster()}{" "}
      {person.name}{" "}
    </div>
  );
}

export default Child1;

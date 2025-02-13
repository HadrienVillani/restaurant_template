import { NavItem } from "@atoms/navItem";
import { NavBarData } from "@data/dataNavBar";
import { dataRestaurant } from "@data/dataRestaurant";
import { useEffect, useState } from "react";

export const NavaBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTop, setIsTop] = useState(false);
  const date = new Date();
  const day = date.getDay();
  const hour = `${date.getHours() + ":" + date.getMinutes()}`;

  interface IDayList {
    name: string;
    firstOpen: string[];
    secondOpen: string[];
  }
  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
      setIsTop(true);
      console.log("ok");
    } else {
      setIsTop(false);
    }
  });
  useEffect(() => {
    function hourValidator(day: number) {
      let todayHourly: IDayList = dataRestaurant.restaurant.horaires[day];
      if (hour > todayHourly.firstOpen[0] && hour < todayHourly.firstOpen[1]) {
        setIsOpen(true);
      } else if (
        hour > todayHourly.secondOpen[0] &&
        hour < todayHourly.secondOpen[1]
      ) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }
    hourValidator(day);
  });

  return (
    <>
      <div
        className={`flex px-8 py-5 w-full items-center justify-between bg-neutral-800 w-full opacity-95 z-10 ${
          !isTop ? "fixed" : "flex"
        }`}
      >
        <h1>{dataRestaurant.restaurant.nom}</h1>
        <ul className="flex">
          {NavBarData.map((navItem, key) => {
            return (
              <NavItem key={key} label={navItem.label} src={navItem.src} />
            );
          })}
        </ul>
        {isOpen ? (
          <div className="px-5 py-3 rounded-lg bg-[var(--main-color)]">
            <h4 className="text-white">&#x1F7E2; Ouvert</h4>
          </div>
        ) : (
          <div className="px-5 py-3 rounded-lg bg-[var(--main-color)]">
            <h4 className="text-white">&#128308; Fermé</h4>
          </div>
        )}
      </div>
    </>
  );
};

import { NavItem } from "@atoms/navItem";
import { NavBarData } from "@data/dataNavBar";
import { dataRestaurant } from "@data/dataRestaurant";
import { useEffect, useState } from "react";

export const NavaBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const date = new Date();
  const day = date.getDay();
  const hour = `${date.getHours() + ":" + date.getMinutes()}`;
  const week = [
    "dimanche",
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
  ];
  interface IDayList {
    name: string;
    firstOpen: string[];
    secondOpen: string[];
  }
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
      <div className="flex px-8 py-8 items-center justify-between">
        <h1>{dataRestaurant.restaurant.nom}</h1>
        <ul className="flex">
          {NavBarData.map((navItem, key) => {
            return (
              <NavItem key={key} label={navItem.label} src={navItem.src} />
            );
          })}
        </ul>
        {isOpen ? (
          <div className="px-5 py-3 rounded-lg bg-amber-600">
            <h4 className="text-white">&#x1F7E2; Notre magasin est ouvert</h4>
          </div>
        ) : (
          <div className="px-5 py-3 rounded-lg bg-amber-600">
            <h4 className="text-white">&#128308; Notre magasin est fermé</h4>
          </div>
        )}
      </div>
    </>
  );
};

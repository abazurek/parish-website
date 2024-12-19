import { phoneNumber } from "./phoneNumber";
export const cardsDescription = [
  {
    title: "Msze Święte",
    addInfo: [
      {
        title: "w niedziele i uroczystości",
        desc: "7:30, 9:30, 10:45 (z udziałem dzieci), 12:00,17:00",
      },
      { title: "święta", desc: "8:00, 10:00, 17:00" },
      { title: "dni powszednie", desc: "7:00, 7:30, 17:00" },
    ],
    icon: "grail",
  },
  {
    title: "Spowiedź Święta",
    addInfo: [
      {
        title: "przez cały tydzień",
        desc: "przed każdą Mszą Świętą",
      },
      { title: "w pierwsze piątki miesiąca", desc: "od 16" },
    ],
    icon: "cross",
  },
  {
    title: "Kancelaria parafialna",
    addInfo: [
      {
        title: "od poniedziałku do piątku",
        desc: "8:30 - 9:00 i 15:30-16:30 za wyjątkiem świąt",
      },
      { title: "kontakt możliwy pod nr tel", desc: `${phoneNumber}` },
    ],
    icon: "church",
  },
];

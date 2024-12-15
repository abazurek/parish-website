export const navList: {
  key: string;
  title: string;
  // href: string;
  options: { title: string; href: string }[];
}[] = [
  {
    key: "home",
    title: "Aktualności",
    // href: "/home",
    options: [],
  },
  {
    key: "ads",
    title: "Ogłoszenia",
    // href: "/ads",
    options: [
      { title: "Ogłoszenia", href: "ads" },
      { title: "Intencje mszalne", href: "mass" },
    ],
  },
  {
    key: "parish",
    title: "Parafia",
    // href: "/parish",
    options: [
      { title: "Historia parafii", href: "history" },
      { title: "Grupy i wspólnoty", href: "groups" },
      { title: "Kancelaria parafialna", href: "office" },
      { title: "Kapłani", href: "priests" },
      { title: "Siostry nazaretanki", href: "nuns" },
      { title: "Galeria", href: "gallery" },
      { title: "Standardy ochrony małoletnich", href: "protection" },
    ],
  },
  {
    key: "sacraments",
    title: "Sakramenty",
    // href: "/sacraments",
    options: [
      { title: "Msze święte i nabożeństwa", href: "masses" },
      { title: "Chrzest Święty", href: "baptism" },
      { title: "Spowiedź Święta", href: "confession" },
      { title: "I Komunia Święta", href: "communion" },
      { title: "Bierzmowanie", href: "confirmation" },
      { title: "Małżeństwo", href: "marriage" },
      { title: "Namaszczenie chorych", href: "sick" },
    ],
  },
  {
    key: "contact",
    title: "Kontakt",
    // href: "/contact",
    options: [],
  },
];

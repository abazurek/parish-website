export const navList: {
  key: string;
  title: string;
  options: { title: string; href: string }[];
}[] = [
  {
    key: "aktualnosci",
    title: "Aktualności",
    options: [],
  },
  {
    key: "ads",
    title: "Ogłoszenia",
    options: [
      { title: "Ogłoszenia", href: "ogloszenia" },
      { title: "Intencje mszalne", href: "intencje" },
    ],
  },
  {
    key: "parish",
    title: "Parafia",
    options: [
      { title: "Historia parafii", href: "historia" },
      { title: "Grupy i wspólnoty", href: "grupy" },
      { title: "Kancelaria parafialna", href: "kancelaria" },
      { title: "Kapłani", href: "kaplani" },
      { title: "Siostry nazaretanki", href: "siostry" },
      { title: "Galeria", href: "galeria" },
      { title: "Standardy ochrony małoletnich", href: "standardy" },
    ],
  },
  {
    key: "sacraments",
    title: "Sakramenty",
    options: [
      { title: "Msze święte i nabożeństwa", href: "msze" },
      { title: "Chrzest Święty", href: "chrzest" },
      { title: "Spowiedź Święta", href: "spowiedz" },
      { title: "I Komunia Święta", href: "komunia" },
      { title: "Bierzmowanie", href: "bierzmowanie" },
      { title: "Małżeństwo", href: "malzenstwo" },
      { title: "Namaszczenie chorych", href: "namaszczenie" },
    ],
  },
  {
    key: "kontakt",
    title: "Kontakt",
    options: [],
  },
];

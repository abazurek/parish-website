export const getTitleBasedPath = (path: string) => {
  switch (path) {
    case "ads":
      return "Ogłoszenia";
    case "mass":
      return "Intencje mszalne";
    case "history":
      return "Historia parafii";
    case "groups":
      return "Grupy i wspólnoty";
    case "office":
      return "Kancelaria parafialna";
    case "priests":
      return "Kapłani";
    case "nuns":
      return "Siostry szarytki";
    case "gallery":
      return "Galeria";
    case "protection":
      return "Standardy ochrony małoletnich";
    case "masses":
      return "Msze święte i nabożeństwa";
  }
};

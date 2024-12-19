import { phoneNumber } from "./phoneNumber";
import { accountNumber } from "./accountNumber";

export const contactInfo = [
  { title: "Parafia Rzymskokatolicka Świętego Michała Archanioła", desc: "" },
  { title: "Archidiecezja Częstochowska", desc: "" },
  { title: "Adres: ", desc: "Henryka Sienkiewicza 14, 42-290 Blachownia" },
  { title: "Tel.: ", desc: `${phoneNumber}` },
  {
    title: "Kancelaria parafialna:  ",
    desc: "od poniedziałku do piątku 8:30 - 9:00 i 15:30-16:30 za wyjątkiem świąt",
  },
  {
    title: "Konto bankowe: ",
    desc: `${accountNumber}`,
  },
];

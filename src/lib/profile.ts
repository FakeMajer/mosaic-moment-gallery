import type { LucideIcon } from "lucide-react";
import {
  Brush,
  Construction,
  Fish,
  Gamepad2,
  Ghost,
  Headphones,
  Images,
  Instagram,
  MessageCircle,
  Music,
  Shirt,
  Twitch,
  Zap,
  Disc,
} from "lucide-react";

export const EMAIL = "adam710ZLE@seznam.cz";
export const ZONERAMA_URL = "https://eu.zonerama.com/FotogalerieAdamKolda/Album/14451164";

export type Social = { label: string; href?: string; icon: LucideIcon; soon?: boolean };

export const SOCIALS: Social[] = [
  { label: "Instagram", href: "https://www.instagram.com/2004fordfiesta/", icon: Instagram },
  { label: "Fotogalerie", href: ZONERAMA_URL, icon: Images },
  { label: "Spotify", href: "https://open.spotify.com/user/ux6jnthe63dgzmpkvmf4cnmjm?si=c8da26a2a4684809", icon: Music },
  { label: "Twitch", href: "https://www.twitch.tv/j4sarr", icon: Twitch },
  { label: "Steam", href: "https://steamcommunity.com/profiles/76561198197971354/", icon: Gamepad2 },
  { label: "Snapchat", icon: Ghost, soon: true },
  { label: "Discord server", icon: MessageCircle, soon: true },
];

export const SOON_ICON = Construction;

export const INTRO =
  "Ahoj! Moje jméno je Adam Kolda, pocházím z Plzně a v Plzni i studuju. Je mi 16 let a studuju střední školu informatiky a finančních služeb, oboru digitální svět. Což je obor zaměřen na programování, počítačové sítě, datovou analytiku, a grafiku. Ve 3. ročníku si budeme moci vybrat jedno z těchto zaměření, jakožto povinně volitelný předmět. Od malička jsem měl rád grafiku, grafický design a design celkově. Takže velice doufám že se na grafiku dostanu.";

export type Hobby = {
  id: string;
  title: string;
  icon: LucideIcon;
  motto?: string;
  text: string;
  link?: { label: string; href: string };
};

export const HOBBIES: Hobby[] = [
  {
    id: "rybareni",
    title: "Rybaření",
    icon: Fish,
    motto: "Od 3 let s prutem",
    text: "Mám více koníčků, tak to vezmeme od toho co mě drží nejdéle. Rybaření je jedna z mých nejoblíbenějších. Ale nechytám ryby jako si možná myslíte, chytám ryby stylem ultra light přívlače. Ryby chytám od svých 3 let. Dokonce se od roku 2018 věnuji závodnímu rybaření na Juniorské lize v přívlači, kde si myslím, že se mi vede poslední dobou celkem dobře. Nejraději chytám ovšem pstruhy s mým bratrem.",
    link: { label: "Moje video na vysvětlení", href: "https://www.youtube.com/watch?v=enbdyBpdgIg" },
  },
  {
    id: "kolobezka",
    title: "Freestyle koloběžka",
    icon: Zap,
    motto: "Grind never stops!",
    text: "Další z mých koníčků je ježdění na freestyle koloběžce stylem street. Po dobu posledních tří let jezdím každý den, kdy není mokro, prší, nebo námraza, jinak jezdím i když je pod nulou nebo nad 30 °C.",
  },
  {
    id: "kresleni",
    title: "Kreslení",
    icon: Brush,
    motto: "Art never sleeps!",
    text: "Dalším z mých koníčků je kreslení, hlavně temnější motivy a věci ve stylu neotribal nebo dark fantasy. Většinou začínám klasicky tužkou a pak to pořádně vytáhnu černým fixem, aby každá čára seděla a měla ten správný říz. Kreslím si prostě kdykoliv mě něco napadne a mám u sebe skicák, klidně u toho prosedím hodiny, dokud ta lebka, meč nebo runa nevypadá přesně tak, jak chci. Žádný flákání, prostě jedu, dokud není papír úplně pokreslenej.",
  },
  {
    id: "hudba",
    title: "Hudba",
    icon: Headphones,
    motto: "Hudba hraje furt!",
    text: "Dalším z mých koníčků je poslech hudby a můj vkus jede snad všemi směry. Dokážu ocenit texty od MC Geye nebo Sheena, ale klidně tam šoupnu System of a Down nebo Trautenberk, když je chuť na něco tvrdšího. Když potřebuju vypnout nebo se soustředit na kreslení, pouštím si temný techno, Gleba, Redzeda nebo liquid dnb. Sluchátka mám v uších v podstatě nonstop, ať už jedu na koloběžce, nebo tvořím novej neotribal. Bez pořádnýho beatu v uších prostě ani ránu.",
  },
  {
    id: "gaming",
    title: "Gaming",
    icon: Gamepad2,
    motto: "Platinum or nothing!",
    text: "Dalším z mých koníčků je gaming a rozhodně nejsem žádný sváteční hráč, co by u toho jen tak relaxoval. Mám v sobě silnou soutěživost, jeden rok jsem to dotáhl až do top 5 v celé ČR v Trackmanii, což byl neskutečnej grind na milisekundy. Dřív jsem taky hodně potil Warzone, ale teď mě nejvíc táhnou hry, co mi nedají nic zadarmo. Momentálně si jdu tvrdě pro platinovky v Bloodborne, Elden Ringu a Dark Souls 3. Už mám kompletně vyčištěný oba díly God of War i Ragnarök, a tenhle styl mě prostě baví nejvíc. Miluju tu atmosféru, design bossů (který mě dost inspiruje i v kreslení) a ten pocit, když po padesátým pokusu konečně zvítězím. Když zrovna nepotřebuju tenhle hardcore zážitek, tak se jdu jen tak projet ve Skate 3, ale jinak mě u obrazovky drží hlavně výzva. Dokud tam nesvítí splněno na 100 %, neodkládám ovladač.",
  },
  {
    id: "styl",
    title: "Styl & hadry",
    icon: Shirt,
    motto: "Style is the identity!",
    text: "Kromě sportu a umění mě hodně baví i hadry a celkově vizuální styl. I když sám jezdím na koloběžce, se skatema nemám nejmenší problém a upřímně vůbec nechápu ten věčný beef, co mezi sebou tyhle dvě komunity občas mají. Pro mě je to o stejném streetu a stejným vibe. Nejvíc jedu streetwear s pořádným skate nádechem, ke kterému míchám Y2K a techwear prvky. Moje klasika jsou baggy jeany a pořádný \u201echleby\u201c na nohou, nejčastěji Globe Fusion. Baví mě značky jako Polar, Carhartt nebo Southpole, ale cením i technický věci od Arc'teryx nebo RVRC. Hodně jedu i značky jako Life is Porno nebo Affliction, což sedí k mýmu vkusu v umění. Často nosím i vlastní custom trika s tribalama, protože mě baví si ten styl dotvářet podle sebe. Není to pro mě jen o tom, co si hodím na sebe, ale o vyjádření identity, od hudby až po ty hodiny strávené na streetu.",
  },
  {
    id: "fingerboard",
    title: "Fingerboard",
    icon: Disc,
    motto: "Profi setup, žádný hračky",
    text: "Když zrovna nejsem na streetu nebo u skicáku, tak mi v rukách rotuje fingerboard. Nejezdím žádný hračky z obchodu, mám na to pořádnej profi setup, protože na technice a odezvě záleží i v tomhle měřítku. Vlastní park sice nemám, ale pár překážek vlastním a zbytek si najdu kdekoliv, kde zrovna sedím. Beru to jako ideální relax, když se nudím nebo když si dávám pauzu ve skateparku. Baví mě na tom ta preciznost a to, že se člověk díky tomu naučí víc o fungování skateboardingu a triků celkově.",
  },
];

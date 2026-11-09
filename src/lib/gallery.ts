import portrait1 from "@/assets/gallery-portrait-1.jpg";
import portrait2 from "@/assets/gallery-portrait-2.jpg";
import architecture1 from "@/assets/gallery-architecture-1.jpg";
import architecture2 from "@/assets/gallery-architecture-2.jpg";
import street1 from "@/assets/gallery-street-1.jpg";
import street2 from "@/assets/gallery-street-2.jpg";
import landscape1 from "@/assets/gallery-landscape-1.jpg";
import landscape2 from "@/assets/gallery-landscape-2.jpg";

export const CATEGORIES = ["Vše", "Portrét", "Krajina", "Architektura", "Ulice"] as const;
export type Category = Exclude<(typeof CATEGORIES)[number], "Vše">;

export type Photo = {
  id: string;
  src: string;
  title: string;
  place: string;
  year: number;
  category: Category;
  width: number;
  height: number;
};

export const PHOTOS: Photo[] = [
  { id: "p1", src: portrait1, title: "Zlaté světlo", place: "Ateliér, Praha", year: 2025, category: "Portrét", width: 832, height: 1216 },
  { id: "l2", src: landscape2, title: "Hřeben", place: "Sahara, Maroko", year: 2024, category: "Krajina", width: 1216, height: 832 },
  { id: "a1", src: architecture1, title: "Beton & slunce", place: "Brno", year: 2024, category: "Architektura", width: 1024, height: 1024 },
  { id: "s1", src: street1, title: "Deštivá noc", place: "Staré Město, Praha", year: 2025, category: "Ulice", width: 1216, height: 832 },
  { id: "l1", src: landscape1, title: "Ticho jezera", place: "Šumava", year: 2023, category: "Krajina", width: 832, height: 1216 },
  { id: "p2", src: portrait2, title: "Dýmka", place: "Lisabon", year: 2023, category: "Portrét", width: 1024, height: 1024 },
  { id: "a2", src: architecture2, title: "Spirála", place: "Vídeň", year: 2025, category: "Architektura", width: 832, height: 1216 },
  { id: "s2", src: street2, title: "Ranní mlha", place: "Ostrava", year: 2024, category: "Ulice", width: 832, height: 1216 },
];

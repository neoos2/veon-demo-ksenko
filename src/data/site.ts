// Content of the KSENKO homepage. Facts only from veon/client.json (ids in comments). Nothing invented.
import type { ImageMetadata } from "astro";
import hs40 from "../assets/img/HS40_006_L_Perspective_GI_White.jpg";
import hamiltonC6 from "../assets/img/hamilton-c6.jpg";
import hamiltonC1Neo from "../assets/img/hamilton-c1-neo-01.jpg";
import heraW10 from "../assets/img/heraW10.jpg";
import pioneer from "../assets/img/Radiologia_pioneer_icon.webp";
import medifa from "../assets/img/medifa_operating_table_601820_composing_icon.webp";
import evario from "../assets/img/Stiegelmeyer_Evario2_icon.webp";
import pentax from "../assets/img/pentax_i10_02.jpg";
import ferno from "../assets/img/ferno_power_x1_icon.webp";
import resusci from "../assets/img/Resusci-Anne-QCPR.jpg";

// B-F008, company.contacts
export const contacts = {
  sales: { href: "tel:+380506405289", label: "+38 (050) 640-52-89", dept: "Відділ продажів" },
  office: { href: "tel:+380445410800", label: "+38 (044) 541-08-00", dept: "Головний офіс" },
  email: { address: "office@ksenko.com", href: "mailto:office@ksenko.com?subject=%D0%97%D0%B0%D0%BF%D0%B8%D1%82%20%D0%B7%20%D1%81%D0%B0%D0%B9%D1%82%D1%83" },
  address: "Україна, м. Київ, 02002, вулиця Флоренції, 1/11, офіс 197",
  legal: "ТОВ «КСЕНКО»",
  facebook: "https://www.facebook.com/uk.ksenko",
} as const;

export const machine = {
  img: hs40,
  alt: "Ультразвуковий апарат Samsung HS40 на мобільній стійці з монітором і панеллю керування",
  caption: "Samsung HS40 — ультразвуковий апарат, Samsung Medison",
};

// B-F007 + company.products_services
export const stages = [
  { name: "Продаж", text: "Обладнання понад 20 світових виробників — від апаратів ШВЛ до симуляційних манекенів. Ціну й комплектацію готує відділ продажів." },
  { name: "Інсталяція", text: "Доставляємо обладнання в будь-який куточок України і встановлюємо його у вашому закладі." },
  { name: "Навчання персоналу", text: "Навчаємо персонал закладу працювати з обладнанням, проводимо майстер-класи." },
  { name: "Технічна підтримка", text: "Після запуску технічні питання щодо роботи апарата приймає сервісна служба через головний офіс." },
  { name: "Гарантійне обслуговування", text: "Гарантійний ремонт виконує власна сервісна служба КСЕНКО: 21 інженер у п’яти містах." },
  { name: "Постгарантійне обслуговування", text: "Коли гарантія закінчилась, апарат обслуговують ті самі інженери. 92\u00A0% ремонтів — у приміщенні вашого закладу.", service: true },
] as const;

export interface Direction { name: string; model?: string; img?: ImageMetadata; alt?: string; framed?: boolean; }

// B-F005; model → direction from catalogue sections (concept §5 «Зображення»)
export const directions: Direction[] = [
  { name: "Анестезіологія та інтенсивна терапія", model: "Hamilton-C6, апарат ШВЛ", img: hamiltonC6, alt: "Апарат штучної вентиляції легень Hamilton-C6 з сенсорним екраном" },
  { name: "Неонатологія", model: "Hamilton-C1 neo, апарат ШВЛ", img: hamiltonC1Neo, alt: "Апарат штучної вентиляції легень для новонароджених Hamilton-C1 neo" },
  { name: "Функціональна діагностика" },
  { name: "Ультразвукова діагностика", model: "Samsung HERA W10, ультразвукова система", img: heraW10, alt: "Ультразвукова система Samsung HERA W10 на стійці з монітором" },
  { name: "Рентгенологічне обладнання", model: "Radiologia Pioneer, мобільний рентгенограф", img: pioneer, alt: "Мобільний рентгенограф Radiologia Pioneer на колесах" },
  { name: "Обладнання для операційних", model: "Medifa серії 6000, операційний стіл", img: medifa, alt: "Операційний стіл Medifa серії 6000 з секційною поверхнею" },
  { name: "Медичні меблі", model: "Stiegelmeyer Evario, лікарняне ліжко", img: evario, alt: "Функціональне лікарняне ліжко Stiegelmeyer Evario з бічними огородженнями" },
  { name: "Гнучка ендоскопія", model: "Pentax i10, відеоендоскоп", img: pentax, alt: "Блок керування гнучкого відеоендоскопа Pentax серії i10", framed: true },
  { name: "Обладнання для автомобілів швидкої", model: "Ferno Power X1, носилки-каталка", img: ferno, alt: "Електрична носилка-каталка Ferno Power X1 для автомобіля швидкої" },
  { name: "Симуляційне навчання", model: "Laerdal Resusci Anne QCPR, манекен", img: resusci, alt: "Манекен для навчання серцево-легеневої реанімації Laerdal Resusci Anne QCPR із сумкою" },
];

// B-F003 (21) + B-F004 (5), alphabetical
export const brands = [
  "AB Germa", "Aitecs", "Atmos", "Barco", "Emed", "Ferno", "Gentherm", "Hamilton Medical", "International Biomedical",
  "iTD", "Laerdal", "Löwenstein", "Masimo", "Medifa", "Medin", "Medivators", "Mizuho", "Nihon Kohden",
  "Pentax Medical", "Radiologia", "Samsung Medison", "STEM", "Stiegelmeyer", "Viltechmeda", "WIENMANN", "Zoll",
];

// B-F006
export const cities = ["Київ", "Львів", "Дніпро", "Одеса", "Вінниця"];

export const futureNote = "Розділ у розробці";

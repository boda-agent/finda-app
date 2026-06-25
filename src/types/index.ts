export interface Master {
  id: string;
  name: string;
  photo?: string;
  city: string;
  country: string;
  languages: string[];
  rating: number;
  reviewCount: number;
  minPrice: number;
  service: string;
  distance?: string;
  verified?: boolean;
  online?: boolean;
  gender?: "male" | "female";
  workType?: "home" | "salon" | "travel";
  description?: string;
  services?: Service[];
  portfolio?: string[];
}

export interface Service {
  id: string;
  name: string;
  price: number;
  duration: number;
  description?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "client" | "master";
  avatar?: string;
}

export interface FilterState {
  service?: string;
  city?: string;
  languages: string[];
  country?: string;
  gender?: string;
  minRating?: number;
  priceRange?: [number, number];
  workType?: string;
}

export const POPULAR_SERVICES = [
  { id: "manicure", label: "Манікюр", icon: "💅" },
  { id: "hair", label: "Зачіски", icon: "💇" },
  { id: "makeup", label: "Макіяж", icon: "💄" },
  { id: "face", label: "Обличчя", icon: "🧴" },
  { id: "pedicure", label: "Педикюр", icon: "🦶" },
  { id: "brows", label: "Брови", icon: "👁️" },
  { id: "massage", label: "Масаж", icon: "💆" },
  { id: "haircut", label: "Стрижки", icon: "✂️" },
];

export const LANGUAGES = [
  "Українська",
  "Англійська",
  "Узбецька",
  "Вірменська",
  "Польська",
  "Російська",
  "Турецька",
  "Казахська",
];

export const COUNTRIES = [
  "Україна",
  "Польща",
  "Узбекистан",
  "Вірменія",
  "Казахстан",
  "Туреччина",
  "Грузія",
  "Молдова",
];

export const MOCK_MASTERS: Master[] = [
  {
    id: "1",
    name: "Анна Коваленко",
    city: "Варшава",
    country: "Україна",
    languages: ["Українська", "Польська"],
    rating: 4.9,
    reviewCount: 128,
    minPrice: 120,
    service: "Манікюр",
    distance: "1.2 км",
    verified: true,
    online: true,
    gender: "female",
    workType: "salon",
    description:
      "Майстер манікюру з 7-річним досвідом. Спеціалізуюсь на дизайні нігтів, покритті гель-лаком та нарощуванні.",
    services: [
      { id: "s1", name: "Манікюр класичний", price: 120, duration: 60 },
      { id: "s2", name: "Манікюр апаратний", price: 150, duration: 75 },
      { id: "s3", name: "Покриття гель-лак", price: 80, duration: 30 },
      { id: "s4", name: "Дизайн нігтів", price: 200, duration: 90 },
    ],
  },
  {
    id: "2",
    name: "Марія Ібрагімова",
    city: "Варшава",
    country: "Узбекистан",
    languages: ["Узбецька", "Українська", "Англійська"],
    rating: 4.8,
    reviewCount: 95,
    minPrice: 80,
    service: "Брови",
    distance: "0.8 км",
    online: true,
    gender: "female",
    workType: "home",
  },
  {
    id: "3",
    name: "Олена Соколова",
    city: "Варшава",
    country: "Україна",
    languages: ["Українська", "Англійська"],
    rating: 4.7,
    reviewCount: 64,
    minPrice: 180,
    service: "Зачіски",
    distance: "2.5 км",
    verified: true,
    gender: "female",
    workType: "salon",
  },
  {
    id: "4",
    name: "Катерина Левченко",
    city: "Краків",
    country: "Україна",
    languages: ["Українська", "Польська"],
    rating: 4.9,
    reviewCount: 212,
    minPrice: 90,
    service: "Макіяж",
    distance: "3.1 км",
    verified: true,
    online: true,
    gender: "female",
    workType: "travel",
  },
  {
    id: "5",
    name: "Анаіт Саркісян",
    city: "Варшава",
    country: "Вірменія",
    languages: ["Вірменська", "Українська"],
    rating: 4.6,
    reviewCount: 43,
    minPrice: 100,
    service: "Манікюр",
    distance: "0.5 км",
    gender: "female",
    workType: "home",
  },
  {
    id: "6",
    name: "Дінара Ахметова",
    city: "Вроцлав",
    country: "Казахстан",
    languages: ["Казахська", "Українська", "Англійська"],
    rating: 4.8,
    reviewCount: 77,
    minPrice: 140,
    service: "Масаж",
    distance: "1.8 км",
    verified: true,
    online: true,
    gender: "female",
    workType: "salon",
  },
];

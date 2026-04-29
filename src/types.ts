export interface HouseProject {
  id: string;
  name: string;
  style: string;
  area: string;
  description: string;
  image: string;
  features: string[];
  materials: string[];
}

export const PROJECTS: HouseProject[] = [
  {
    id: "1",
    name: "Minimalist Shisha Uy",
    style: "Minimalizm",
    area: "240 m²",
    description: "Tabiat bilan uyg'unlikda qurilgan, keng panoramali derazalarga ega zamonaviy uy.",
    image: "https://images.unsplash.com/photo-1449156001931-825fd31bb7a1?auto=format&fit=crop&q=80&w=1200",
    features: ["Panoramali oynalar", "Ochiq verunda", "Smart Home tizimi"],
    materials: ["Beton", "Shisha", "Tabiiy yog'och"]
  },
  {
    id: "2",
    name: "Yuqori Texnologiyali Villa",
    style: "High-Tech",
    area: "450 m²",
    description: "Kelajak texnologiyalari va futuristik dizayn asosida qurilgan hashamatli villa.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200",
    features: ["Infinity hovuz", "Quyosh panellari", "Avtomatlashgan bog'"],
    materials: ["Kompozit materiallar", "Alyuminiy", "Marmar"]
  },
  {
    id: "3",
    name: "Skandinaviya Eko-Uyi",
    style: "Skandinaviya",
    area: "180 m²",
    description: "Ekologik toza materiallardan qurilgan, issiq va shinam oilaviy yashash maskani.",
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=1200",
    features: ["Kamin", "Energiya samaradorligi", "Tabiiy shamollatish"],
    materials: ["Archa yog'ochi", "Tosh", "Ekologik izolyatsiya"]
  },
  {
    id: "4",
    name: "Industrial Loft Villa",
    style: "Loft",
    area: "320 m²",
    description: "Keng xonalar, baland shiftlar va industrial estetikani o'zida mujassam etgan uy.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
    features: ["Baland shiftlar", "Ochiq kommunikatsiyalar", "Art-galereya hududi"],
    materials: ["G'isht", "Qora po'lat", "Laklangan beton"]
  }
];

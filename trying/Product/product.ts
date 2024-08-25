export interface Card {
  id: number;
  image: string;
  title: string;
  country: string;
  price: number;
  category: string;
}

export interface Category {
  id: number;
  name: string;
  tag: string;
  cards: Card[];
}

export const groupdata: Category[] = [
  {
    id: 1,
    name: "Character",
    tag: "Must",
    cards: [
      {
        id: 1,
        image: "/images/3.png",
        title: "Prince of Persia",
        country: "Persiavalia",
        price: 45,
        category: "Character",
      },
      {
        id: 2,
        image: "/images/4.png",
        title: "Prince of Skyland",
        country: "Skyworld",
        price: 80,
        category: "Character",
      },
      {
        id: 3,
        image: "/images/5.png",
        title: "Prince of Castelvania",
        country: "Vampire",
        price: 47,
        category: "Character",
      },
      {
        id: 4,
        image: "/images/6.png",
        title: "Prince of Atlantis",
        country: "Underwater",
        price: 90,
        category: "Character",
      },
      {
        id: 5,
        image: "/images/7.png",
        title: "Prince of Jumanji",
        country: "Juman Ji",
        price: 30,
        category: "Character",
      },
      {
        id: 6,
        image: "/images/8.png",
        title: "Prince of Arendell",
        country: "Frozen World",
        price: 450,
        category: "Character",
      },
      {
        id: 7,
        image: "/images/9.png",
        title: "Prince of Neflehimer",
        country: "Underworld",
        price: 70,
        category: "Character",
      },
      {
        id: 8,
        image: "/images/10.png",
        title: "Prince of Egypt",
        country: "Desertland",
        price: 4500,
        category: "Character",
      },
    ],
  },

  {
    id: 2,
    name: "Side-Character",
    tag: "Just",
    cards: [
      {
        id: 1,
        image: "/images/3.png",
        title: "Prince of Persia",
        country: "Persiavalia",
        price: 45,
        category: "Character",
      },
      {
        id: 2,
        image: "/images/4.png",
        title: "Prince of Skyland",
        country: "Skyworld",
        price: 80,
        category: "Character",
      },
      {
        id: 3,
        image: "/images/5.png",
        title: "Prince of Castelvania",
        country: "Vampire",
        price: 47,
        category: "Character",
      },
      {
        id: 4,
        image: "/images/6.png",
        title: "Prince of Atlantis",
        country: "Underwater",
        price: 90,
        category: "Character",
      },
      {
        id: 5,
        image: "/images/7.png",
        title: "Prince of Jumanji",
        country: "Juman Ji",
        price: 30,
        category: "Character",
      },
      {
        id: 6,
        image: "/images/8.png",
        title: "Prince of Arendell",
        country: "Frozen World",
        price: 450,
        category: "Character",
      },
      {
        id: 7,
        image: "/images/9.png",
        title: "Prince of Neflehimer",
        country: "Underworld",
        price: 70,
        category: "Character",
      },
      {
        id: 8,
        image: "/images/10.png",
        title: "Prince of Egypt",
        country: "Desertland",
        price: 4500,
        category: "Character",
      },
    ],
  },

  {
    id: 3,
    name: "NPC",
    tag: "crust",
    cards: [
      {
        id: 1,
        image: "/images/3.png",
        title: "Prince of Persia",
        country: "Persiavalia",
        price: 45,
        category: "Character",
      },
      {
        id: 2,
        image: "/images/4.png",
        title: "Prince of Skyland",
        country: "Skyworld",
        price: 80,
        category: "Character",
      },
      {
        id: 3,
        image: "/images/5.png",
        title: "Prince of Castelvania",
        country: "Vampire",
        price: 47,
        category: "Character",
      },
      {
        id: 4,
        image: "/images/6.png",
        title: "Prince of Atlantis",
        country: "Underwater",
        price: 90,
        category: "Character",
      },
      {
        id: 5,
        image: "/images/7.png",
        title: "Prince of Jumanji",
        country: "Juman Ji",
        price: 30,
        category: "Character",
      },
      {
        id: 6,
        image: "/images/8.png",
        title: "Prince of Arendell",
        country: "Frozen World",
        price: 450,
        category: "Character",
      },
      {
        id: 7,
        image: "/images/9.png",
        title: "Prince of Neflehimer",
        country: "Underworld",
        price: 70,
        category: "Character",
      },
      {
        id: 8,
        image: "/images/10.png",
        title: "Prince of Egypt",
        country: "Desertland",
        price: 4500,
        category: "Character",
      },
    ],
  },
];

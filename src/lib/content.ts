// PLACEHOLDER content. Replace with the resort's real rooms, dining and activities.

export type Room = {
  slug: string;
  name: string;
  summary: string;
  sleeps: number;
  features: string[];
};

export const rooms: Room[] = [
  {
    slug: "beachfront-bungalow",
    name: "Beachfront Bungalow",
    summary: "Steps from the sand, with a private terrace facing the water.",
    sleeps: 2,
    features: ["Sea view terrace", "Air conditioning", "Private bathroom", "Wi-Fi"],
  },
  {
    slug: "garden-bungalow",
    name: "Garden Bungalow",
    summary: "A quiet retreat set among the trees, a short walk from the beach.",
    sleeps: 2,
    features: ["Garden terrace", "Fan or air conditioning", "Private bathroom", "Wi-Fi"],
  },
  {
    slug: "family-villa",
    name: "Family Villa",
    summary: "Extra space for families and small groups travelling together.",
    sleeps: 4,
    features: ["Two bedrooms", "Living area", "Air conditioning", "Private bathroom"],
  },
];

export const dining = {
  title: "Dining",
  body: "Fresh seafood, local Khmer flavours and Western favourites, served overlooking the sea.",
};

export const activities = [
  { title: "Snorkelling", body: "Explore the clear water around the island." },
  { title: "Kayaking", body: "Paddle the coastline at your own pace." },
  { title: "Island walks", body: "Follow quiet trails and find empty beaches." },
  { title: "Sunset on the beach", body: "End the day with a drink on the sand." },
];

export const highlights = [
  { title: "On the beach", body: "Wake up a few steps from the water." },
  { title: "Island dining", body: "Fresh, local food served by the sea." },
  { title: "Slow days", body: "Snorkel, paddle, read, repeat." },
];

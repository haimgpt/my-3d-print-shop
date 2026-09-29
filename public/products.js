// =====================================================
// מוצרים אמיתיים בלבד — מבוססי תמונות שסופקו בפועל.
// =====================================================
const PRODUCTS = [
  {
    id: "home-tray-set",
    name: "סט מגש בעיצוב לבית",
    category: "דקורציה",
    description: "סט דקורטיבי לבית הכולל מגש ופריטי עיצוב במראה מודרני.",
    priceValue: 110,
    colors: ["שחור", "לבן", "ורוד כהה", "שמנת", "זית"],
    image: "images/home-tray-set-black.jpg",
    images: {"שחור":"images/home-tray-set-black.jpg","לבן":"images/home-tray-set-white.jpg","ורוד כהה":"images/home-tray-set-pink-dark.jpg","שמנת":"https://d2jqrm6oza8nb6.cloudfront.net/datasets/d93303e8-0271-4cb5-b7cc-c471c7313450.png?_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXlIYXNoIjoiNzc1M2E5YTAzNmZjNGZjNyIsImJ1Y2tldCI6InJ1bndheS1kYXRhc2V0cyIsInN0YWdlIjoicHJvZCIsImV4cCI6MTc5MDgxMDAxNn0.pgbX9aIosDuscrH7fdkC3J2xB7JK7YQyiJFVwEHDIjo","זית":"images/home-tray-set-olive.jpg"}
  },
  {
    id: "ribbed-planter",
    name: "עציץ מעוצב",
    category: "דקורציה",
    description: "עציץ מודפס בתלת־ממד עם טקסטורה אנכית בעיצוב נקי לבית.",
    priceValue: 50,
    colors: ["שחור", "לבן", "ורוד כהה", "שמנת", "זית"],
    image: "images/ribbed-planter-black.jpg",
    images: {"שחור":"images/ribbed-planter-black.jpg","לבן":"https://d2jqrm6oza8nb6.cloudfront.net/datasets/69a658c6-54ea-4b8e-b639-341bdf02dbae.png?_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXlIYXNoIjoiN2I3OTY2MTgwNTI1MTAxNiIsImJ1Y2tldCI6InJ1bndheS1kYXRhc2V0cyIsInN0YWdlIjoicHJvZCIsImV4cCI6MTc5MDgzOTk2MH0.Xx72JpYdB3JdtdHdTyoNwMO44BIbtJiJ7cRmzjMttyQ","ורוד כהה":"images/ribbed-planter-pink-dark.jpg","שמנת":"images/ribbed-planter-cream.jpg","זית":"images/ribbed-planter-olive.jpg"}
  },
  {
    id: "spiral-cone",
    name: "קונוס ספירלה",
    category: "דקורציה",
    description: "קונוס ספירלה מודפס בתלת־ממד בעיצוב דקורטיבי.",
    priceValue: 15,
    colors: ["לבן", "שחור", "צהוב", "קשת"],
    image: "https://d2jqrm6oza8nb6.cloudfront.net/datasets/f1e588bb-aec5-4f7b-9a9c-1bc4981e2e9a.jpeg?_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXlIYXNoIjoiYzdjNjNjYTc0MmE0NWM0NyIsImJ1Y2tldCI6InJ1bndheS1kYXRhc2V0cyIsInN0YWdlIjoicHJvZCIsImV4cCI6MTc5MDg0MTYzOX0.6LFayrRWdE_PZcSyegkfwl34zSlH24pGgnIUt2ipaBw",
    images: {
      "לבן":"https://d2jqrm6oza8nb6.cloudfront.net/datasets/f1e588bb-aec5-4f7b-9a9c-1bc4981e2e9a.jpeg?_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXlIYXNoIjoiYzdjNjNjYTc0MmE0NWM0NyIsImJ1Y2tldCI6InJ1bndheS1kYXRhc2V0cyIsInN0YWdlIjoicHJvZCIsImV4cCI6MTc5MDg0MTYzOX0.6LFayrRWdE_PZcSyegkfwl34zSlH24pGgnIUt2ipaBw",
      "שחור":"https://d2jqrm6oza8nb6.cloudfront.net/datasets/82fb3694-1fc9-48a5-a8ce-e06b71b72a35.jpeg?_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXlIYXNoIjoiNTgzOWIwZDYxYmQxMTlmYyIsImJ1Y2tldCI6InJ1bndheS1kYXRhc2V0cyIsInN0YWdlIjoicHJvZCIsImV4cCI6MTc5MDc4MzgzMH0.y3bmTwRJQKfZCQ0AAdfVRUmVAkeIYNWiI6iashvGc1s",
      "צהוב":"https://d2jqrm6oza8nb6.cloudfront.net/datasets/f08b3357-b63b-44a4-a52e-f179d3fad971.jpeg?_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXlIYXNoIjoiODJlNWM2YmNmOTQ0MzMzYSIsImJ1Y2tldCI6InJ1bndheS1kYXRhc2V0cyIsInN0YWdlIjoicHJvZCIsImV4cCI6MTc5MDc5NDMwMH0.EI2ahDbdC21nRgAnH8lHvPXd1rQJ-oeYs13dvA2maAU",
      "קשת":"https://d2jqrm6oza8nb6.cloudfront.net/datasets/f40f2a3c-3647-49f0-a14e-1fcdb9203d71.jpeg?_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXlIYXNoIjoiODNjZGNjNjk4N2Q4OGUzOSIsImJ1Y2tldCI6InJ1bndheS1kYXRhc2V0cyIsInN0YWdlIjoicHJvZCIsImV4cCI6MTc5MDc5MzcwNX0.kZc3-TjWXcNX_J0uBZdB1x4C_2kERpNHD6CmJcFJUb8"
    }
  },
  {
    id: "cool-desk-animal",
    name: "חיית שולחן מגניבה",
    category: "דקורציה",
    description: "חיית שולחן דקורטיבית מודפסת בתלת־ממד.",
    priceValue: 45,
    colors: [],
    image: "https://d2jqrm6oza8nb6.cloudfront.net/datasets/a6ad8d75-bfe8-471e-82af-dfcd87d35dbf.png?_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXlIYXNoIjoiMzRjMWM5OGNlMzBiZjcwNSIsImJ1Y2tldCI6InJ1bndheS1kYXRhc2V0cyIsInN0YWdlIjoicHJvZCIsImV4cCI6MTc5MDg0NjQ3Nn0.3wGyXvXsp9EDaIqPddWGVjBKdIXYDZFoD58MI26GWVA",
    images: {}
  }
];

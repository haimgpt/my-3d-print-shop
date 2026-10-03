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
    images: {"שחור":"images/home-tray-set-black.jpg","לבן":"images/home-tray-set-white.jpg","ורוד כהה":"images/home-tray-set-pink-dark.jpg","שמנת":"images/home-tray-set-cream.jpg","זית":"images/home-tray-set-olive.jpg"}
  },
  {
    id: "ribbed-planter",
    name: "עציץ מעוצב",
    category: "דקורציה",
    description: "עציץ מודפס בתלת־ממד עם טקסטורה אנכית בעיצוב נקי לבית.",
    priceValue: 50,
    colors: ["שחור", "לבן", "ורוד כהה", "שמנת", "זית"],
    image: "images/ribbed-planter-black.jpg",
    images: {"שחור":"images/ribbed-planter-black.jpg","לבן":"images/ribbed-planter-white.jpg","ורוד כהה":"images/ribbed-planter-pink-dark.jpg","שמנת":"images/ribbed-planter-cream.jpg","זית":"images/ribbed-planter-olive.jpg"}
  },
  {
    id: "spiral-cone",
    name: "קונוס ספירלה",
    category: "דקורציה",
    description: "קונוס ספירלה מודפס בתלת־ממד בעיצוב דקורטיבי.",
    priceValue: 15,
    colors: ["לבן", "שחור", "צהוב", "קשת"],
    image: "images/spiral-cone-white.jpg",
    images: {
      "לבן":"images/spiral-cone-white.jpg",
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
    image: "images/cool-desk-animal.jpg",
    images: {}
  },
  {
    id: "boys-surprise-egg",
    name: "ביצת הפתעה לבנים",
    category: "ילדים",
    description: "ביצת הפתעה מודפסת בתלת־ממד לילדים, קטנה, מגניבה וכיפית לפתיחה ולמשחק.",
    priceValue: 20,
    colors: [],
    image: "",
    images: {}
  }
];

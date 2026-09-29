// =====================================================
// עריכת מוצרים
// כל המוצרים זמינים בצבעים: שחור, לבן, ורוד וכחול.
// =====================================================
const PRODUCT_COLORS = ["שחור", "לבן", "ורוד", "כחול"];

const PRODUCTS = [
  {
    id: "phone-stand",
    name: "מעמד לטלפון",
    category: "שימושי",
    description: "מעמד שולחני מודפס בתלת־ממד.",
    priceValue: 35,
    colors: PRODUCT_COLORS,
    image: "images/phone-stand-black.svg",
    images: {"שחור":"images/phone-stand-black.svg","לבן":"images/phone-stand-white.svg","ורוד":"images/phone-stand-pink.svg","כחול":"images/phone-stand-blue.svg"}
  },
  {
    id: "organizer",
    name: "ארגונית שולחנית",
    category: "שימושי",
    description: "ארגונית מודפסת בתלת־ממד לשולחן העבודה.",
    priceValue: 55,
    colors: PRODUCT_COLORS,
    image: "images/organizer-black.svg",
    images: {"שחור":"images/organizer-black.svg","לבן":"images/organizer-white.svg","ורוד":"images/organizer-pink.svg","כחול":"images/organizer-blue.svg"}
  },
  {
    id: "cable-holder",
    name: "מחזיק כבלים",
    category: "שימושי",
    description: "פתרון קטן ונוח לסידור כבלים על שולחן העבודה.",
    priceValue: 35,
    colors: PRODUCT_COLORS,
    image: "images/cable-holder-black.svg",
    images: {"שחור":"images/cable-holder-black.svg","לבן":"images/cable-holder-white.svg","ורוד":"images/cable-holder-pink.svg","כחול":"images/cable-holder-blue.svg"}
  },
  {
    id: "desk-hook",
    name: "וו שולחני",
    category: "שימושי",
    description: "וו מודפס לתליית אוזניות או אביזרים קלים.",
    priceValue: 25,
    colors: PRODUCT_COLORS,
    image: "images/desk-hook-black.svg",
    images: {"שחור":"images/desk-hook-black.svg","לבן":"images/desk-hook-white.svg","ורוד":"images/desk-hook-pink.svg","כחול":"images/desk-hook-blue.svg"}
  },
  {
    id: "keychain",
    name: "מחזיק מפתחות",
    category: "מתנות",
    description: "מחזיק מפתחות מודפס בתלת־ממד.",
    priceValue: 20,
    colors: PRODUCT_COLORS,
    image: "images/keychain-black.svg",
    images: {"שחור":"images/keychain-black.svg","לבן":"images/keychain-white.svg","ורוד":"images/keychain-pink.svg","כחול":"images/keychain-blue.svg"}
  },
  {
    id: "gift-heart",
    name: "לב דקורטיבי",
    category: "מתנות",
    description: "פריט דקורטיבי קטן שמתאים כמתנה.",
    priceValue: 30,
    colors: PRODUCT_COLORS,
    image: "images/gift-heart-black.svg",
    images: {"שחור":"images/gift-heart-black.svg","לבן":"images/gift-heart-white.svg","ורוד":"images/gift-heart-pink.svg","כחול":"images/gift-heart-blue.svg"}
  },
  {
    id: "mini-gift-box",
    name: "קופסת מתנה קטנה",
    category: "מתנות",
    description: "קופסה מודפסת בתלת־ממד לפריט קטן או הפתעה.",
    priceValue: 40,
    colors: PRODUCT_COLORS,
    image: "images/mini-gift-box-black.svg",
    images: {"שחור":"images/mini-gift-box-black.svg","לבן":"images/mini-gift-box-white.svg","ורוד":"images/mini-gift-box-pink.svg","כחול":"images/mini-gift-box-blue.svg"}
  },
  {
    id: "figure",
    name: "פסלון / דגם",
    category: "דקורציה",
    description: "פסלון או דגם מודפס בתלת־ממד.",
    priceValue: 45,
    colors: PRODUCT_COLORS,
    image: "images/figure-black.svg",
    images: {"שחור":"images/figure-black.svg","לבן":"images/figure-white.svg","ורוד":"images/figure-pink.svg","כחול":"images/figure-blue.svg"}
  },
  {
    id: "geometric-vase",
    name: "אגרטל גיאומטרי",
    category: "דקורציה",
    description: "אגרטל דקורטיבי בעיצוב גיאומטרי מודרני.",
    priceValue: 60,
    colors: PRODUCT_COLORS,
    image: "images/geometric-vase-black.svg",
    images: {"שחור":"images/geometric-vase-black.svg","לבן":"images/geometric-vase-white.svg","ורוד":"images/geometric-vase-pink.svg","כחול":"images/geometric-vase-blue.svg"}
  },
  {
    id: "decor-star",
    name: "כוכב דקורטיבי",
    category: "דקורציה",
    description: "פריט דקורטיבי קטן למדף או לשולחן.",
    priceValue: 30,
    colors: PRODUCT_COLORS,
    image: "images/decor-star-black.svg",
    images: {"שחור":"images/decor-star-black.svg","לבן":"images/decor-star-white.svg","ורוד":"images/decor-star-pink.svg","כחול":"images/decor-star-blue.svg"}
  },
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
  }
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
];
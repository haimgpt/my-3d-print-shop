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
    images: {"שחור":"images/home-tray-set-black.jpg","לבן":"images/home-tray-set-white.jpg","ורוד כהה":"images/home-tray-set-pink-dark.jpg","שמנת":"images/home-tray-set-cream-hq.svg","זית":"images/home-tray-set-olive.jpg"}
  },
  {
    id: "ribbed-planter",
    name: "עציץ מעוצב",
    category: "דקורציה",
    description: "עציץ מודפס בתלת־ממד עם טקסטורה אנכית בעיצוב נקי לבית.",
    priceValue: 50,
    colors: ["שחור", "לבן", "ורוד כהה", "שמנת", "זית"],
    image: "images/ribbed-planter-black.jpg",
    images: {"שחור":"images/ribbed-planter-black.jpg","לבן":"images/ribbed-planter-white-hq.svg","ורוד כהה":"images/ribbed-planter-pink-dark.jpg","שמנת":"images/ribbed-planter-cream.jpg","זית":"images/ribbed-planter-olive.jpg"}
  }
];
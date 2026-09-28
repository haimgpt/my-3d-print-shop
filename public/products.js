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
    image: "images/phone-stand.svg"
  },
  {
    id: "organizer",
    name: "ארגונית שולחנית",
    category: "שימושי",
    description: "ארגונית מודפסת בתלת־ממד לשולחן העבודה.",
    priceValue: 55,
    colors: PRODUCT_COLORS,
    image: "images/organizer.svg"
  },
  {
    id: "cable-holder",
    name: "מחזיק כבלים",
    category: "שימושי",
    description: "פתרון קטן ונוח לסידור כבלים על שולחן העבודה.",
    priceValue: 35,
    colors: PRODUCT_COLORS,
    image: "images/cable-holder.svg"
  },
  {
    id: "desk-hook",
    name: "וו שולחני",
    category: "שימושי",
    description: "וו מודפס לתליית אוזניות או אביזרים קלים.",
    priceValue: 25,
    colors: PRODUCT_COLORS,
    image: "images/desk-hook.svg"
  },
  {
    id: "keychain",
    name: "מחזיק מפתחות",
    category: "מתנות",
    description: "מחזיק מפתחות מודפס בתלת־ממד.",
    priceValue: 20,
    colors: PRODUCT_COLORS,
    image: "images/keychain.svg"
  },
  {
    id: "gift-heart",
    name: "לב דקורטיבי",
    category: "מתנות",
    description: "פריט דקורטיבי קטן שמתאים כמתנה.",
    priceValue: 30,
    colors: PRODUCT_COLORS,
    image: "images/gift-heart.svg"
  },
  {
    id: "mini-gift-box",
    name: "קופסת מתנה קטנה",
    category: "מתנות",
    description: "קופסה מודפסת בתלת־ממד לפריט קטן או הפתעה.",
    priceValue: 40,
    colors: PRODUCT_COLORS,
    image: "images/mini-gift-box.svg"
  },
  {
    id: "figure",
    name: "פסלון / דגם",
    category: "דקורציה",
    description: "פסלון או דגם מודפס בתלת־ממד.",
    priceValue: 45,
    colors: PRODUCT_COLORS,
    image: "images/figure.svg"
  },
  {
    id: "geometric-vase",
    name: "אגרטל גיאומטרי",
    category: "דקורציה",
    description: "אגרטל דקורטיבי בעיצוב גיאומטרי מודרני.",
    priceValue: 60,
    colors: PRODUCT_COLORS,
    image: "images/geometric-vase.svg"
  },
  {
    id: "decor-star",
    name: "כוכב דקורטיבי",
    category: "דקורציה",
    description: "פריט דקורטיבי קטן למדף או לשולחן.",
    priceValue: 30,
    colors: PRODUCT_COLORS,
    image: "images/decor-star.svg"
  }
];
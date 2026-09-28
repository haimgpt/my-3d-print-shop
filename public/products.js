// =====================================================
// עריכת מוצרים
// כל המוצרים זמינים בצבעים: שחור, לבן, ורוד וכחול.
// מוצרים ללא מחיר נשארים בקטלוג אך לא ניתנים להוספה לסל עד להגדרת מחיר.
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
    image: ""
  },
  {
    id: "organizer",
    name: "ארגונית שולחנית",
    category: "שימושי",
    description: "ארגונית מודפסת בתלת־ממד לשולחן העבודה.",
    priceValue: 55,
    colors: PRODUCT_COLORS,
    image: ""
  },
  {
    id: "cable-holder",
    name: "מחזיק כבלים",
    category: "שימושי",
    description: "פתרון קטן ונוח לסידור כבלים על שולחן העבודה.",
    priceValue: null,
    colors: PRODUCT_COLORS,
    image: ""
  },
  {
    id: "desk-hook",
    name: "וו שולחני",
    category: "שימושי",
    description: "וו מודפס לתליית אוזניות או אביזרים קלים.",
    priceValue: null,
    colors: PRODUCT_COLORS,
    image: ""
  },
  {
    id: "keychain",
    name: "מחזיק מפתחות",
    category: "מתנות",
    description: "מחזיק מפתחות מודפס בתלת־ממד.",
    priceValue: 20,
    colors: PRODUCT_COLORS,
    image: ""
  },
  {
    id: "gift-heart",
    name: "לב דקורטיבי",
    category: "מתנות",
    description: "פריט דקורטיבי קטן שמתאים כמתנה.",
    priceValue: null,
    colors: PRODUCT_COLORS,
    image: ""
  },
  {
    id: "mini-gift-box",
    name: "קופסת מתנה קטנה",
    category: "מתנות",
    description: "קופסה מודפסת בתלת־ממד לפריט קטן או הפתעה.",
    priceValue: null,
    colors: PRODUCT_COLORS,
    image: ""
  },
  {
    id: "figure",
    name: "פסלון / דגם",
    category: "דקורציה",
    description: "פסלון או דגם מודפס בתלת־ממד.",
    priceValue: null,
    colors: PRODUCT_COLORS,
    image: ""
  },
  {
    id: "geometric-vase",
    name: "אגרטל גיאומטרי",
    category: "דקורציה",
    description: "אגרטל דקורטיבי בעיצוב גיאומטרי מודרני.",
    priceValue: null,
    colors: PRODUCT_COLORS,
    image: ""
  },
  {
    id: "decor-star",
    name: "כוכב דקורטיבי",
    category: "דקורציה",
    description: "פריט דקורטיבי קטן למדף או לשולחן.",
    priceValue: null,
    colors: PRODUCT_COLORS,
    image: ""
  }
];
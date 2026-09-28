// =====================================================
// עריכת מוצרים
// colors = הצבעים שהלקוח יכול לבחור.
// engravable = האם להציג אפשרות חריטה במוצר.
// מוצרים ללא מחיר נשארים בקטלוג אך לא ניתנים להוספה לסל עד להגדרת מחיר.
// =====================================================
const PRODUCTS = [
  {
    id: "phone-stand",
    name: "מעמד לטלפון",
    category: "שימושי",
    description: "מעמד שולחני מודפס בתלת־ממד.",
    priceValue: 35,
    colors: ["שחור", "לבן", "בז׳", "כחול"],
    engravable: false,
    image: ""
  },
  {
    id: "organizer",
    name: "ארגונית שולחנית",
    category: "שימושי",
    description: "ארגונית מודפסת בתלת־ממד לשולחן העבודה.",
    priceValue: 55,
    colors: ["שחור", "לבן", "בז׳", "אפור"],
    engravable: false,
    image: ""
  },
  {
    id: "cable-holder",
    name: "מחזיק כבלים",
    category: "שימושי",
    description: "פתרון קטן ונוח לסידור כבלים על שולחן העבודה.",
    priceValue: null,
    colors: ["שחור", "לבן", "אפור", "כחול"],
    engravable: false,
    image: ""
  },
  {
    id: "desk-hook",
    name: "וו שולחני",
    category: "שימושי",
    description: "וו מודפס לתליית אוזניות או אביזרים קלים.",
    priceValue: null,
    colors: ["שחור", "לבן", "בז׳"],
    engravable: false,
    image: ""
  },

  {
    id: "keychain",
    name: "מחזיק מפתחות",
    category: "מתנות",
    description: "מחזיק מפתחות מודפס בתלת־ממד.",
    priceValue: 20,
    colors: ["שחור", "לבן", "אדום", "כחול"],
    engravable: true,
    engravingMaxLength: 40,
    image: ""
  },
  {
    id: "gift-heart",
    name: "לב דקורטיבי",
    category: "מתנות",
    description: "פריט דקורטיבי קטן שמתאים כמתנה.",
    priceValue: null,
    colors: ["אדום", "לבן", "ורוד", "בז׳"],
    engravable: false,
    image: ""
  },
  {
    id: "mini-gift-box",
    name: "קופסת מתנה קטנה",
    category: "מתנות",
    description: "קופסה מודפסת בתלת־ממד לפריט קטן או הפתעה.",
    priceValue: null,
    colors: ["שחור", "לבן", "בז׳", "אדום"],
    engravable: false,
    image: ""
  },

  {
    id: "figure",
    name: "פסלון / דגם",
    category: "דקורציה",
    description: "פסלון או דגם מודפס בתלת־ממד.",
    priceValue: null,
    colors: ["שחור", "לבן", "בז׳"],
    engravable: false,
    image: ""
  },
  {
    id: "geometric-vase",
    name: "אגרטל גיאומטרי",
    category: "דקורציה",
    description: "אגרטל דקורטיבי בעיצוב גיאומטרי מודרני.",
    priceValue: null,
    colors: ["לבן", "בז׳", "שחור", "אפור"],
    engravable: false,
    image: ""
  },
  {
    id: "decor-star",
    name: "כוכב דקורטיבי",
    category: "דקורציה",
    description: "פריט דקורטיבי קטן למדף או לשולחן.",
    priceValue: null,
    colors: ["לבן", "זהב", "בז׳", "שחור"],
    engravable: false,
    image: ""
  },

  {
    id: "engraved-keychain",
    name: "מחזיק מפתחות עם חריטה",
    category: "חריטה אישית",
    description: "מחזיק מפתחות עם אפשרות להוסיף טקסט קצר לפי בחירה.",
    priceValue: null,
    colors: ["שחור", "לבן", "אדום", "כחול"],
    engravable: true,
    engravingMaxLength: 40,
    image: ""
  },
  {
    id: "engraved-desk-sign",
    name: "שלט שולחני עם חריטה",
    category: "חריטה אישית",
    description: "שלט קטן לשולחן עם טקסט אישי.",
    priceValue: null,
    colors: ["שחור", "לבן", "בז׳", "אפור"],
    engravable: true,
    engravingMaxLength: 40,
    image: ""
  },
  {
    id: "engraved-name-tag",
    name: "תג שם עם חריטה",
    category: "חריטה אישית",
    description: "תג שם מודפס בתלת־ממד עם טקסט לבחירה.",
    priceValue: null,
    colors: ["שחור", "לבן", "כחול", "אדום"],
    engravable: true,
    engravingMaxLength: 40,
    image: ""
  }
];
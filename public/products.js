// =====================================================
// עריכת מוצרים
// colors = הצבעים שהלקוח יכול לבחור.
// engravable = האם להציג אפשרות חריטה במוצר.
// engravingMaxLength = מספר התווים המרבי לחריטה.
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
    id: "organizer",
    name: "ארגונית שולחנית",
    category: "שימושי",
    description: "ארגונית מודפסת בתלת־ממד לשולחן העבודה.",
    priceValue: 55,
    colors: ["שחור", "לבן", "בז׳", "אפור"],
    engravable: false,
    image: ""
  }
];

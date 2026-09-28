const $ = (s) => document.querySelector(s);
const grid = $("#product-grid");
const search = $("#search");
const categoriesEl = $("#categories");
const empty = $("#empty-state");
const resultCount = $("#result-count");
const cartDrawer = $("#cart");
const cartItems = $("#cart-items");
const productModal = $("#product-modal");
const productModalMedia = $("#product-modal-media");
const productModalTitle = $("#product-modal-title");
const productModalCategory = $("#product-modal-category");
const productModalDescription = $("#product-modal-description");
const productModalPrice = $("#product-modal-price");
const productModalAdd = $("#product-modal-add");
const productQty = $("#product-qty");
const productQtyMinus = $("#product-qty-minus");
const productQtyPlus = $("#product-qty-plus");

let activeProductId = null;
let selectedCategory = "הכל";
let cart = normalizeCart(JSON.parse(localStorage.getItem("3d-cart") || "[]"));

function normalizeCart(raw) {
  if (!Array.isArray(raw)) return [];
  if (raw.length && typeof raw[0] === "string") {
    const counts = {};
    raw.forEach(id => counts[id] = (counts[id] || 0) + 1);
    return Object.entries(counts).map(([id, qty]) => ({id, qty}));
  }
  return raw
    .filter(x => x && x.id)
    .map(x => ({id: x.id, qty: Math.min(9, Math.max(1, Number(x.qty) || 1))}));
}

document.title = SITE_SETTINGS.pageTitle;
$("#brand-name").textContent = SITE_SETTINGS.businessName;
$("#footer-brand").textContent = SITE_SETTINGS.businessName;
$("#hero-text").textContent = SITE_SETTINGS.heroText;

function waLink(message) {
  return `https://wa.me/${SITE_SETTINGS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
$("#whatsapp-hero").href = waLink("שלום, הגעתי מהאתר ורציתי לשאול על אחד המוצרים.");
$("#year").textContent = new Date().getFullYear();

const categories = ["הכל", ...new Set(PRODUCTS.map(p => p.category))];
categories.forEach(cat => {
  const b = document.createElement("button");
  b.className = "chip";
  b.textContent = cat;
  b.dataset.cat = cat;
  b.addEventListener("click", () => {
    selectedCategory = cat;
    document.querySelectorAll(".chip").forEach(x => x.classList.toggle("active", x.dataset.cat === cat));
    renderProducts();
  });
  categoriesEl.appendChild(b);
});
document.querySelector(".chip").classList.add("active");

function productMatches(p) {
  const term = search.value.trim().toLowerCase();
  const byCat = selectedCategory === "הכל" || p.category === selectedCategory;
  const byText = !term || `${p.name} ${p.description} ${p.category}`.toLowerCase().includes(term);
  return byCat && byText;
}

function renderProducts() {
  const products = PRODUCTS.filter(productMatches);
  grid.innerHTML = "";
  empty.hidden = products.length !== 0;
  resultCount.textContent = `${products.length} מוצרים`;

  products.forEach(p => {
    const card = document.createElement("article");
    card.className = "product-card";
    const media = p.image
      ? `<img src="${p.image}" alt="${p.name}" class="product-image">`
      : `<div class="product-placeholder" aria-hidden="true"><span>3D</span></div>`;

    card.setAttribute("tabindex","0");
    card.setAttribute("role","button");
    card.setAttribute("aria-label", `פתח פרטים על ${p.name}`);
    card.innerHTML = `
      ${media}
      <div class="product-content">
        <span class="category">${p.category}</span>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="product-bottom"><strong>${formatPrice(p.priceValue)}</strong></div>
      </div>`;
    card.addEventListener("click", () => openProductModal(p.id));
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openProductModal(p.id);
      }
    });
    grid.appendChild(card);
  });
}

function clampQty(value) {
  return Math.min(9, Math.max(1, Number(value) || 1));
}

function formatPrice(value) {
  return Number.isFinite(value) ? "₪" + value : "מחיר לא הוגדר";
}

function updateProductModalPrice() {
  const p = PRODUCTS.find(x => x.id === activeProductId);
  if (!p || !Number.isFinite(p.priceValue)) {
    productModalPrice.textContent = "מחיר לא הוגדר";
    return;
  }
  const qty = clampQty(productQty.value);
  productQty.value = qty;
  productModalPrice.textContent = "₪" + p.priceValue + " × " + qty + " = ₪" + (p.priceValue * qty);
}

function openProductModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  activeProductId = id;
  productModalTitle.textContent = p.name;
  productModalCategory.textContent = p.category;
  productModalDescription.textContent = p.description;
  productModalAdd.disabled = !Number.isFinite(p.priceValue);
  productModalAdd.textContent = Number.isFinite(p.priceValue) ? "הוספה לסל" : "יש לעדכן מחיר";
  productQty.value = 1;
  updateProductModalPrice();
  productModalMedia.innerHTML = p.image
    ? `<img src="${p.image}" alt="${p.name}">`
    : `<div class="product-placeholder" aria-hidden="true"><span>3D</span></div>`;
  productModal.classList.add("open");
  productModal.setAttribute("aria-hidden","false");
  document.body.classList.add("no-scroll");
  $("#product-modal-close").focus();
}

function closeProductModal() {
  productModal.classList.remove("open");
  productModal.setAttribute("aria-hidden","true");
  document.body.classList.remove("no-scroll");
  activeProductId = null;
}

productQtyMinus.addEventListener("click", () => {
  productQty.value = clampQty(Number(productQty.value) - 1);
  updateProductModalPrice();
});
productQtyPlus.addEventListener("click", () => {
  productQty.value = clampQty(Number(productQty.value) + 1);
  updateProductModalPrice();
});
productQty.addEventListener("input", updateProductModalPrice);
productQty.addEventListener("change", updateProductModalPrice);

$("#product-modal-close").addEventListener("click", closeProductModal);
productModal.addEventListener("click", e => {
  if (e.target === productModal) closeProductModal();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && productModal.classList.contains("open")) closeProductModal();
});
productModalAdd.addEventListener("click", () => {
  if (!activeProductId) return;
  const id = activeProductId;
  const qty = clampQty(productQty.value);
  closeProductModal();
  addToCart(id, qty);
});

function addToCart(id, qty = 1) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product || !Number.isFinite(product.priceValue)) return;
  const existing = cart.find(item => item.id === id);
  if (existing) existing.qty = Math.min(9, existing.qty + qty);
  else cart.push({id, qty: Math.min(9, qty)});
  saveCart();
  openCart();
}

function saveCart() {
  localStorage.setItem("3d-cart", JSON.stringify(cart));
  renderCart();
}

function setCartQty(id, qty) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty = clampQty(qty);
  saveCart();
}

function renderCart() {
  const items = cart
    .map(item => ({...item, product: PRODUCTS.find(p => p.id === item.id)}))
    .filter(item => item.product);

  const totalUnits = items.reduce((sum, item) => sum + item.qty, 0);
  const totalCost = items.reduce((sum, item) => sum + ((Number(item.product.priceValue) || 0) * item.qty), 0);
  $("#cart-count").textContent = totalUnits;
  $("#mobile-cart-count").textContent = totalUnits;
  cartItems.innerHTML = "";
  $("#cart-total").textContent = "₪" + totalCost;
  $("#cart-total-wrap").hidden = items.length === 0;

  if (!items.length) {
    cartItems.innerHTML = `<p class="cart-empty">הסל עדיין ריק. בחרו מוצרים שמעניינים אתכם.</p>`;
    return;
  }

  items.forEach(({product:p, qty}) => {
    const item = document.createElement("div");
    item.className = "cart-item";
    item.innerHTML = `
      <div class="cart-item-info">
        <strong>${p.name}</strong>
        <span class="cart-line-total">${formatPrice(p.priceValue)} × ${qty} = <strong>₪${p.priceValue * qty}</strong></span>
        <div class="cart-qty">
          <button data-dec="${p.id}" aria-label="הפחת כמות">−</button>
          <span aria-label="כמות">${qty}</span>
          <button data-inc="${p.id}" aria-label="הגדל כמות">+</button>
        </div>
      </div>
      <button class="remove-item" aria-label="הסר ${p.name}" data-remove="${p.id}">✕</button>`;
    cartItems.appendChild(item);
  });

  document.querySelectorAll("[data-dec]").forEach(btn => btn.addEventListener("click", () => {
    const item = cart.find(x => x.id === btn.dataset.dec);
    if (!item) return;
    if (item.qty <= 1) cart = cart.filter(x => x.id !== item.id);
    else item.qty -= 1;
    saveCart();
  }));
  document.querySelectorAll("[data-inc]").forEach(btn => btn.addEventListener("click", () => {
    const item = cart.find(x => x.id === btn.dataset.inc);
    if (!item) return;
    item.qty = Math.min(9, item.qty + 1);
    saveCart();
  }));
  document.querySelectorAll("[data-remove]").forEach(btn => btn.addEventListener("click", () => {
    cart = cart.filter(item => item.id !== btn.dataset.remove);
    saveCart();
  }));
}

function openCart() {
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}
function closeCart() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

$("#cart-open").addEventListener("click", openCart);
$("#mobile-cart").addEventListener("click", openCart);
$("#cart-close").addEventListener("click", closeCart);
cartDrawer.addEventListener("click", e => { if (e.target === cartDrawer) closeCart(); });
$("#clear-cart").addEventListener("click", () => { cart = []; saveCart(); });
$("#search-focus").addEventListener("click", () => {
  search.scrollIntoView({behavior: "smooth", block: "center"});
  setTimeout(() => search.focus(), 300);
});
search.addEventListener("input", renderProducts);

$("#send-order").addEventListener("click", () => {
  const items = cart
    .map(item => ({...item, product: PRODUCTS.find(p => p.id === item.id)}))
    .filter(item => item.product);
  if (!items.length) return;
  const totalCost = items.reduce((sum, item) => sum + ((Number(item.product.priceValue) || 0) * item.qty), 0);
  const list = items.map((item, i) => `${i+1}. ${item.product.name} — ₪${item.product.priceValue} × ${item.qty} = ₪${item.product.priceValue * item.qty}`).join("\n");
  window.open(waLink(`שלום, אני רוצה להזמין את המוצרים הבאים:\n${list}\n\nסה״כ עלות המוצרים: ₪${totalCost}\n\nאשמח להמשך הזמנה.`), "_blank");
});

renderProducts();
renderCart();

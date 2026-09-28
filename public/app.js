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
const productColors = $("#product-colors");
const productColorWrap = $("#product-color-wrap");

let activeProductId = null;
let selectedProductColor = "";
let selectedCategory = "הכל";
let cart = normalizeCart(JSON.parse(localStorage.getItem("3d-cart") || "[]"));

function productById(id) {
  return PRODUCTS.find(p => p.id === id);
}

function defaultColor(id) {
  const p = productById(id);
  return p && Array.isArray(p.colors) && p.colors.length ? p.colors[0] : "";
}

function imageForColor(product, color) {
  return product?.images?.[color] || product?.image || "";
}

function updateProductImage(product, color) {
  const src = imageForColor(product, color);
  productModalMedia.innerHTML = src
    ? `<img src="${src}" alt="${product.name} בצבע ${color}" class="product-color-image">`
    : `<div class="product-placeholder" aria-hidden="true"><span>3D</span></div>`;
}

function normalizeCart(raw) {
  if (!Array.isArray(raw)) return [];
  if (raw.length && typeof raw[0] === "string") {
    const counts = {};
    raw.forEach(id => counts[id] = (counts[id] || 0) + 1);
    return Object.entries(counts).map(([id, qty]) => ({
      id,
      qty: Math.min(9, qty),
      color: defaultColor(id)
    }));
  }
  return raw
    .filter(x => x && x.id && productById(x.id))
    .map(x => ({
      id: x.id,
      qty: Math.min(9, Math.max(1, Number(x.qty) || 1)),
      color: PRODUCT_COLORS.includes(x.color) ? x.color : defaultColor(x.id)
    }));
}

document.title = SITE_SETTINGS.pageTitle;
$("#brand-name").textContent = SITE_SETTINGS.businessName;
$("#footer-brand").textContent = SITE_SETTINGS.businessName;
$("#year").textContent = new Date().getFullYear();

function waLink(message) {
  return `https://wa.me/${SITE_SETTINGS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

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
document.querySelector(".chip")?.classList.add("active");

function productMatches(p) {
  const term = search.value.trim().toLowerCase();
  const byCat = selectedCategory === "הכל" || p.category === selectedCategory;
  const byText = !term || `${p.name} ${p.description} ${p.category} ${(p.colors || []).join(" ")}`.toLowerCase().includes(term);
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
    const cardImage = imageForColor(p, defaultColor(p.id));
    const media = cardImage
      ? `<img src="${cardImage}" alt="${p.name}" class="product-image">`
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
        <div class="product-bottom">
          <strong>${formatPrice(p.priceValue)}</strong>
          <span class="card-action" aria-hidden="true">לפרטים</span>
        </div>
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
  const p = productById(activeProductId);
  if (!p || !Number.isFinite(p.priceValue)) {
    productModalPrice.textContent = "מחיר לא הוגדר";
    return;
  }
  const qty = clampQty(productQty.value);
  productQty.value = qty;
  productModalPrice.textContent = "₪" + p.priceValue + " × " + qty + " = ₪" + (p.priceValue * qty);
}

function renderColorOptions(p) {
  const colors = Array.isArray(p.colors) ? p.colors : [];
  productColorWrap.hidden = colors.length === 0;
  productColors.innerHTML = "";
  selectedProductColor = colors[0] || "";

  colors.forEach(color => {
    const src = imageForColor(p, color);
    if (src) {
      const preload = new Image();
      preload.src = src;
    }
  });

  colors.forEach((color, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "color-choice color-" + ({
      "שחור":"black","לבן":"white","ורוד":"pink","כחול":"blue"
    }[color] || "default") + (index === 0 ? " active" : "");
    button.innerHTML = `<span class="color-dot" aria-hidden="true"></span><span>${color}</span>`;
    button.setAttribute("aria-pressed", index === 0 ? "true" : "false");
    button.addEventListener("click", () => {
      selectedProductColor = color;
      updateProductImage(p, color);
      productColors.querySelectorAll(".color-choice").forEach(x => {
        const active = x === button;
        x.classList.toggle("active", active);
        x.setAttribute("aria-pressed", active ? "true" : "false");
      });
    });
    productColors.appendChild(button);
  });
}

function openProductModal(id) {
  const p = productById(id);
  if (!p) return;
  activeProductId = id;
  productModalTitle.textContent = p.name;
  productModalCategory.textContent = p.category;
  productModalDescription.textContent = p.description;
  productModalAdd.disabled = !Number.isFinite(p.priceValue);
  productModalAdd.textContent = Number.isFinite(p.priceValue) ? "הוספה לסל" : "יש לעדכן מחיר";
  productQty.value = 1;
  renderColorOptions(p);
  updateProductImage(p, selectedProductColor);
  updateProductModalPrice();
  productModal.classList.add("open");
  productModal.setAttribute("aria-hidden","false");
  document.body.classList.add("no-scroll");
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
  const color = selectedProductColor || defaultColor(id);
  closeProductModal();
  addToCart(id, qty, color);
});

function addToCart(id, qty = 1, color = defaultColor(id)) {
  const product = productById(id);
  if (!product || !Number.isFinite(product.priceValue)) return;
  const existing = cart.find(item => item.id === id && item.color === color);
  if (existing) existing.qty = Math.min(9, existing.qty + qty);
  else cart.push({id, qty: Math.min(9, qty), color});
  saveCart();
  openCart();
}

function saveCart() {
  localStorage.setItem("3d-cart", JSON.stringify(cart));
  renderCart();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[ch]));
}

function renderCart() {
  const items = cart
    .map((item, index) => ({...item, index, product: productById(item.id)}))
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

  items.forEach(({product:p, qty, color, index}) => {
    const item = document.createElement("div");
    item.className = "cart-item";
    item.innerHTML = `
      <div class="cart-item-info">
        <strong>${p.name}</strong>
        <span class="cart-option">צבע: <strong>${escapeHtml(color)}</strong></span>
        <span class="cart-line-total">${formatPrice(p.priceValue)} × ${qty} = <strong>₪${p.priceValue * qty}</strong></span>
        <div class="cart-qty">
          <button data-dec="${index}" aria-label="הפחת כמות">−</button>
          <span aria-label="כמות">${qty}</span>
          <button data-inc="${index}" aria-label="הגדל כמות">+</button>
        </div>
      </div>
      <button class="remove-item" aria-label="הסר ${p.name}" data-remove="${index}">✕</button>`;
    cartItems.appendChild(item);
  });

  document.querySelectorAll("[data-dec]").forEach(btn => btn.addEventListener("click", () => {
    const i = Number(btn.dataset.dec);
    const item = cart[i];
    if (!item) return;
    if (item.qty <= 1) cart.splice(i, 1);
    else item.qty -= 1;
    saveCart();
  }));
  document.querySelectorAll("[data-inc]").forEach(btn => btn.addEventListener("click", () => {
    const i = Number(btn.dataset.inc);
    const item = cart[i];
    if (!item) return;
    item.qty = Math.min(9, item.qty + 1);
    saveCart();
  }));
  document.querySelectorAll("[data-remove]").forEach(btn => btn.addEventListener("click", () => {
    cart.splice(Number(btn.dataset.remove), 1);
    saveCart();
  }));
}

function openCart() {
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  setQuickNavActive($("#mobile-cart"));
}
function closeCart() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

$("#cart-open").addEventListener("click", openCart);
$("#mobile-cart").addEventListener("click", () => {
  if (productModal.classList.contains("open")) closeProductModal();
  openCart();
});
$("#cart-close").addEventListener("click", closeCart);
cartDrawer.addEventListener("click", e => { if (e.target === cartDrawer) closeCart(); });
$("#clear-cart").addEventListener("click", () => { cart = []; saveCart(); });
$("#search-focus").addEventListener("click", () => {
  closeCart();
  search.scrollIntoView({behavior: "smooth", block: "center"});
  setTimeout(() => search.focus(), 300);
});
search.addEventListener("input", renderProducts);

$("#send-order").addEventListener("click", () => {
  const items = cart
    .map(item => ({...item, product: productById(item.id)}))
    .filter(item => item.product);
  if (!items.length) return;

  const totalCost = items.reduce((sum, item) => sum + ((Number(item.product.priceValue) || 0) * item.qty), 0);
  const list = items.map((item, i) =>
    `${i+1}. ${item.product.name} — ₪${item.product.priceValue} × ${item.qty} = ₪${item.product.priceValue * item.qty} — צבע: ${item.color}`
  ).join("\n");

  window.open(waLink(`שלום, אני רוצה להזמין את המוצרים הבאים:\n${list}\n\nסה״כ עלות המוצרים: ₪${totalCost}\n\nאשמח להמשך הזמנה.`), "_blank");
});

document.querySelectorAll(".mobile-nav a").forEach(link => {
  link.addEventListener("click", () => {
    if (productModal.classList.contains("open")) closeProductModal();
    if (cartDrawer.classList.contains("open")) closeCart();
    setQuickNavActive(link);
  });
});

function setQuickNavActive(target) {
  document.querySelectorAll(".mobile-nav-btn").forEach(btn => btn.classList.remove("active"));
  if (target) target.classList.add("active");
}

const productsQuick = document.querySelector('.mobile-nav a[href="#products"]');
if (productsQuick) setQuickNavActive(productsQuick);

renderProducts();
renderCart();
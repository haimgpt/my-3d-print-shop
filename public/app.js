const $ = (s) => document.querySelector(s);
const grid = $("#product-grid");
const search = $("#search");
const categoriesEl = $("#categories");
const empty = $("#empty-state");
const resultCount = $("#result-count");
const cartDrawer = $("#cart");
const cartItems = $("#cart-items");

let selectedCategory = "הכל";
let cart = JSON.parse(localStorage.getItem("3d-cart") || "[]");

document.title = SITE_SETTINGS.pageTitle;
$("#brand-name").textContent = SITE_SETTINGS.businessName;
$("#footer-brand").textContent = SITE_SETTINGS.businessName;
$("#hero-title").textContent = SITE_SETTINGS.heroTitle;
$("#hero-text").textContent = SITE_SETTINGS.heroText;

function waLink(message) {
  return `https://wa.me/${SITE_SETTINGS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
$("#whatsapp-hero").href = waLink("שלום, הגעתי מהאתר ורציתי לשאול על הדפסה בתלת־ממד.");
$("#whatsapp-custom").href = waLink("שלום, יש לי רעיון להדפסה אישית בתלת־ממד.");
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

    card.innerHTML = `
      ${media}
      <div class="product-content">
        <span class="category">${p.category}</span>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="product-bottom">
          <strong>${p.price}</strong>
          <button class="add-btn" data-id="${p.id}">הוספה לסל</button>
        </div>
      </div>`;
    grid.appendChild(card);
  });

  document.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", () => addToCart(btn.dataset.id));
  });
}

function addToCart(id) {
  if (!cart.includes(id)) cart.push(id);
  saveCart();
  openCart();
}

function saveCart() {
  localStorage.setItem("3d-cart", JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  const products = cart.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  $("#cart-count").textContent = products.length;
  $("#mobile-cart-count").textContent = products.length;
  cartItems.innerHTML = "";

  if (!products.length) {
    cartItems.innerHTML = `<p class="cart-empty">הסל עדיין ריק. בחרו מוצרים שמעניינים אתכם.</p>`;
    return;
  }

  products.forEach(p => {
    const item = document.createElement("div");
    item.className = "cart-item";
    item.innerHTML = `
      <div><strong>${p.name}</strong><span>${p.price}</span></div>
      <button aria-label="הסר ${p.name}" data-remove="${p.id}">✕</button>`;
    cartItems.appendChild(item);
  });

  document.querySelectorAll("[data-remove]").forEach(btn => {
    btn.addEventListener("click", () => {
      cart = cart.filter(id => id !== btn.dataset.remove);
      saveCart();
    });
  });
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
  const products = cart.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  if (!products.length) return;
  const list = products.map((p, i) => `${i+1}. ${p.name} — ${p.price}`).join("\n");
  window.open(waLink(`שלום, אני מתעניין/ת במוצרים הבאים מהאתר:\n${list}\n\nאשמח לפרטים.`), "_blank");
});

renderProducts();
renderCart();
